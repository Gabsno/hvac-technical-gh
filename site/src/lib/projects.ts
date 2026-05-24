export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  industrySlug: string;
  year: number;
  location: string;
  scope: string;
  systems: string[];
  summary: string;
  outcome: string;
  challenge: string;
  approach: string;
  stats: { label: string; value: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "achimota-retail-centre",
    title: "Achimota Retail Centre — Climate Retrofit",
    client: "Achimota Retail Centre",
    industry: "Retail & Shopping Malls",
    industrySlug: "retail-shopping-malls",
    year: 2024,
    location: "Achimota, Accra",
    scope: "Multi-tenant VRF retrofit and chilled-water integration",
    systems: ["Daikin VRV-X", "Air curtains", "BMS integration"],
    summary:
      "Migrated a 24-tenant retail block from standalone split units to a zoned VRF backbone with per-shop sub-metering.",
    challenge:
      "Existing splits were inconsistent, noisy, and expensive to maintain across multiple tenants. Each unit had a different brand, service history and energy bill.",
    approach:
      "Phased VRF retrofit by tenant grouping. Air curtains installed at primary entrances. Sub-metering per shop allows recharge of actual energy used.",
    outcome:
      "Standardised plant, single service contract, and a 28% reduction in mall-level cooling energy.",
    stats: [
      { label: "Tenants on system", value: "24" },
      { label: "Energy reduction", value: "28%" },
      { label: "Install duration", value: "11 weeks" },
    ],
    featured: true,
  },
  {
    slug: "east-legon-villa",
    title: "8-Zone Villa, East Legon",
    client: "Private residence",
    industry: "Residential",
    industrySlug: "residential",
    year: 2025,
    location: "East Legon, Accra",
    scope: "Whole-house multi-split installation",
    systems: ["Daikin multi-split", "Concealed pipework", "Smart controls"],
    summary:
      "Five-bedroom villa with home office, lounge, dining and family room — all on a single outdoor unit.",
    challenge:
      "Owner wanted whole-house climate control without visible pipework. Bedrooms had very different solar loads.",
    approach:
      "8-zone multi-split with refrigerant pipework run inside chases left during the build. Each room separately sized. Smart controls with scenes (Day, Night, Away).",
    outcome:
      "No visible pipework on any external wall. Per-room scheduling. Family hasn't touched the controls since handover.",
    stats: [
      { label: "Indoor units", value: "8" },
      { label: "Outdoor units", value: "1" },
      { label: "Pipe runs visible", value: "0 m" },
    ],
    featured: true,
  },
  {
    slug: "restaurant-chain-greater-accra",
    title: "Restaurant Chain — Standardised HVAC",
    client: "Quick-service restaurant chain (4 outlets)",
    industry: "Hospitality & Restaurants",
    industrySlug: "hospitality-restaurants",
    year: 2024,
    location: "Greater Accra",
    scope: "HVAC + kitchen extract + cold rooms, standardised across 4 outlets",
    systems: ["Multi-split", "Kitchen extract canopies", "Cold rooms", "Service contract"],
    summary:
      "Same HVAC kit-of-parts deployed across four outlets so service, spares and training are one set, not four.",
    challenge:
      "Each outlet had different equipment, different installers and different problems. Each manager dialled a different number when something failed.",
    approach:
      "Audited each outlet. Specified one kit-of-parts (same hood, same condensing unit, same controls). Replaced in priority order. Single service contract.",
    outcome:
      "Zero major callouts in 18 months post-standardisation. Spare parts now interchangeable across all sites.",
    stats: [
      { label: "Outlets", value: "4" },
      { label: "Callouts in 18 months", value: "0 major" },
      { label: "Cold-room downtime", value: "0 hours" },
    ],
    featured: true,
  },
  {
    slug: "private-hospital-theatre-suite",
    title: "Private Hospital — Theatre Suite",
    client: "Private hospital",
    industry: "Healthcare",
    industrySlug: "healthcare",
    year: 2023,
    location: "Accra",
    scope: "Operating theatre + isolation room HVAC",
    systems: ["AHU with HEPA H13", "Pressure cascade controls", "N+1 redundancy"],
    summary:
      "Operating theatre suite designed and commissioned to ISO 14644-1 Class 7 cleanroom standard.",
    challenge:
      "Existing theatre had no validated cleanliness, intermittent pressure cascade and a single point of failure.",
    approach:
      "New AHU with HEPA H13 filtration. Pressure cascade verified room-by-room with magnehelic gauges. Standby AHU for automatic failover.",
    outcome:
      "Commissioned to ISO 14644-1 Class 7. Continuous pressure-cascade monitoring with audit trail.",
    stats: [
      { label: "Cleanliness class", value: "ISO 7" },
      { label: "Air changes / hour", value: "25" },
      { label: "Standby chillers", value: "N+1" },
    ],
  },
  {
    slug: "corporate-hq-ridge",
    title: "Corporate HQ, Ridge — VRF Retrofit",
    client: "Financial services firm",
    industry: "Offices & Commercial",
    industrySlug: "offices-commercial",
    year: 2025,
    location: "Ridge, Accra",
    scope: "12-storey VRF retrofit, phased without downtime",
    systems: ["Mitsubishi City Multi", "BMS scheduling", "Sub-metering per floor"],
    summary:
      "Replaced ageing split-system fleet with VRF across 12 floors — without taking any floor out of service.",
    challenge:
      "Building stayed fully occupied during the retrofit. Each floor needed to remain cooled until the new system was live.",
    approach:
      "Floor-by-floor migration over weekends. Temporary spot cooling during cutover. New VRF outdoor units staged on roof, refrigerant pipework risers run in service shaft.",
    outcome:
      "Whole building migrated over 14 weekends. Floor temperatures more uniform, energy bill down 22%.",
    stats: [
      { label: "Floors", value: "12" },
      { label: "Downtime", value: "0 working days" },
      { label: "Energy saved", value: "22%" },
    ],
  },
  {
    slug: "beverage-plant-tema",
    title: "Beverage Plant, Tema — Chiller Swap",
    client: "Beverage manufacturer",
    industry: "Manufacturing & Industrial",
    industrySlug: "manufacturing-industrial",
    year: 2024,
    location: "Tema",
    scope: "200kW process chiller replacement, single weekend window",
    systems: ["York YVAA air-cooled chiller", "Variable-speed pumps", "Water treatment"],
    summary:
      "Replaced a failing 200kW process chiller during a single weekend shutdown — production back on Monday morning.",
    challenge:
      "Existing chiller failing intermittently, threatening batch losses. Production couldn't stop for more than 36 hours.",
    approach:
      "New chiller, pumps and pipework pre-staged. Decommission Friday evening, lift-in Saturday, charge Sunday, commission Sunday night.",
    outcome:
      "Production resumed Monday 06:00 as scheduled. Zero batch loss. New chiller efficiency ~30% better than old.",
    stats: [
      { label: "Chiller capacity", value: "200 kW" },
      { label: "Downtime window", value: "36 hours" },
      { label: "Efficiency gain", value: "~30%" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
