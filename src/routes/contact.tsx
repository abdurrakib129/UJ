import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Send, MapPin, Phone, Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/Section";
import { CLUB, CONTACT_PAGE, PAGE_META } from "@/lib/club-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: PAGE_META.contact.title },
      { name: "description", content: PAGE_META.contact.description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 100) next.name = "নাম লিখুন (১-১০০ অক্ষর)";
    if (!/^[\d\s+\-()]{6,20}$/.test(form.phone)) next.phone = "সঠিক ফোন নম্বর দিন";
    if (!form.subject.trim() || form.subject.length > 150) next.subject = "বিষয় লিখুন";
    if (!form.message.trim() || form.message.length > 1000) next.message = "বার্তা লিখুন (সর্বোচ্চ ১০০০ অক্ষর)";
    setErrors(next);
    if (Object.keys(next).length) return;

    setSent(true);
    const { default: confetti } = await import("canvas-confetti");
    confetti({ particleCount: 120, spread: 90, origin: { y: 0.4 } });
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", phone: "", subject: "", message: "" });
    }, 4500);
  };

  const contactItems = [
    { Icon: MapPin, label: CONTACT_PAGE.infoLabels.address, value: CLUB.address },
    { Icon: Phone, label: CONTACT_PAGE.infoLabels.phone, value: CLUB.phone },
    { Icon: Mail, label: CONTACT_PAGE.infoLabels.email, value: CLUB.email },
  ];

  return (
    <div>
      <PageHero title={CONTACT_PAGE.hero.title} subtitle={CONTACT_PAGE.hero.subtitle} />

      <section className="section-content bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <FadeIn className="lg:col-span-2 space-y-4">
            {contactItems.map(({ Icon, label, value }) => (
              <div key={label} className="bg-card rounded-2xl p-5 shadow-card flex gap-4">
                <div className="h-12 w-12 shrink-0 grid place-items-center rounded-xl bg-brand/10 text-brand">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
                  <div className="mt-1 font-medium text-foreground">{value}</div>
                </div>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-3">
            <div className="relative bg-card rounded-3xl p-6 sm:p-8 shadow-card">
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-card rounded-3xl grid place-items-center z-10"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: [0, 10, 0] }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="mx-auto h-20 w-20 grid place-items-center rounded-full bg-gradient-brand text-brand-foreground shadow-glow"
                      >
                        <Check size={40} strokeWidth={3} />
                      </motion.div>
                      <h3 className="mt-6 text-2xl font-bold text-foreground">{CONTACT_PAGE.form.successTitle}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{CONTACT_PAGE.form.successMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <Field label={CONTACT_PAGE.form.name.label} error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    maxLength={100}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-brand transition"
                    placeholder={CONTACT_PAGE.form.name.placeholder}
                  />
                </Field>
                <Field label={CONTACT_PAGE.form.phone.label} error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    maxLength={20}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-brand transition"
                    placeholder={CONTACT_PAGE.form.phone.placeholder}
                  />
                </Field>
                <Field label={CONTACT_PAGE.form.subject.label} error={errors.subject}>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={update("subject")}
                    maxLength={150}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-brand transition"
                    placeholder={CONTACT_PAGE.form.subject.placeholder}
                  />
                </Field>
                <Field label={CONTACT_PAGE.form.message.label} error={errors.message}>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    maxLength={1000}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-brand transition resize-none"
                    placeholder={CONTACT_PAGE.form.message.placeholder}
                  />
                </Field>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
                >
                  {CONTACT_PAGE.form.submit} <Send size={16} />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-content pt-0 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-3xl overflow-hidden shadow-card border border-border aspect-[16/9] sm:aspect-[21/9]">
              <iframe
                title="map"
                src={CONTACT_PAGE.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
