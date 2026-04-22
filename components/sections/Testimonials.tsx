"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const testimonials = [
  {
    name: "Michael Torres",
    role: "CEO",
    company: "InsureMax Agency",
    industry: "Insurance",
    initials: "MT",
    avatarBg: "bg-red-primary",
    industryBg: "bg-red-light text-red-hover",
    quote:
      "Lead Nationwide completely transformed our insurance agency pipeline. The pay-per-call leads arrive pre-qualified — our close rate jumped 40% in just 3 months. Absolutely game-changing.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "SolarPro Solutions",
    industry: "Home Services",
    initials: "SC",
    avatarBg: "bg-blue-primary",
    industryBg: "bg-blue-light text-blue-primary",
    quote:
      "The CPL leads are exceptional quality — not those cold scraped contacts you get elsewhere. We've scaled our solar installation business 3× since partnering with Lead Nationwide.",
    rating: 5,
  },
  {
    name: "David Ramirez",
    role: "Owner",
    company: "LoanBridge Financial",
    industry: "Financial Services",
    initials: "DR",
    avatarBg: "bg-red-hover",
    industryBg: "bg-red-light text-red-hover",
    quote:
      "Finally a lead gen partner that delivers on its promises. Live transfers connect us immediately with interested borrowers. Our conversion efficiency has never been higher.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg-secondary py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section header ──────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-red-primary"
          >
            Client Success Stories
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-extrabold text-text-primary sm:text-4xl"
          >
            Real Results from{" "}
            <span className="text-blue-primary">Real Businesses</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-lg text-text-secondary"
          >
            See how businesses across industries grow with high-quality leads
            from Lead Nationwide.
          </motion.p>
        </motion.div>

        {/* ── Testimonial cards ───────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-border-light bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-accent/10"
            >
              {/* Decorative quote mark */}
              <div className="absolute top-6 right-6 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity">
                <Quote size={48} className="fill-red-primary text-red-primary" />
              </div>

              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className="fill-red-primary text-red-primary"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="mb-6 min-h-[4.5rem] text-sm leading-relaxed text-text-secondary">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Person row */}
              <div className="flex items-center gap-3 border-t border-border-light pt-4">
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm shrink-0 select-none`}
                >
                  {t.initials}
                </div>

                {/* Name + role */}
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-semibold text-text-primary">
                    {t.name}
                  </p>
                  <p className="truncate text-xs text-text-secondary">
                    {t.role}, {t.company}
                  </p>
                </div>

                {/* Industry badge */}
                <span
                  className={`shrink-0 text-xs px-2.5 py-1 rounded-full font-medium ${t.industryBg}`}
                >
                  {t.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
