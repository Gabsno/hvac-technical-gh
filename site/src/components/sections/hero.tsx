import { ArrowRight, Phone } from "lucide-react";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-darker text-white">
      {/* Soft ambient lighting accents */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-30 blur-[160px]"
        style={{ background: "radial-gradient(closest-side, #1e4976, transparent)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-20 right-0 h-[400px] w-[600px] rounded-full opacity-20 blur-[140px]"
        style={{ background: "radial-gradient(closest-side, #ef8324, transparent)" }}
      />

      <Container className="relative z-10 pt-28 pb-24 lg:pt-32 lg:pb-32 grid lg:grid-cols-[1.05fr_1.1fr] gap-10 lg:gap-14 items-center">
        {/* Left — copy column */}
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 mb-7 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-3.5 py-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-white/80">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange pulse-dot" aria-hidden />
            Mechanical contractors · Accra, Ghana · Est. {site.foundedYear}
          </p>
          <h1 className="font-display text-[clamp(2.4rem,5.2vw,4.2rem)] leading-[1.02] text-balance">
            Mechanical contracting <br className="hidden sm:inline" />
            <span className="text-orange">for buildings that</span> <br className="hidden sm:inline" />
            <span className="text-orange">can&apos;t afford downtime.</span>
          </h1>
          <p className="mt-7 text-lg text-white/75 leading-relaxed max-w-xl">
            Design, installation and maintenance of HVAC, ventilation, chillers and refrigeration — for commercial and industrial clients across Ghana.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/quote" size="lg">
              Request a site assessment
              <ArrowRight size={16} aria-hidden />
            </Button>
            <Button href={`tel:${site.phones[0]}`} size="lg" variant="outline-light">
              <Phone size={15} aria-hidden /> {site.phones[0]}
            </Button>
          </div>
          {/* Inline stats on small screens, separate column on larger */}
          <div className="mt-12 grid grid-cols-3 gap-5 lg:hidden">
            {site.stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl leading-none">{s.value}</p>
                <p className="mt-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-white/55">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — video showcase */}
        <div className="relative">
          <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-white border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/hero/unit-assembled.png"
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden
            >
              <source src="/hero/unit-deconstruct.mp4" type="video/mp4" />
            </video>
            {/* Caption ribbon */}
            <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-sm bg-navy-darker/90 backdrop-blur px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-white/85">
              <span className="inline-block h-1 w-1 rounded-full bg-orange pulse-dot" aria-hidden />
              Inside a split-system unit
            </div>
          </div>
          {/* Floating stats card overlapping bottom-right */}
          <div className="hidden lg:flex absolute -bottom-6 -left-6 bg-navy-deep border border-white/10 rounded-md p-5 shadow-2xl">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {site.stats.slice(0, 2).map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl leading-none text-white">{s.value}</p>
                  <p className="mt-1 text-[0.62rem] uppercase tracking-[0.14em] text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom strip of brand partners */}
      <div className="relative border-t border-white/10 bg-navy-darker/60 backdrop-blur z-10">
        <Container className="py-4 flex items-center gap-6 sm:gap-10 overflow-hidden">
          <span className="text-[0.65rem] uppercase tracking-[0.22em] text-white/45 shrink-0">
            Authorised installers
          </span>
          <div className="flex items-center gap-7 sm:gap-12 text-white/65 text-sm font-semibold tracking-tight whitespace-nowrap overflow-hidden">
            <span>Daikin</span>
            <span className="opacity-30">·</span>
            <span>Mitsubishi Electric</span>
            <span className="opacity-30">·</span>
            <span>Carrier</span>
            <span className="opacity-30">·</span>
            <span>LG</span>
            <span className="opacity-30">·</span>
            <span>Samsung</span>
            <span className="opacity-30 hidden sm:inline">·</span>
            <span className="hidden sm:inline">York</span>
            <span className="opacity-30 hidden md:inline">·</span>
            <span className="hidden md:inline">Midea</span>
          </div>
        </Container>
      </div>
    </section>
  );
}
