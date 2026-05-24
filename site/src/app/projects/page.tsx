import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { projects } from "@/lib/projects";
import { imagery } from "@/lib/imagery";

const projectImages: Record<string, string> = {
  "achimota-retail-centre": imagery.projectAchimota,
  "east-legon-villa": imagery.projectVilla,
  "restaurant-chain-greater-accra": imagery.projectRestaurant,
  "private-hospital-theatre-suite": imagery.projectHospital,
  "corporate-hq-ridge": imagery.projectOffice,
  "beverage-plant-tema": imagery.projectPlant,
};

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected HVAC installations across Ghana — retail, residential, hospitality, healthcare, offices and industrial.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected projects"
        title="Recent work across Ghana."
        lede="Six representative installations across retail, residential, hospitality, healthcare, offices and industrial. Each with the full scope and outcome."
        image={imagery.projectAchimota}
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group bg-bg-elevated border border-line rounded-md overflow-hidden card-hover flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-bg-subtle">
                <Image
                  src={projectImages[p.slug] || imagery.projectOffice}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block rounded-sm bg-bg-elevated/95 backdrop-blur px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-ink-soft">
                    {p.industry}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[0.75rem] text-subtle font-mono">{p.location} · {p.year}</p>
                <h3 className="mt-2 font-semibold text-ink text-[1.05rem] leading-snug">{p.title}</h3>
                <p className="mt-2 text-[0.88rem] text-muted leading-relaxed line-clamp-2 flex-1">
                  {p.summary}
                </p>
                <div className="mt-5 pt-4 border-t border-line flex items-center gap-5">
                  {p.stats.slice(0, 2).map((s) => (
                    <div key={s.label}>
                      <p className="font-display text-base text-navy-deep dark:text-white">{s.value}</p>
                      <p className="text-[0.62rem] uppercase tracking-wider text-subtle mt-0.5">{s.label}</p>
                    </div>
                  ))}
                  <ArrowUpRight size={15} className="ml-auto text-subtle group-hover:text-orange transition-all" aria-hidden />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
