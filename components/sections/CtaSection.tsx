"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const benefits = [
  "Free to join",
  "Weekly payouts",
  "Dedicated account manager",
  "TCPA compliant leads",
];

export function CtaSection() {
  return (
    <section id="cta" className="relative overflow-hidden py-24 sm:py-32">
      {/* ── Maroon gradient background ──────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-primary via-blue-accent to-blue-primary" />

      {/* Blue atmospheric glow top-right */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-blue-light/30 blur-[120px]" />

      {/* Maroon glow bottom-left */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-red-primary/15 blur-[100px]" />

      {/* Grid overlay pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow */}
          <motion.span
            variants={fadeUp}
            className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-blue-light"
          >
            Join Our Publisher Network
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
          >
            Ready to Generate More
            <br />
            High-Quality Leads?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-white/60 text-lg max-w-xl leading-relaxed"
          >
            Join the Lead Nationwide Pay Per Call Publisher Network and start
            connecting your audience with businesses that are ready to pay for
            quality calls.
          </motion.p>

          {/* CTA button */}
          <motion.div variants={fadeUp} className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/contact"
              id="cta-section-btn"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-red-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-light hover:shadow-2xl hover:shadow-black/20"
            >
              Get Started Today
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white/5"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Benefits row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-2"
          >
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2 text-white/65 text-sm">
                <CheckCircle2 size={14} className="shrink-0 text-blue-light" />
                {b}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
