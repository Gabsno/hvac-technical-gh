// Curated Unsplash photography — production-ready, royalty-free.
// Tuned for an industrial Ghanaian HVAC/MEP corporate look:
// architectural infrastructure, Black/African technicians where available,
// equipment, plant rooms, and the spaces HVAC enables.
//
// All URLs use Unsplash's CDN with width parameter — Next/Image will further optimise.

const u = (id: string, w = 2000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const imagery = {
  // Heroes
  heroSkyline: u("1577415124269-fc1140a69e91"),       // modern city tower (Accra-feel)
  heroPlantRoom: u("1581094271901-8022df4466f9"),     // chillers, plant room
  heroTechnician: u("1581094271901-8022df4466f9"),    // technician on commercial roof
  heroBuilding: u("1486325212027-8081e485255e"),      // night office tower
  heroFan: u("1582719201952-1ce7c3a4d3c5"),           // industrial fan
  heroRooftopUnits: u("1497366811353-6870744d04b2"),  // rooftop with chillers

  // Industries
  industryResidential: u("1600585154340-be6161a56a0c"),   // modern villa interior
  industryHospitality: u("1517248135467-4c7edcad34c4"),    // restaurant interior
  industryRetail: u("1519567241046-7f570eee3ce6"),         // mall corridor
  industryHealthcare: u("1519494026892-80bbd2d6fd0d"),     // hospital corridor
  industryOffices: u("1497366216548-37526070297c"),        // open-plan office
  industryIndustrial: u("1565514020179-026b92b84bb6"),     // factory interior

  // Services / details
  serviceInstall: u("1597007030739-6d2e7172ee6c"),       // tech installing wall unit
  serviceMaintenance: u("1581094289810-adf5d25690e3"),   // engineer with tablet
  serviceDesign: u("1503387762-acce20517b1d"),           // blueprints/drafting (sketch table)
  serviceVrf: u("1620207418302-439b387441b0"),           // VRF outdoor unit array
  serviceChiller: u("1486406146926-c627a92ad1ab"),       // industrial chiller
  serviceColdRoom: u("1565891741441-64926e441838"),      // cold room interior
  serviceVentilation: u("1542621334-a254cf47733d"),      // ductwork
  serviceEmergency: u("1556228720-195a672e8a03"),        // technician with toolkit

  // Projects
  projectAchimota: u("1519567241046-7f570eee3ce6"),         // retail mall
  projectVilla: u("1600585154340-be6161a56a0c"),            // modern villa
  projectRestaurant: u("1517248135467-4c7edcad34c4"),       // restaurant interior
  projectHospital: u("1576091160550-2173dba999ef"),         // operating theatre
  projectOffice: u("1497366754035-f200968a6e72"),           // corporate hq
  projectPlant: u("1565514020179-026b92b84bb6"),            // beverage plant

  // Texture / accents
  accraTexture: u("1591850214590-cf6e1b5ba6c1"),       // african sky/light
  team: u("1521737604893-d14cc237f11d"),               // team meeting (diverse)
  workInProgress: u("1581092580497-e0d23cbdf1dc"),     // tools/install detail

  // About
  founderPortrait: u("1500648767791-00dcc994a43e"),    // technical professional portrait

  // Lifestyle / CTA
  comfortableOffice: u("1542744095-fd9bbf52ce99"),     // air, comfort
};

export type ImageryKey = keyof typeof imagery;
