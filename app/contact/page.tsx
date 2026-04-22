import type { Metadata } from "next";
import { CmsPageView } from "@/components/sections/CmsPageView";
import { getPageBySlug } from "@/lib/cms";

const pageContent = getPageBySlug("contact");

export const metadata: Metadata = {
  title: pageContent.title,
  description: pageContent.description,
};

export default function ContactPage() {
  return <CmsPageView page={pageContent} />;
}
