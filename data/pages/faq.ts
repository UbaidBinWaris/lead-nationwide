import type { FaqItem } from "@/components/ui/FaqAccordion";

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export interface FaqPageData {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  categories: FaqCategory[];
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
}

export const faqPageData: FaqPageData = {
  metadata: {
    title: "FAQ | Lead Nationwide",
    description:
      "Frequently asked questions about Lead Nationwide's Pay Per Call, CPL, and CPA lead generation programs.",
  },
  hero: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    description:
      "Everything you need to know about our programs, lead quality, and how to work with us.",
  },
  categories: [
    {
      category: "Services & Programs",
      items: [
        {
          question: "What services does Lead Nationwide offer?",
          answer:
            "Lead Nationwide provides Pay Per Call (PPC), Cost Per Lead (CPL), and Cost Per Action (CPA) lead generation programs across a wide range of industries including insurance, home services, financial services, real estate, travel, and healthcare. We also offer custom campaign solutions tailored to your vertical and conversion goals.",
        },
        {
          question: "How does Pay Per Call (PPC) work?",
          answer:
            "In a Pay Per Call program, you pay only when a qualified prospect calls your business directly. We drive traffic through our publisher network, qualify inbound callers against your target criteria, and deliver live, high-intent calls in real time. You define the call duration threshold and targeting filters — we handle the rest.",
        },
        {
          question: "What is Cost Per Lead (CPL) and how does it work?",
          answer:
            "With our CPL program, you receive pre-qualified prospect data — including name, contact details, and intent signals — at a fixed cost per lead. Leads are validated before delivery to ensure they meet your criteria, giving you a predictable acquisition cost and a scalable volume.",
        },
        {
          question: "What is a CPA program?",
          answer:
            "A Cost Per Action program means you only pay when a specific action is completed, such as a form submission, a sign-up, or a purchase. This model aligns our incentives directly with your business outcomes.",
        },
        {
          question: "Do you offer custom campaign solutions?",
          answer:
            "Yes. For clients with unique verticals or non-standard conversion goals, we design fully custom acquisition programs. Contact our team to discuss your requirements and we'll build a campaign around your specific KPIs.",
        },
      ],
    },
    {
      category: "Lead Quality & Compliance",
      items: [
        {
          question: "How do you ensure the quality of your leads?",
          answer:
            "Every lead passes through a multi-step quality assurance process: traffic source vetting, real-time validation, intent scoring, and post-delivery audits. We continuously monitor publisher performance and remove sources that fall below our quality benchmarks. You also have access to transparent reporting so you can track performance at a granular level.",
        },
        {
          question: "Are your services compliant with data protection regulations?",
          answer:
            "Yes. Compliance is built into every campaign we run. We adhere to TCPA, CAN-SPAM, and applicable state privacy laws. All leads are generated with explicit opt-in consent, and our data handling practices align with GDPR and CCPA requirements where applicable.",
        },
        {
          question: "What is lead scoring and how does it work?",
          answer:
            "Lead scoring is the process of ranking prospects by their likelihood to convert, based on behavioral signals, demographic data, and intent indicators. Our system assigns scores in real time so your sales team can prioritize outreach and maximize conversion rates.",
        },
      ],
    },
    {
      category: "Integration & Operations",
      items: [
        {
          question: "How can I integrate your leads into my CRM system?",
          answer:
            "We support direct integration with most major CRM platforms including Salesforce, HubSpot, Zoho, and others via API or webhook. Our team will work with you during onboarding to configure lead delivery to your preferred system in real time.",
        },
        {
          question: "What information do I need to get started?",
          answer:
            "To get started, provide basic information about your business: your target audience profile, geographic preferences, campaign goals, and any compliance requirements specific to your industry. The more detail you share, the more precisely we can tailor the program to your needs.",
        },
        {
          question: "How long does onboarding take?",
          answer:
            "Most campaigns can be configured and launched within 3–5 business days after your initial consultation. More complex or highly customized campaigns may take up to two weeks. We'll provide a clear timeline during your kickoff call.",
        },
      ],
    },
    {
      category: "Billing & Support",
      items: [
        {
          question: "How does billing work?",
          answer:
            "Billing is based on your selected program model — Pay Per Call, CPL, or CPA. You'll receive detailed invoices itemizing every delivered lead or call, with full access to reporting dashboards to reconcile your spend. Payment terms are discussed and agreed upon during onboarding.",
        },
        {
          question: "How can I contact the support team?",
          answer:
            "You can reach our support team by emailing support@leadnationwide.com or calling 305-417-7034 during business hours (Monday–Friday, 9am–6pm EST). For non-urgent inquiries, you can also submit a message through our Contact page and expect a response within one business day.",
        },
      ],
    },
  ],
  cta: {
    eyebrow: "Still have questions?",
    title: "Talk to our team directly",
    description:
      "Can't find what you're looking for? Reach out and we'll get back to you within one business day.",
    primary: { label: "Contact Us", href: "/contact" },
    secondary: { label: "Visit Support", href: "/support" },
  },
};
