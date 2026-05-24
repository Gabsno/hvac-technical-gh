export const site = {
  name: "HVAC Technical",
  fullName: "HVAC Technical GH",
  shortName: "HVAC Technical",
  tagline:
    "Mechanical contracting & HVAC for commercial and industrial buildings in Ghana.",
  description:
    "HVAC Technical is a Ghanaian mechanical contracting firm. Design, installation and maintenance of air conditioning, ventilation, chillers, cold rooms and refrigeration — for commercial and industrial clients across Accra and beyond.",
  url: "https://hvactechnicalgh.com",
  ogImage: "/og.jpg",
  logo: "/brand/logo.jpeg",
  address: {
    line1: "13th Avenue Street",
    line2: "McCarthy-Hill",
    city: "Accra",
    country: "Ghana",
  },
  phones: ["+233507732410", "+233240866825"],
  whatsapp: "+233599333103",
  whatsappLink:
    "https://wa.me/233599333103?text=Hello%20HVAC%20Technical%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  email: "info@hvactechnicalgh.com",
  hours: "Mon–Sat · 08:00 – 18:00 · 24-hour emergency response",
  socials: {
    facebook: "https://facebook.com/hvactechnicalgh",
    instagram: "https://instagram.com/hvactechnicalgh",
    linkedin: "https://linkedin.com/company/hvactechnicalgh",
  },
  stats: [
    { value: "10+", label: "Years operating in Ghana" },
    { value: "200+", label: "Systems commissioned" },
    { value: "24/7", label: "Emergency response" },
    { value: "8", label: "Brand partnerships" },
  ],
  foundedYear: 2015,
} as const;

export type Site = typeof site;
