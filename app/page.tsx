import type { Metadata } from "next";
import { CmsPageView } from "@/components/sections/CmsPageView";
import { getPageBySlug } from "@/lib/cms";
import { buildPageMetadata } from "@/lib/seo";

const pageContent = getPageBySlug("home");

export const metadata: Metadata = buildPageMetadata({
  title: "Lead Nationwide — Premium Pay Per Call Lead Generation",
  description:
    "High-quality Pay Per Call, CPL, and CPA leads across insurance, finance, home services, and more. Connect with customers who are ready to buy.",
  path: "/",
  keywords: [
    "pay per call",
    "lead generation",
    "CPL marketing",
    "CPA marketing",
    "affiliate marketing",
  ],
});

export default function Home() {
  return <CmsPageView page={pageContent} />;
}
