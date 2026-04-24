export interface ServiceModel {
  name: string;
  summary: string;
  priceModel: string;
  bestFor: string;
}

export interface ServiceProcessStep {
  title: string;
  body: string;
}

export interface ServiceVertical {
  title: string;
  examples: string[];
}

export interface ServiceFeature {
  title: string;
  body: string;
}

export interface ServicesDetailedPageData {
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
  models: ServiceModel[];
  process: ServiceProcessStep[];
  verticals: ServiceVertical[];
  features: ServiceFeature[];
  finalCta: {
    title: string;
    description: string;
    action: { label: string; href: string };
  };
}

export const servicesDetailedPageData: ServicesDetailedPageData = {
  metadata: {
    title: "Services | Lead Nationwide",
    description:
      "Premium Pay Per Call, CPL, and CPA services designed to deliver high-intent leads with transparent reporting and compliance-first execution.",
  },
  hero: {
    eyebrow: "Our Services",
    title: "High-Intent Lead Generation, Engineered for Scale",
    description:
      "From real-time call routing to conversion-focused acquisition funnels, we build performance programs that turn media spend into qualified pipeline.",
    primaryCta: { label: "Request Strategy Call", href: "/contact" },
    secondaryCta: { label: "View About Page", href: "/about" },
  },
  models: [
    {
      name: "Pay Per Call",
      summary:
        "Receive inbound calls from prospects actively searching for your service, routed in real time to your team.",
      priceModel: "Pay only for qualified live calls",
      bestFor: "Insurance, legal, home services, financial offers",
    },
    {
      name: "Cost Per Lead (CPL)",
      summary:
        "Get pre-qualified lead records with validated contact details and intent signals aligned to your target profile.",
      priceModel: "Fixed cost per approved lead",
      bestFor: "Teams with inside sales and lifecycle follow-up",
    },
    {
      name: "Cost Per Acquisition (CPA)",
      summary:
        "Only pay when a specific conversion event is completed, keeping spend aligned with real business outcomes.",
      priceModel: "Payment tied to verified conversion",
      bestFor: "Programs with clear funnel events and attribution",
    },
  ],
  process: [
    {
      title: "Discovery & Goal Mapping",
      body: "We define ideal customer profile, target geographies, quality thresholds, and conversion goals before launch.",
    },
    {
      title: "Campaign Architecture",
      body: "Our team builds channel mix, audience targeting, messaging, and conversion flows tailored to your vertical.",
    },
    {
      title: "Quality Validation",
      body: "Leads and calls pass validation logic, source scoring, and compliance checks before delivery.",
    },
    {
      title: "Optimization & Scale",
      body: "We continuously optimize cost, quality, and conversion performance with transparent reporting and weekly iteration.",
    },
  ],
  verticals: [
    {
      title: "Insurance",
      examples: [
        "Health & Medicare",
        "Auto & Life Insurance",
        "Final Expense",
      ],
    },
    {
      title: "Home Services",
      examples: [
        "Solar & Home Improvement",
        "HVAC, Plumbing, Electrical",
        "Security & Moving Services",
      ],
    },
    {
      title: "Financial Services",
      examples: [
        "Debt Settlement",
        "Personal & Auto Loans",
        "Credit Repair Programs",
      ],
    },
    {
      title: "Travel & Hospitality",
      examples: [
        "Flight Booking",
        "Hotel Reservations",
        "Car Rentals",
      ],
    },
  ],
  features: [
    {
      title: "Real-Time Delivery",
      body: "Route calls instantly or push lead data directly into your CRM through flexible integration options.",
    },
    {
      title: "Compliance-First Controls",
      body: "Consent workflows, TCPA alignment, and source governance are built into campaign operations.",
    },
    {
      title: "Transparent Reporting",
      body: "Track source quality, conversion trends, and spend efficiency with straightforward performance dashboards.",
    },
    {
      title: "Dedicated Growth Support",
      body: "Work with a hands-on team that helps with strategy, testing, and scaling without unnecessary complexity.",
    },
  ],
  finalCta: {
    title: "Ready to Build a Predictable Lead Engine?",
    description:
      "Tell us your goals and we will map the best acquisition model for your market, budget, and conversion targets.",
    action: { label: "Talk to Sales", href: "/contact" },
  },
};
