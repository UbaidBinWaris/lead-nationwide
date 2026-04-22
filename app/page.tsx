import { CmsPageView } from "@/components/sections/CmsPageView";
import { getPageBySlug } from "@/lib/cms";

const pageContent = getPageBySlug("home");

export default function Home() {
  return <CmsPageView page={pageContent} />;
}
