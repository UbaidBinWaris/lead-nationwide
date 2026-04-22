import type { CmsPage } from "@/lib/cms";
import { aboutPage } from "@/data/pages/about";
import { blogPage } from "@/data/pages/blog";
import { contactPage } from "@/data/pages/contact";
import { homePage } from "@/data/pages/home";
import { servicesPage } from "@/data/pages/services";

export const cmsPages: CmsPage[] = [
  homePage,
  aboutPage,
  servicesPage,
  blogPage,
  contactPage,
];