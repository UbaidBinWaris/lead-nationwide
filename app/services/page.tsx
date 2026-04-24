import type { Metadata } from "next";
import { ServicesPageView } from "@/components/sections/ServicesPageView";
import { servicesDetailedPageData } from "@/data/pages/servicesDetailed";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: servicesDetailedPageData.metadata.title,
  description: servicesDetailedPageData.metadata.description,
  path: "/services",
  keywords: ["pay per call services", "CPL services", "CPA lead generation"],
});

export default function ServicesPage() {
  return <ServicesPageView page={servicesDetailedPageData} />;
}
