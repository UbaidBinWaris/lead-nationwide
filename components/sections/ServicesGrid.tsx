"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ServicesGrid() {
  return (
    <section id="services" className="bg-bg-primary py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section header ─────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-red-primary"
          >
            What We Offer
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl"
          >
            Comprehensive Lead Generation
            <br />
            <span className="text-blue-primary">Solutions for Every Industry</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary"
          >
            From pay-per-call to content marketing — every tool you need to
            fill your pipeline with ready-to-convert leads.
          </motion.p>
        </motion.div>

        {/* ── 3 × 3 services grid ─────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => {
            const { Icon } = service;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className="group relative cursor-default overflow-hidden rounded-2xl border border-border-light bg-white p-6 transition-all duration-300 hover:border-blue-accent/30 hover:shadow-xl hover:shadow-blue-accent/10"
              >
                {/* Icon wrapper */}
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${service.accentClass} mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <h3 className="mb-2 text-base font-semibold leading-snug text-text-primary">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>

                {/* Bottom slide-in accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 rounded-b-2xl bg-gradient-to-r from-red-primary to-blue-accent transition-transform duration-350 group-hover:scale-x-100" />

                {/* Subtle hover bg wash */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-light/0 to-blue-light/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
