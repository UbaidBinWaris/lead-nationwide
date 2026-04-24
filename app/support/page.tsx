import type { Metadata } from "next";
import Link from "next/link";
import {
  MdEmail,
  MdPhone,
  MdArrowForward,
  MdCheckCircle,
  MdBusiness,
  MdPlayCircle,
  MdArticle,
  MdTrendingUp,
  MdCampaign,
} from "react-icons/md";
import { supportPageData } from "@/data/pages/support";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: supportPageData.metadata.title,
  description: supportPageData.metadata.description,
  path: "/support",
  keywords: ["support center", "lead generation support", "campaign onboarding"],
});

const stepIconMap = {
  email: MdEmail,
  business: MdBusiness,
  demo: MdPlayCircle,
};

const blogIconMap = {
  article: MdArticle,
  trending: MdTrendingUp,
  campaign: MdCampaign,
};

const channelIconMap = {
  email: MdEmail,
  phone: MdPhone,
};

export default function SupportPage() {
  return (
    <main className="flex-1 text-text-primary">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bg-secondary">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 60% 0%, rgba(193,18,31,0.07) 0%, transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8 lg:pt-36">
          <Link
            href="/help-center"
            className="mb-6 inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary transition-colors hover:text-red-primary"
          >
            ← Help Center
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-primary">
            {supportPageData.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            {supportPageData.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary">
            {supportPageData.hero.description}
          </p>
        </div>
      </section>

      {/* ── Getting Started ───────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">
          {supportPageData.gettingStarted.title}
        </h2>
        <p className="mb-12 text-sm text-text-secondary">
          {supportPageData.gettingStarted.description}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {supportPageData.steps.map((s) => {
            const Icon = stepIconMap[s.icon];
            return (
              <div
                key={s.step}
                className="relative flex flex-col rounded-2xl border border-border-light bg-white p-7 shadow-sm"
              >
                <span className="absolute right-6 top-6 text-4xl font-black text-border-light select-none">
                  {s.step}
                </span>
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-light text-red-primary">
                  <Icon size={22} />
                </span>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                  {s.body}
                </p>
                {s.cta && (
                  <Link
                    href={s.cta.href}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-red-primary hover:gap-2 transition-all"
                  >
                    {s.cta.label}
                    <MdArrowForward size={14} />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Contact Channels ──────────────────────────────── */}
      <section className="border-y border-border-light bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <h2 className="mb-8 text-xl font-semibold tracking-tight">
            {supportPageData.channelsTitle}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
            {supportPageData.channels.map((ch) => {
              const Icon = channelIconMap[ch.icon];
              return (
                <a
                  key={ch.label}
                  href={ch.href}
                  className="group flex items-start gap-4 rounded-xl border border-border-light bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-light text-blue-primary">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{ch.label}</p>
                    <p className="text-sm font-medium text-red-primary">{ch.value}</p>
                    <p className="mt-0.5 text-xs text-text-secondary">{ch.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Support Blogs ─────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">
          {supportPageData.resources.title}
        </h2>
        <p className="mb-10 text-sm text-text-secondary">
          {supportPageData.resources.description}
        </p>

        <div className="grid gap-5 sm:grid-cols-3">
          {supportPageData.resources.blogs.map((b) => {
            const Icon = blogIconMap[b.icon];
            return (
              <div
                key={b.title}
                className="group flex flex-col rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-light text-blue-primary">
                  <Icon size={20} />
                </span>
                <h3 className="text-sm font-semibold leading-snug">{b.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-text-secondary">
                  {b.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-red-primary transition-all group-hover:gap-2">
                  Read More
                  <MdArrowForward size={12} />
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="flex flex-col items-start gap-5 rounded-2xl border border-border-light bg-white px-8 py-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-light text-red-primary">
              <MdCheckCircle size={20} />
            </span>
            <div>
              <p className="text-base font-semibold">{supportPageData.bottomCta.title}</p>
              <p className="mt-0.5 text-sm text-text-secondary">
                {supportPageData.bottomCta.description}
              </p>
            </div>
          </div>
          <a
            href={supportPageData.bottomCta.href}
            className="inline-flex shrink-0 min-h-11 items-center gap-2 rounded-full bg-red-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-hover"
          >
            {supportPageData.bottomCta.label}
            <MdArrowForward size={14} />
          </a>
        </div>
      </section>
    </main>
  );
}
