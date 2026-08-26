import Image from "next/image";
import type { SiteSettings } from "@/types";
import { LogoCloud } from "./LogoCloud";
import { Reveal } from "./Reveal";

export function Hero({ settings }: { settings: SiteSettings }) {
  return (
    <section>
      {/* Avatar: outlined circle, left-aligned to the copy (Figma "Me" 19:171). */}
      <Reveal load>
        <div className="size-24 overflow-hidden rounded-full border border-gray-20 bg-[#ececec] lg:size-32">
          {settings.avatar?.src && (
            <Image
              src={settings.avatar.src}
              alt={settings.avatar.alt || settings.name}
              width={128}
              height={128}
              className="size-full object-cover"
              priority
            />
          )}
        </div>
      </Reveal>

      {/* Copy — 64px lines, 32px between; 64px below the avatar (desktop). */}
      <Reveal load delay={0.08} className="mt-8 lg:mt-16">
        <h1 className="text-[34px] font-semibold leading-[40px] text-ink lg:text-[64px] lg:leading-[76px]">
          {settings.heroHeading}
        </h1>
        <p className="mt-4 text-[34px] font-light leading-[40px] text-muted lg:mt-8 lg:text-[64px] lg:leading-[76px]">
          {settings.heroIntro}
        </p>
      </Reveal>

      {/* Social proof */}
      <Reveal load delay={0.16} className="mt-10 lg:mt-16">
        <LogoCloud settings={settings} />
      </Reveal>
    </section>
  );
}
