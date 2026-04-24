import type { Metadata } from "next";
import { CmsPageView } from "@/components/sections/CmsPageView";
import { getPageBySlug } from "@/lib/cms";
import { buildPageMetadata } from "@/lib/seo";

const pageContent = getPageBySlug("blog");

export const metadata: Metadata = buildPageMetadata({
  title: pageContent.title,
  description: pageContent.description,
  path: "/blog",
  keywords: ["lead generation blog", "pay per call insights", "performance marketing tips"],
});

export default function BlogPage() {
  return <CmsPageView page={pageContent} />;
}
