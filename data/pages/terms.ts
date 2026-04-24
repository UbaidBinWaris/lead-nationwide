export interface LegalSection {
  id: string;
  heading: string;
  content: string[];
}

export interface TermsPageData {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    legalLine: string;
    intro: string;
    siteUrl: string;
    siteLabel: string;
    introSuffix: string;
  };
  sections: LegalSection[];
  footerNote: string;
}

export const termsPageData: TermsPageData = {
  metadata: {
    title: "Terms of Service | Lead Nationwide",
    description:
      "Read the Terms and Conditions governing use of Lead Nationwide LLC's website and lead generation services.",
  },
  hero: {
    eyebrow: "Legal",
    title: "Terms & Conditions",
    legalLine: "Last updated: January 1, 2024 · Lead Nationwide LLC",
    intro: "Welcome to Lead Nationwide LLC. By accessing or using our website at",
    siteUrl: "https://www.leadnationwide.com",
    siteLabel: "www.leadnationwide.com",
    introSuffix:
      ", you agree to comply with and be bound by these Terms and Conditions. Please read them carefully before using the Site.",
  },
  sections: [
    {
      id: "acceptance",
      heading: "1. Acceptance of Terms",
      content: [
        "By accessing or using the Site, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you should not use the Site.",
      ],
    },
    {
      id: "use-of-site",
      heading: "2. Use of the Site",
      content: [
        "Eligibility: You must be at least 18 years old to use the Site. By using the Site, you represent and warrant that you are at least 18 years old and have the right, authority, and capacity to enter into these Terms.",
        "License: Lead Nationwide LLC grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the Site for personal, non-commercial purposes. You agree not to use the Site for any unlawful or prohibited purpose.",
      ],
    },
    {
      id: "services",
      heading: "3. Services",
      content: [
        "Lead Nationwide LLC provides information, tools, and resources related to lead generation and marketing solutions. While we strive to provide accurate and up-to-date information, we do not guarantee the completeness, accuracy, or reliability of any information on the Site.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "4. Intellectual Property",
      content: [
        "All content, features, and functionality on the Site, including but not limited to text, graphics, logos, images, and software, are the exclusive property of Lead Nationwide LLC or its licensors and are protected by copyright, trademark, and other intellectual property laws.",
        "You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site without our prior written consent.",
        "Temporary Storage: Your computer may temporarily store copies of such materials incidental to your accessing and viewing them.",
      ],
    },
    {
      id: "disclaimer",
      heading: "5. Disclaimer of Warranties",
      content: [
        "THE SITE IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. LEAD NATIONWIDE LLC DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.",
        "We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.",
      ],
    },
    {
      id: "limitation",
      heading: "6. Limitation of Liability",
      content: [
        "TO THE FULLEST EXTENT PERMITTED BY LAW, LEAD NATIONWIDE LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE SITE OR SERVICES.",
        "Our total liability to you for any claims arising out of or relating to these Terms or the Site shall not exceed the amount you paid us, if any, in the six months preceding the claim.",
      ],
    },
    {
      id: "privacy",
      heading: "7. Privacy Policy",
      content: [
        "Your use of the Site is also governed by our Privacy Policy, which is incorporated by reference into these Terms. Please review our Privacy Policy to understand our data collection and use practices.",
      ],
    },
    {
      id: "changes",
      heading: "8. Changes to Terms",
      content: [
        "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site following the posting of revised Terms constitutes your acceptance of the changes.",
        "We encourage you to review these Terms periodically to stay informed of any updates.",
      ],
    },
    {
      id: "governing-law",
      heading: "9. Governing Law",
      content: [
        "These Terms are governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Delaware.",
      ],
    },
    {
      id: "contact",
      heading: "10. Contact Us",
      content: [
        "If you have any questions about these Terms and Conditions, please contact us at inquiry@leadnationwide.com or write to us at: Lead Nationwide LLC, 1207 Delaware Ave, Wilmington, DE 19806.",
      ],
    },
  ],
  footerNote:
    "By using this site, you acknowledge that you have read, understood, and agree to these Terms and Conditions.",
};
