import { Hero } from "@/components/sections/hero";
import { StatsStrip } from "@/components/sections/stats-strip";
import { ValueProps } from "@/components/sections/value-props";
import { ServicesGrid } from "@/components/sections/services-grid";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { ProjectWall } from "@/components/sections/project-wall";
import { BrandWall } from "@/components/sections/brand-wall";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ValueProps />
      <ServicesGrid />
      <IndustriesGrid />
      <ProjectWall />
      <BrandWall />
      <CtaBanner />
    </>
  );
}
