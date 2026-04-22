import type { Metadata } from "next";
import { CmsPageView } from "@/components/sections/CmsPageView";
import { getPageBySlug } from "@/lib/cms";

const pageContent = getPageBySlug("services");

export const metadata: Metadata = {
  title: pageContent.title,
  description: pageContent.description,
};

export default function ServicesPage() {
  return <CmsPageView page={pageContent} />;
}
