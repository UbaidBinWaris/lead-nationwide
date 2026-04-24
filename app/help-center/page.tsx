import type { Metadata } from "next";
import Link from "next/link";
import {
  MdHeadsetMic,
  MdQuestionAnswer,
  MdGavel,
  MdPrivacyTip,
  MdEmail,
  MdPhone,
  MdArrowForward,
  MdVerified,
  MdSpeed,
  MdShield,
} from "react-icons/md";
import { helpCenterPageData } from "@/data/pages/helpCenter";

export const metadata: Metadata = {
  title: helpCenterPageData.metadata.title,
  description: helpCenterPageData.metadata.description,
};

const resourceIconMap = {
  support: MdHeadsetMic,
  faq: MdQuestionAnswer,
  terms: MdGavel,
  privacy: MdPrivacyTip,
};

const highlightIconMap = {
  speed: MdSpeed,
  verified: MdVerified,
  shield: MdShield,
};

export default function HelpCenterPage() {
  return (
    <main className="flex-1 text-text-primary">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bg-secondary">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(193,18,31,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8 lg:pt-36">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-primary">
            {helpCenterPageData.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            {helpCenterPageData.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {helpCenterPageData.hero.description}
          </p>

          {/* Quick contact chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${helpCenterPageData.hero.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border-light bg-white px-4 py-2 text-sm font-medium text-text-primary shadow-sm transition-colors hover:border-red-primary hover:text-red-primary"
            >
              <MdEmail size={15} className="text-red-primary" />
              {helpCenterPageData.hero.email}
            </a>
            <a
              href={helpCenterPageData.hero.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border-light bg-white px-4 py-2 text-sm font-medium text-text-primary shadow-sm transition-colors hover:border-red-primary hover:text-red-primary"
            >
              <MdPhone size={15} className="text-red-primary" />
              {helpCenterPageData.hero.phoneLabel}
            </a>
          </div>
        </div>
      </section>

      {/* ── Resource Cards ────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">
          {helpCenterPageData.resourcesIntro.title}
        </h2>
        <p className="mb-10 text-sm text-text-secondary">
          {helpCenterPageData.resourcesIntro.description}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {helpCenterPageData.resources.map((res) => {
            const Icon = resourceIconMap[res.icon];
            return (
              <Link
                key={res.label}
                href={res.href}
                className={`group flex flex-col rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${res.border}`}
              >
                <span
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${res.accent}`}
                >
                  <Icon size={22} />
                </span>
                <h3 className="text-base font-semibold">{res.label}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                  {res.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-red-primary transition-colors group-hover:gap-2">
                  {res.cta}
                  <MdArrowForward size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Highlights strip ──────────────────────────────── */}
      <section className="border-y border-border-light bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {helpCenterPageData.highlights.map((h) => {
              const Icon = highlightIconMap[h.icon];
              return (
                <div key={h.title} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Icon size={20} className="text-red-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{h.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      {h.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Still need help CTA ───────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="rounded-2xl bg-navy-deep px-8 py-12 text-center md:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-primary">
            {helpCenterPageData.cta.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {helpCenterPageData.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70">
            {helpCenterPageData.cta.description}
          </p>
          <Link
            href={helpCenterPageData.cta.href}
            className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-red-primary px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-hover"
          >
            {helpCenterPageData.cta.label}
            <MdArrowForward size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
