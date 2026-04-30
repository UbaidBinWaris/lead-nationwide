import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';
import { redis } from '@/lib/redis';
import { UAParser } from 'ua-parser-js';

// Zod schema for input validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email format").max(255, "Email is too long"),
  phone: z.string().max(50, "Phone number is too long").optional().nullable(),
  company: z.string().max(100, "Company name is too long").optional().nullable(),
  message: z.string().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

// Helper function to strip HTML tags
const sanitize = (text?: string | null) => {
  if (!text) return text;
  return sanitizeHtml(text, {
    allowedTags: [], // Strip all HTML tags
    allowedAttributes: {},
  });
};

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting Check using Redis
    const ip = req.headers.get("x-forwarded-for") ?? '127.0.0.1';
    const rateLimitKey = `rate-limit:contact:${ip}`;
    
    const requestCount = await redis.incr(rateLimitKey);
    if (requestCount === 1) {
      // Set expiration to 15 minutes on the first request
      await redis.expire(rateLimitKey, 15 * 60);
    }

    if (requestCount > 5) {
      return NextResponse.json(
        { error: 'Too many requests, please try again later.' },
        { status: 429 }
      );
    }

    // 2. Parse payload
    const body = await req.json();

    // 3. Validate with Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      // Format Zod errors
      const errorMessages = result.error.issues.map(err => err.message).join(", ");
      return NextResponse.json(
        { error: errorMessages },
        { status: 400 }
      );
    }

    const { name, email, phone, company, message } = result.data;

    // 5. Sanitize HTML/XSS (Defense in depth)
    const sanitizedName = sanitize(name) as string;
    const sanitizedEmail = sanitize(email) as string;
    const sanitizedMessage = sanitize(message) as string;
    const sanitizedPhone = sanitize(phone) || null;
    const sanitizedCompany = sanitize(company) || null;

    // 6. Capture enhanced tracking details
    const userAgentStr = req.headers.get("user-agent") || "";
    const parser = new UAParser(userAgentStr);
    const browser = `${parser.getBrowser().name || 'Unknown'} ${parser.getBrowser().version || ''}`.trim();
    const os = `${parser.getOS().name || 'Unknown'} ${parser.getOS().version || ''}`.trim();
    const deviceType = parser.getDevice().type || 'Desktop';
    const deviceModel = parser.getDevice().model ? ` (${parser.getDevice().vendor} ${parser.getDevice().model})` : '';
    const device = `${deviceType}${deviceModel}`;

    // 7. Save to Database using Prisma (SQLi safe)
    const newContact = await prisma.contactMessage.create({
      data: {
        name: sanitizedName,
        email: sanitizedEmail,
        phone: sanitizedPhone,
        company: sanitizedCompany,
        message: sanitizedMessage,
        ip: ip,
        browser: browser,
        os: os,
        device: device,
      },
    });

    // Clear all admin message paginated caches
    const cacheKeys = await redis.keys('admin:messages:cache:*');
    if (cacheKeys.length > 0) {
      await redis.del(...cacheKeys);
    }

    return NextResponse.json(
      { message: 'Your message has been sent successfully.', contact: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
