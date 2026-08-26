import Image from "next/image";
import type { SiteSettings } from "@/types";

export function LogoCloud({ settings }: { settings: SiteSettings }) {
  if (!settings.logoCloud?.length) return null;
  return (
    <div>
      {/* Label: 18px / 30px Regular, muted, uppercase. */}
      <p className="text-[18px] uppercase leading-[30px] text-muted">
        {settings.logoCloudLabel}
      </p>
      {/* Logos: fixed 48px-height image boxes, dynamic width, 64px apart. */}
      <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 lg:mt-8 lg:gap-x-16 lg:gap-y-5">
        {settings.logoCloud.map((item, i) => (
          <li key={`${item.name}-${i}`} className="flex items-center">
            {item.logo?.src ? (
              <Image
                src={item.logo.src}
                alt={item.logo.alt || item.name}
                width={item.logo.width}
                height={item.logo.height}
                className="h-12 w-auto object-contain"
              />
            ) : (
              <span
                className="block h-12 rounded-[4px] bg-[#ececec]"
                style={{ width: 120 }}
                aria-label={item.name}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
