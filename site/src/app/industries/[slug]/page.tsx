import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { industries, getIndustry } from "@/lib/industries";
import { imagery } from "@/lib/imagery";

const industryImages: Record<string, string> = {
  "residential": imagery.industryResidential,
  "hospitality-restaurants": imagery.industryHospitality,
  "retail-shopping-malls": imagery.industryRetail,
  "healthcare": imagery.industryHealthcare,
  "offices-commercial": imagery.industryOffices,
  "manufacturing-industrial": imagery.industryIndustrial,
};

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) return {};
  return { title: `HVAC for ${i.title}`, description: i.short };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`Industry · ${industry.title}`}
        title={industry.short}
        lede={industry.intro}
        image={industryImages[industry.slug]}
      />

      <Section eyebrow="The challenge" title="What the sector struggles with.">
        <ul className="grid gap-3 max-w-3xl">
          {industry.challenges.map((c, idx) => (
            <li
              key={c}
              className="flex items-start gap-4 rounded-md border border-line bg-bg-elevated p-5"
            >
              <span className="font-mono text-[0.78rem] text-orange pt-1">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="text-ink-soft">{c}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="subtle" eyebrow="Our approach" title="How we engineer for it.">
        <div className="grid sm:grid-cols-3 gap-5">
          {industry.approach.map((a) => (
            <article key={a.title} className="bg-bg-elevated border border-line rounded-md p-6">
              <h3 className="font-semibold text-ink text-lg">{a.title}</h3>
              <p className="mt-3 text-[0.92rem] text-muted leading-relaxed">{a.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Equipment typically specified" title="Systems we deploy.">
        <div className="flex flex-wrap gap-2.5 max-w-3xl">
          {industry.systems.map((s) => (
            <span
              key={s}
              className="rounded-sm border border-line bg-bg-elevated px-4 py-2 text-[0.88rem] text-ink-soft"
            >
              {s}
            </span>
          ))}
        </div>
      </Section>

      {industry.caseStudy && (
        <Section eyebrow="Case in point" title="A representative project.">
          <div className="rounded-md bg-navy-darker text-white p-10 sm:p-12 max-w-3xl">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-orange mb-3">Project</p>
            <h3 className="font-display text-2xl leading-snug mb-4">{industry.caseStudy.project}</h3>
            <p className="text-white/80 leading-relaxed mb-8">{industry.caseStudy.outcome}</p>
            <Button href="/projects">See more projects</Button>
          </div>
        </Section>
      )}

      <Section>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-12 border-t border-line">
          <p className="font-display text-2xl text-ink">A project in this sector?</p>
          <Button href="/quote">Request a site assessment</Button>
        </div>
        <div className="mt-10">
          <Link href="/industries" className="text-[0.88rem] text-muted hover:text-orange transition-colors">
            ← All industries
          </Link>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
