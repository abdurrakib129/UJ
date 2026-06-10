import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FadeIn, SectionHeading } from "@/components/Section";
import { ABOUT, CLUB, PAGE_META } from "@/lib/club-data";
import { ABOUT_ICON_MAP } from "@/lib/icon-map";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: PAGE_META.about.title },
      { name: "description", content: PAGE_META.about.description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <PageHero title={ABOUT.hero.title} subtitle={ABOUT.hero.subtitle} />

      <section className="section-content bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <FadeIn>
            <div className="relative">
              <img
                src={CLUB.aboutHistoryImage}
                alt={ABOUT.history.imageAlt}
                className="rounded-2xl shadow-card w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand text-brand-foreground px-6 py-4 rounded-2xl shadow-glow hidden sm:block">
                <div className="text-3xl font-bold">{CLUB.founded}</div>
                <div className="text-xs uppercase tracking-wider">{ABOUT.history.foundedLabel}</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand/10 text-brand mb-3">
              {ABOUT.history.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{ABOUT.history.title}</h2>
            {ABOUT.history.paragraphs.map((paragraph, idx) => (
              <p key={idx} className={`${idx === 0 ? "mt-5" : "mt-4"} text-muted-foreground leading-relaxed`}>
                {paragraph}
              </p>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="section-content bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={ABOUT.missionVision.eyebrow} title={ABOUT.missionVision.title} />
          <div className="grid gap-8 md:grid-cols-2">
            {ABOUT.missionVision.cards.map((card, i) => {
              const Icon = ABOUT_ICON_MAP[card.icon];
              return (
                <FadeIn key={card.title} delay={i * 0.15}>
                  <div className="bg-card rounded-3xl p-8 shadow-card h-full hover:-translate-y-1 transition-transform">
                    <div className="h-14 w-14 grid place-items-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-glow mb-5">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{card.title}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{card.text}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
