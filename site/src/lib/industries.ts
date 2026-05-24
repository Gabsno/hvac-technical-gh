export type Industry = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  challenges: string[];
  approach: { title: string; detail: string }[];
  systems: string[];
  caseStudy?: { project: string; outcome: string };
};

export const industries: Industry[] = [
  {
    slug: "residential",
    title: "Residential",
    short: "From single-room splits to whole-house multi-zone systems.",
    intro:
      "Most Accra homes are over-cooled in the lounge and under-cooled in the bedrooms. We size each room, route refrigerant pipework that won't drip, and leave the walls clean.",
    challenges: [
      "Bedroom-by-bedroom load variation",
      "Refrigerant pipe routing through finished walls",
      "Condensate drainage to acceptable points",
      "Inverter compressors at variable voltage",
    ],
    approach: [
      { title: "Sized per room", detail: "Heat-load calculation for each room — not a single big unit for the whole floor." },
      { title: "Clean install", detail: "Trunking matched to wall, hidden where possible. Holes sealed both sides." },
      { title: "Voltage protection", detail: "Stabiliser or protector on every install. Inverter compressors are unforgiving of dirty power." },
    ],
    systems: ["Wall-mounted splits", "Multi-split for villas", "Concealed ducted for high-end homes", "Mini-VRF for large residences"],
    caseStudy: { project: "5-bedroom villa, East Legon", outcome: "8-zone multi-split, single outdoor unit, no exposed pipework." },
  },
  {
    slug: "hospitality-restaurants",
    title: "Hospitality & Restaurants",
    short: "Cool diners, working kitchens, satisfied guests.",
    intro:
      "Restaurants are two HVAC problems pretending to be one — a hot kitchen and a cooled dining room — and the air keeps trying to mix. We design the boundary between them properly.",
    challenges: [
      "Heat from cooking equipment migrating into the dining area",
      "Extract overpowering supply, sucking smells through the front door",
      "Cold room failures that ruin a night's takings",
      "Noise from outdoor condenser units close to guests",
    ],
    approach: [
      { title: "Balanced kitchen", detail: "Extract canopy sized to cooking load. Tempered make-up air to match." },
      { title: "Dining-room comfort", detail: "Multi-split or ducted system zoned by section. Quiet evaporator selection." },
      { title: "Cold-room reliability", detail: "Properly sized condensing unit + service contract. No more 3am calls." },
    ],
    systems: ["Multi-split for dining", "Kitchen extract & make-up air", "Cold rooms & freezers", "Service contracts"],
    caseStudy: { project: "Restaurant chain, 4 outlets", outcome: "Standardised HVAC across all outlets, single service contract, no major callout in 18 months." },
  },
  {
    slug: "retail-shopping-malls",
    title: "Retail & Shopping Malls",
    short: "Comfort that brings shoppers in and keeps them in.",
    intro:
      "Retail HVAC is about perceived comfort at the entrance, even temperature down every aisle, and zero noise. We design for the customer walk-through, not just the spec sheet.",
    challenges: [
      "Solar gain through glass shopfronts",
      "Door opening / closing disrupting indoor air",
      "Cooling demand that varies wildly between weekdays and weekends",
      "Multiple tenants on a single base-build system",
    ],
    approach: [
      { title: "Perimeter strategy", detail: "Extra capacity along glass facades. Air curtains at high-traffic doors." },
      { title: "Tenant flexibility", detail: "VRF or fan-coil zoning so each shop controls its own temperature." },
      { title: "Variable-speed everything", detail: "VFD on chillers, pumps and air handlers — Saturday peak shouldn't run all week." },
    ],
    systems: ["VRF for tenanted retail", "Chilled water for anchor stores", "Air curtains", "BMS integration"],
    caseStudy: { project: "Retail centre, Achimota", outcome: "Zoned VRF with per-shop sub-metering for energy recharge." },
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    short: "Sterile air, validated environments, redundant systems.",
    intro:
      "In a hospital, HVAC is part of clinical care. We design wards, theatres, isolation rooms and pharmacies to the standards your accreditor will inspect — not just the standards you'd prefer.",
    challenges: [
      "Pressure cascade between clean and dirty zones",
      "HEPA filtration in operating theatres",
      "Validation evidence for accreditors (JCI, ISO)",
      "Standby redundancy — failure isn't an option",
    ],
    approach: [
      { title: "Pressure design", detail: "Positive in theatres, negative in isolation, monitored continuously." },
      { title: "Filtration grade", detail: "HEPA H13 minimum in clean areas. Pre-filter staging to extend HEPA life." },
      { title: "N+1 redundancy", detail: "Standby AHU/chiller for critical zones. Automatic failover." },
    ],
    systems: ["AHUs with HEPA", "Chilled water with redundancy", "Pharmacy cold rooms", "BMS with audit trail"],
    caseStudy: { project: "Private hospital, Accra", outcome: "Theatre suite commissioned to ISO 14644-1 Class 7." },
  },
  {
    slug: "offices-commercial",
    title: "Offices & Commercial",
    short: "Comfort, control, and an electricity bill that doesn't make you wince.",
    intro:
      "Office HVAC is no longer just about comfort — it's about productivity, energy cost, and the air quality that staff increasingly notice. We design for all three.",
    challenges: [
      "Mixed-use floors (meeting rooms vs open plan)",
      "After-hours occupancy with separate billing",
      "Inverter-VRF vs split-unit trade-off",
      "CO₂-based ventilation for full conference rooms",
    ],
    approach: [
      { title: "Zonal control", detail: "VRF zones per department. Meeting rooms with their own setpoint." },
      { title: "After-hours scheduling", detail: "Timer-controlled with override. Power consumption sub-metered." },
      { title: "Fresh-air integration", detail: "CO₂ sensors driving variable fresh-air supply where occupancy varies." },
    ],
    systems: ["VRF", "Ducted splits", "Fresh-air handlers", "BMS with scheduling"],
    caseStudy: { project: "Corporate HQ, Ridge", outcome: "12-storey VRF retrofit, phased to avoid downtime." },
  },
  {
    slug: "manufacturing-industrial",
    title: "Manufacturing & Industrial",
    short: "Process cooling, factory ventilation, and the chillers that don't stop.",
    intro:
      "Industrial cooling is about uptime first, comfort second. We work with manufacturers who can't afford a chiller failure — food production, plastics, pharma, beverages.",
    challenges: [
      "24/7 cooling reliability",
      "Process load variation (batch vs continuous)",
      "Dust, fumes and high ambient temperatures",
      "Compliance: HACCP, GMP, ISO",
    ],
    approach: [
      { title: "Industrial-grade plant", detail: "Heavy-duty chillers, redundant pumps, isolated process loops." },
      { title: "Service-level guarantee", detail: "Response times in writing. Critical-spares stockpile." },
      { title: "Compliance-aware design", detail: "Documentation per HACCP/GMP from day one." },
    ],
    systems: ["Process chillers", "Cold rooms & blast freezers", "Plant-room ventilation", "Spot cooling"],
    caseStudy: { project: "Beverage plant, Tema", outcome: "200kW process chiller replacement in 36 hours over a single weekend shutdown." },
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
