import type { Metadata } from "next";
import { ContactPageView } from "@/components/sections/ContactPageView";
import { contactDetailedPageData } from "@/data/pages/contactDetailed";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: contactDetailedPageData.metadata.title,
  description: contactDetailedPageData.metadata.description,
  path: "/contact",
  keywords: ["contact lead nationwide", "lead generation consultation", "campaign strategy call"],
});

export default function ContactPage() {
  return <ContactPageView page={contactDetailedPageData} />;
}
