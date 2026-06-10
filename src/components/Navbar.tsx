import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { CLUB, NAV_LINKS } from "@/lib/club-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/92 backdrop-blur-md shadow-card border-b border-border/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-10 w-10" />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-base sm:text-lg text-foreground">{CLUB.nameBn}</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground">{CLUB.nameEn}</span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((item) => {
            const active = pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    active ? "text-brand" : "text-foreground/80 hover:text-brand"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-brand"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-foreground hover:bg-accent transition-colors duration-200"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <ul className="px-4 py-3 space-y-1">
              {NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-accent hover:text-brand transition-colors duration-200"
                    activeProps={{ className: "block px-4 py-3 rounded-lg text-base font-medium bg-accent text-brand" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
