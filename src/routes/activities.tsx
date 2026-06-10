import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { ACTIVITIES, ACTIVITIES_PAGE, PAGE_META } from "@/lib/club-data";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/Section";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: PAGE_META.activities.title },
      { name: "description", content: PAGE_META.activities.description },
    ],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  return (
    <div>
      <PageHero title={ACTIVITIES_PAGE.hero.title} subtitle={ACTIVITIES_PAGE.hero.subtitle} />

      <section className="section-content bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ACTIVITIES.map((a, i) => (
              <FadeIn key={a.id} delay={(i % 3) * 0.08} noSlide>
                <article className="group bg-card rounded-2xl overflow-hidden shadow-card h-full flex flex-col transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-glow will-change-transform">
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-[4/3] overflow-hidden cursor-pointer"
                  >
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-brand text-brand-foreground rounded-full">
                      {a.category}
                    </span>
                  </a>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={14} />
                      <time>{a.date}</time>
                    </div>
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-lg font-bold text-foreground transition-colors duration-300 ease-out hover:text-brand cursor-pointer"
                    >
                      {a.title}
                    </a>
                    <p className="mt-2 text-sm text-muted-foreground flex-1">{a.description}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={ACTIVITIES_PAGE.moreActivitiesCta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform duration-300 ease-out"
            >
              {ACTIVITIES_PAGE.moreActivitiesCta.label}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
