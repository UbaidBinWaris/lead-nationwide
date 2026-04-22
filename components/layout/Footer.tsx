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
  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-white text-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(193,18,31,0.08),transparent_45%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-red-primary to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mb-12 grid gap-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-primary">
              {footerData.ctaEyebrow}
            </p>
            <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-black sm:text-3xl">
              {footerData.ctaTitle}
            </h2>
          </div>
          <div className="md:justify-self-end">
            <Link
              href={footerData.ctaButton.href}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-red-primary px-6 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-hover hover:shadow-[0_10px_24px_rgba(193,18,31,0.3)] focus-visible:ring-2 focus-visible:ring-red-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-hidden"
            >
              {footerData.ctaButton.label}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2.5">
              <Image
                src={footerData.brand.logoSrc}
                alt={footerData.brand.logoAlt}
                width={150}
                height={38}
                className="h-10 w-auto"
                style={{ width: "auto" }}
              />
              <span className="text-lg font-bold text-black">
                {footerData.brand.logoPrimary} <span className="text-red-primary">{footerData.brand.logoAccent}</span>
              </span>
            </div>

            <p className="mb-6 max-w-xs text-sm leading-relaxed text-black/70">
              {footerData.brand.description}
            </p>

            <div className="flex gap-2.5">
              {footerData.socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon];

                return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-black/[0.02] transition-colors duration-200 hover:border-red-primary/40 hover:bg-red-primary/5"
                >
                  <Icon
                    size={15}
                    className="text-black/65 transition-colors group-hover:text-red-primary"
                  />
                </a>
                );
              })}
            </div>
          </div>

          {footerData.columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-5 text-sm font-semibold tracking-[0.08em] text-black uppercase">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-black/70 transition-colors duration-200 hover:text-red-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/12 pt-8">
          <a
            href={`mailto:${footerData.contact.email}`}
            className="group flex items-center gap-2 text-sm text-black/70 transition-colors hover:text-red-primary"
          >
            <Mail size={13} className="transition-colors group-hover:text-red-primary" />
            {footerData.contact.email}
          </a>
          <a
            href={`tel:${footerData.contact.phone}`}
            className="group flex items-center gap-2 text-sm text-black/70 transition-colors hover:text-red-primary"
          >
            <Phone size={13} className="transition-colors group-hover:text-red-primary" />
            {footerData.contact.phone}
          </a>
          <span className="flex items-center gap-2 text-sm text-black/70">
            <MapPin size={13} />
            {footerData.contact.address}
          </span>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 sm:flex-row">
          <p className="text-sm text-black/60">
            © {new Date().getFullYear()} {footerData.legal.companyName}. {footerData.legal.copyrightSuffix}
          </p>
          <div className="flex gap-6">
            {footerData.legal.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-black/60 transition-colors hover:text-red-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
