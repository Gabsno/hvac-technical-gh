import Image from "next/image";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { imagery } from "@/lib/imagery";

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  image?: string;
};

export function CtaBanner({
  eyebrow = "Get started",
  title = "Request a site assessment.",
  body = "We come and look at the space — a single one-hour visit, free of charge. You receive a written, costed proposal at three price points within five working days.",
  primaryHref = "/quote",
  primaryLabel = "Request a site assessment",
  image = imagery.heroRooftopUnits,
}: Props) {
  return (
    <section className="relative py-24 sm:py-28 bg-navy-darker overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-darker via-navy-darker/85 to-navy-darker/40" aria-hidden />
      </div>
      <Container className="relative">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center text-white">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">{eyebrow}</p>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] text-balance">
              {title}
            </h2>
            <p className="mt-6 text-lg text-white/75 max-w-xl leading-relaxed">{body}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={primaryHref} size="lg">
                {primaryLabel}
                <ArrowRight size={16} aria-hidden />
              </Button>
              <Button href={`tel:${site.phones[0]}`} size="lg" variant="outline-light">
                <Phone size={15} aria-hidden /> {site.phones[0]}
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="border-l border-white/15 pl-8 space-y-6">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.16em] text-orange mb-2">Direct</p>
                <a href={`tel:${site.phones[0]}`} className="block font-display text-2xl hover:text-orange transition-colors">{site.phones[0]}</a>
                <a href={`tel:${site.phones[1]}`} className="block font-display text-2xl hover:text-orange transition-colors mt-1">{site.phones[1]}</a>
              </div>
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.16em] text-orange mb-2">WhatsApp</p>
                <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="block font-display text-2xl hover:text-orange transition-colors">Send a message</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
