import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { CLUB, FOOTER, FOOTER_QUICK_LINKS, SOCIAL_LINKS } from "@/lib/club-data";
import { SOCIAL_ICON_MAP } from "@/lib/icon-map";

export function Footer() {
  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <Logo className="h-11 w-11 rounded-md bg-background/95 p-0.5" />
            <div>
              <div className="font-bold">{CLUB.nameBn}</div>
              <div className="text-xs text-background/60">{CLUB.nameEn}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-background/70">{CLUB.tagline}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">{FOOTER.quickLinksTitle}</h4>
          <ul className="space-y-2 text-sm text-background/70">
            {FOOTER_QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-brand-glow transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">{FOOTER.contactTitle}</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-glow" />
              {CLUB.address}
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-brand-glow" />
              {CLUB.phone}
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-brand-glow" />
              {CLUB.email}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">{FOOTER.socialTitle}</h4>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICON_MAP[social.icon];
              return (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-10 w-10 grid place-items-center rounded-full bg-background/10 hover:bg-brand hover:text-brand-foreground transition"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <p className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-center text-xs text-background/60">
          © {new Date().getFullYear()} {CLUB.nameBn}. {FOOTER.copyrightSuffix}
        </p>
      </div>
    </footer>
  );
}
