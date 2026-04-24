import type { Metadata } from "next";
import { ServicesPageView } from "@/components/sections/ServicesPageView";
import { servicesDetailedPageData } from "@/data/pages/servicesDetailed";

export const metadata: Metadata = {
  title: servicesDetailedPageData.metadata.title,
  description: servicesDetailedPageData.metadata.description,
};

export default function ServicesPage() {
  return <ServicesPageView page={servicesDetailedPageData} />;
}
