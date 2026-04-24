export interface AboutStat {
  label: string;
  value: string;
  note: string;
}

export interface AboutValue {
  title: string;
  body: string;
}

export interface AboutMilestone {
  year: string;
  title: string;
  body: string;
}

export interface AboutLeader {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutDetailedPageData {
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
  stats: AboutStat[];
  story: {
    title: string;
    body: string[];
    image: AboutImage;
  };
  values: AboutValue[];
  milestones: AboutMilestone[];
  leaders: AboutLeader[];
  cta: {
    title: string;
    body: string;
    action: { label: string; href: string };
  };
}

export const aboutDetailedPageData: AboutDetailedPageData = {
  metadata: {
    title: "About Us | Lead Nationwide",
    description:
      "Learn how Lead Nationwide helps brands scale with premium Pay Per Call, CPL, and CPA lead generation built on quality, compliance, and performance.",
  },
  hero: {
    eyebrow: "About Lead Nationwide",
    title: "Built to Turn Demand Into Revenue",
    description:
      "Lead Nationwide is a performance marketing partner focused on one thing: helping growth teams connect with high-intent customers at the exact moment they are ready to act.",
    primaryCta: { label: "Start a Campaign", href: "/contact" },
    secondaryCta: { label: "Explore Services", href: "/services" },
  },
  stats: [
    {
      label: "Campaigns Managed",
      value: "1,100+",
      note: "Across insurance, finance, home services, and healthcare",
    },
    {
      label: "Calls Generated",
      value: "110,000+",
      note: "Qualified conversations routed to partner teams",
    },
    {
      label: "Publisher Payouts",
      value: "$1.5M+",
      note: "Paid through transparent, performance-driven programs",
    },
    {
      label: "Average Response Time",
      value: "< 24h",
      note: "Fast support for both advertisers and publishers",
    },
  ],
  story: {
    title: "Our Story",
    body: [
      "We started Lead Nationwide to fix a common problem in lead generation: volume without quality. Too many teams were paying for contacts that never converted.",
      "Our approach combines data-backed media buying, strict quality controls, and compliance-first workflows so every lead source is measurable and accountable.",
      "Today, we support both advertisers and publishers with scalable programs that prioritize intent, transparency, and long-term growth.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
      alt: "Performance marketing team collaborating around a strategy table",
    },
  },
  values: [
    {
      title: "Quality Over Quantity",
      body: "We optimize for conversion intent, not vanity metrics, using continuous validation and source scoring.",
    },
    {
      title: "Radical Transparency",
      body: "From lead origin to delivery outcome, our reporting makes performance easy to understand and act on.",
    },
    {
      title: "Compliance by Design",
      body: "TCPA, consent standards, and privacy best practices are embedded into every campaign workflow.",
    },
    {
      title: "Partnership Mindset",
      body: "We operate as an extension of your growth team, with strategy support and fast communication.",
    },
  ],
  milestones: [
    {
      year: "2020",
      title: "Company Founded",
      body: "Launched with a focused mission to deliver high-intent lead generation programs.",
    },
    {
      year: "2022",
      title: "Multi-Vertical Expansion",
      body: "Scaled operations into insurance, finance, home services, and healthcare campaigns.",
    },
    {
      year: "2024",
      title: "Advanced Quality Framework",
      body: "Introduced real-time validation and score-based routing for better downstream conversion.",
    },
    {
      year: "2026",
      title: "Global Growth",
      body: "Expanded publisher and advertiser partnerships with stronger analytics and support systems.",
    },
  ],
  leaders: [
    {
      name: "Alyssa Morgan",
      role: "Head of Growth Strategy",
      bio: "Leads acquisition strategy across paid channels, partner ecosystems, and vertical expansion.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Daniel Brooks",
      role: "Director of Operations",
      bio: "Owns delivery quality, campaign execution, and partner onboarding from launch through scale.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Priya Shah",
      role: "Compliance & Data Lead",
      bio: "Ensures privacy, consent, and compliance standards remain central to every campaign workflow.",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
    },
  ],
  cta: {
    title: "Let's Build Predictable Pipeline Growth",
    body: "Tell us your goals and we will design a lead generation program aligned with your conversion and revenue targets.",
    action: { label: "Talk to Our Team", href: "/contact" },
  },
};
