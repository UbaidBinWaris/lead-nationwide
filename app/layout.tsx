import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lead Nationwide — Premium Pay Per Call Lead Generation",
  description:
    "High-quality Pay Per Call, CPL, and CPA leads across insurance, finance, home services, and more. Connect with customers who are ready to buy.",
  verification: {
    google: "QLNoslsx77AWKEiR-pCfAVSuxms0ssw_B0A4lATXZ_Q",
  },
  openGraph: {
    title: "Lead Nationwide — Premium Pay Per Call Lead Generation",
    description:
      "High-quality Pay Per Call, CPL, and CPA leads across diverse industries worldwide.",
    url: "https://lead-nationwide.vercel.app/",
    siteName: "Lead Nationwide",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Nationwide — Premium Pay Per Call Lead Generation",
    description:
      "High-quality Pay Per Call, CPL, and CPA leads across diverse industries worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
