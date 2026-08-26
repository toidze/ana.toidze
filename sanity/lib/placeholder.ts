import type { Project, ProjectSummary, SiteSettings } from "@/types";

/** Clean light-gray placeholder surface at an exact size (mirrors Figma's empty frames). */
const ph = (w: number, h: number, alt = "") => ({
  src: `https://placehold.co/${w}x${h}/e8e8e8/e8e8e8.png`,
  alt,
  width: w,
  height: h,
});

export const placeholderSiteSettings: SiteSettings = {
  name: "Ana",
  role: "Product Designer",
  avatar: null,
  heroHeading: "Hi I’m Ana 👋",
  heroIntro:
    "Digital product designer with 8+ years of experience in complex Saas products",
  logoCloudLabel: "Companies I’ve worked with",
  logoCloud: [
    { name: "Toptal", logo: ph(132, 48) },
    { name: "Signify", logo: ph(112, 48) },
    { name: "UBS", logo: ph(84, 48) },
    { name: "Meta", logo: ph(120, 48) },
    { name: "netguru", logo: ph(140, 48) },
  ],
  resumeUrl: null,
  ctaLabel: "Contact",
  ctaHref: "#contact",
  contactHeading: "Seem interested?",
  contactSubtext: "Let’s chat",
  email: "a.toidze@gmail.com",
  socials: [
    { label: "Linkedin", url: "#" },
    { label: "Instagram", url: "#" },
    { label: "Dribbble", url: "#" },
  ],
  footerText: "All right reserved 2026 ©",
};

const projectDetails = [
  {
    label: "Project context",
    body: "Have you ever opened a multi-page contract and scrolled endlessly just to find one tiny detail? When does it expire? What exactly are your obligations? What does this complex legal clause even mean? Tired of hunting for answers inside your own documents? Same here. That’s why with Signify 2.1, we are introducing an AI Chat that lives right inside your document to answer any question in seconds.",
  },
  {
    label: "My role",
    body: "I was responsible for full product experience from start to finish as a senior product designer.",
  },
  {
    label: "Problem",
    body: "Primary problem was that contractors don’t read documents.",
  },
  {
    label: "Solution",
    body: "We created comprehensive AI chat.",
  },
];

const tools = [
  { name: "Figma", icon: null },
  { name: "Signify", icon: null },
];

const gallery = [
  { image: ph(1280, 680), caption: "Image title" },
  { image: ph(1120, 620), caption: "Image title" },
  { image: ph(1280, 680), caption: "Image title" },
  { image: ph(1120, 620), caption: "Image title" },
];

export const placeholderProjects: Project[] = [
  {
    _id: "project-1",
    title: "Signify / Digital contracting reimagined",
    slug: "signify-digital-contracting-reimagined",
    isNew: true,
    description: "Random short but catchy description of the project",
    tags: ["Product Design", "UX Research", "CLM", "Digital Contracting"],
    thumbnail: ph(640, 400),
    heroImage: ph(1280, 620),
    details: projectDetails,
    tools,
    gallery,
  },
  {
    _id: "project-2",
    title: "Signify / Document management platform",
    slug: "signify-document-management-platform",
    isNew: false,
    description: "Random short but catchy description of the project",
    tags: ["Product Design", "Design System"],
    thumbnail: ph(640, 400),
    heroImage: ph(1280, 620),
    details: projectDetails,
    tools,
    gallery,
  },
  {
    _id: "project-3",
    title: "Signify / Growth website",
    slug: "signify-growth-website",
    isNew: false,
    description: "Random short but catchy description of the project",
    tags: ["Web Design", "Marketing"],
    thumbnail: ph(640, 400),
    heroImage: ph(1280, 620),
    details: projectDetails,
    tools,
    gallery,
  },
];

export const placeholderProjectSummaries: ProjectSummary[] =
  placeholderProjects.map(({ _id, title, slug, isNew, thumbnail }) => ({
    _id,
    title,
    slug,
    isNew,
    thumbnail,
  }));
