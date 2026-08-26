import type { NavLink } from "@/types";

/** Structural header/menu links (not CMS-managed). Résumé/AI/Contact are added
 * alongside these in the Header and MobileMenu. */
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
];
