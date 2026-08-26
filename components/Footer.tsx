import type { SiteSettings } from "@/types";

export function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="w-full border-t border-line bg-paper">
      {/* 70px tall: text 20px muted at 25px top. */}
      <div className="wrap pt-[25px] pb-6">
        <p className="text-[20px] leading-none text-muted">
          {settings.footerText}
        </p>
      </div>
    </footer>
  );
}
