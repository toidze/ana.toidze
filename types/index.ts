/** A fully-resolved image ready to render. `null` renders a placeholder surface. */
export type ResolvedImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
} | null;

export type SocialLink = { label: string; url: string };
export type NavLink = { label: string; href: string };
export type LogoCloudItem = { name: string; logo: ResolvedImage };

export type SiteSettings = {
  name: string;
  role: string;
  avatar: ResolvedImage;
  heroHeading: string;
  heroIntro: string;
  logoCloudLabel: string;
  logoCloud: LogoCloudItem[];
  resumeUrl: string | null;
  navLinks: NavLink[];
  ctaLabel: string;
  ctaHref: string;
  contactHeading: string;
  contactSubtext: string;
  email: string;
  socials: SocialLink[];
  footerText: string;
};

export type DetailRow = { label: string; body: string };
export type Tool = { name: string; icon: ResolvedImage };
export type GalleryItem = { image: ResolvedImage; caption?: string };

export type ProjectSummary = {
  _id: string;
  title: string;
  slug: string;
  isNew: boolean;
  thumbnail: ResolvedImage;
};

export type Project = ProjectSummary & {
  description: string;
  tags: string[];
  heroImage: ResolvedImage;
  details: DetailRow[];
  tools: Tool[];
  gallery: GalleryItem[];
};
