export interface SupportStep {
  step: string;
  icon: "email" | "business" | "demo";
  title: string;
  body: string;
  cta: { label: string; href: string } | null;
}

export interface SupportBlog {
  icon: "article" | "trending" | "campaign";
  title: string;
  description: string;
}

export interface SupportChannel {
  icon: "email" | "phone";
  label: string;
  value: string;
  href: string;
  description: string;
}

export interface SupportPageData {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  gettingStarted: {
    title: string;
    description: string;
  };
  steps: SupportStep[];
  channelsTitle: string;
  channels: SupportChannel[];
  resources: {
    title: string;
    description: string;
    blogs: SupportBlog[];
  };
  bottomCta: {
    title: string;
    description: string;
    label: string;
    href: string;
  };
}

export const supportPageData: SupportPageData = {
  metadata: {
    title: "Support | Lead Nationwide",
    description:
      "Get support for Lead Nationwide's lead generation services. Learn how to get started, request a demo, and connect with our team.",
  },
  hero: {
    eyebrow: "Support",
    title: "Support Center",
    description:
      "Whether you're just getting started or need help with an existing campaign, we're here for you. Explore the resources below.",
  },
  gettingStarted: {
    title: "Getting Started",
    description: "Three simple steps to launch your first campaign with Lead Nationwide.",
  },
  steps: [
    {
      step: "01",
      icon: "email",
      title: "Get in Touch",
      body: "Contact us through our Contact page or email info@leadnationwide.com. We'll set up a tailored plan around your business goals.",
      cta: { label: "Contact Us", href: "/contact" },
    },
    {
      step: "02",
      icon: "business",
      title: "Share Your Requirements",
      body: "Provide basic information about your business — target audience, goals, and specific requirements — so we can tailor our services effectively.",
      cta: null,
    },
    {
      step: "03",
      icon: "demo",
      title: "Request a Demo",
      body: "We offer live demos of our services so you can see exactly how we can drive results. Schedule yours at your convenience.",
      cta: { label: "Schedule Demo", href: "/contact" },
    },
  ],
  channelsTitle: "Reach Our Team",
  channels: [
    {
      icon: "email",
      label: "Email Support",
      value: "support@leadnationwide.com",
      href: "mailto:support@leadnationwide.com",
      description: "Expect a response within one business day.",
    },
    {
      icon: "phone",
      label: "Phone",
      value: "305-417-7034",
      href: "tel:3054177034",
      description: "Available Monday – Friday, 9am – 6pm EST.",
    },
  ],
  resources: {
    title: "Support Resources",
    description: "Guides and updates to help you get the most from our platform.",
    blogs: [
      {
        icon: "article",
        title: "How to Troubleshoot Common Issues",
        description:
          "Learn how to quickly troubleshoot common issues with our easy-to-follow guide.",
      },
      {
        icon: "trending",
        title: "Maximizing the Use of Our Tools",
        description:
          "Discover how to get the most out of our platform with this comprehensive guide.",
      },
      {
        icon: "campaign",
        title: "Latest Updates and Announcements",
        description:
          "Stay informed about the latest updates, new features, and announcements.",
      },
    ],
  },
  bottomCta: {
    title: "We're Here for You!",
    description: "Have questions? Our team is just a click away.",
    label: "Reach Out",
    href: "mailto:support@leadnationwide.com",
  },
};
