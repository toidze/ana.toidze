"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Apple-style reveal: a subtle rise + fade, critically damped (no overshoot —
 * reveals aren't momentum gestures). `load` plays on mount (hero); otherwise it
 * plays once when scrolled into view. Honors prefers-reduced-motion by showing
 * the content immediately with no transform.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  load = false,
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  load?: boolean;
  duration?: number;
}) {
  const reduce = useReducedMotion();

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y };
  const shown = { opacity: 1, y: 0 };
  const transition = {
    type: "spring" as const,
    bounce: 0,
    duration,
    delay,
  };

  const trigger = load
    ? { animate: shown }
    : { whileInView: shown, viewport: { once: true, margin: "-12% 0px" } };

  return (
    <motion.div
      className={className}
      initial={hidden}
      transition={transition}
      {...trigger}
    >
      {children}
    </motion.div>
  );
}
