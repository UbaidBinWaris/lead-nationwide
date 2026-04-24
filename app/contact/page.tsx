import type { Metadata } from "next";
import { ContactPageView } from "@/components/sections/ContactPageView";
import { contactDetailedPageData } from "@/data/pages/contactDetailed";

export const metadata: Metadata = {
  title: contactDetailedPageData.metadata.title,
  description: contactDetailedPageData.metadata.description,
};

export default function ContactPage() {
  return <ContactPageView page={contactDetailedPageData} />;
}
