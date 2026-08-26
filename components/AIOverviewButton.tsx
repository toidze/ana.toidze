import { cn } from "@/lib/cn";

/** The question the AI Overview answers about Ana. */
const AI_QUERY = "who is ana toidze, a product designer from tbilisi?";

/** Google AI Mode (udm=50) opens a full AI answer for the query. */
const AI_OVERVIEW_URL = `https://www.google.com/search?udm=50&q=${encodeURIComponent(
  AI_QUERY
)}`;

export function AIOverviewButton({ className }: { className?: string }) {
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
        width={24}
        height={24}
        className="size-6 shrink-0"
      />
      <span className="text-[20px] leading-[22px] text-ink transition-colors duration-200 group-hover:text-muted">
        AI Overview
      </span>
    </a>
  );
}
