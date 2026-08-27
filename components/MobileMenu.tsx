"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Grip, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/nav";
import { resumeHref } from "@/lib/resume";
import type { SiteSettings } from "@/types";
import { AIOverviewButton } from "./AIOverviewButton";
import { Button } from "./Button";

export function MobileMenu({ settings }: { settings: SiteSettings }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="-ml-2 flex size-11 items-center justify-center text-ink"
      >
        <Grip size={28} strokeWidth={1.5} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-paper"
            initial={{ opacity: 0, y: reduce ? 0 : -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -12 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
          >
            {/* Matches the header bar: same height, padding, and bottom divider. */}
            <div className="flex items-center border-b border-line px-6 py-3">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="-ml-2 flex size-11 items-center justify-center text-ink"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            {/* Items centered on all sides; large, centered, well-spaced.
                Any tap inside closes the menu. */}
            <nav
              onClick={() => setOpen(false)}
              className="flex flex-1 flex-col items-center justify-center gap-8 px-6 pb-[68px] text-center"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[28px] leading-none text-ink"
                >
                  {link.label}
                </Link>
              ))}
              {settings.resumeUrl && (
                <a
                  href={resumeHref(settings)}
                  download
                  className="text-[28px] leading-none text-ink"
                >
                  Resume
                </a>
              )}
              <AIOverviewButton size="lg" />
              <Button variant="solid" href={`mailto:${settings.email}`}>
                {settings.ctaLabel}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
