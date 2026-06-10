import { FadeIn } from "@/components/Section";

type PageHeroProps = {
  title: string;
  subtitle: string;
};

/** Inner-page hero — soft, compact, matches site body tone (not used on Home). */
export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative border-b border-border/50 bg-page-hero overflow-hidden">
      <div className="absolute inset-0 bg-pattern-hero pointer-events-none" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/25 to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-9 sm:py-11 text-center">
        <FadeIn noSlide>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">{title}</h1>
          <p className="mt-2.5 sm:mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
