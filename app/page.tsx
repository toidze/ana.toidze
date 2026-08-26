import { ContactBlock } from "@/components/ContactBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectRow } from "@/components/ProjectRow";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { getProjects, getSiteSettings } from "@/sanity/lib/data";

export default async function HomePage() {
  const [settings, projects] = await Promise.all([
    getSiteSettings(),
    getProjects(),
  ]);

  return (
    <>
      <Header settings={settings} />
      <main className="flex-1">
        {/* Page content: 1280 column, 128px vertical rhythm between sections. */}
        <div className="wrap flex flex-col gap-16 pt-16 pb-20 lg:gap-[128px] lg:pt-[128px] lg:pb-[128px]">
          <Hero settings={settings} />

          <div className="border-t border-line" />

          <section id="projects">
            <Reveal>
              <SectionHeading>My projects</SectionHeading>
            </Reveal>
            <div className="mt-12 flex flex-col gap-12 lg:mt-20 lg:gap-20">
              {projects.map((project, i) => (
                <Reveal key={project._id}>
                  <ProjectRow project={project} index={i} />
                </Reveal>
              ))}
            </div>
          </section>

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
