import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { imagery } from "@/lib/imagery";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach HVAC Technical by phone, WhatsApp, email or in person at McCarthy-Hill, Accra.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        lede="Phone, WhatsApp, email, or visit us at McCarthy-Hill. An engineer answers."
        image={imagery.heroBuilding}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            <ContactCard icon={Phone} label="Phone" lines={site.phones} hrefs={site.phones.map(p => `tel:${p}`)} />
            <ContactCard icon={MessageCircle} label="WhatsApp" lines={["Send us a message directly"]} hrefs={[site.whatsappLink]} external />
            <ContactCard icon={Mail} label="Email" lines={[site.email]} hrefs={[`mailto:${site.email}`]} />
            <ContactCard icon={MapPin} label="Office" lines={[`${site.address.line1}, ${site.address.line2}`, `${site.address.city}, ${site.address.country}`]} />
            <ContactCard icon={Clock} label="Hours" lines={[site.hours]} />
          </div>

          <div className="rounded-md border border-line bg-bg-elevated p-8 sm:p-10">
            <p className="eyebrow mb-3">Quick message</p>
            <h2 className="font-display text-3xl mb-7 leading-snug">Tell us about the space</h2>
            <form className="grid gap-5" action="https://formspree.io/f/REPLACE_ME" method="POST">
              <Field label="Your name" name="name" required />
              <Field label="Phone / WhatsApp" name="phone" required type="tel" />
              <Field label="Email" name="email" required type="email" />
              <div>
                <label htmlFor="message" className="block text-[0.7rem] uppercase tracking-[0.14em] text-muted font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-sm border border-line bg-bg px-4 py-3 text-[0.92rem] focus:border-navy focus:outline-none transition-colors"
                  placeholder="Type of space, rough size, what you're looking for…"
                />
              </div>
              <Button type="submit" size="lg" className="self-start">Send message</Button>
              <p className="text-[0.78rem] text-subtle">
                For a structured quote → <a href="/quote" className="text-orange underline underline-offset-4">/quote</a>
              </p>
            </form>
          </div>
        </div>
      </Section>

      <section className="border-t border-line bg-bg-subtle py-16">
        <Container>
          <div className="rounded-md overflow-hidden border border-line aspect-[16/7] bg-navy-darker relative">
            <iframe
              title={`Map of ${site.name}`}
              src="https://www.google.com/maps?q=McCarthy+Hill+Accra+Ghana&output=embed"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[0.7rem] uppercase tracking-[0.14em] text-muted font-semibold mb-2">
        {label}{required && <span className="text-orange ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-line bg-bg px-4 py-3 text-[0.92rem] focus:border-navy focus:outline-none transition-colors"
      />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  lines,
  hrefs,
  external,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  lines: readonly string[] | string[];
  hrefs?: readonly string[] | string[];
  external?: boolean;
}) {
  return (
    <div className="rounded-md border border-line bg-bg-elevated p-5">
      <div className="flex items-start gap-4">
        <span className="inline-grid h-10 w-10 place-items-center rounded-sm bg-navy/10 text-navy shrink-0">
          <Icon size={17} />
        </span>
        <div className="flex-1">
          <p className="text-[0.65rem] uppercase tracking-[0.18em] text-muted font-semibold mb-1.5">{label}</p>
          <div className="space-y-1 text-[0.95rem]">
            {lines.map((line, i) =>
              hrefs?.[i] ? (
                <a
                  key={line}
                  href={hrefs[i]}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="block text-ink hover:text-orange transition-colors"
                >
                  {line}
                </a>
              ) : (
                <p key={line} className="text-ink">{line}</p>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
