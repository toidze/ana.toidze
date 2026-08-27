import { cn } from "@/lib/cn";

/** The question the AI Overview answers about Ana. */
const AI_QUERY = "who is ana toidze, a product designer from tbilisi?";

/** Google AI Mode (udm=50) opens a full AI answer for the query. */
const AI_OVERVIEW_URL = `https://www.google.com/search?udm=50&q=${encodeURIComponent(
  AI_QUERY
)}`;

export function AIOverviewButton({
  className,
  size = "md",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  const lg = size === "lg";
  return (
    <a
      href={AI_OVERVIEW_URL}
      target="_blank"
      rel="noreferrer"
      title={`Ask Google AI: ${AI_QUERY}`}
      className={cn(
        "group inline-flex shrink-0 flex-row-reverse items-center gap-4 lg:flex-row",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG asset */}
      <img
        src="/gemini-sparkle.svg"
        alt=""
        width={lg ? 30 : 24}
        height={lg ? 30 : 24}
        className={cn("shrink-0", lg ? "size-[30px]" : "size-6")}
      />
      <span
        className={cn(
          "leading-none text-ink transition-colors duration-200 group-hover:text-muted",
          lg ? "text-[28px]" : "text-[20px] leading-[22px]"
        )}
      >
        AI Overview
      </span>
    </a>
  );
}
