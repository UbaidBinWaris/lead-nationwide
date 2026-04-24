import type { Metadata } from "next";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { faqPageData } from "@/data/pages/faq";

export const metadata: Metadata = {
  title: faqPageData.metadata.title,
  description: faqPageData.metadata.description,
};

export default function FaqPage() {
  return (
    <main className="flex-1 text-text-primary">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bg-secondary">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 30% 0%, rgba(193,18,31,0.07) 0%, transparent 65%)",
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
            {faqPageData.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            {faqPageData.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary">
            {faqPageData.hero.description}
          </p>
        </div>
      </section>

      {/* ── FAQ Sections ──────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="space-y-12">
          {faqPageData.categories.map((cat) => (
            <div key={cat.category}>
              <h2 className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-red-primary">
                {cat.category}
              </h2>
              <div className="rounded-2xl border border-border-light bg-white px-6 shadow-sm">
                <FaqAccordion items={cat.items} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Still have questions ──────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-2xl bg-navy-deep px-8 py-12 text-center md:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-primary">
            {faqPageData.cta.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {faqPageData.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70">
            {faqPageData.cta.description}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href={faqPageData.cta.primary.href}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-red-primary px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-hover"
            >
              {faqPageData.cta.primary.label}
              <MdArrowForward size={15} />
            </Link>
            <Link
              href={faqPageData.cta.secondary.href}
              className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {faqPageData.cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
