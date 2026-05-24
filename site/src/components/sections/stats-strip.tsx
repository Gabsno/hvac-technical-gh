import { site } from "@/lib/site";
import { Container } from "../ui/container";

export function StatsStrip() {
  return (
    <section className="border-y border-line bg-bg-subtle">
      <Container className="py-10 grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 divide-x divide-line">
        {site.stats.map((s, i) => (
          <div key={s.label} className={`px-2 sm:px-4 ${i === 0 ? "lg:pl-0" : ""}`}>
            <p className="font-display text-[2rem] sm:text-[2.4rem] leading-none text-navy-deep dark:text-white">
              {s.value}
            </p>
            <p className="mt-2 text-[0.72rem] uppercase tracking-[0.14em] text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
