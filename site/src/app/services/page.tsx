import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { imagery } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "Services",
  description:
    "HVAC services in Ghana: installation, maintenance, design, VRF, chillers, cold rooms, ventilation, emergency repairs.",
};

export default function ServicesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="The full HVAC stack, under one engineering team."
        lede="Eight service lines, from a single-room split installation to a 200kW process chiller. Design, supply, install, commission, maintain."
        image={imagery.serviceVrf}
      />
      <ServicesGrid />
      <CtaBanner />
    </>
  );
}
