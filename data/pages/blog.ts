import type { CmsPage } from "@/lib/cms";

export const blogPage: CmsPage = {
  slug: "blog",
  title: "Lead Nationwide Blog",
  description:
    "Actionable insights on lead quality, conversion strategy, and performance marketing.",
  hero: {
    eyebrow: "Insights",
    title: "Ideas to Improve Campaign ROI",
    description:
      "Explore practical playbooks and trends to help your team make smarter growth decisions.",
    primaryCta: {
      label: "Contact Sales",
      href: "/contact",
    },
    secondaryCta: {
      label: "Browse Services",
      href: "/services",
    },
  },
  sections: [
    {
      title: "Featured Topics",
      body: "Our blog focuses on repeatable systems for acquiring and converting qualified leads.",
      bullets: [
        "Lead qualification frameworks",
        "Channel-level optimization",
        "Conversion tracking best practices",
      ],
    },
    {
      title: "Publishing Cadence",
      body: "We publish practical articles, case studies, and operator notes for growth teams.",
      bullets: [
        "Weekly strategy posts",
        "Monthly deep dives",
        "Quarterly industry outlooks",
      ],
    },
  ],
  cards: [
    {
      title: "How to Improve Lead Quality in 30 Days",
      description:
        "A tactical framework for identifying and fixing waste in your funnel.",
    },
    {
      title: "Pay Per Call vs CPL",
      description:
        "When each model works best and how to evaluate them for your business.",
    },
    {
      title: "5 Metrics That Predict Conversion",
      description:
        "The reporting metrics that help teams improve outcomes faster.",
    },
  ],
};