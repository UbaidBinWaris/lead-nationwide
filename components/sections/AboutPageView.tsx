"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";
import { fadeUp, heroStagger, staggerContainer } from "@/lib/motion";
import type { AboutDetailedPageData } from "@/data/pages/aboutDetailed";

interface AboutPageViewProps {
  page: AboutDetailedPageData;
}

export function AboutPageView({ page }: Readonly<AboutPageViewProps>) {
  return (
    <main className="flex-1 bg-bg-primary text-text-primary">
      <section className="relative overflow-hidden bg-linear-to-b from-blue-light to-bg-secondary">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(193,18,31,0.1) 0%, transparent 70%)",
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
            className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
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

      <section className="mx-auto max-w-7xl bg-white px-6 py-14 lg:px-8 lg:py-18">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {page.stats.map((stat) => (
            <motion.article
              key={stat.label}
              variants={fadeUp}
              className="group rounded-2xl border border-border-light bg-blue-light p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-primary/30 hover:bg-white hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
                {stat.label}
              </p>
              <p className="mt-3 text-3xl font-bold tracking-tight text-blue-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {stat.note}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 bg-bg-secondary px-6 py-10 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-primary">
            Who We Are
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {page.story.title}
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-text-secondary sm:text-base">
            {page.story.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="order-1 overflow-hidden rounded-3xl border border-border-light shadow-lg lg:order-2"
        >
          <Image
            src={page.story.image.src}
            alt={page.story.image.alt}
            width={1400}
            height={950}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-navy-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-primary">
              Core Values
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The Principles Behind Every Campaign
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-5 md:grid-cols-2"
          >
            {page.values.map((value) => (
              <motion.article
                key={value.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-navy-deep p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-accent hover:shadow-md"
              >
                <h3 className="text-base font-semibold tracking-tight text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {value.body}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-blue-light px-6 py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-primary">
            Journey
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Milestones That Shaped Us
          </h2>
        </motion.div>

        <div className="relative mt-8">
          <span className="absolute left-3 top-0 hidden h-full w-px bg-blue-accent/40 md:block" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            {page.milestones.map((milestone) => (
              <motion.article
                key={milestone.year}
                variants={fadeUp}
                className="rounded-2xl border border-blue-accent/20 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-accent hover:shadow-md md:ml-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-primary">
                  {milestone.year}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {milestone.body}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-red-light px-6 py-8 lg:px-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-primary">
            Leadership
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Experts Behind the Work
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-6 md:grid-cols-3"
        >
          {page.leaders.map((leader) => (
            <motion.article
              key={leader.name}
              variants={fadeUp}
              className="group overflow-hidden rounded-2xl border border-red-primary/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-primary/30 hover:shadow-lg"
            >
              <Image
                src={leader.image}
                alt={leader.name}
                width={900}
                height={1000}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-base font-semibold">{leader.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-red-primary">
                  {leader.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {leader.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-navy-deep px-8 py-12 text-center md:px-14"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {page.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            {page.cta.body}
          </p>
          <Link
            href={page.cta.action.href}
            className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-red-primary px-7 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-hover hover:shadow-lg"
          >
            {page.cta.action.label}
            <MdArrowForward size={15} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
