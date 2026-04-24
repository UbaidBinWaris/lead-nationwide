export interface PrivacySection {
  id: string;
  heading: string;
  content: string[];
  bullets: string[];
}

export interface PrivacyPageData {
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
  sections: PrivacySection[];
  footerNote: string;
}

export const privacyPageData: PrivacyPageData = {
  metadata: {
    title: "Privacy Policy | Lead Nationwide",
    description:
      "Learn how Lead Nationwide LLC collects, uses, and protects your personal information.",
  },
  hero: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    legalLine: "Last updated: January 1, 2024 · Lead Nationwide LLC",
    intro:
      "We value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, disclose, and safeguard your information when you visit",
    siteUrl: "https://www.leadnationwide.com",
    siteLabel: "www.leadnationwide.com",
    introSuffix: ".",
  },
  sections: [
    {
      id: "information-we-collect",
      heading: "1. Information We Collect",
      content: [
        "We may collect and process the following types of information about you:",
      ],
      bullets: [
        "Personal Identification Information: Name, email address, phone number, mailing address.",
        "Technical Data: IP address, browser type, operating system, referring URLs, access times.",
        "Usage Data: Information about how you use our website, products, and services.",
        "Marketing and Communications Data: Your preferences in receiving marketing from us and your communication preferences.",
      ],
    },
    {
      id: "how-we-collect",
      heading: "2. How We Collect Your Information",
      content: ["We collect information in the following ways:"],
      bullets: [
        "Direct Interactions: When you fill out forms, subscribe to our newsletter, request information about our services, or contact us directly.",
        "Automated Technologies: As you interact with our website, we may automatically collect technical data about your equipment, browsing actions, and patterns using cookies, server logs, and other similar technologies.",
        "Third Parties: We may receive data about you from analytics providers, advertising networks, and search information providers.",
      ],
    },
    {
      id: "how-we-use",
      heading: "3. How We Use Your Information",
      content: ["We use your information to:"],
      bullets: [
        "Provide, operate, and maintain our website and services.",
        "Improve, personalize, and expand our website and offerings.",
        "Understand and analyze how you use our website.",
        "Develop new products, services, and features.",
        "Communicate with you about updates, promotions, and support.",
        "Send you marketing communications where you have opted in to receive them.",
        "Prevent fraudulent activity and ensure platform security.",
        "Comply with legal obligations.",
      ],
    },
    {
      id: "sharing",
      heading: "4. Sharing Your Information",
      content: [
        "We do not sell, trade, or rent your personal information to third parties. We may share your data with:",
      ],
      bullets: [
        "Service Providers: Trusted third parties who assist in operating our website and conducting our business, subject to confidentiality obligations.",
        "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
        "Legal Requirements: When required to do so by law or in response to valid requests from public authorities.",
      ],
    },
    {
      id: "cookies",
      heading: "5. Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to enhance your experience on our Site. Cookies are small data files stored on your device. You can control cookie settings through your browser preferences; however, disabling cookies may limit some functionality of the Site.",
      ],
      bullets: [],
    },
    {
      id: "data-security",
      heading: "6. Data Security",
      content: [
        "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
      ],
      bullets: [],
    },
    {
      id: "your-rights",
      heading: "7. Your Rights",
      content: [
        "Depending on your location, you may have the following rights regarding your personal data:",
      ],
      bullets: [
        "The right to access the personal data we hold about you.",
        "The right to request correction of inaccurate or incomplete data.",
        "The right to request deletion of your personal data.",
        "The right to object to or restrict our processing of your data.",
        "The right to data portability.",
        "The right to withdraw consent at any time where processing is based on consent.",
      ],
    },
    {
      id: "third-party-links",
      heading: "8. Third-Party Links",
      content: [
        "Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.",
      ],
      bullets: [],
    },
    {
      id: "children",
      heading: "9. Children's Privacy",
      content: [
        "Our Site is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately so we can take appropriate action.",
      ],
      bullets: [],
    },
    {
      id: "changes",
      heading: "10. Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated revision date. We encourage you to review this policy periodically.",
      ],
      bullets: [],
    },
    {
      id: "contact",
      heading: "11. Contact Us",
      content: [
        "If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at inquiry@leadnationwide.com or write to us at: Lead Nationwide LLC, 1207 Delaware Ave, Wilmington, DE 19806.",
      ],
      bullets: [],
    },
  ],
  footerNote:
    "By using this site, you acknowledge that you have read and understood this Privacy Policy.",
};
