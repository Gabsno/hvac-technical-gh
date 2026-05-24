import Link from "next/link";
import { Section } from "../ui/section";
import { brands } from "@/lib/brands";
import { ArrowRight } from "lucide-react";

export function BrandWall() {
  const loop = [...brands, ...brands];
  return (
    <Section
      eyebrow="Equipment we install"
      title="Authorised partnerships across the major manufacturers."
      lede="We don't push a single brand. We work with eight authorised manufacturers and recommend by spec, budget and serviceability — not commission."
      tone="subtle"
    >
      <div className="relative overflow-hidden border-y border-line py-8 -mx-5 sm:-mx-8 lg:-mx-12 bg-bg-elevated">
        <div className="marquee-track flex gap-12 sm:gap-16 whitespace-nowrap">
          {loop.map((b, i) => (
            <div key={`${b.name}-${i}`} className="inline-flex items-baseline gap-2 shrink-0">
              <span className="font-display text-2xl sm:text-[1.7rem] text-navy-deep dark:text-white">
                {b.name}
              </span>
              <span className="text-[0.62rem] font-mono uppercase tracking-[0.16em] text-subtle">
                {b.origin}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {brands.slice(0, 4).map((b) => (
          <div key={b.name} className="bg-bg-elevated border border-line rounded-md p-5">
            <p className="font-semibold text-ink mb-1">{b.name}</p>
            <p className="text-[0.78rem] text-muted leading-relaxed line-clamp-2">{b.note}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Link
          href="/brands"
          className="inline-flex items-center gap-2 text-[0.92rem] font-semibold text-navy hover:text-orange transition-colors"
        >
          See our take on each brand
          <ArrowRight size={15} aria-hidden />
        </Link>
      </div>
    </Section>
  );
}
