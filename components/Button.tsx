import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "solid" | "stroke";

/**
 * Button — matches the Figma "Buttons" component (node 40:438).
 * Text: Epilogue 20px / Regular. Padding: 24px x, 17/16 y. Radius: full.
 * - solid:  accent fill, white text  → hover: black fill
 * - stroke: 1.5px black border + black text (transparent) → hover: accent border + text
 */
const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 pt-[17px] pb-4 text-[20px] font-normal leading-[21px] transition-[background-color,border-color,color] duration-200 ease-out";

const variants: Record<Variant, string> = {
  solid: "bg-accent text-paper hover:bg-ink active:bg-ink",
  stroke:
    "border-[1.5px] border-ink text-ink hover:border-accent hover:text-accent active:border-accent active:text-accent",
};

export function Button({
  children,
  variant = "solid",
  href,
  className,
  onClick,
  "aria-label": ariaLabel,
}: {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
}) {
  const classes = cn(base, variants[variant], className);
  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <span className={classes} onClick={onClick}>
      {children}
    </span>
  );
}
