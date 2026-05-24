import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { imagery } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes from a Ghanaian HVAC engineering team — sizing, refrigerants, controls, and the lessons from Accra rooftops.",
};

const stubs = [
  { tag: "Sizing", title: "Why floor area is a poor proxy for AC capacity", date: "Coming soon" },
  { tag: "Refrigerants", title: "R32 in Ghana: what installers actually need to know", date: "Coming soon" },
  { tag: "Maintenance", title: "The five-minute service check that catches 80% of problems", date: "Coming soon" },
  { tag: "VRF", title: "Daikin VRV-X vs Mitsubishi City Multi: a sober comparison", date: "Coming soon" },
  { tag: "Chillers", title: "Air-cooled vs water-cooled in the Ghanaian climate", date: "Coming soon" },
  { tag: "Controls", title: "BMS integration without losing your sanity", date: "Coming soon" },
];

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Field notes from Accra rooftops."
        lede="Plain-language pieces on what fails, why, and how to design around it. New articles every fortnight."
        image={imagery.workInProgress}
      />
      <Section>
        <div className="grid gap-px bg-line border border-line rounded-md overflow-hidden">
          {stubs.map((s, idx) => (
            <article
              key={s.title}
              className="bg-bg-elevated p-7 grid sm:grid-cols-[80px_1fr_auto] gap-4 sm:gap-8 items-start"
            >
              <span className="font-mono text-[0.78rem] text-orange pt-1">{String(idx + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-orange mb-2">{s.tag}</p>
                <h3 className="font-semibold text-ink text-lg leading-snug">{s.title}</h3>
              </div>
              <span className="font-mono text-[0.76rem] text-subtle sm:self-center">{s.date}</span>
            </article>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
