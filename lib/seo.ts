import type { Metadata } from "next";

export const siteUrl = "https://lead-nationwide.vercel.app";
export const siteName = "Lead Nationwide";
export const defaultOgImage = "/logo.png";

interface BuildPageMetadataParams {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: BuildPageMetadataParams): Metadata {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+/, "")}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: normalizedPath,
    },
    openGraph: {
      title,
      description,
      url: normalizedPath,
      type: "website",
      siteName,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${siteName} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}
