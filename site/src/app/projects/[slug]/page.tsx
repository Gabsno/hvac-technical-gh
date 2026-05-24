import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { projects, getProject } from "@/lib/projects";
import { imagery } from "@/lib/imagery";

const projectImages: Record<string, string> = {
  "achimota-retail-centre": imagery.projectAchimota,
  "east-legon-villa": imagery.projectVilla,
  "restaurant-chain-greater-accra": imagery.projectRestaurant,
  "private-hospital-theatre-suite": imagery.projectHospital,
  "corporate-hq-ridge": imagery.projectOffice,
  "beverage-plant-tema": imagery.projectPlant,
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: p.title, description: p.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`Case study · ${project.industry}`}
        title={project.title}
        lede={project.summary}
        image={projectImages[project.slug]}
      />

      <Section>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line rounded-md overflow-hidden mb-14">
          {project.stats.map((s) => (
            <div key={s.label} className="bg-bg-elevated p-6">
              <p className="font-display text-[2rem] leading-none text-navy-deep dark:text-white">{s.value}</p>
              <p className="text-[0.72rem] uppercase tracking-[0.14em] text-muted mt-2">{s.label}</p>
            </div>
          ))}
          <div className="bg-bg-elevated p-6">
            <p className="font-display text-[2rem] leading-none text-navy-deep dark:text-white">{project.year}</p>
            <p className="text-[0.72rem] uppercase tracking-[0.14em] text-muted mt-2">Year</p>
          </div>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl">
          <div>
            <p className="eyebrow mb-3">The challenge</p>
            <p className="text-ink leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <p className="eyebrow mb-3">Our approach</p>
            <p className="text-ink leading-relaxed">{project.approach}</p>
          </div>
        </div>
      </Section>

      <Section tone="subtle" eyebrow="Outcome" title={project.outcome}>
        <div className="flex flex-wrap gap-2.5">
          {project.systems.map((s) => (
            <span
              key={s}
              className="rounded-sm border border-line bg-bg-elevated px-4 py-2 text-[0.88rem] text-ink-soft"
            >
              {s}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <dl className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl border-t border-line pt-12">
          <div>
            <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-subtle mb-2">Client</dt>
            <dd className="font-semibold text-ink">{project.client}</dd>
          </div>
          <div>
            <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-subtle mb-2">Location</dt>
            <dd className="font-semibold text-ink">{project.location}</dd>
          </div>
          <div>
            <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-subtle mb-2">Year</dt>
            <dd className="font-semibold text-ink">{project.year}</dd>
          </div>
          <div>
            <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-subtle mb-2">Scope</dt>
            <dd className="font-semibold text-ink">{project.scope}</dd>
          </div>
        </dl>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Button href={`/industries/${project.industrySlug}`}>
            See HVAC for {project.industry}
          </Button>
          <Link href="/projects" className="text-[0.88rem] text-muted hover:text-orange">
            ← All projects
          </Link>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
