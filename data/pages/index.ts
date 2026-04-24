import type { CmsPage } from "@/lib/cms";
import { aboutPage } from "@/data/pages/about";
import { blogPage } from "@/data/pages/blog";
import { contactPage } from "@/data/pages/contact";
import { homePage } from "@/data/pages/home";
import { servicesPage } from "@/data/pages/services";
export { faqPageData } from "@/data/pages/faq";
export { helpCenterPageData } from "@/data/pages/helpCenter";
export { privacyPageData } from "@/data/pages/privacy";
export { supportPageData } from "@/data/pages/support";
export { termsPageData } from "@/data/pages/terms";

export const cmsPages: CmsPage[] = [
  homePage,
  aboutPage,
  servicesPage,
  blogPage,
  contactPage,
];