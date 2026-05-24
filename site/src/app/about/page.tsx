import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { StatsStrip } from "@/components/sections/stats-strip";
import { Container } from "@/components/ui/container";
import { imagery } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "About",
  description:
    "HVAC Technical — an indigenous Ghanaian mechanical contracting firm with a decade of HVAC delivery across Accra.",
};

const values = [
  { num: "01", title: "Sizing.", body: "Every install begins with a heat-load calculation. Floor-area shortcuts are how callbacks start." },
  { num: "02", title: "Pipework.", body: "Brazed joints, pressure-tested, vacuum-evacuated. The 90% no client sees is the part that matters most." },
  { num: "03", title: "Records.", body: "Commissioning sheets, service logs, photographs. If we did it, we can prove it." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About HVAC Technical"
        title="Engineering-led. Indigenous Ghanaian."
        lede="Founded in 2015 in Accra. A decade of mechanical contracting and HVAC delivery across restaurants, hospitals, offices, factories and homes."
        image={imagery.team}
      />

      <StatsStrip />

      <Section eyebrow="Why we exist" title="HVAC failures are predictable. We engineer around them.">
        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl">
          <div className="space-y-5 text-[1.02rem] text-muted leading-relaxed">
            <p>
              Three things break HVAC systems in Ghana — undersized equipment, sloppy refrigerant pipework, and the absence of a service regime. Every callout we attend traces back to one of them.
            </p>
            <p>
              HVAC Technical was founded to fix the underlying engineering, not the symptoms. Every install starts with a heat-load calculation. Every system gets a commissioning sheet. Every service visit produces a written report.
            </p>
            <p>
              Boring, methodical, documented — and the reason our installations are still running a decade after handover.
            </p>
          </div>
          <div className="space-y-5 text-[1.02rem] text-muted leading-relaxed">
            <p>
              We work across the full HVAC stack — single-room splits, multi-split, VRF, chillers, refrigeration, ventilation — and across eight authorised manufacturers. The brand we specify is the one that fits the spec, not the one we happen to stock.
            </p>
            <p>
              We are indigenous Ghanaian, based at McCarthy-Hill in Accra. Ghanaian-trained engineers, local spares chain, and response times that reflect both.
            </p>
            <p className="font-display text-2xl text-ink leading-snug not-italic">
              &ldquo;If we wouldn&apos;t install it in our own home, we won&apos;t install it in yours.&rdquo;
            </p>
          </div>
        </div>
      </Section>

      <Section tone="subtle" eyebrow="What we won't compromise on" title="Three operating principles.">
        <div className="grid sm:grid-cols-3 gap-5">
          {values.map((v) => (
            <div key={v.num} className="bg-bg-elevated border border-line rounded-md p-7">
              <span className="font-mono text-[0.78rem] text-orange">{v.num}</span>
              <h3 className="mt-4 font-display text-xl text-ink">{v.title}</h3>
              <p className="mt-3 text-[0.92rem] text-muted leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="On the rooftops" title="Operating across Greater Accra and Tema.">
        <div className="relative aspect-[16/9] rounded-md overflow-hidden border border-line">
          <Image
            src={imagery.workInProgress}
            alt="HVAC Technical engineers on site in Accra"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <Container className="mt-10 max-w-3xl px-0">
          <p className="text-[1.02rem] text-muted leading-relaxed">
            Our service area is Greater Accra and Tema, with project work undertaken in Kumasi, Takoradi and across Ghana on request. McCarthy-Hill base, two field teams, three vehicles. The team that quotes is the team that installs.
          </p>
        </Container>
      </Section>

      <CtaBanner
        eyebrow="Work with us"
        title="A project worth getting engineered."
        body="A site assessment, a real heat-load calculation, and a written proposal — at no cost."
      />
    </>
  );
}
