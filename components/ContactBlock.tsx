import type { SiteSettings } from "@/types";
import { AIOverviewButton } from "./AIOverviewButton";
import { Button } from "./Button";
import { CopyEmail } from "./CopyEmail";

/**
 * Contact block — Figma component 31:333.
 * "Seem interested?" 64/76 SemiBold + "Let's chat" 64/76 Light (32px apart),
 * then a 54px menu row 64px below: button + email + socials, all 40px apart.
 * No outer container — the page provides the `.wrap`.
 */
export function ContactBlock({ settings }: { settings: SiteSettings }) {
  const linkClass =
    "text-[20px] leading-[22px] text-ink transition-colors duration-200 hover:text-accent";
  return (
    <section id="contact" className="scroll-mt-8 lg:scroll-mt-16">
      <div>
        <h2 className="text-[34px] font-semibold leading-[40px] text-ink lg:text-[64px] lg:leading-[76px]">
          {settings.contactHeading}
        </h2>
        <p className="mt-3 text-[34px] font-light leading-[40px] text-muted lg:mt-8 lg:text-[64px] lg:leading-[76px]">
          {settings.contactSubtext}
        </p>
      </div>
      {/* Mobile: stacked vertically, left-aligned (24px between items, 32px after
          the button). Desktop: single wrapping row. */}
      <div className="mt-8 flex flex-col items-start gap-6 lg:mt-16 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-10 lg:gap-y-4">
        <Button
          variant="solid"
          href={`mailto:${settings.email}`}
          className="mb-2 lg:mb-0"
        >
          {settings.ctaLabel}
        </Button>
        <CopyEmail email={settings.email} className={linkClass} />
        {settings.socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            {s.label}
          </a>
        ))}
        <AIOverviewButton />
      </div>
    </section>
  );
}
