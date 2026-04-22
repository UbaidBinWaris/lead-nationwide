import type { CmsPage } from "@/lib/cms";

export const aboutPage: CmsPage = {
  slug: "about",
  title: "About Lead Nationwide",
  description:
    "Learn how our team builds profitable lead-generation systems for ambitious brands.",
  hero: {
    eyebrow: "Who We Are",
    title: "A Team Focused on Measurable Outcomes",
    description:
      "Lead Nationwide helps businesses grow through performance marketing rooted in quality and trust.",
    primaryCta: {
      label: "Talk to Our Team",
      href: "/contact",
    },
    secondaryCta: {
      label: "View Services",
      href: "/services",
    },
  },
  sections: [
    {
      title: "Mission",
      body: "Deliver high-intent leads that convert while maintaining transparent, long-term partnerships.",
      bullets: [
        "Quality over volume",
        "Performance accountability",
        "Long-term client value",
      ],
    },
    {
      title: "How We Work",
      body: "We combine channel expertise, conversion analytics, and compliance controls to run sustainable growth campaigns.",
      bullets: [
        "Campaign planning and execution",
        "Optimization based on conversion data",
        "Weekly performance reviews",
      ],
    },
  ],
  cards: [
    {
      title: "Data-Led Decisions",
      description:
        "Every optimization is informed by performance trends and lead outcomes.",
    },
    {
      title: "Compliance First",
      description:
        "TCPA, CCPA, and GDPR-aligned processes built into campaign operations.",
    },
    {
      title: "Human Support",
      description:
        "A dedicated team that collaborates directly with your internal stakeholders.",
    },
  ],
};