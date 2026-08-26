export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

/**
 * When no real Sanity project is connected yet, the site renders from bundled
 * placeholder content (see sanity/lib/placeholder.ts). Set the env vars in
 * .env.local to switch every query over to the live Sanity dataset — no code
 * changes required.
 */
export const usePlaceholderData =
  !projectId || projectId === "your-project-id";
