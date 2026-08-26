import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactBlock } from "@/components/ContactBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ImageFrame } from "@/components/ImageFrame";
import { ProjectDetails } from "@/components/ProjectDetails";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectRow } from "@/components/ProjectRow";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import {
  getOtherProjects,
  getProject,
  getProjectSlugs,
  getSiteSettings,
} from "@/sanity/lib/data";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.heroImage?.src ? [project.heroImage.src] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [settings, project, others] = await Promise.all([
    getSiteSettings(),
    getProject(slug),
    getOtherProjects(slug),
  ]);

  if (!project) notFound();

  return (
    <>
      <Header settings={settings} />
      <main className="flex-1">
        <div className="wrap flex flex-col gap-16 pt-12 pb-20 lg:gap-[128px] lg:pt-[88px] lg:pb-[128px]">
          {/* Intro: title + description + tags + hero image — revealed on load. */}
          <div>
            <Reveal load>
              <h1 className="text-[34px] font-semibold leading-[40px] text-ink lg:text-[64px] lg:leading-[76px]">
                {project.title}
              </h1>
              {project.description && (
                <p className="mt-4 text-[18px] leading-[26px] text-muted lg:mt-10 lg:text-[24px] lg:leading-[36px]">
                  {project.description}
                </p>
              )}
              {project.tags?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2 lg:mt-14">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              )}
            </Reveal>

            <Reveal load delay={0.12} className="mt-8 lg:mt-20">
              <ImageFrame
                image={project.heroImage}
                aspect="1280 / 600"
                sizes="1280px"
                priority
              />
            </Reveal>
          </div>

          {/* Detail rows reveal one-by-one (handled inside ProjectDetails). */}
          <ProjectDetails details={project.details} tools={project.tools} />

          <div className="border-t border-line" />

          <section>
            <Reveal>
              <SectionHeading>Project gallery</SectionHeading>
            </Reveal>
            {/* Each gallery image reveals one-by-one (handled inside ProjectGallery). */}
            <div className="mt-12 lg:mt-20">
              <ProjectGallery items={project.gallery} />
            </div>
          </section>

          {others.length > 0 && (
            <>
              <div className="border-t border-line" />
              <section>
                <Reveal>
                  <SectionHeading>Up next</SectionHeading>
                </Reveal>
                <div className="mt-12 flex flex-col gap-12 lg:mt-20 lg:gap-20">
                  {others.map((p, i) => (
                    <Reveal key={p._id}>
                      <ProjectRow project={p} index={i} />
                    </Reveal>
                  ))}
                </div>
              </section>
            </>
          )}

          <div className="border-t border-line" />

          <Reveal>
            <ContactBlock settings={settings} />
          </Reveal>
        </div>
      </main>
      <Footer settings={settings} />
    </>
  );
}
