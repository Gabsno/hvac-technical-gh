export type Brand = {
  name: string;
  origin: string;
  category: string[];
  note: string;
};

export const brands: Brand[] = [
  { name: "Daikin", origin: "Japan", category: ["Split", "VRV", "Chiller"], note: "Industry default. VRV-X is our go-to for medium-to-large commercial." },
  { name: "Mitsubishi Electric", origin: "Japan", category: ["Split", "City Multi VRF"], note: "City Multi is the premium VRF option. Quiet, well-built, expensive." },
  { name: "LG", origin: "South Korea", category: ["Split", "Multi V VRF"], note: "Strong residential range. Multi V VRF is competitive on price." },
  { name: "Samsung", origin: "South Korea", category: ["Split", "DVM S VRF"], note: "Solid residential and light commercial. Good parts availability." },
  { name: "Carrier", origin: "USA", category: ["Split", "Chiller", "Packaged"], note: "Strong on large chillers and packaged rooftop units." },
  { name: "York", origin: "USA", category: ["Chiller", "AHU"], note: "Chiller specialist — YVAA and YCAL ranges widely deployed in Accra." },
  { name: "Midea", origin: "China", category: ["Split", "V8 VRF", "Chiller"], note: "Best value play. V8 VRF closing the gap on the Japanese brands." },
  { name: "Gree", origin: "China", category: ["Split", "GMV VRF"], note: "Affordable, increasingly capable. Good for budget-sensitive jobs." },
];
