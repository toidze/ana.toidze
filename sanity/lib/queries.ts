import { groq } from "next-sanity";

/** Resolve an image field to { src, alt, width, height }. */
const imageFragment = groq`{
  "src": asset->url,
  "alt": coalesce(alt, ""),
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height
}`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  name,
  role,
  "avatar": avatar${imageFragment},
  heroHeading,
  heroIntro,
  logoCloudLabel,
  "logoCloud": logoCloud[]{ name, "logo": logo${imageFragment} },
  "resumeUrl": resume.asset->url,
  "navLinks": navLinks[]{ label, href },
  ctaLabel,
  ctaHref,
  contactHeading,
  contactSubtext,
  email,
  "socials": socials[]{ label, url },
  footerText
}`;

const projectSummaryProjection = groq`{
  _id,
  title,
  "slug": slug.current,
  isNew,
  "thumbnail": thumbnail${imageFragment}
}`;

export const projectsListQuery = groq`*[_type == "project"] | order(order asc, _createdAt desc) ${projectSummaryProjection}`;

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  isNew,
  description,
  tags,
  "heroImage": heroImage${imageFragment},
  "thumbnail": thumbnail${imageFragment},
  "details": details[]{ label, body },
  "tools": tools[]{ name, "icon": icon${imageFragment} },
  "gallery": gallery[]{ "image": image${imageFragment}, caption }
}`;

export const otherProjectsQuery = groq`*[_type == "project" && slug.current != $slug] | order(order asc, _createdAt desc) ${projectSummaryProjection}`;

export const projectSlugsQuery = groq`*[_type == "project" && defined(slug.current)]{ "slug": slug.current }`;
