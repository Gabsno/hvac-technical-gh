import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Section } from "../ui/section";
import { featuredProjects } from "@/lib/projects";
import { imagery } from "@/lib/imagery";

const projectImages: Record<string, string> = {
  "achimota-retail-centre": imagery.projectAchimota,
  "east-legon-villa": imagery.projectVilla,
  "restaurant-chain-greater-accra": imagery.projectRestaurant,
  "private-hospital-theatre-suite": imagery.projectHospital,
  "corporate-hq-ridge": imagery.projectOffice,
  "beverage-plant-tema": imagery.projectPlant,
};

export function ProjectWall() {
  return (
    <Section
      eyebrow="Selected projects"
      title="Recent work across Ghana."
      lede="Six representative installations — from a 5-bedroom villa to a 200kW process chiller swap."
    >
      <div className="grid lg:grid-cols-3 gap-5">
        {featuredProjects.map((p) => (
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
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 rounded-sm bg-bg-elevated/95 backdrop-blur px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-ink-soft">
                  {p.industry}
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-[0.75rem] text-subtle font-mono">
                {p.location} · {p.year}
              </p>
              <h3 className="mt-2 text-[1.08rem] font-semibold text-ink leading-snug">
                {p.title}
              </h3>
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
                <ArrowUpRight size={15} className="ml-auto text-subtle group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[0.92rem] font-semibold text-navy hover:text-orange transition-colors"
        >
          See all projects
          <ArrowRight size={15} aria-hidden />
        </Link>
      </div>
    </Section>
  );
}
