"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Link that reliably scrolls to an in-page anchor every time it's clicked.
 * Next's <Link> only re-scrolls when the hash *changes*, so a second click on
 * `/#projects` (hash already set) does nothing. Here we scroll manually when
 * the target is on the current page; otherwise we navigate normally (the
 * destination scrolls to the hash on load). Uses the container's CSS
 * `scroll-behavior` (smooth, reduced-motion aware) via `scrollIntoView()`.
 */
export function ScrollLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const hashIndex = href.indexOf("#");
  const hasHash = hashIndex >= 0;
  const path = hasHash ? href.slice(0, hashIndex) : href;
  const id = hasHash ? href.slice(hashIndex + 1) : "";
  const linkPath = path === "" ? pathname : path;
  const isSamePage = hasHash && linkPath === pathname;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    if (!isSamePage) return;
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    // Double rAF: let any click-triggered state settle first (e.g. the mobile
    // menu closing and unlocking body scroll) before we scroll.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        el.scrollIntoView();
        history.replaceState(null, "", `#${id}`);
      })
    );
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
