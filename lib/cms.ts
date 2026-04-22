import { cmsPages } from "@/data/pages";

export interface CmsLink {
  label: string;
  href: string;
}

export interface CmsHero {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: CmsLink;
  secondaryCta?: CmsLink;
}

export interface CmsSection {
  title: string;
  body: string;
  bullets?: string[];
}

export interface CmsCard {
  title: string;
  description: string;
  href?: string;
}

export interface CmsPage {
  slug: string;
  title: string;
  description: string;
  hero: CmsHero;
  sections: CmsSection[];
  cards?: CmsCard[];
}

export function getAllPages(): CmsPage[] {
  return cmsPages;
}

export function getPageBySlug(slug: string): CmsPage {
  const page = cmsPages.find((entry) => entry.slug === slug);

  if (!page) {
    throw new Error(`CMS page not found for slug: ${slug}`);
  }

  return page;
}
