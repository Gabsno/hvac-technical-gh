import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { QuoteFlow } from "@/components/quote/quote-flow";
import { Section } from "@/components/ui/section";
import { imagery } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "Request a quote",
  description:
    "Five short steps. A written, costed proposal at three price points within five working days.",
};

export default function QuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="Request a quote"
        title="Five short steps. One real proposal."
        lede="No phone call required. We will come and look at the space, calculate the load properly, and send a written proposal at three price points within five working days."
        image={imagery.serviceMaintenance}
      />
      <Section>
        <QuoteFlow />
      </Section>
    </>
  );
}
