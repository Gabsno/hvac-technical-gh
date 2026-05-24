import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section } from "../ui/section";
import { industries } from "@/lib/industries";
import { imagery } from "@/lib/imagery";

const industryImages: Record<string, string> = {
  "residential": imagery.industryResidential,
  "hospitality-restaurants": imagery.industryHospitality,
  "retail-shopping-malls": imagery.industryRetail,
  "healthcare": imagery.industryHealthcare,
  "offices-commercial": imagery.industryOffices,
  "manufacturing-industrial": imagery.industryIndustrial,
};

export function IndustriesGrid() {
  return (
    <Section
      eyebrow="Industries we serve"
      title="Six sectors. One engineering bench."
      lede="Each sector has its own conventions, regulatory environment and failure modes. We work across all of them."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {industries.map((i) => (
          <Link
            key={i.slug}
            href={`/industries/${i.slug}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-md border border-line"
          >
            <Image
              src={industryImages[i.slug] || imagery.industryOffices}
              alt={i.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(8,24,43,0.15) 0%, rgba(8,24,43,0.45) 55%, rgba(8,24,43,0.92) 100%)",
              }}
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-orange-soft mb-2">
                {String(industries.indexOf(i) + 1).padStart(2, "0")} · Industry
              </p>
              <h3 className="font-display text-2xl leading-tight">{i.title}</h3>
              <p className="mt-2 text-[0.85rem] text-white/80 leading-relaxed line-clamp-2 max-w-sm">
                {i.short}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-orange">
                Explore
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
