"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MdArrowForward,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdTaskAlt,
  MdSchedule,
  MdRocketLaunch,
} from "react-icons/md";
import { fadeUp, heroStagger, staggerContainer } from "@/lib/motion";
import type { ContactDetailedPageData } from "@/data/pages/contactDetailed";

interface ContactPageViewProps {
  page: ContactDetailedPageData;
}

const channelIconMap = {
  email: MdEmail,
  phone: MdPhone,
  address: MdLocationOn,
};

export function ContactPageView({ page }: Readonly<ContactPageViewProps>) {
  return (
    <main className="flex-1 bg-bg-primary text-text-primary">
      <section className="relative overflow-hidden bg-linear-to-b from-blue-light via-bg-secondary to-bg-secondary">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 15% 0%, rgba(193,18,31,0.12) 0%, transparent 70%)",
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
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {page.channels.map((channel) => {
            const Icon = channelIconMap[channel.type];

            const content = (
              <>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-light text-red-primary">
                  <Icon size={20} />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
                  {channel.label}
                </p>
                <p className="mt-2 text-base font-semibold text-blue-primary">{channel.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{channel.note}</p>
              </>
            );

            if (channel.href) {
              return (
                <motion.a
                  key={channel.label}
                  variants={fadeUp}
                  href={channel.href}
                  className="rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-primary/30 hover:shadow-md"
                >
                  {content}
                </motion.a>
              );
            }

            return (
              <motion.article
                key={channel.label}
                variants={fadeUp}
                className="rounded-2xl border border-border-light bg-white p-6 shadow-sm"
              >
                {content}
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-navy-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-primary">
              Before You Contact Us
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {page.prep.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              {page.prep.description}
            </p>

            <ul className="mt-6 space-y-3">
              {page.prep.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/75">
                  <MdTaskAlt size={18} className="mt-0.5 shrink-0 text-red-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4"
          >
            {page.expectations.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-navy-deep p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-accent"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{item.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-primary">
            Quick Answers
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-blue-primary sm:text-4xl">
            Contact FAQ
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-4"
        >
          {page.faqs.map((faq) => (
            <motion.article
              key={faq.question}
              variants={fadeUp}
              className="rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-accent/40 hover:shadow-md"
            >
              <h3 className="text-base font-semibold tracking-tight">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{faq.answer}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl bg-navy-deep px-8 py-12 text-center md:px-14"
        >
          <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-light text-red-primary">
            <MdSchedule size={20} />
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {page.finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            {page.finalCta.body}
          </p>
          <Link
            href={page.finalCta.action.href}
            className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-red-primary px-7 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-hover hover:shadow-lg"
          >
            <MdRocketLaunch size={16} />
            {page.finalCta.action.label}
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
