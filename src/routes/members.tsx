import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Phone, Mail, MapPin, UserPlus } from "lucide-react";
import {
  MEMBERS,
  COMMITTEE,
  ADVISORS,
  MEMBERS_PAGE,
  PAGE_META,
  type Member,
  type CommitteeMember,
} from "@/lib/club-data";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/Section";

export const Route = createFileRoute("/members")({
  head: () => ({
    meta: [
      { title: PAGE_META.members.title },
      { name: "description", content: PAGE_META.members.description },
    ],
  }),
  component: MembersPage,
});

type Tab = "all" | "committee" | "advisors";

const cardClass =
  "group bg-card rounded-2xl overflow-hidden shadow-card transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-glow will-change-transform";

const imageClass =
  "h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]";

function MemberCard({
  photo,
  name,
  children,
  badge,
}: {
  photo: string;
  name: string;
  children: ReactNode;
  badge?: ReactNode;
}) {
  return (
    <article className={cardClass}>
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img src={photo} alt={name} loading="lazy" className={imageClass} />
        {badge}
      </div>
      <div className="p-4 text-center">{children}</div>
    </article>
  );
}

function ContactIcons({ facebook, phone, email }: { facebook?: string; phone?: string; email?: string }) {
  return (
    <div className="mt-3 flex justify-center gap-2">
      {[
        { Icon: Facebook, href: facebook },
        { Icon: Phone, href: `tel:${phone}` },
        { Icon: Mail, href: `mailto:${email}` },
      ].map(({ Icon, href }, idx) => (
        <a
          key={idx}
          href={href}
          className="h-8 w-8 grid place-items-center rounded-full bg-secondary text-foreground/70 hover:bg-brand hover:text-brand-foreground transition-colors duration-300 ease-out"
          aria-label="contact"
        >
          <Icon size={14} />
        </a>
      ))}
    </div>
  );
}

function MemberGrid({ members, showId }: { members: Member[]; showId?: boolean }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {members.map((m, i) => (
        <FadeIn key={m.id} delay={(i % 8) * 0.04} noSlide>
          <MemberCard
            photo={m.photo}
            name={m.name}
            badge={
              showId ? (
                <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-bold bg-brand text-brand-foreground rounded-full shadow-glow">
                  ID: {m.id}
                </span>
              ) : undefined
            }
          >
            <h3 className="font-bold text-foreground">{m.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground inline-flex items-center gap-1 justify-center">
              <MapPin size={12} /> {m.area}
            </p>
            <ContactIcons facebook={m.facebook} phone={m.phone} email={m.email} />
          </MemberCard>
        </FadeIn>
      ))}
    </div>
  );
}

function CommitteeGrid({ members }: { members: CommitteeMember[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {members.map((c, i) => (
        <FadeIn key={c.id} delay={(i % 8) * 0.04} noSlide>
          <MemberCard photo={c.photo} name={c.name}>
            <h3 className="font-bold text-foreground">{c.name}</h3>
            <p className="mt-1 text-xs font-semibold text-brand">{c.role}</p>
            <ContactIcons facebook={c.facebook} phone={c.phone} email={c.email} />
          </MemberCard>
        </FadeIn>
      ))}
    </div>
  );
}

function MembersPage() {
  const [tab, setTab] = useState<Tab>("all");
  const [visibleCount, setVisibleCount] = useState(MEMBERS_PAGE.initialVisibleCount);
  const visibleMembers = MEMBERS.slice(0, visibleCount);
  const allShown = visibleCount >= MEMBERS.length;

  return (
    <div className="relative">
      <PageHero title={MEMBERS_PAGE.hero.title} subtitle={MEMBERS_PAGE.hero.subtitle} />

      <section className="section-content bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-10 overflow-x-auto">
            <div className="inline-flex rounded-full bg-secondary p-1.5 shadow-card">
              {MEMBERS_PAGE.tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`relative px-4 sm:px-6 lg:px-8 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
                    tab === t.id ? "text-brand-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {tab === t.id && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-full bg-gradient-brand shadow-glow"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {tab === "all" && <MemberGrid members={visibleMembers} showId />}
              {tab === "committee" && <CommitteeGrid members={COMMITTEE} />}
              {tab === "advisors" && <MemberGrid members={ADVISORS} />}
            </motion.div>
          </AnimatePresence>

          {tab === "all" && !allShown && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() =>
                  setVisibleCount((c) => Math.min(c + MEMBERS_PAGE.loadMoreCount, MEMBERS.length))
                }
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-secondary text-foreground font-semibold hover:bg-brand hover:text-brand-foreground transition-colors duration-300 ease-out shadow-card"
              >
                {MEMBERS_PAGE.showMoreLabel}
              </button>
            </div>
          )}

          {tab === "all" && allShown && (
            <div className="mt-14 flex justify-center">
              <Link
                to={MEMBERS_PAGE.joinCta.to}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform duration-300 ease-out"
              >
                <UserPlus size={18} /> {MEMBERS_PAGE.joinCta.label}
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
