"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import { navbarData } from "@/data/navbar";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Main header bar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-transparent"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href={navbarData.homeHref}
              className="group flex items-center gap-3 rounded-md focus-visible:ring-2 focus-visible:ring-red-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary focus-visible:outline-hidden"
            >
              <Image
                src={navbarData.logoSrc}
                alt={navbarData.logoAlt}
                width={140}
                height={36}
                className="h-9 w-auto"
                style={{ width: "auto" }}
                priority
              />
              <span className="text-lg font-bold tracking-tight text-text-primary">
                {navbarData.logoPrimary} <span className="text-red-primary">{navbarData.logoAccent}</span>
              </span>
            </Link>

            {/* Desktop Nav links */}
            <nav className="hidden md:flex items-center gap-1 rounded-full border border-border-light bg-white p-1.5">
              {navbarData.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-red-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary focus-visible:outline-hidden ${
                    pathname === link.href
                      ? "bg-red-hover text-white"
                      : "text-text-primary hover:bg-red-hover/30 hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href={navbarData.cta.href}
                className="hidden min-h-11 md:inline-flex items-center gap-2 rounded-full bg-red-primary px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-hover active:bg-red-hover focus-visible:ring-2 focus-visible:ring-red-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary focus-visible:outline-hidden"
              >
                <PhoneCall size={14} />
                {navbarData.cta.label}
              </Link>

              {/* Mobile hamburger */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileOpen((v) => !v)}
                className="min-h-11 min-w-11 rounded-md p-1 text-text-secondary transition-colors hover:text-red-primary focus-visible:ring-2 focus-visible:ring-red-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary focus-visible:outline-hidden md:hidden"
                aria-label={navbarData.mobileToggleAriaLabel}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 z-40 bg-blue-primary/20 md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              key="mobile-drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed left-0 right-0 top-16 z-40 border-b border-border-light bg-bg-primary backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-1 px-6 pb-6 pt-3">
                {navbarData.navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-lg border px-4 py-3.5 text-base font-medium transition-colors ${
                        pathname === link.href
                          ? "border-red-hover bg-red-hover text-white"
                          : "border-transparent text-text-secondary hover:border-red-light/80 hover:bg-red-light/60 hover:text-red-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.18 }}
                  className="pt-4"
                >
                  <Link
                    href={navbarData.cta.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-red-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-red-hover"
                  >
                    <PhoneCall size={15} />
                    {navbarData.cta.label}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
