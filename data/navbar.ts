export interface NavbarLink {
  label: string;
  href: string;
}

export interface NavbarData {
  homeHref: string;
  logoSrc: string;
  logoAlt: string;
  logoShort: string;
  logoPrimary: string;
  logoAccent: string;
  navLinks: NavbarLink[];
  cta: {
    label: string;
    href: string;
  };
  mobileToggleAriaLabel: string;
}

export const navbarData: NavbarData = {
  homeHref: "/",
  logoSrc: "/logo.png",
  logoAlt: "Lead Nationwide logo",
  logoShort: "LN",
  logoPrimary: "Lead",
  logoAccent: "Nationwide",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    label: "Get Started",
    href: "/contact",
  },
  mobileToggleAriaLabel: "Toggle navigation menu",
};