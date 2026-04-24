import type { Metadata } from "next";
import { AboutPageView } from "@/components/sections/AboutPageView";
import { aboutDetailedPageData } from "@/data/pages/aboutDetailed";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: aboutDetailedPageData.metadata.title,
  description: aboutDetailedPageData.metadata.description,
  path: "/about",
  keywords: ["about lead nationwide", "lead generation company", "performance marketing"],
});

export default function AboutPage() {
  return <AboutPageView page={aboutDetailedPageData} />;
}
