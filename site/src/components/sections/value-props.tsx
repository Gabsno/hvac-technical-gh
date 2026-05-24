import Image from "next/image";
import { Section } from "../ui/section";

const principles = [
  {
    num: "01",
    title: "Designed to the load.",
    body: "Every system sized to actual heat-load, not estimated from floor area. Room-by-room calculation; published in a commissioning sheet.",
  },
  {
    num: "02",
    title: "Installed to the standard.",
    body: "Pipework pressure-tested. Refrigerant charged to spec. Electrical to IEC. Two-person teams. Sign-off on commissioning day.",
  },
  {
    num: "03",
    title: "Serviced for the lifetime.",
    body: "Scheduled maintenance contracts. 24/7 emergency response. Spare-parts chain into Daikin, Mitsubishi, Carrier and LG.",
  },
];

export function ValueProps() {
  return (
    <Section
      eyebrow="How we work"
      title="The HVAC fundamentals, executed without shortcuts."
      lede="Most HVAC failures in Ghana trace to three causes: undersized equipment, sloppy refrigerant pipework, or no service regime. We engineer around all three."
    >
      <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-start">
        <figure className="relative aspect-[4/3.2] rounded-md overflow-hidden border border-line bg-white">
          <Image
            src="/hero/unit-exploded.png"
            alt="Split-system air conditioner deconstructed into its internal components — front cover, filter, evaporator coil, blower, motor, control PCB, drain pan, louvres and mounting plate."
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-contain p-6"
          />
          <figcaption className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-sm bg-navy-darker/90 backdrop-blur px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-white/85">
            Every part we install, every part we service
          </figcaption>
        </figure>
        <ul className="divide-y divide-line">
          {principles.map((p) => (
            <li key={p.num} className="py-6 first:pt-0 grid grid-cols-[60px_1fr] gap-5">
              <span className="font-mono text-[0.78rem] text-orange pt-1.5">{p.num}</span>
              <div>
                <h3 className="font-display text-xl text-ink">{p.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted leading-relaxed">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
