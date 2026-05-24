import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section } from "../ui/section";
import { services } from "@/lib/services";
import { imagery } from "@/lib/imagery";

const serviceImages: Record<string, string> = {
  "air-conditioning-installation": imagery.serviceInstall,
  "maintenance-servicing": imagery.serviceMaintenance,
  "design-consulting": imagery.serviceDesign,
  "vrf-systems": imagery.serviceVrf,
  "chillers": imagery.serviceChiller,
  "cold-rooms-refrigeration": imagery.serviceColdRoom,
  "ventilation-extraction": imagery.serviceVentilation,
  "emergency-repairs": imagery.serviceEmergency,
};

export function ServicesGrid() {
  return (
    <Section
      eyebrow="Capabilities"
      title="End-to-end mechanical contracting."
      lede="From a single-room split installation to a 200kW process chiller. Eight service lines under one engineering team."
      tone="subtle"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group bg-bg-elevated border border-line rounded-md overflow-hidden card-hover flex flex-col"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-bg-subtle">
              <Image
                src={serviceImages[s.slug] || imagery.serviceInstall}
                alt={s.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-darker/40 to-transparent" aria-hidden />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-[1.02rem] font-semibold text-ink leading-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-[0.85rem] text-muted leading-relaxed line-clamp-3 flex-1">
                {s.short}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-orange">
                Learn more
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
