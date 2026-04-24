export type FooterSocialIcon = "youtube" | "linkedin" | "facebook";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  ctaEyebrow: string;
  ctaTitle: string;
  ctaButton: FooterLink;
  brand: {
    homeHref: string;
    logoSrc: string;
    logoAlt: string;
    logoShort: string;
    logoPrimary: string;
    logoAccent: string;
    description: string;
  };
  socialLinks: Array<FooterLink & { icon: FooterSocialIcon; ariaLabel: string }>;
  columns: FooterLinkColumn[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  legal: {
    companyName: string;
    copyrightSuffix: string;
  };
}

export const footerData: FooterData = {
  ctaEyebrow: "Let's Build Your Pipeline",
  ctaTitle: "Ready for predictable, high-intent leads?",
  ctaButton: {
    label: "Contact now",
    href: "/contact",
  },
  brand: {
    homeHref: "/",
    logoSrc: "/logo.png",
    logoAlt: "Lead Nationwide logo",
    logoShort: "LN",
    logoPrimary: "Lead",
    logoAccent: "Nationwide",
    description:
      "Delivering top-quality Pay Per Call, CPL, and CPA leads across diverse industries worldwide. Connecting businesses with their ideal clients.",
  },
  socialLinks: [
    {
      icon: "youtube",
      href: "https://www.youtube.com/channel/UCbwVFYV_NxkG8bV7k7aJu-w",
      label: "YouTube",
      ariaLabel: "YouTube",
    },
    {
      icon: "linkedin",
      href: "https://www.linkedin.com/company/nationwideleadsthatconvert",
      label: "LinkedIn",
      ariaLabel: "LinkedIn",
    },
    {
      icon: "facebook",
      href: "https://www.facebook.com/LeadNationwide",
      label: "Facebook",
      ariaLabel: "Facebook",
    },
  ],
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Help Center",
      links: [
        { label: "Help Center", href: "/help-center" },
        { label: "Support", href: "/support" },
        { label: "FAQ", href: "/faq" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },

  ],
  contact: {
    email: "inquiry@leadnationwide.com",
    phone: "305-417-7034",
    address: "1207 Delaware Ave, Wilmington, DE 19806",
  },
  legal: {
    companyName: "Lead Nationwide LLC",
    copyrightSuffix: "All rights reserved.",
  },
};