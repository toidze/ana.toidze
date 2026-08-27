import Image from "next/image";
import { cn } from "@/lib/cn";
import type { LogoCloudItem, SiteSettings } from "@/types";

function LogoItem({
  item,
  duplicate = false,
}: {
  item: LogoCloudItem;
  duplicate?: boolean;
}) {
  return (
    <li
      aria-hidden={duplicate}
      className={cn(
        "flex shrink-0 items-center",
        // The duplicate copy only exists to make the mobile marquee seamless.
        duplicate && "lg:hidden motion-reduce:hidden"
      )}
    >
      {item.logo?.src ? (
        <Image
          src={item.logo.src}
          alt={duplicate ? "" : item.logo.alt || item.name}
          width={item.logo.width}
          height={item.logo.height}
          className="h-12 w-auto object-contain"
        />
      ) : (
        <span
          className="block h-12 rounded-[4px] bg-[#ececec]"
          style={{ width: 120 }}
          aria-label={duplicate ? undefined : item.name}
        />
      )}
    </li>
  );
}

export function LogoCloud({ settings }: { settings: SiteSettings }) {
  const logos = settings.logoCloud;
  if (!logos?.length) return null;
  return (
    <div>
      {/* Label: 18px / 30px Regular, muted, uppercase. */}
      <p className="text-[18px] uppercase leading-[30px] text-muted">
        {settings.logoCloudLabel}
      </p>
      {/* Mobile: single-row auto-scroll marquee. Desktop (lg): static wrapped row. */}
      <div className="marquee-fade mt-6 overflow-hidden lg:mt-8 lg:overflow-visible motion-reduce:overflow-visible">
        <ul className="flex w-max animate-marquee items-center gap-x-8 lg:w-auto lg:animate-none lg:flex-wrap lg:gap-x-16 lg:gap-y-5 motion-reduce:w-auto motion-reduce:animate-none motion-reduce:flex-wrap">
          {logos.map((item, i) => (
            <LogoItem key={`a-${item.name}-${i}`} item={item} />
          ))}
          {logos.map((item, i) => (
            <LogoItem key={`b-${item.name}-${i}`} item={item} duplicate />
          ))}
        </ul>
      </div>
    </div>
  );
}
