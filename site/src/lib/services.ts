export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  whatItIs: string;
  process: { step: string; detail: string }[];
  bestFor: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "air-conditioning-installation",
    title: "Air Conditioning Installation",
    short:
      "Sized, sited and signed off. Split, multi-split and ducted systems installed to spec, on schedule.",
    intro:
      "From a single 1.5HP wall-mount for a bedroom to a 12-zone multi-split for a restaurant, our installs are sized to the actual heat load of the space — not guessed from floor area.",
    whatItIs:
      "End-to-end air-conditioning installation. We handle load calculation, equipment selection, refrigerant pipework, electrical first-fix, mounting, commissioning and handover. Every job ends with a commissioning sheet you can keep.",
    process: [
      { step: "01 · Site survey", detail: "Free 60-minute visit. Heat load, electrical capacity, pipe routing." },
      { step: "02 · Proposal", detail: "Equipment options at three price points. No hidden charges." },
      { step: "03 · Procurement", detail: "Units sourced from authorised distributors only. Serial numbers logged." },
      { step: "04 · Installation", detail: "Refrigerant pipework, drain runs, electrical, mounting. Two-person team minimum." },
      { step: "05 · Commissioning", detail: "Vacuum-test pipework, charge to spec, measure superheat/subcool, hand over." },
    ],
    bestFor: ["Homes", "Offices", "Retail shops", "Restaurants", "Apartments"],
    faqs: [
      { q: "How long does a typical install take?", a: "A single wall-mount is half a day. A multi-split with four indoor units is two to three days." },
      { q: "Do you guarantee the work?", a: "Yes — one year on workmanship, plus the manufacturer warranty on the unit (typically 1–5 years depending on brand)." },
      { q: "Will you remove my old unit?", a: "Yes, including refrigerant recovery in line with EPA Ghana guidance." },
    ],
    related: ["maintenance-servicing", "vrf-systems", "design-consulting"],
  },
  {
    slug: "maintenance-servicing",
    title: "Maintenance & Servicing",
    short:
      "Quarterly service plans that catch problems before they cost. Filters, coils, gas, drainage — done right.",
    intro:
      "A well-maintained air conditioner runs 25–30% more efficiently and lasts twice as long. Our plans cover everything from quick filter changes to full chiller overhauls.",
    whatItIs:
      "Scheduled maintenance contracts and ad-hoc servicing. We cover residential split units, commercial multi-splits, VRF cassettes, ducted systems, chillers and packaged rooftop units.",
    process: [
      { step: "01 · Inspection", detail: "Visual, performance, electrical and refrigerant pressure check." },
      { step: "02 · Filter & coil clean", detail: "Wet-wash coils on-site. Filter clean or replace." },
      { step: "03 · Drain & insulation", detail: "Clear condensate lines. Inspect pipe insulation." },
      { step: "04 · Performance verify", detail: "Measure supply-air temperature and current draw against spec." },
      { step: "05 · Report", detail: "Written report per unit. Photographs. Recommendations." },
    ],
    bestFor: ["Restaurants", "Hospitals", "Offices", "Retail malls", "Industrial facilities"],
    faqs: [
      { q: "How often should I service?", a: "Quarterly for commercial. Twice a year minimum for residential. Monthly for kitchens and hospitals." },
      { q: "Do you offer service contracts?", a: "Yes — bronze (twice yearly), silver (quarterly) and gold (monthly with priority callout)." },
      { q: "What's the response time on a breakdown?", a: "Contract clients: same-day. Otherwise: within 48 hours." },
    ],
    related: ["emergency-repairs", "chillers", "air-conditioning-installation"],
  },
  {
    slug: "design-consulting",
    title: "Design & Consulting",
    short:
      "Heat-load calculations, equipment selection and full mechanical drawings for new builds and retrofits.",
    intro:
      "If you're at the architect stage, this is the cheapest moment to get HVAC right. Decisions made on paper cost a fraction of decisions made after the slab is poured.",
    whatItIs:
      "Mechanical design service for architects, developers and contractors. Heat-load calculation, system selection, equipment scheduling, ductwork and pipework drawings, BOQ and tender documentation.",
    process: [
      { step: "01 · Brief", detail: "Building purpose, occupancy, hours of use, target temperatures." },
      { step: "02 · Heat load", detail: "Room-by-room sensible + latent load calculation." },
      { step: "03 · System selection", detail: "Split vs multi-split vs VRF vs chilled water — with reasoning." },
      { step: "04 · Drawings", detail: "Equipment plans, refrigerant pipework, ductwork, electrical schedule." },
      { step: "05 · BOQ", detail: "Itemised bill of quantities for tendering." },
    ],
    bestFor: ["Architects", "Developers", "Hotel projects", "New-build offices", "Hospitals"],
    faqs: [
      { q: "Do you need to be the installer too?", a: "No. We will hand the design to any competent contractor and remain available for clarifications." },
      { q: "How long does a design take?", a: "A single villa: 1 week. A small office block: 3 weeks. A hotel: 6–10 weeks." },
      { q: "Do you provide LEED or EDGE input?", a: "Yes — energy modelling for green-building certification on request." },
    ],
    related: ["vrf-systems", "chillers", "air-conditioning-installation"],
  },
  {
    slug: "vrf-systems",
    title: "VRF & VRV Systems",
    short:
      "Variable Refrigerant Flow systems for large commercial spaces. Up to 64 indoor units on one refrigerant loop.",
    intro:
      "VRF is the gold standard for offices, hotels and mixed-use buildings — heating one zone while cooling another, all on a single outdoor unit. We design and install across Daikin VRV, Mitsubishi City Multi, LG Multi V and Midea V8.",
    whatItIs:
      "End-to-end design, supply and installation of Variable Refrigerant Flow systems. Includes refrigerant pipe sizing, branch joint selection, additional refrigerant charge calculation, BMS integration and commissioning.",
    process: [
      { step: "01 · Capacity & diversity", detail: "ODU/IDU connection ratio sized for actual concurrent load." },
      { step: "02 · Pipe sizing", detail: "Liquid + gas line sizing per branch with manufacturer software." },
      { step: "03 · Branch & header layout", detail: "Y-branch and header selection. Minimum/maximum lift checks." },
      { step: "04 · Refrigerant charge", detail: "Additional charge calculated per metre of liquid pipe." },
      { step: "05 · Commissioning", detail: "BMS handshake, addressing, zone test." },
    ],
    bestFor: ["Offices", "Hotels", "Apartments", "Mixed-use buildings", "Hospitals"],
    faqs: [
      { q: "Which VRF brand do you recommend?", a: "It depends on price, parts availability and the building. Daikin VRV-X is the safe default in Accra; Midea V8 is the value play." },
      { q: "Can VRF run alongside our existing split units?", a: "Yes — phased migration is common. We size the VRF for new zones and keep the splits where they serve well." },
      { q: "Is VRF really more efficient?", a: "Yes, in part-load conditions (which is most of the time in Accra). 20–35% reduction in energy bills is typical vs equivalent split-system capacity." },
    ],
    related: ["design-consulting", "chillers", "air-conditioning-installation"],
  },
  {
    slug: "chillers",
    title: "Chillers & Chilled-Water Systems",
    short:
      "Water-cooled and air-cooled chillers for hotels, hospitals, malls and manufacturing.",
    intro:
      "Chilled-water systems remain the right choice above ~500kW. We work with York, Carrier, Daikin and Midea air-cooled and water-cooled chillers, including primary/secondary pumping and BMS integration.",
    whatItIs:
      "Chiller selection, installation, commissioning and maintenance. Includes pumps, cooling towers, expansion vessels, BMS, water treatment and the full chilled-water distribution loop.",
    process: [
      { step: "01 · Load assessment", detail: "Building peak + diversified load. Redundancy strategy." },
      { step: "02 · Chiller selection", detail: "Air-cooled vs water-cooled trade-off. Free cooling potential." },
      { step: "03 · Pipework & pumps", detail: "Primary/secondary loop. Variable-speed pumps. Strainers and isolation." },
      { step: "04 · Water treatment", detail: "Chemical regime to protect plates and tubes." },
      { step: "05 · BMS & commissioning", detail: "Sequence-of-operations programmed and validated." },
    ],
    bestFor: ["Hospitals", "5-star hotels", "Shopping malls", "Data centres", "Manufacturing plants"],
    faqs: [
      { q: "Do you maintain existing chillers?", a: "Yes — we service York, Carrier, Trane, Daikin and Midea chillers across Greater Accra." },
      { q: "What about chiller replacements?", a: "We handle phased replacements without taking the building offline. Temporary rental chiller available." },
      { q: "How often should chillers be serviced?", a: "Quarterly minor, annual major (tube clean, oil sample, electrical megger)." },
    ],
    related: ["maintenance-servicing", "design-consulting", "vrf-systems"],
  },
  {
    slug: "cold-rooms-refrigeration",
    title: "Cold Rooms & Refrigeration",
    short:
      "Walk-in cold rooms, blast freezers and process refrigeration for food, pharma and logistics.",
    intro:
      "From a 6m³ restaurant cold room to a 200m³ pharmaceutical -25°C freezer, we design and install positive and negative temperature rooms with the right insulation, refrigerant and controls.",
    whatItIs:
      "Cold-room design, panel installation, refrigeration plant supply (condensing units + evaporators), controls and validation. R448A, R449A and R290 refrigerant systems.",
    process: [
      { step: "01 · Room design", detail: "Panel thickness, door size, drainage, finishes." },
      { step: "02 · Refrigeration sizing", detail: "Pull-down + steady-state load with safety factor." },
      { step: "03 · Installation", detail: "Panels erected, refrigeration plant, pipework, drains, lights." },
      { step: "04 · Commissioning", detail: "Pull-down test. Temperature mapping. Door-seal check." },
      { step: "05 · Validation", detail: "For pharma: 24-hour mapped study to GDP/WHO TRS 961." },
    ],
    bestFor: ["Restaurants", "Hotels", "Pharmaceutical distributors", "Frozen-food storage", "Logistics"],
    faqs: [
      { q: "What temperature can you go down to?", a: "−40°C for blast freezing. −25°C standard for long-term frozen storage. +2 to +8°C for pharma." },
      { q: "Is R290 (propane) safe?", a: "Yes — used widely in small cold rooms. Flammable, so charge size and ventilation matter. We follow IEC 60335-2-89." },
      { q: "How long until it's running cold?", a: "Pull-down to set point typically 6–12 hours depending on room volume." },
    ],
    related: ["maintenance-servicing", "design-consulting", "ventilation-extraction"],
  },
  {
    slug: "ventilation-extraction",
    title: "Ventilation & Extraction",
    short:
      "Kitchen hoods, smoke extraction, car-park ventilation and fresh-air systems.",
    intro:
      "Air conditioning is half the story. The other half is fresh air in and stale air out — done right, you smell less, feel less stuffy and pass fire-safety inspections cleanly.",
    whatItIs:
      "Mechanical ventilation design and installation. Kitchen extract canopies with grease filters, smoke extraction to NFPA 92, car-park CO ventilation, washroom extract, and fresh-air make-up units.",
    process: [
      { step: "01 · Airflow brief", detail: "Air changes per hour by space. Cooking equipment heat output." },
      { step: "02 · Hood / fan selection", detail: "Hood size, filter type, fan static pressure." },
      { step: "03 · Ductwork", detail: "GI fabrication on-site. Sealed joints. Fire dampers where required." },
      { step: "04 · Make-up air", detail: "Fresh air to balance extract. Filtered and tempered if needed." },
      { step: "05 · Balance & sign off", detail: "Anemometer reading per grille. Balanced to design flow." },
    ],
    bestFor: ["Restaurants", "Kitchens", "Underground car parks", "Hospitals", "Laboratories"],
    faqs: [
      { q: "Do I need fire dampers?", a: "Yes if ductwork crosses a fire-rated wall. We supply and install certified ones." },
      { q: "Will the extract make my kitchen freezing?", a: "Not if make-up air is balanced. Most kitchens we walk into are over-extracted and under-supplied — we fix that." },
      { q: "Do you do car-park CO sensors?", a: "Yes — variable-speed fans triggered by CO concentration, per ASHRAE 62.1." },
    ],
    related: ["air-conditioning-installation", "design-consulting", "maintenance-servicing"],
  },
  {
    slug: "emergency-repairs",
    title: "Emergency Repairs",
    short:
      "24-hour callout. Same-day diagnosis for contract clients. Real engineers, not parts-changers.",
    intro:
      "When the chiller trips on a Saturday night and the restaurant is full, you need someone who picks up the phone. We do. And we arrive with the right kit to actually fix it.",
    whatItIs:
      "Emergency repair callout for all HVAC equipment we install or maintain — plus equipment installed by others, on a best-effort basis. Diagnosis, parts sourcing, repair and return-to-service.",
    process: [
      { step: "01 · Call", detail: "We answer 24/7. Describe symptoms; we triage immediately." },
      { step: "02 · Triage", detail: "Some issues we walk you through over the phone. Most we attend within hours." },
      { step: "03 · Diagnosis", detail: "Refrigerant, electrical, controls, mechanical. Root cause not symptom." },
      { step: "04 · Repair / temporary fix", detail: "If parts are on the truck, we fix on first visit. If not, temporary measure + return." },
      { step: "05 · Written report", detail: "What broke. Why. How to prevent it next time." },
    ],
    bestFor: ["Restaurants", "Hotels", "Hospitals", "Data centres", "Anyone with a contract"],
    faqs: [
      { q: "How fast can you get to me?", a: "Contract clients within Greater Accra: typically under 3 hours, often under 1." },
      { q: "What if you didn't install the unit?", a: "We still attend. We may need to source parts; older units sometimes require workarounds." },
      { q: "Do you charge a callout fee?", a: "Yes for non-contract jobs. Waived for contract clients." },
    ],
    related: ["maintenance-servicing", "chillers", "vrf-systems"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
