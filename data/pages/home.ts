import type { CmsPage } from "@/lib/cms";

export const homePage: CmsPage = {
  slug: "home",
  title: "Lead Nationwide",
  description:
    "Premium pay-per-call, CPL, and CPA lead generation for growth-focused teams.",
  hero: {
    eyebrow: "Performance Marketing Partner",
    title: "Scale Faster with High-Intent Leads",
    description:
      "Launch campaigns that connect your business with customers ready to take action.",
    primaryCta: {
      label: "Start a Campaign",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Services",
      href: "/services",
    },
  },
  sections: [
    {
      title: "Built for Revenue Teams",
      body: "We pair campaign strategy, traffic acquisition, and lead qualification so your team can focus on closing.",
      bullets: [
        "Real-time lead delivery",
        "Transparent reporting",
        "Industry-specific targeting",
      ],
    },
    {
      title: "Reliable Growth Engine",
      body: "From testing to scale, we optimize every stage of your funnel to improve conversion efficiency.",
      bullets: [
        "Multi-channel campaigns",
        "Compliance-first operations",
        "Dedicated account support",
      ],
    },
  ],
  cards: [
    {
      title: "Pay Per Call",
      description:
        "Connect live with motivated prospects in insurance, finance, and home services.",
      href: "/services",
    },
    {
      title: "CPL Programs",
      description:
        "Receive pre-qualified leads at a predictable cost for scalable growth.",
      href: "/services",
    },
    {
      title: "Custom Campaigns",
      description:
        "Design tailored acquisition programs around your vertical and conversion goals.",
      href: "/contact",
    },
  ],
};