import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  className = "",
  noSlide = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Use on hoverable cards — avoids transform conflicts with CSS hover lift */
  noSlide?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, ...(noSlide ? {} : { y: 24 }) }}
      whileInView={{ opacity: 1, ...(noSlide ? {} : { y: 0 }) }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <FadeIn className="text-center max-w-2xl mx-auto mb-12">
      {eyebrow && (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand/10 text-brand mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </FadeIn>
  );
}
