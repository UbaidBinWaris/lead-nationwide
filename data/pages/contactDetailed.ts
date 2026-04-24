export interface ContactChannel {
  type: "email" | "phone" | "address";
  label: string;
  value: string;
  href?: string;
  note: string;
}

export interface ContactDetailItem {
  title: string;
  body: string;
}

export interface ContactFaqItem {
  question: string;
  answer: string;
}

export interface ContactDetailedPageData {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  channels: ContactChannel[];
  prep: {
    title: string;
    description: string;
    items: string[];
  };
  expectations: ContactDetailItem[];
  faqs: ContactFaqItem[];
  finalCta: {
    title: string;
    body: string;
    action: { label: string; href: string };
  };
}

export const contactDetailedPageData: ContactDetailedPageData = {
  metadata: {
    title: "Contact Us | Lead Nationwide",
    description:
      "Connect with Lead Nationwide to discuss campaign goals, pricing models, launch timelines, and lead generation strategy.",
  },
  hero: {
    eyebrow: "Contact Lead Nationwide",
    title: "Let’s Build Your Next Growth Campaign",
    description:
      "Share your goals and we will map the right Pay Per Call, CPL, or CPA strategy for your market, budget, and conversion targets.",
    primaryCta: {
      label: "Email Our Team",
      href: "mailto:inquiry@leadnationwide.com",
    },
    secondaryCta: {
      label: "Call 305-417-7034",
      href: "tel:3054177034",
    },
  },
  channels: [
    {
      type: "email",
      label: "Email",
      value: "inquiry@leadnationwide.com",
      href: "mailto:inquiry@leadnationwide.com",
      note: "Best for strategy inquiries, pricing questions, and partnership requests.",
    },
    {
      type: "phone",
      label: "Phone",
      value: "305-417-7034",
      href: "tel:3054177034",
      note: "Available Monday-Friday, 9am-6pm EST for urgent campaign discussions.",
    },
    {
      type: "address",
      label: "Office",
      value: "1207 Delaware Ave, Wilmington, DE 19806",
      note: "Headquarters for Lead Nationwide LLC operations and support.",
    },
  ],
  prep: {
    title: "What to Share for a Faster Kickoff",
    description:
      "Include these details in your first message so we can deliver a precise launch plan quickly.",
    items: [
      "Target industry, audience profile, and preferred geography",
      "Monthly lead or call volume expectations",
      "Primary conversion goal and ideal CPA/CPL/CPC target",
      "Current traffic sources and funnel stage performance",
      "Compliance requirements specific to your vertical",
    ],
  },
  expectations: [
    {
      title: "Response Time",
      body: "Most inquiries receive an initial response within one business day.",
    },
    {
      title: "Discovery Call",
      body: "We review goals, constraints, and targeting requirements during a short strategy call.",
    },
    {
      title: "Plan Delivery",
      body: "You get a tailored recommendation covering model fit, launch timeline, and expected milestones.",
    },
    {
      title: "Launch Support",
      body: "Our team helps with onboarding, setup, quality controls, and ongoing optimization.",
    },
  ],
  faqs: [
    {
      question: "Do you support both advertisers and publishers?",
      answer:
        "Yes. We work with advertisers looking for qualified demand and publishers seeking high-converting offers.",
    },
    {
      question: "How quickly can a campaign go live?",
      answer:
        "Many campaigns can launch in 3-5 business days after qualification and setup requirements are finalized.",
    },
    {
      question: "Can you work with strict compliance rules?",
      answer:
        "Absolutely. We design campaign workflows around consent, TCPA, and vertical-specific compliance standards.",
    },
  ],
  finalCta: {
    title: "Ready to Move From Leads to Revenue?",
    body: "Tell us where you are now and where you want to go. We will build the shortest path between those two points.",
    action: {
      label: "Start Conversation",
      href: "mailto:inquiry@leadnationwide.com",
    },
  },
};
