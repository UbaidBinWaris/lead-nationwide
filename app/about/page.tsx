import type { Metadata } from "next";
import { AboutPageView } from "@/components/sections/AboutPageView";
import { aboutDetailedPageData } from "@/data/pages/aboutDetailed";

export const metadata: Metadata = {
  title: aboutDetailedPageData.metadata.title,
  description: aboutDetailedPageData.metadata.description,
};

export default function AboutPage() {
  return <AboutPageView page={aboutDetailedPageData} />;
}
