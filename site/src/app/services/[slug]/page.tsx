import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { services, getService } from "@/lib/services";
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

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return { title: s.title, description: s.short };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const idx = services.findIndex((s) => s.slug === service.slug);

  return (
    <>
      <PageHeader
        eyebrow={`Service · ${String(idx + 1).padStart(2, "0")} / ${services.length}`}
        title={service.title}
        lede={service.short}
        image={serviceImages[service.slug]}
      />

      <Section eyebrow="What we do" title="The work, in detail.">
        <div className="max-w-3xl">
          <p className="text-xl text-ink leading-snug font-semibold mb-6">{service.intro}</p>
          <p className="text-[1.02rem] text-muted leading-relaxed">{service.whatItIs}</p>
        </div>
      </Section>

      <Section tone="subtle" eyebrow="Process" title="Five steps. No surprises.">
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line border border-line rounded-md overflow-hidden">
          {service.process.map((p) => (
            <li key={p.step} className="bg-bg-elevated p-6 flex flex-col">
              <span className="font-mono text-[0.78rem] text-orange">{p.step}</span>
              <p className="mt-3 text-[0.9rem] text-ink-soft leading-relaxed">{p.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Best applied to" title="Where this service makes sense.">
        <ul className="flex flex-wrap gap-2.5">
          {service.bestFor.map((b) => (
            <li
              key={b}
              className="inline-flex items-center gap-2 rounded-sm border border-line bg-bg-elevated px-4 py-2 text-[0.88rem] text-ink-soft"
            >
              <CheckCircle2 size={13} className="text-orange" aria-hidden /> {b}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="FAQs" title="Common questions.">
        <div className="divide-y divide-line max-w-3xl border-y border-line">
          {service.faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6 font-semibold text-[1.02rem] text-ink">
                {f.q}
                <span className="text-orange text-2xl font-light transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-muted leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section eyebrow="See also" title="Related services.">
        <div className="grid gap-5 sm:grid-cols-3">
          {service.related.map((slug) => {
            const r = getService(slug);
            if (!r) return null;
            return (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="group bg-bg-elevated border border-line rounded-md p-6 card-hover block"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-orange mb-3">Service</p>
                <h3 className="font-semibold text-ink text-lg group-hover:text-navy transition-colors">{r.title}</h3>
                <p className="mt-2 text-[0.88rem] text-muted leading-relaxed line-clamp-2">{r.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[0.78rem] font-semibold text-orange">Read <ArrowRight size={12} aria-hidden /></span>
              </Link>
            );
          })}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Button href="/quote">Request a quote for this service</Button>
          <Button href="/services" variant="ghost">All services</Button>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
