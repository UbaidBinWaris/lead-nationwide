"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, DollarSign, PhoneCall } from "lucide-react";
import { fadeUp, heroStagger } from "@/lib/motion";

const stats = [
  { value: "1,100+", label: "Campaigns Delivered", Icon: TrendingUp },
  { value: "$1.5M+", label: "Publisher Payments", Icon: DollarSign },
  { value: "110K+", label: "Calls Generated", Icon: PhoneCall },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* ── Atmospheric background glows ──────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/background.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg-primary/60" />

        {/* Deep maroon glow — bottom left */}
        <div className="absolute -bottom-40 -left-40 h-[700px] w-[700px] rounded-full bg-red-light blur-[140px]" />
        {/* Blue glow — top right */}
        <div className="absolute -top-40 -right-20 h-[600px] w-[600px] rounded-full bg-blue-light blur-[130px]" />
        {/* Center warmth */}
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-accent/15 blur-[100px]" />
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e88aa4 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* ── Main content ────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-7"
        >
          {/* Eyebrow pill badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-light bg-white/80 px-4 py-1.5 text-sm font-medium text-red-primary backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-red-primary animate-pulse" />
              Trusted by 1,100+ Businesses Nationwide
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
          >
            Transform Your Outreach{" "}
            <br className="hidden sm:block" />
            with{" "}
            <span className="bg-gradient-to-r from-red-primary via-red-hover to-blue-accent bg-clip-text text-transparent">
              Lead Nationwide
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl"
          >
            High-quality Pay Per Call, CPL, and CPA leads across insurance,
            finance, home services, and more. Connect with customers who are
            ready to buy — today.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 pt-1"
          >
            <Link
              href="/contact"
              id="hero-cta-primary"
              className="group inline-flex items-center gap-2 rounded-full bg-red-primary px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-hover hover:shadow-2xl hover:shadow-red-primary/20 active:bg-red-hover"
            >
              Get Started Today
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              href="/services"
              id="hero-cta-secondary"
              className="inline-flex items-center gap-2 rounded-full border border-border-light bg-white px-8 py-3.5 text-base font-semibold text-blue-primary transition-all duration-300 hover:border-blue-accent hover:text-blue-accent"
            >
              View Services
            </Link>
          </motion.div>

          {/* Compliance trust line */}
          <motion.p variants={fadeUp} className="text-xs tracking-wide text-text-secondary">
            ✓&nbsp;GDPR Compliant&ensp;·&ensp;✓&nbsp;CCPA Compliant&ensp;·&ensp;✓&nbsp;TCPA Compliant
          </motion.p>

          {/* ── Stats bar ─────────────────────────────────── */}
          <motion.div variants={fadeUp} className="w-full max-w-3xl mt-6">
            <div className="grid grid-cols-3 divide-x divide-border-light overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm">
              {stats.map(({ value, label, Icon }) => (
                <div
                  key={label}
                  className="group flex flex-col items-center justify-center gap-2 px-4 py-6 transition-colors duration-300 hover:bg-blue-light/60"
                >
                  <div className="flex items-center gap-2">
                    <Icon
                      size={14}
                      className="text-red-primary opacity-80 transition-opacity group-hover:opacity-100"
                    />
                    <span className="font-mono text-2xl font-bold tabular-nums text-text-primary sm:text-3xl lg:text-4xl">
                      {value}
                    </span>
                  </div>
                  <span className="text-center text-xs leading-tight text-text-secondary sm:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade to white (services section) */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
