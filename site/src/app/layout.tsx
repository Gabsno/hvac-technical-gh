import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { UtilityBar } from "@/components/layout/utility-bar";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Mechanical contracting & HVAC for commercial and industrial buildings in Ghana`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "HVAC Ghana",
    "air conditioning Accra",
    "HVAC contractor Ghana",
    "VRF installation Ghana",
    "chiller maintenance Accra",
    "commercial HVAC Ghana",
    "MEP contractor Accra",
    "Daikin Mitsubishi LG Samsung Carrier dealer Ghana",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050d18" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-bg text-ink antialiased">
        <Providers>
          <SmoothScroll />
          <UtilityBar />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": site.url,
              name: site.name,
              description: site.description,
              url: site.url,
              telephone: site.phones[0],
              email: site.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${site.address.line1}, ${site.address.line2}`,
                addressLocality: site.address.city,
                addressCountry: site.address.country,
              },
              areaServed: "Ghana",
              priceRange: "$$",
              openingHours: "Mo-Sa 08:00-18:00",
              foundingDate: String(site.foundedYear),
            }),
          }}
        />
      </body>
    </html>
  );
}
