import { createFileRoute } from "@tanstack/react-router";
import { Wallet, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/Section";
import { FINANCE_PAGE, PAGE_META } from "@/lib/club-data";

export const Route = createFileRoute("/finance")({
  head: () => ({
    meta: [
      { title: PAGE_META.finance.title },
      { name: "description", content: PAGE_META.finance.description },
    ],
  }),
  component: FinancePage,
});

function FinancePage() {
  return (
    <div>
      <PageHero title={FINANCE_PAGE.hero.title} subtitle={FINANCE_PAGE.hero.subtitle} />

      <section className="section-content bg-surface">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <FadeIn>
            <div className="mx-auto h-20 w-20 grid place-items-center rounded-3xl bg-gradient-brand text-brand-foreground shadow-glow">
              <Wallet size={34} />
            </div>
            <h2 className="mt-8 text-3xl font-bold text-foreground">{FINANCE_PAGE.comingSoon.title}</h2>
            <p className="mt-4 text-muted-foreground inline-flex items-center gap-2 justify-center">
              <Clock size={16} /> {FINANCE_PAGE.comingSoon.subtitle}
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">{FINANCE_PAGE.comingSoon.description}</p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
