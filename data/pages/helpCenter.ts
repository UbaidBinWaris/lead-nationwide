export interface HelpCenterResource {
  icon: "support" | "faq" | "terms" | "privacy";
  label: string;
  description: string;
  href: string;
  cta: string;
  accent: string;
  border: string;
}

export interface HelpCenterHighlight {
  icon: "speed" | "verified" | "shield";
  title: string;
  body: string;
}

export interface HelpCenterPageData {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    email: string;
    phoneLabel: string;
    phoneHref: string;
  };
  resourcesIntro: {
    title: string;
    description: string;
  };
  resources: HelpCenterResource[];
  highlights: HelpCenterHighlight[];
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    label: string;
    href: string;
  };
}

export const helpCenterPageData: HelpCenterPageData = {
  metadata: {
    title: "Help Center | Lead Nationwide",
    description:
      "Find support, answers to frequently asked questions, and legal information for Lead Nationwide's lead generation services.",
  },
  hero: {
    eyebrow: "Help Center",
    title: "How can we help you?",
    description:
      "Find answers, browse documentation, and reach our team — everything you need to get the most from Lead Nationwide.",
    email: "support@leadnationwide.com",
    phoneLabel: "305-417-7034",
    phoneHref: "tel:3054177034",
  },
  resourcesIntro: {
    title: "Browse by topic",
    description: "Select a resource below to find what you need.",
  },
  resources: [
    {
      icon: "support",
      label: "Support",
      description:
        "Get step-by-step guidance on our services, onboarding, and platform integrations.",
      href: "/support",
      cta: "Visit Support",
      accent: "bg-blue-light text-blue-primary",
      border: "hover:border-blue-accent",
    },
    {
      icon: "faq",
      label: "FAQ",
      description:
        "Quick answers to the most common questions about Pay Per Call, CPL, and CPA programs.",
      href: "/faq",
      cta: "Browse FAQ",
      accent: "bg-red-light text-red-primary",
      border: "hover:border-red-primary",
    },
    {
      icon: "terms",
      label: "Terms of Service",
      description:
        "Read the terms and conditions that govern use of the Lead Nationwide platform.",
      href: "/terms",
      cta: "Read Terms",
      accent: "bg-blue-light text-blue-primary",
      border: "hover:border-blue-accent",
    },
    {
      icon: "privacy",
      label: "Privacy Policy",
      description:
        "Understand how we collect, use, and protect your personal information.",
      href: "/privacy",
      cta: "Read Policy",
      accent: "bg-red-light text-red-primary",
      border: "hover:border-red-primary",
    },
  ],
  highlights: [
    {
      icon: "speed",
      title: "Fast Response",
      body: "Our support team typically responds within one business day.",
    },
    {
      icon: "verified",
      title: "Verified Information",
      body: "All documentation is reviewed and kept up-to-date by our team.",
    },
    {
      icon: "shield",
      title: "Compliance-First",
      body: "Our practices are built around data protection and TCPA compliance.",
    },
  ],
  cta: {
    eyebrow: "Still need help?",
    title: "Our team is ready to assist you",
    description:
      "Can't find what you're looking for? Reach out directly and we'll get back to you within one business day.",
    label: "Contact Us",
    href: "/contact",
  },
};
