import Link from "next/link";
import { Play, Users, Globe, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
  helpCenter: [
    { label: "Support", href: "/support" },
    { label: "FAQ", href: "/support#faq" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  services: [
    { label: "Pay Per Call Leads", href: "/services" },
    { label: "CPL Leads", href: "/services" },
    { label: "CPA Leads", href: "/services" },
    { label: "Custom Solutions", href: "/services" },
  ],
};

const socials = [
  {
    Icon: Play,
    href: "https://www.youtube.com/channel/UCbwVFYV_NxkG8bV7k7aJu-w",
    label: "YouTube",
  },
  {
    Icon: Users,
    href: "https://www.linkedin.com/company/nationwideleadsthatconvert",
    label: "LinkedIn",
  },
  {
    Icon: Globe,
    href: "https://www.facebook.com/LeadNationwide",
    label: "Facebook",
  },
];

export function Footer() {
  return (
    <footer className="bg-blue-primary text-white">
      {/* Top accent gradient line */}
      <div className="h-px bg-linear-to-r from-transparent via-red-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* ── 4-column grid ───────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-primary">
                <span className="text-white font-extrabold text-sm select-none">
                  LN
                </span>
              </div>
              <span className="font-bold text-lg">
                Lead <span className="text-blue-light">Nationwide</span>
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
              Delivering top-quality Pay Per Call, CPL, and CPA leads across
              diverse industries worldwide. Connecting businesses with their
              ideal clients.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-9 w-9 items-center justify-center rounded-lg bg-blue-accent/30 transition-colors duration-200 hover:bg-blue-accent"
                >
                  <Icon
                    size={15}
                    className="text-white/50 group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Cols 2-4 — Link columns */}
          {(
            [
              { title: "Company", links: footerLinks.company },
              { title: "Help Center", links: footerLinks.helpCenter },
              { title: "Our Services", links: footerLinks.services },
            ] as const
          ).map((col) => (
            <div key={col.title}>
              <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/45 transition-colors duration-200 hover:text-blue-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Contact info row ─────────────────────────────── */}
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border-light/20 pt-8">
          <a
            href="mailto:inquiry@leadnationwide.com"
            className="flex items-center gap-2 text-white/35 hover:text-white/70 text-sm transition-colors group"
          >
            <Mail size={13} className="transition-colors group-hover:text-blue-light" />
            inquiry@leadnationwide.com
          </a>
          <a
            href="tel:305-417-7034"
            className="flex items-center gap-2 text-white/35 hover:text-white/70 text-sm transition-colors group"
          >
            <Phone size={13} className="transition-colors group-hover:text-blue-light" />
            305-417-7034
          </a>
          <span className="flex items-center gap-2 text-white/35 text-sm">
            <MapPin size={13} />
            1207 Delaware Ave, Wilmington, DE 19806
          </span>
        </div>

        {/* ── Bottom copyright bar ─────────────────────────── */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-border-light/15 pt-6 sm:flex-row">
          <p className="text-white/25 text-sm">
            © {new Date().getFullYear()} Lead Nationwide LLC. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/terms"
              className="text-white/25 hover:text-white/55 text-sm transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-white/25 hover:text-white/55 text-sm transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
