import { CLUB } from "@/lib/club-data";

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src={CLUB.logo}
      alt={`${CLUB.nameBn} লোগো`}
      className={`${className} object-contain shrink-0`}
    />
  );
}
