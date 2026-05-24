# Phase 4 — Website Build Brief
**Client:** HVAC Technical GH
**Date:** 23 May 2026
**Goal:** Leapfrog the Ghana HVAC market from #9 (22/80) to challenger position (60+/80) within one release.

---

## 1. Design Direction

### Colour palette
| Role | Hex | Use |
|---|---|---|
| `--ink` Deep teal | `#0F4C5C` | Primary brand, hero text on light, dark sections |
| `--steel` Cool steel | `#1B2A41` | Dark surfaces, footer, project cards |
| `--signal` Signal orange | `#F26419` | CTAs only — buttons, links, micro-accents |
| `--paper` Warm paper | `#F6F4F0` | Default light background |
| `--frost` Cool frost | `#E9F1F2` | Section dividers, hover states |
| `--char` Carbon | `#0A0A0A` | Body text on light |

**Rationale (vs. competitors):**
Fox = red. Nesstra = navy + orange. Ideal Air = corporate blue. Prestige = blue. CETECH = navy + red. *Nobody owns teal.* Teal reads as engineered air + water + Ghanaian coast, and the signal-orange CTA pulls focus without competing with brand colour.

### Typography
- **Headings:** `Instrument Serif` (Google Fonts) — gives an editorial, premium voice. Used at clamp(2.5rem, 6vw, 5rem) for hero.
- **Body:** `Inter` — clean, tabular numerals for spec sheets and BTU figures.
- **Mono accent:** `JetBrains Mono` — used sparingly for technical readouts (SEER ratings, capacity).

### Photography & asset style
- Real Ghanaian project photography only — no stock.
- Where photography is missing, use AI-generated images calibrated to the brand: deep teal interiors, technicians on rooftops at golden hour, isometric mechanical-drawing illustrations.
- 3D model of a split-system AC unit as the hero scroll-reveal asset.
- Isometric line-illustrations for service icons (replacing clip-art).

### Animation
- **Hero scroll-reveal**: 3D AC unit assembles/disassembles as user scrolls. Uses Three.js + GSAP ScrollTrigger.
- **Section transitions**: clip-path reveal on each h2 (engineered, not "fade").
- **Project cards**: parallax depth on image, scale-up on hover.
- **Brand wall**: continuous marquee scroll of manufacturer logos.
- **CTAs**: magnetic hover, micro-shake on click confirmation.
- **Page transitions**: View Transitions API (Next.js 15+) with custom curtain reveal.
- `prefers-reduced-motion` respected — all motion replaced with static cross-fade.

