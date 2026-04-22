import Link from "next/link";
import type { CmsPage } from "@/lib/cms";

interface CmsPageViewProps {
  page: CmsPage;
}

export function CmsPageView({ page }: Readonly<CmsPageViewProps>) {
  return (
    <main className="flex-1 bg-linear-to-b from-bg-primary via-blue-light/40 to-bg-secondary text-text-primary">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-28 lg:px-8 lg:pt-32">
        <div className="max-w-3xl">
          {page.hero.eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-primary">
              {page.hero.eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {page.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {page.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {page.hero.primaryCta ? (
              <Link
                href={page.hero.primaryCta.href}
                className="inline-flex min-h-11 items-center rounded-full bg-red-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-hover"
              >
                {page.hero.primaryCta.label}
              </Link>
            ) : null}
            {page.hero.secondaryCta ? (
              <Link
                href={page.hero.secondaryCta.href}
                className="inline-flex min-h-11 items-center rounded-full border border-border-light bg-white px-6 py-2 text-sm font-semibold text-blue-primary transition-colors hover:border-blue-accent hover:text-blue-accent"
              >
                {page.hero.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {page.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-border-light bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{section.body}</p>
              {section.bullets?.length ? (
                <ul className="mt-4 space-y-2 text-sm text-text-primary">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {page.cards?.length ? (
        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {page.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-border-light bg-blue-light/50 p-6"
              >
                <h3 className="text-base font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{card.description}</p>
                {card.href ? (
                  <div className="mt-5">
                    <Link
                      href={card.href}
                      className="text-sm font-medium text-red-primary transition-colors hover:text-red-hover"
                    >
                      Learn more
                    </Link>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
