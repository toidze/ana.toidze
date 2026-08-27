import { NAV_LINKS } from "@/lib/nav";
import { resumeHref } from "@/lib/resume";
import type { SiteSettings } from "@/types";
import { AIOverviewButton } from "./AIOverviewButton";
import { ScrollLink } from "./ScrollLink";
import { Button } from "./Button";
import { MobileMenu } from "./MobileMenu";
import { Reveal } from "./Reveal";

export function Header({ settings }: { settings: SiteSettings }) {
  return (
    <header className="w-full border-b border-line bg-paper">
      <nav className="wrap">
        <Reveal
          load
          y={0}
          duration={0.5}
          className="flex items-center gap-10 py-3 lg:pt-[17px] lg:pb-[18px]"
        >
          {/* Desktop nav */}
          <div className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <ScrollLink
                key={link.label}
                href={link.href}
                className="text-[20px] leading-[22px] text-ink transition-colors duration-200 hover:text-muted"
              >
                {link.label}
              </ScrollLink>
            ))}
            {settings.resumeUrl && (
              <a
                href={resumeHref(settings)}
                download
                className="text-[20px] leading-[22px] text-ink transition-colors duration-200 hover:text-muted"
              >
                Resume
              </a>
            )}
            <AIOverviewButton />
            <Button variant="solid" href={`mailto:${settings.email}`}>
              {settings.ctaLabel}
            </Button>
          </div>

          {/* Mobile burger — left-aligned */}
          <div className="lg:hidden">
            <MobileMenu settings={settings} />
          </div>
        </Reveal>
      </nav>
    </header>
  );
}
