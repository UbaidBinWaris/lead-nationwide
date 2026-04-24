import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { defaultOgImage, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: "Lead Nationwide — Premium Pay Per Call Lead Generation",
  description:
    "High-quality Pay Per Call, CPL, and CPA leads across insurance, finance, home services, and more. Connect with customers who are ready to buy.",
  applicationName: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "QLNoslsx77AWKEiR-pCfAVSuxms0ssw_B0A4lATXZ_Q",
  },
  openGraph: {
    title: "Lead Nationwide — Premium Pay Per Call Lead Generation",
    description:
      "High-quality Pay Per Call, CPL, and CPA leads across diverse industries worldwide.",
    url: "/",
    siteName,
    type: "website",
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
    title: "Lead Nationwide — Premium Pay Per Call Lead Generation",
    description:
      "High-quality Pay Per Call, CPL, and CPA leads across diverse industries worldwide.",
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
