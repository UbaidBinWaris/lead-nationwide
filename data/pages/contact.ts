import type { CmsPage } from "@/lib/cms";

export const contactPage: CmsPage = {
  slug: "contact",
  title: "Contact Lead Nationwide",
  description:
    "Reach out to discuss campaign goals, pricing, and launch timelines.",
  hero: {
    eyebrow: "Contact",
    title: "Let’s Build Your Next Growth Campaign",
    description:
      "Tell us your goals and we will recommend a lead strategy built for conversion.",
    primaryCta: {
      label: "Email Our Team",
      href: "mailto:inquiry@leadnationwide.com",
    },
    secondaryCta: {
      label: "Call Us",
      href: "tel:305-417-7034",
    },
  },
  sections: [
    {
      title: "How to Reach Us",
      body: "We are available to discuss campaign opportunities and onboarding details.",
      bullets: [
        "Email: inquiry@leadnationwide.com",
        "Phone: 305-417-7034",
        "Address: 1207 Delaware Ave, Wilmington, DE 19806",
      ],
    },
    {
      title: "What to Share",
      body: "When you contact us, include your target market, campaign goals, and preferred pricing model for a faster kickoff.",
      bullets: [
        "Target geography",
        "Desired lead volume",
        "Budget range",
      ],
    },
  ],
  cards: [
    {
      title: "Fast Response",
      description: "Most inquiries receive a response within one business day.",
    },
    {
      title: "Custom Plans",
      description:
        "We can tailor a launch plan around your constraints and growth goals.",
    },
    {
      title: "Transparent Scope",
      description:
        "You receive clear expectations for timing, quality controls, and reporting.",
    },
  ],
};