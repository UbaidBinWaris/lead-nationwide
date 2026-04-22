import type { CmsPage } from "@/lib/cms";

export const servicesPage: CmsPage = {
  slug: "services",
  title: "Lead Generation Services",
  description:
    "Explore campaign offerings designed to deliver qualified opportunities at scale.",
  hero: {
    eyebrow: "What We Offer",
    title: "Flexible Services for Every Growth Stage",
    description:
      "Choose from proven acquisition models or build a custom strategy around your goals.",
    primaryCta: {
      label: "Request Pricing",
      href: "/contact",
    },
    secondaryCta: {
      label: "Read About Us",
      href: "/about",
    },
  },
  sections: [
    {
      title: "Core Services",
      body: "Our services are designed for performance and speed, with clear KPIs from day one.",
      bullets: [
        "Pay Per Call",
        "Cost Per Lead",
        "Cost Per Acquisition",
        "Managed paid media",
      ],
    },
    {
      title: "Campaign Enhancements",
      body: "Improve quality and conversion with support services tailored to your vertical.",
      bullets: [
        "Landing page testing",
        "Lead scoring and filtering",
        "Attribution tracking",
      ],
    },
  ],
  cards: [
    {
      title: "Live Transfers",
      description:
        "Route high-intent callers directly to your sales team in real time.",
    },
    {
      title: "SEO and Content",
      description:
        "Build long-term acquisition channels with search-optimized content assets.",
    },
    {
      title: "Email and Social",
      description:
        "Expand pipeline with lifecycle campaigns and paid social targeting.",
    },
  ],
};