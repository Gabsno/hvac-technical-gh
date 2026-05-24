import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { imagery } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "HVAC for residential, hospitality, retail, healthcare, offices and industrial sectors across Ghana.",
};

export default function IndustriesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Six sectors, different rules — one engineering bench."
        lede="From a 5-bedroom villa to a 200kW process chiller. Each industry has its own regulations, failure modes and conventions. We've worked across all of them."
        image={imagery.industryIndustrial}
      />
      <IndustriesGrid />
      <CtaBanner />
    </>
  );
}
