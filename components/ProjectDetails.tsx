import Image from "next/image";
import type { DetailRow, Tool } from "@/types";
import { Reveal } from "./Reveal";

/** Left column: number + label (24px 24px apart). Desktop: 40px, 24px apart. */
function TitleColumn({ n, label }: { n: number; label: string }) {
  return (
    <div className="lg:flex-1">
      <span className="block text-[24px] font-light leading-none text-muted lg:text-[40px] lg:leading-[48px]">
        {String(n).padStart(2, "0")}.
      </span>
      <h3 className="mt-3 text-[24px] font-semibold leading-[30px] text-ink lg:mt-6 lg:text-[40px] lg:leading-[48px]">
        {label}
      </h3>
    </div>
  );
}

function ToolIcon({ tool }: { tool: Tool }) {
  if (tool.icon?.src) {
    return (
      <Image
        src={tool.icon.src}
        alt={tool.icon.alt || tool.name}
        width={64}
        height={64}
        className="size-16 rounded-full object-cover"
      />
    );
  }
  // Empty placeholder until a logo is uploaded in the CMS.
  return (
    <span
      className="block size-16 rounded-full bg-[#ececec]"
      aria-label={tool.name}
    />
  );
}

export function ProjectDetails({
  details,
  tools,
}: {
  details: DetailRow[];
  tools: Tool[];
}) {
  const hasTools = tools?.length > 0;
  return (
    <div className="flex flex-col gap-10 lg:gap-16">
      {details.map((row, i) => (
        <Reveal key={row.label}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-10">
            <TitleColumn n={i + 1} label={row.label} />
            {/* Desktop: body offset to align with the label; mobile: stacked. */}
            <p className="text-[16px] leading-[26px] text-ink lg:flex-1 lg:pt-[72px] lg:text-[18px] lg:leading-[30px]">
              {row.body}
            </p>
          </div>
        </Reveal>
      ))}

      {hasTools && (
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-10">
            <TitleColumn n={details.length + 1} label="Tools used" />
            <div className="lg:flex-1 lg:pt-[58px]">
              <div className="flex items-center gap-4">
                {tools.map((tool) => (
                  <ToolIcon key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      )}
    </div>
  );
}
