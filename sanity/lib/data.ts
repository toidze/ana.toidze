import "server-only";
import type { Project, ProjectSummary, SiteSettings } from "@/types";
import { usePlaceholderData } from "../env";
import { client } from "./client";
import {
  placeholderProjectSummaries,
  placeholderProjects,
  placeholderSiteSettings,
} from "./placeholder";
import {
  otherProjectsQuery,
  projectBySlugQuery,
  projectSlugsQuery,
  projectsListQuery,
  siteSettingsQuery,
} from "./queries";

/** Cache tags, invalidated on publish by /api/revalidate (see the webhook). */
export const TAGS = { settings: "siteSettings", project: "project" } as const;

function fetchSanity<T>(
  query: string,
  params: Record<string, unknown>,
  tags: string[]
): Promise<T> {
  return client.fetch<T>(query, params, { next: { tags } });
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (usePlaceholderData) return placeholderSiteSettings;
  const data = await fetchSanity<SiteSettings | null>(
    siteSettingsQuery,
    {},
    [TAGS.settings]
  );
  return data ?? placeholderSiteSettings;
}

export async function getProjects(): Promise<ProjectSummary[]> {
  if (usePlaceholderData) return placeholderProjectSummaries;
  const data = await fetchSanity<ProjectSummary[]>(projectsListQuery, {}, [
    TAGS.project,
  ]);
  return data?.length ? data : placeholderProjectSummaries;
}

export async function getProject(slug: string): Promise<Project | null> {
  if (usePlaceholderData) {
    return placeholderProjects.find((p) => p.slug === slug) ?? null;
  }
  return fetchSanity<Project | null>(projectBySlugQuery, { slug }, [
    TAGS.project,
  ]);
}

export async function getOtherProjects(slug: string): Promise<ProjectSummary[]> {
  if (usePlaceholderData) {
    return placeholderProjectSummaries.filter((p) => p.slug !== slug);
  }
  return fetchSanity<ProjectSummary[]>(otherProjectsQuery, { slug }, [
    TAGS.project,
  ]);
}

export async function getProjectSlugs(): Promise<string[]> {
  if (usePlaceholderData) return placeholderProjects.map((p) => p.slug);
  const rows = await fetchSanity<{ slug: string }[]>(
    projectSlugsQuery,
    {},
    [TAGS.project]
  );
  return rows.map((r) => r.slug);
}
