"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaYoutube, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdArrowForward } from "react-icons/md";
import type { IconType } from "react-icons";
import { footerData, type FooterSocialIcon } from "@/data/footer";

const socialIconMap: Record<FooterSocialIcon, IconType> = {
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
};

const socialHoverMap: Record<FooterSocialIcon, string> = {
  youtube: "hover:bg-[#FF0000] hover:border-[#FF0000]",
  linkedin: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
  facebook: "hover:bg-[#1877F2] hover:border-[#1877F2]",
};

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith('/l8I32auyIM')) return null;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: footerData.legal.companyName,
    url: "https://leadnationwide.com",
    logo: footerData.brand.logoSrc,
    email: footerData.contact.email,
    telephone: footerData.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: footerData.contact.address,
    },
    sameAs: footerData.socialLinks.map((social) => social.href),
  };

  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 pt-10 sm:pt-0">
        <div className="rounded-2xl md:rounded-4xl bg-red-primary px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                {footerData.ctaEyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {footerData.ctaTitle}
              </h2>
            </div>
            <div className="shrink-0">
              <Link
                href={footerData.ctaButton.href}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-2.5 text-sm font-semibold text-red-primary transition-all duration-200 hover:bg-white/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-primary sm:w-auto"
              >
                {footerData.ctaButton.label}
                <MdArrowForward size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative overflow-hidden bg-navy-deep text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />


        <div className="relative mx-auto max-w-350 px-6 py-16 lg:px-8 lg:py-20">


          <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:justify-between lg:flex-nowrap lg:gap-16">
            <div className="w-full sm:w-auto lg:max-w-xs lg:shrink-0">
              <div className="mb-4 flex items-center gap-2.5">
                <Image
                  src={footerData.brand.logoSrc}
                  alt={footerData.brand.logoAlt}
                  width={150}
                  height={38}
                  className="h-10 w-auto"
                  style={{ width: "auto" }}
                />
                <span className="text-xl font-bold text-white">
                  {footerData.brand.logoPrimary} <span className="text-red-primary">{footerData.brand.logoAccent}</span>
                </span>
              </div>

              <p className="mb-6 max-w-sm text-md leading-relaxed text-white/70">
                {footerData.brand.description}
              </p>

              <nav aria-label="Social media" className="flex gap-2.5">
                {footerData.socialLinks.map((social) => {
                  const Icon = socialIconMap[social.icon];

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className={`group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep ${socialHoverMap[social.icon]}`}
                    >
                      <Icon
                        size={16}
                        className="text-white/80 transition-colors duration-200 group-hover:text-white"
                      />
                    </a>
                  );
                })}
              </nav>
            </div>

            {footerData.columns.map((col) => (
              <nav key={col.title} aria-label={`${col.title} links`}>
                <h3 className="mb-5 text-sm font-semibold tracking-[0.08em] text-white uppercase">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <address className="not-italic">
              <h3 className="mb-5 text-sm font-semibold tracking-[0.08em] text-white uppercase">
                Contact
              </h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="group flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <MdEmail size={16} className="shrink-0 text-white/50 transition-colors group-hover:text-white" />
                  {footerData.contact.email}
                </a>
                <a
                  href={`tel:${footerData.contact.phone}`}
                  className="group flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <MdPhone size={16} className="shrink-0 text-white/50 transition-colors group-hover:text-white" />
                  {footerData.contact.phone}
                </a>
                <span className="flex items-start gap-2 text-sm text-white/70">
                  <MdLocationOn size={16} className="mt-0.5 shrink-0 text-white/50" />
                  {footerData.contact.address}
                </span>
              </div>
            </address>
          </div>
        </div>

        
          <p className="text-right text-sm text-white/50">
            © {new Date().getFullYear()} {footerData.legal.companyName}. {footerData.legal.copyrightSuffix}
          </p>
      </footer>
    </>
  );
}
