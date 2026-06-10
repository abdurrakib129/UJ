import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ACTIVITIES, CLUB, HOME, PAGE_META } from "@/lib/club-data";
import { STAT_ICON_MAP } from "@/lib/icon-map";
import { FadeIn, SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_META.home.title },
      { name: "description", content: PAGE_META.home.description },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <section className="relative min-h-[calc(100vh-4rem)] -mt-16 pt-16 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${CLUB.heroBackground})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/92 via-foreground/82 to-brand/72" aria-hidden />

        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-brand-glow/60"
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center text-background">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 text-sm mb-6"
          >
            <Sparkles size={14} className="text-brand-glow" />
            প্রতিষ্ঠা {CLUB.founded} • {CLUB.nameEn}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            {HOME.hero.titleLine1} <br />
            <span className="bg-gradient-to-r from-brand-glow to-energy bg-clip-text text-transparent">
              {HOME.hero.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-background/85"
          >
            {CLUB.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-[calc(2.25rem+0.25in)] flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to={HOME.hero.ctaPrimary.to}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand text-brand-foreground font-semibold shadow-glow hover:scale-105 transition-transform duration-300 ease-out"
            >
              {HOME.hero.ctaPrimary.label}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 ease-out" />
            </Link>
            <Link
              to={HOME.hero.ctaSecondary.to}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-background/10 border border-background/30 text-background font-semibold backdrop-blur-sm hover:bg-background/20 transition-colors duration-300 ease-out"
            >
              {HOME.hero.ctaSecondary.label}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
          aria-hidden
        >
          <div className="h-10 w-6 rounded-full border-2 border-background/40 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-1 bg-background/70 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      <section className="section-content bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {HOME.stats.map((s, i) => {
            const Icon = STAT_ICON_MAP[s.icon];
            return (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 text-center shadow-card hover:-translate-y-1 transition-transform">
                  <div className="mx-auto h-12 w-12 grid place-items-center rounded-xl bg-brand/10 text-brand mb-3">
                    <Icon size={22} />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="section-content bg-surface-warm">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <SectionHeading eyebrow={HOME.goal.eyebrow} title={HOME.goal.title} />
          <FadeIn>
            <p className="text-lg text-muted-foreground leading-relaxed">{HOME.goal.description}</p>
            <Link
              to={HOME.goal.cta.to}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-brand transition"
            >
              {HOME.goal.cta.label} <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="section-content bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={HOME.activities.eyebrow}
            title={HOME.activities.title}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ACTIVITIES.slice(0, HOME.activities.previewCount).map((a, i) => (
              <FadeIn key={a.id} delay={i * 0.1}>
                <article className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-brand text-brand-foreground rounded-full">
                      {a.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <time className="text-xs text-muted-foreground">{a.date}</time>
                    <h3 className="mt-2 text-lg font-bold text-foreground group-hover:text-brand transition-colors">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-1">{a.description}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to={HOME.activities.cta.to}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-brand-foreground font-semibold hover:scale-105 transition-transform shadow-glow"
            >
              {HOME.activities.cta.label} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
