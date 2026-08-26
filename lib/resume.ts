import type { SiteSettings } from "@/types";

/**
 * Build the résumé download URL. Sanity's `?dl=` query param sets
 * Content-Disposition: attachment, forcing a download (cross-origin `download`
 * attributes are otherwise ignored). Returns "" when no résumé is uploaded.
 */
export function resumeHref(settings: SiteSettings): string {
  if (!settings.resumeUrl) return "";
  const name = (settings.name || "resume").trim().replace(/\s+/g, "-");
  return `${settings.resumeUrl}?dl=${encodeURIComponent(`${name}-Resume.pdf`)}`;
}
