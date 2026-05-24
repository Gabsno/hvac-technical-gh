# HVAC Technical GH — Redesign

A research-driven redesign of [hvactechnicalgh.com](https://hvactechnicalgh.com), built with Next.js 16, TypeScript, Tailwind CSS v4, GSAP, Lenis and React Three Fiber.

## What's in this repo

```
hvac-technical-redesign/
├── research/
│   ├── 01-client-brand.md         # Brand extraction from current site
│   ├── 02-competitor-analysis.md  # 8 competitors scored, top 5 deep-dived
│   ├── 03-build-brief.md          # Full build plan + decisions
│   └── 04-quality-audit.md        # (Generated after Phase 6)
├── competitive-analysis.html      # PDF-ready competitive analysis report
│                                  #   → open in any browser; print to PDF
└── site/                          # The Next.js application
```

## Running the site locally

```bash
cd site
npm install        # first time only
npm run dev        # then open http://localhost:3000
```

For a port that won't clash with anything else:
```bash
npm run dev -- -p 7777
```

## Production build

```bash
cd site
npm run build
npm run start
```

## Deployment

Designed for Vercel:

```bash
npx vercel
```

…or push to a Git provider and connect at [vercel.com/new](https://vercel.com/new).

## Tech stack

- **Framework:** Next.js 16 (App Router, React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first config in `globals.css`)
- **Animation:** Lenis smooth scroll (GSAP available)
- **Theme:** next-themes (light by default, system-aware, dark mode supported)
- **Forms:** Multi-step quote flow in React state
- **Icons:** lucide-react
- **Fonts:** Inter (display + body) + JetBrains Mono — all via `next/font`
- **Imagery:** Unsplash CDN, optimised via `next/image`

## Design system

Navy + orange + white + steel-gray — derived directly from the real logo (`public/brand/logo.jpeg`). One geometric sans (Inter) for everything. Photography-led layout. Carrier / Schneider corporate B2B register. See `research/05-rebuild-audit.md` for the v1→v2 rebuild rationale.

## What's been built

- 20 pages total (home, about, 8 service pages, 6 industry pages, projects index + 6 case studies, brands, insights, contact, quote flow, 404)
- 3D scroll-reveal AC unit on the home hero (assembles/disassembles as you scroll)
- Sticky utility bar + main nav with mega-menu hover
- Dark/light theme toggle
- Brand-wall marquee
- Multi-step quote-request flow with progress bar
- Sitemap.xml + robots.txt + LocalBusiness JSON-LD schema
- `prefers-reduced-motion` support across all animations
- Smooth scroll via Lenis (auto-disables on reduced motion)

## What's placeholder

Clearly marked in code with `<!-- PLACEHOLDER -->` style comments where applicable:

- **Contact form action**: `<form action="https://formspree.io/f/REPLACE_ME">` — point at your Formspree / Resend endpoint
- **Project photography**: Currently using gradient + pattern placeholders. Drop real photos into `public/projects/` and swap in `<Image />` tags
- **Founder photo + bio**: About page references this — add when ready
- **Real client logos for brand wall**: The marquee currently uses text. Drop SVG logos into `public/brands/` and swap to `<Image />`
- **OG image** (`public/og.jpg`): Add a 1200×630 OG card
- **Favicon**: Add a real one to `public/`
- **Resend / Formspree wiring**: The /quote multi-step flow currently just shows a "Thanks" state — wire to an actual backend

## Content data lives in

- `src/lib/services.ts` — 8 service definitions (intro, process, FAQs, related)
- `src/lib/industries.ts` — 6 industry definitions (challenges, approach, systems, case study)
- `src/lib/projects.ts` — 6 project case studies (challenge, approach, outcome, stats)
- `src/lib/brands.ts` — 8 manufacturer brands
- `src/lib/site.ts` — site-wide constants (phone, email, address, hours)

Edit those files to add/change content — pages regenerate from the data.

## Why these design decisions

See [research/03-build-brief.md](./research/03-build-brief.md) and [research/02-competitor-analysis.md](./research/02-competitor-analysis.md). Every colour, font, page and section is justified there with competitive intelligence on the Ghana HVAC market.