### Things to AVOID (informed by competitor weaknesses)
- ❌ Generic stock photography (Prestige, Fox)
- ❌ Carousel-of-everything homepages
- ❌ "We are passionate about cooling" boilerplate (no winner uses this; only laggards do)
- ❌ 2015 blue corporate gradients
- ❌ Emoji checklists
- ❌ Auto-playing background video with sound
- ❌ Sidebar nav clutter (Nesstra's mistake)

---

## 2. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | SSR + ISR for SEO, file-based routing, image optimisation, partial pre-rendering |
| Language | **TypeScript** | Maintainability, fewer runtime bugs |
| Styling | **Tailwind CSS v4** | Fast, design-system enforced |
| Animation | **GSAP + ScrollTrigger + Lenis** | Cinematic scroll feel |
| 3D | **Three.js + React Three Fiber + Drei** | Hero unit, brand logo reveal |
| Forms | **React Hook Form + Zod** + Resend / Formspree | Validated, deliverable |
| Analytics | **Plausible** or Vercel Analytics | Privacy-first |
| Hosting | **Vercel** | Free tier, global edge, atomic deploys |
| Imagery | **Next/Image** + AI-generated WebP via skill | Auto-optimised |
| Icons | **Lucide React** + custom SVG | Consistent, performant |

---

## 3. Site Architecture (20 pages)

```
/                        Home
/about                   Story, founders, values, why-us
/services/               Index (all 8)
  /air-conditioning-installation
  /maintenance-servicing
  /design-consulting
  /vrf-systems
  /chillers
  /cold-rooms-refrigeration
  /ventilation-extraction
  /emergency-repairs
/industries/             Index (all 6)
  /residential
  /hospitality-restaurants
  /retail-shopping-malls
  /healthcare
  /offices-commercial
  /manufacturing-industrial
/projects                Gallery + featured case studies
/projects/[slug]         Individual case studies (placeholder for 3 dummies)
/brands                  Manufacturer wall (Daikin, Mitsubishi, LG, Samsung, Carrier, Midea, Gree, York)
/insights                Blog / educational content (CETECH-killer)
/insights/[slug]         Article template
/contact                 Form + map + WhatsApp + multi-channel
/quote                   Quote-request flow (sets us apart)
```

### Navigation
**Primary:** Services · Industries · Projects · About · Insights · Contact
**Sticky utility bar:** ☎ Phone · WhatsApp · "Get a quote" (signal orange button)

### CTA strategy
- **Primary:** "Get a free site assessment" → /quote (lead capture)
- **Secondary:** "Call us now" → tel: link
- **Tertiary:** "Message on WhatsApp"
- Every section ends with one CTA — never zero, never three.

---

## 4. Content Framework

### Homepage headline — three options
*(all use the proven "specific outcome + specific timeframe + Ghanaian authority" formula)*

1. **"Engineered air, installed right the first time."**
   *Ghana's HVAC specialists for the spaces that can't afford downtime — restaurants, hospitals, offices, homes.*

2. **"Ten years cooling Accra's most demanding spaces."**
   *Consulting. Installation. Maintenance. From split units to chillers — engineered to the spec, installed on schedule.*

3. **"Cooler buildings. Lower bills. Zero callbacks."**
   *Indigenous Ghanaian HVAC expertise — for residential, commercial and industrial clients across Accra.*

→ **Recommended: option 2.** Combines the proven "10 years" hook (used by every winner) with concrete service breadth and the Accra-specific local anchor.

### Value-proposition structure (3-up below hero)
| Pillar | Headline | Proof point |
|---|---|---|
| 01 | Designed for the spec | "Every system sized to BTU + climate + use-case — not guessed." |
| 02 | Installed on schedule | "Project-managed install, signed off on commissioning day." |
| 03 | Maintained for the long run | "Quarterly service plans that catch problems before they cost." |

### Section copy direction (per page)
- **Voice:** Engineer-led. Calm. Numbers and units used naturally (kW, BTU, SEER, COP).
- **Length:** No section longer than 80 words. Short paragraphs, big space.
- **Proof points everywhere:** every claim followed by a specific (years, projects, brands, response time).

### SEO keyword targets per page
| Page | Primary keyword | Supporting |
|---|---|---|
| / | hvac contractor accra | air conditioning ghana, ac installation accra |
| /services/vrf-systems | vrf installation ghana | daikin vrv accra, mitsubishi city multi ghana |
| /services/chillers | chiller maintenance accra | water-cooled chiller ghana |
| /industries/hospitality-restaurants | restaurant hvac accra | commercial kitchen ventilation ghana |
| /industries/healthcare | hospital hvac ghana | medical-grade hvac accra |
| /brands | daikin dealer ghana | mitsubishi dealer ghana, lg ac ghana |

---

## 5. Conversion Playbook

### Primary conversion goal
A submitted quote-request form (with photo of space + load estimate) — *not* a phone call. Why: gives the team a qualified lead with context, and a paper trail.

### Lead capture
- `/quote` is a 5-step form (use case → space → budget band → photo upload → contact). Multi-step lifts conversion 30–40% vs. single-form.
- All forms backed by **Resend** to deliver to `info@hvactechnicalgh.com` (to be created) AND WhatsApp via webhook.
- Anti-spam: hCaptcha + honeypot.

### Social proof plan (where to surface what)
| Where | What |
|---|---|
| Above the fold | "10+ years · 200+ installations · Across Accra" stat strip |
| Below hero | Client logo wall (real logos as project gets photographed) |
| Each service page | 1 testimonial + 1 mini case study |
| /projects | Full grid with filters by industry |
| Sticky footer bar | "Trusted by Achimota Retail Centre, [add real projects]" rotating |

### Trust signals checklist
- [ ] Founder photo + bio on /about
- [ ] Years in business — visible in nav and footer
- [ ] Manufacturer-authorised partnerships (verify and add real ones)
- [ ] Real Ghanaian addresses (McCarthy Hill confirmed)
- [ ] Direct WhatsApp + 2 phone numbers + email
- [ ] Google Map embed
- [ ] SSL + privacy policy + terms
- [ ] Open Graph + Twitter card on every page
- [ ] LocalBusiness schema markup
- [ ] Reviews schema with aggregateRating once Google reviews accumulate

---

## 6. Performance & accessibility targets
- Lighthouse 90+ on all four metrics (mobile and desktop)
- Largest Contentful Paint < 2.5s on 4G
- WCAG 2.1 AA across all pages
- `prefers-reduced-motion` honoured
- Keyboard navigation tested
- Colour contrast 4.5:1+ on all text

---

## 7. AI-generated imagery plan (using your `image-generator` skill)

Three scroll-stop assets:
1. **3D split-system AC unit** on white — for hero
2. **Exploded view** of the same unit showing components — for "How it works" section
3. **Transition animation** between assembled and exploded — for scroll reveal

Plus additional supporting imagery:
- Technician installing wall-mounted unit at golden hour, Accra rooftop
- Server-room cold-aisle shot (data-centre industry page)
- Restaurant kitchen ventilation hood (hospitality page)
- VRF outdoor unit array on commercial rooftop

---

## 8. Build order (phased)

| Sprint | Deliverable |
|---|---|
| 1 | Next.js scaffold, design tokens, layout shell, nav + footer |
| 2 | Home (hero + 3D placeholder, value props, project wall, brand wall, CTA) |
| 3 | About + 8 service pages |
| 4 | 6 industry pages + projects index |
| 5 | Contact + quote flow + insights stub |
| 6 | Polish: GSAP scroll, Three.js hero, AI imagery integration |
| 7 | QA + Lighthouse + a11y pass |

---

## DECISIONS NEEDED FROM CLIENT BEFORE BUILD

1. **Domain:** Keep `hvactechnicalgh.com` or new one?
2. **Real project list:** Confirm 5–10 named projects to surface (currently only Achimota Retail Centre is referenced).
3. **Brand partners:** Which manufacturers are you actually authorised to install? (Daikin, Mitsubishi, LG, Samsung, Carrier, Midea, Gree, others?)
4. **Founder photo + bio:** Yes/no?
5. **Email setup:** Create `info@hvactechnicalgh.com`?
6. **Quote-form recipient:** Where do form submissions go (email + WhatsApp number)?
7. **Existing assets:** Any real photography you can share (jobs, team, vehicles, premises)?

→ For Phase 5 we can **proceed with sensible placeholders for all of the above** and swap in real content later, OR pause for the answers. Both work.
