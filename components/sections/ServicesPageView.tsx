"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MdArrowForward,
  MdCall,
  MdChecklist,
  MdBolt,
  MdVerified,
  MdInsights,
  MdGroups,
} from "react-icons/md";
import { fadeUp, heroStagger, staggerContainer } from "@/lib/motion";
import type { ServicesDetailedPageData } from "@/data/pages/servicesDetailed";

interface ServicesPageViewProps {
  page: ServicesDetailedPageData;
}

const featureIcons = [MdBolt, MdVerified, MdInsights, MdGroups] as const;

export function ServicesPageView({ page }: Readonly<ServicesPageViewProps>) {
  return (
    <main className="flex-1 bg-bg-primary text-text-primary">
      <section className="relative overflow-hidden bg-linear-to-b from-blue-light via-bg-secondary to-bg-secondary">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 70% 0%, rgba(193,18,31,0.12) 0%, transparent 70%)",
          }}
        />

        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8 lg:pt-36"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-red-primary"
          >
            {page.hero.eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {page.hero.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            {page.hero.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Link
              href={page.hero.primaryCta.href}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-red-primary px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-hover hover:shadow-lg"
            >
              {page.hero.primaryCta.label}
              <MdArrowForward size={15} />
            </Link>
            <Link
              href={page.hero.secondaryCta.href}
              className="inline-flex min-h-11 items-center rounded-full border border-border-light bg-white px-6 py-2.5 text-sm font-semibold text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-red-primary hover:text-red-primary"
            >
              {page.hero.secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-primary">
            Service Models
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-blue-primary sm:text-4xl">
            Choose the Growth Model That Fits Your Funnel
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-6 lg:grid-cols-3"
        >
          {page.models.map((model) => (
            <motion.article
              key={model.name}
              variants={fadeUp}
              className="group rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-primary/30 hover:shadow-lg"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-light text-red-primary">
                <MdCall size={20} />
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{model.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{model.summary}</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start gap-2 text-text-primary">
                  <MdChecklist size={16} className="mt-0.5 text-blue-primary" />
                  <span>{model.priceModel}</span>
                </li>
                <li className="flex items-start gap-2 text-text-secondary">
                  <MdChecklist size={16} className="mt-0.5 text-blue-primary" />
                  <span>{model.bestFor}</span>
                </li>
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-navy-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-primary">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              How We Launch and Scale Campaigns
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-5 md:grid-cols-2"
          >
            {page.process.map((step, idx) => (
              <motion.article
                key={step.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-navy-deep p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-accent"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-primary">
                  Step {idx + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-blue-accent/20 bg-blue-light p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-primary">
              Vertical Expertise
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-blue-primary sm:text-4xl">
              Built for High-Value Industries
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {page.verticals.map((vertical) => (
                <article key={vertical.title} className="rounded-xl border border-white/60 bg-white p-4">
                  <h3 className="text-base font-semibold">{vertical.title}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-text-secondary">
                    {vertical.examples.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4"
          >
            {page.features.map((feature, idx) => {
              const Icon = featureIcons[idx % featureIcons.length];
              return (
                <motion.article
                  key={feature.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-border-light bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-light text-red-primary">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-3 text-base font-semibold tracking-tight">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{feature.body}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl bg-navy-deep px-8 py-12 text-center md:px-14"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {page.finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            {page.finalCta.description}
          </p>
          <Link
            href={page.finalCta.action.href}
            className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-red-primary px-7 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-hover hover:shadow-lg"
          >
            {page.finalCta.action.label}
            <MdArrowForward size={15} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
