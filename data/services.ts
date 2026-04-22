import {
  Target,
  MousePointerClick,
  Search,
  Mail,
  Share2,
  FileText,
  Phone,
  PhoneForwarded,
  Database,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  accentClass: string; /* Tailwind text + bg for the icon wrapper */
}

export const services: Service[] = [
  {
    id: "ppl",
    title: "Pay-Per-Lead (PPL)",
    description:
      "Only pay for leads you receive. Targeted leads across insurance, finance, and home services from genuinely interested prospects.",
    Icon: Target,
    accentClass: "bg-red-light text-red-primary",
  },
  {
    id: "ppc",
    title: "Pay-Per-Click (PPC)",
    description:
      "Expertly managed PPC campaigns on search engines and social platforms that maximize ROI and attract high-quality leads.",
    Icon: MousePointerClick,
    accentClass: "bg-blue-light text-blue-primary",
  },
  {
    id: "seo",
    title: "SEO Services",
    description:
      "From keyword optimization to content creation — we boost your visibility to attract organic leads and climb search rankings.",
    Icon: Search,
    accentClass: "bg-red-light text-red-primary",
  },
  {
    id: "email",
    title: "Email Marketing",
    description:
      "Nurture leads and convert them into customers with targeted campaigns, personalized content and automated follow-ups.",
    Icon: Mail,
    accentClass: "bg-blue-light text-blue-primary",
  },
  {
    id: "social",
    title: "Social Media Marketing",
    description:
      "Generate leads on Facebook, LinkedIn, and Instagram with expert ad campaigns, creative content and audience strategies.",
    Icon: Share2,
    accentClass: "bg-red-light text-red-primary",
  },
  {
    id: "content",
    title: "Content Marketing",
    description:
      "Attract and convert leads with blogs, whitepapers, and webinars that position your brand as the trusted authority.",
    Icon: FileText,
    accentClass: "bg-blue-light text-blue-primary",
  },
  {
    id: "telemarketing",
    title: "Telemarketing Services",
    description:
      "Reach potential leads directly with skilled cold calling and follow-up campaigns that schedule appointments for your team.",
    Icon: Phone,
    accentClass: "bg-red-light text-red-primary",
  },
  {
    id: "live-transfers",
    title: "Live Transfers",
    description:
      "Interested prospects are transferred directly and immediately to your sales team for instant follow-up and conversion.",
    Icon: PhoneForwarded,
    accentClass: "bg-blue-light text-blue-primary",
  },
  {
    id: "data",
    title: "Data Services",
    description:
      "Enhance lead quality with lead lists, data cleansing, and enrichment so your campaigns run on accurate, actionable data.",
    Icon: Database,
    accentClass: "bg-red-light text-red-primary",
  },
];
