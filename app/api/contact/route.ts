import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';
import { LRUCache } from 'lru-cache';

// Simple in-memory rate limiter (max 5 requests per IP per 15 minutes)
const rateLimit = new LRUCache<string, number>({
  max: 500, // Maximum number of IPs to track
  ttl: 15 * 60 * 1000, // 15 minutes
});

// Zod schema for input validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email format").max(255, "Email is too long"),
  phone: z.string().max(50, "Phone number is too long").optional().nullable(),
  company: z.string().max(100, "Company name is too long").optional().nullable(),
  message: z.string().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
  _gotcha: z.string().optional(), // Honeypot field
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
    // 1. Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for") ?? '127.0.0.1';
    const requestCount = rateLimit.get(ip) || 0;

    if (requestCount >= 5) {
      return NextResponse.json(
        { error: 'Too many requests, please try again later.' },
        { status: 429 }
      );
    }
    rateLimit.set(ip, requestCount + 1);

    // 2. Parse payload
    const body = await req.json();

    // 3. Honeypot check (Bot Prevention)
    if (body._gotcha && body._gotcha.trim() !== '') {
      // Silently accept it to fool the bot, but don't save to DB
      return NextResponse.json(
        { message: 'Your message has been sent successfully.' },
        { status: 201 }
      );
    }

    // 4. Validate with Zod
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

    // 6. Save to Database using Prisma (SQLi safe)
    const newContact = await prisma.contactMessage.create({
      data: {
        name: sanitizedName,
        email: sanitizedEmail,
        phone: sanitizedPhone,
        company: sanitizedCompany,
        message: sanitizedMessage,
      },
    });

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
