import type { Metadata } from "next";
import Link from "next/link";
import { privacyPageData } from "@/data/pages/privacy";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: privacyPageData.metadata.title,
  description: privacyPageData.metadata.description,
  path: "/privacy",
  keywords: ["privacy policy", "data protection", "user privacy"],
});

export default function PrivacyPage() {
  return (
    <main className="flex-1 text-text-primary">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bg-secondary">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 0%, rgba(193,18,31,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-28 lg:px-8 lg:pt-36">
          <Link
            href="/help-center"
            className="mb-6 inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary transition-colors hover:text-red-primary"
          >
            ← Help Center
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-primary">
            {privacyPageData.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            {privacyPageData.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-text-secondary">
            {privacyPageData.hero.legalLine}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
            {privacyPageData.hero.intro}{" "}
            <a
              href={privacyPageData.hero.siteUrl}
              className="underline underline-offset-2 text-red-primary hover:text-red-hover"
              rel="noopener noreferrer"
              target="_blank"
            >{privacyPageData.hero.siteLabel}</a>{privacyPageData.hero.introSuffix}
          </p>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Sticky TOC */}
          <aside className="shrink-0 lg:w-56">
            <div className="sticky top-24">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
                Contents
              </p>
              <nav aria-label="Table of contents">
                <ul className="space-y-2">
                  {privacyPageData.sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block text-sm text-text-secondary transition-colors hover:text-red-primary"
                      >
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="space-y-10">
              {privacyPageData.sections.map((s) => (
                <div
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-28 rounded-2xl border border-border-light bg-white px-7 py-7 shadow-sm"
                >
                  <h2 className="mb-4 text-base font-semibold tracking-tight">
                    {s.heading}
                  </h2>
                  <div className="space-y-3">
                    {s.content.map((para) => (
                      <p
                        key={para}
                        className="text-sm leading-relaxed text-text-secondary"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                  {s.bullets && s.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-10 text-xs text-text-secondary">
              {privacyPageData.footerNote}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
