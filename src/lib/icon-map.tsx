import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Users,
  Trophy,
  Heart,
  Sparkles,
  Target,
  Eye,
  type LucideIcon,
} from "lucide-react";
import type { SocialIcon } from "./club-data";

export const SOCIAL_ICON_MAP: Record<SocialIcon, LucideIcon> = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
};

export const STAT_ICON_MAP = {
  users: Users,
  trophy: Trophy,
  heart: Heart,
  sparkles: Sparkles,
} as const;

export const ABOUT_ICON_MAP = {
  target: Target,
  eye: Eye,
} as const;
