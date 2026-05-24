import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { brands } from "@/lib/brands";
import { imagery } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "Brands we install",
  description:
    "Daikin, Mitsubishi Electric, LG, Samsung, Carrier, York, Midea, Gree — the eight manufacturers we install and service across Ghana.",
};

export default function BrandsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Authorised partnerships"
        title="Eight manufacturers. One honest recommendation."
        lede="We don't push a single brand. We work with eight, and we recommend the one that fits the spec, the budget and the spares chain — not the one that pays the highest commission."
        image={imagery.serviceVrf}
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {brands.map((b, idx) => (
            <article
              key={b.name}
              className="bg-bg-elevated border border-line rounded-md p-7 grid grid-cols-[60px_1fr] gap-5 items-start"
            >
              <span className="font-mono text-[0.78rem] text-orange pt-1.5">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 className="font-display text-2xl text-ink">{b.name}</h3>
                  <span className="text-[0.7rem] uppercase tracking-[0.18em] text-subtle">{b.origin}</span>
                </div>
                <p className="text-[0.95rem] text-muted leading-relaxed">{b.note}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {b.category.map((c) => (
                    <span key={c} className="rounded-sm border border-line px-2.5 py-1 text-[0.68rem] uppercase tracking-wider text-muted">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBanner
        eyebrow="Not sure which brand"
        title="We will write you a brand recommendation."
        body="Tell us about the space, the budget and how critical uptime is. You'll get a recommendation with the trade-offs spelled out — no commission, no kickbacks."
      />
    </>
  );
}
