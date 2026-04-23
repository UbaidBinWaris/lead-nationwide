import Link from "next/link";
import Image from "next/image";
import { Play, Users, Globe, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { footerData, type FooterSocialIcon } from "@/data/footer";

const socialIconMap: Record<FooterSocialIcon, typeof Play> = {
  youtube: Play,
  linkedin: Users,
  facebook: Globe,
};

export function Footer() {
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
      <div className="mb-12 grid gap-6 rounded-2xl border border-border-light bg-white p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-primary">
            {footerData.ctaEyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
            {footerData.ctaTitle}
          </h2>
        </div>
        <div className="md:justify-self-end">
          <Link
            href={footerData.ctaButton.href}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-red-primary px-6 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-secondary"
          >
            {footerData.ctaButton.label}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <footer className="relative overflow-hidden border-t border-border-light bg-navy-deep text-white">
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
                      className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-colors duration-200 hover:border-red-primary/50 hover:bg-red-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
                    >
                      <Icon
                        size={15}
                        className="text-white/70 transition-colors group-hover:text-red-primary"
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
                  <Mail size={13} className="transition-colors group-hover:text-white" />
                  {footerData.contact.email}
                </a>
                <a
                  href={`tel:${footerData.contact.phone}`}
                  className="group flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone size={13} className="transition-colors group-hover:text-white" />
                  {footerData.contact.phone}
                </a>
                <span className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin size={13} />
                  {footerData.contact.address}
                </span>
              </div>
            </address>
          </div>
        </div>

        <p className="fixed bottom-0 right-0 z-10 text-sm text-white/60">
          © {new Date().getFullYear()} {footerData.legal.companyName}. {footerData.legal.copyrightSuffix}
        </p>
      </footer>
    </>
  );
}
