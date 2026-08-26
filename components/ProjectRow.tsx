import Link from "next/link";
import type { ProjectSummary } from "@/types";
import { Button } from "./Button";
import { ImageFrame } from "./ImageFrame";

/**
 * Project card — Figma component 31:312.
 * Text column 440px (number 40px Light, title 40/48 SemiBold, View button),
 * 40px gap, image 800×500. Card height driven by the image.
 */
export function ProjectRow({
  project,
  index,
}: {
  project: ProjectSummary;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");
  const href = `/work/${project.slug}`;

  return (
    <article className="group flex flex-col-reverse gap-6 lg:flex-row lg:items-start lg:gap-10">
      <div className="flex flex-col lg:w-[440px] lg:shrink-0">
        <span className="text-[24px] font-light leading-none text-muted lg:text-[40px]">
          {num}.
        </span>
        <h3 className="mt-4 text-[24px] font-semibold leading-[30px] text-ink lg:mt-6 lg:text-[40px] lg:leading-[48px]">
          <Link
            href={href}
            className="transition-colors duration-200 group-hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>
        <div className="mt-5 lg:mt-6">
          <Button variant="stroke" href={href}>
            View
          </Button>
        </div>
      </div>

      <Link
        href={href}
        className="block w-full lg:flex-1"
        aria-label={project.title}
      >
        <ImageFrame
          image={project.thumbnail}
          aspect="800 / 500"
          sizes="(max-width: 1024px) 100vw, 800px"
          hoverZoom
        />
      </Link>
    </article>
  );
}
