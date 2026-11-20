---
name: Atlan Performance
description: Science-engineered endurance coaching UI — liquid precision, athletic clarity
colors:
  abyss-navy: "#0B2A3C"
  abyss-light: "#0F3A50"
  tide-teal: "#0E8A9A"
  teal-dark: "#0A6B78"
  teal-fill: "#0B7382"
  teal-bright: "#3BAFC0"
  coral-spark: "#FF6A3D"
  coral-dark: "#E0552D"
  coral-glow: "#FF8358"
  foam: "#ECF7F8"
  foam-secondary: "#C5D9DC"
  foam-muted: "#9BB5BA"
  light-bg-primary: "#F4F9FA"
  light-bg-secondary: "#E8F1F3"
  light-bg-tertiary: "#D5E4E8"
  light-text-primary: "#0B2A3C"
  light-text-secondary: "#1A4558"
  light-text-muted: "#3D6373"
  light-border: "#B7D0D6"
  coral-light-optimized: "#C2410C"
  teal-light-optimized: "#0F766E"
typography:
  display:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(1.25rem, 3vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Lato, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.06em"
  logo:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 700
  data:
    fontFamily: "Roboto Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
  meta:
    fontFamily: "Lato, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.02em"
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.75rem"
  xl: "1rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  2xl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.coral-spark}"
    textColor: "{colors.abyss-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.coral-glow}"
    textColor: "{colors.abyss-navy}"
  button-secondary:
    backgroundColor: "{colors.teal-fill}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foam}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.coral-spark}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
  card-default:
    backgroundColor: "{colors.abyss-navy}"
    textColor: "{colors.foam}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  input-default:
    backgroundColor: "{colors.abyss-light}"
    textColor: "{colors.foam}"
    rounded: "{rounded.md}"
    height: "3rem"
    padding: "0.75rem 1rem"
---

# Design System: Atlan Performance

## Overview

**Creative North Star: "Liquid Precision"**

Atlan Performance’s interface joins the organic calm of open water with the exactness of training science. Surfaces read as submerged and measured—deep navy fields, clear foam type, scarce coral action—while interactive moments snap with athletic clarity: solid fills, decisive CTAs, minimal decorative translucency. The mood is morning light over water: high exposure, focused power. Sage leads (~70% wisdom and protocol); Hero encourages (~30%), never hype.

Personality is Sage + Hero in visual form: authority and data first, encouragement second. Density stays breathable and mobile-first. Hierarchy is carried by type scale, coral rarity, and tonal navy steps—not chrome clutter or glass wallpaper. Dual theme is first-class: dark Abyss is the default brand stage; light mode keeps the same roles with WCAG-optimized coral and teal.

**Confirmed visual rejections:** neon sport kitsch, purple SaaS defaults, aggressive “no pain no gain” gym culture; and soft wellness pastel / spa-brochure aesthetics.

**Key Characteristics:**
- Ocean-depth dark default with optional light surfaces
- Athletic clarity on controls: solid coral/teal fills, rare ghost outlines
- Hybrid depth: tonal navy layering; glass reserved for sticky chrome and selective elevation
- Coral as scarce action energy; teal as secondary/featured accent
- Liquid motion for story moments; snap motion for UI feedback
- Outfit reserved for logo; Montserrat for performance voice; Lato for clarity

## Colors

An ocean authority palette: deep navy stage, teal energy, coral action, foam clarity—plus a parallel light-mode set tuned for WCAG AA+.

### Primary
- **Abyss Navy** (`{colors.abyss-navy}`): Primary dark backgrounds, layout shell, authority field. Default canvas.
- **Abyss Light** (`{colors.abyss-light}`): Layered surfaces, input wells, elevated panels within the abyss.

### Secondary
- **Tide Teal** (`{colors.tide-teal}`): Energy accent—borders, glows, selection, featured emphasis. It is a *surface* hue: it does not carry a white label or serve as text on the abyss, so it splits into two working roles below.
- **Teal Fill** (`{colors.teal-fill}`): Solid secondary-CTA fill, the one dark enough to take a white label at AA. **Teal Dark** (`{colors.teal-dark}`) is its hover.
- **Teal Bright** (`{colors.teal-bright}`): Teal as *text and icons* on Abyss surfaces—a lifted Tide Teal, not a neon cyan.
- **Teal Light Optimized** (`{colors.teal-light-optimized}`): Tide Teal’s light-mode stand-in for AA contrast on pale surfaces.

### Tertiary
- **Coral Spark** (`{colors.coral-spark}`): Primary action—main CTAs, focus rings, alerts, popular badges. It keeps its full brand value in both themes and carries an **Abyss Navy** label, never white. **Coral Glow** (`{colors.coral-glow}`) is hover: the fill brightens, because the ink is dark.
- **Coral Dark** (`{colors.coral-dark}`): Legacy deepening tone; not used behind a label.
- **Coral Light Optimized** (`{colors.coral-light-optimized}`): Coral as *text and icons* on pale surfaces, and the light-mode coral fill under a white label.

### Neutral
- **Foam** (`{colors.foam}`): Primary text and light accents on dark; clarity on the abyss.
- **Foam Secondary / Muted** (`{colors.foam-secondary}`, `{colors.foam-muted}`): Solid AA hierarchy on abyss—prefer these over `foam/NN` opacity stacks.
- **Light BG Primary / Secondary / Tertiary** (`{colors.light-bg-primary}`, `{colors.light-bg-secondary}`, `{colors.light-bg-tertiary}`): Ocean-tinted light canvases (morning foam), not generic gray.
- **Light Text Primary / Secondary / Muted** (`{colors.light-text-primary}`, `{colors.light-text-secondary}`, `{colors.light-text-muted}`): Abyss-rooted type hierarchy on light surfaces.
- **Light Border** (`{colors.light-border}`): Light-mode strokes and dividers.

### Named Rules
**The Coral Scarcity Rule.** Coral Spark is the action voice. Prefer it for primary CTAs and critical focus; do not flood screens with coral fills.

**The Tide Teal Body Ban.** Never use Tide Teal itself for text on dark backgrounds—it fails AA at every size. Use Foam for body; when an accent must read as text or an icon on the abyss, use **Teal Bright**.

**The Dark Ink on Coral Rule.** White never sits on Coral Spark; the pairing tops out near 2.9:1. The primary control is bright coral with Abyss Navy ink, and it hovers *brighter*. A coral that has been darkened enough to carry white is no longer Coral Spark.

**The Dual-Theme Parity Rule.** Dark and light share roles. On light theme, swap to Coral Light Optimized and Teal Light Optimized for fills and accents that must meet AA on pale surfaces.

## Typography

**Display Font:** Montserrat (with sans-serif fallback)  
**Body Font:** Lato (with sans-serif fallback)  
**Logo Font:** Outfit (logo wordmark only)  
**Data Font:** Roboto Mono (metrics and numerical displays)

**Character:** Montserrat carries the performance voice—bold, athletic, confident. Lato carries clarity for reading and UI. Outfit is brand mark only. Mono signals measured data, not decoration.

### Hierarchy
- **Display** (800, `clamp(2.25rem, 5.5vw, 3.5rem)`, 1.12, `-0.02em`): Page heroes and primary H1 moments (`.type-display`).
- **Headline** (700, `clamp(1.5rem, 4vw, 2rem)`, 1.2, `-0.015em`): Section H2 titles (`.type-headline`).
- **Title** (700, `clamp(1.25rem, 3vw, 1.5rem)`, 1.2): Card and subsection H3 titles (`.type-title`).
- **Body** (400, `1rem`, 1.65): Default copy; keep line length comfortable (~65ch via `.type-prose` / `max-w-prose`).
- **Label** (600, `0.875rem`, `0.06em` tracking, often uppercase on badges): UI labels, nav emphasis, button chrome (`.type-label`).
- **Meta** (400, `0.75rem`): Captions, timestamps, legal chrome (`.type-meta`).
- **Logo** (Outfit 700/800): Wordmark only—never for paragraphs or UI chrome.
- **Data** (Roboto Mono 500, ~0.875rem, tabular nums): Metrics, schedules, numerical readouts (`.type-data`).

### Named Rules
**The Outfit Fence.** Outfit is for the Atlan logo/wordmark only. Headings stay Montserrat; body stays Lato.

**The Performance Head Rule.** All headings use Montserrat at weight 700 (or heavier for hero emphasis); do not lighten headings into decorative thin display.

## Layout

Mobile-first product layout. Content lives in **`.container-atlan`**: full width, max **1280px**, horizontal padding **`{spacing.md}`** (1.5rem); at `md` and up, **`{spacing.lg}`** (2rem). Section rhythm uses `.section` vertical padding (`{spacing.xl}` / `{spacing.2xl}` on `md+`). Breakpoints follow Tailwind defaults: sm 640px, md 768px (hamburger → desktop nav), lg 1024px, xl 1280px.

Spacing scale is 8px-based: xs 8px → 2xl 64px. Touch targets minimum **48px**. Sticky header compresses on scroll; mobile nav is a full-screen abyss overlay. Within sections: more space above a heading than below it; tight clusters for related meta; generous gaps between major groups. Selection highlight uses Tide Teal (or Teal Light Optimized in light mode).

### Named Rules
**The 1280 Fence.** Primary marketing content stays inside the Atlan container (1280px). Full-bleed is reserved for heroes, backgrounds, and immersive media—not for dense copy columns.

**The One Path Rule.** Marketing surfaces keep one primary reading/conversion path; secondary actions stay quieter (ghost, text link) so coral remains scarce.

## Elevation & Depth

Hybrid glass: depth comes primarily from **tonal navy layering**, with **backdrop blur reserved for sticky chrome and selective elevated panels**—not as wallpaper behind every content block. Athletic clarity prefers solid or semi-opaque abyss panels for content; coral and teal glows mark action and featured energy only.

### Shadow Vocabulary
- **Glass** (`0 8px 32px rgba(0, 0, 0, 0.3)`): Elevated panels and scrolled header (light mode softens to ~`rgba(0,0,0,0.08)`).
- **Glow Coral** (`0 0 20px rgba(255, 106, 61, 0.3)` / stronger Tailwind `shadow-glow-coral`): Primary CTA emphasis.
- **Glow Teal** (`0 0 20px rgba(14, 138, 154, 0.3)` / stronger `shadow-glow-teal`): Secondary CTA and featured course emphasis.

Glass utilities exist (`.glass`, `.glass-subtle`, `.glass-strong`, `.glass-accent`) for chrome and rare elevated surfaces. Light mode swaps to white translucent fills with light borders when glass is used.

### Named Rules
**The Solid-First Rule.** Buttons, plan tiles, and primary content blocks prefer solid or tonal fills. Do not default every card to heavy blur glass.

**The Glow-Is-State Rule.** Coral/teal glows amplify CTAs and featured states; they are not ambient wallpaper behind every block.

## Shapes

Gently curved system radius: **sm 6px**, **md 8px** (buttons, inputs, nav chips), **lg 12px** (panels), **xl 16px**, **full** for pills and popular badges. Borders are hairline white/teal translucency on dark (`white/10`, `tide-teal/20–40`), not heavy ink outlines. Course pricing silhouettes may use larger rounding (`rounded-2xl`). Focus uses a **3px Coral Spark outline** with 2px offset (`:focus-visible`).

### Named Rules
**The Soft Instrument Rule.** Prefer medium radii (8–12px) for interactive instruments; reserve pills for badges and rare emphasis, not every control.

## Components

Philosophy: **athletic clarity — solid fills, minimal translucency.**

### Buttons
- **Shape:** Medium radius (`{rounded.md}` / 8px); Montserrat, wide tracking; `active:scale-95`; min height 48px (`px-6 py-3` md, up to `px-8 py-4` lg).
- **Primary:** Solid Coral Spark fill, Abyss Navy label, coral glow shadow; hover brightens to Coral Glow. Identical in both themes—the one control that does not swap.
- **Secondary:** Solid Teal Fill, white label, teal glow; hover Teal Dark. Light mode: Teal Light Optimized.
- **Ghost:** Transparent, Foam text, `border-white/20`, hover `white/10` wash.
- **Outline:** Transparent, 2px Coral Spark border and text; hover coral wash at 10% opacity.
- **Hover / Focus:** 200–300ms snap transitions; focus-visible uses global coral ring.

### Cards / Containers
- **Corner Style:** Panels use `{rounded.lg}`; course cards often `rounded-2xl`.
- **Background:** Prefer tonal Abyss Navy / Abyss Light (or solid white in light mode). Glass blur is optional for elevated chrome, not the default content wrapper.
- **Shadow Strategy:** Soft glass shadow when elevated; optional teal glow + slight lift on featured/hover.
- **Border:** `white/10` default; featured uses Tide Teal; popular badges use coral pills.
- **Internal Padding:** Typically `{spacing.lg}` (2rem) on course cards; tighter (`p-5`–`p-6`) on compact plan tiles.
- **Grouping:** Related content may use top hairline rules and proximity instead of nested cards.

### Inputs / Fields
- **Style:** Abyss Light well, `white/10` border, height 48px (`h-12`), Foam text, muted Foam placeholder.
- **Focus:** Border → Tide Teal; soft teal ring. Light mode uses light secondary bg and Teal Light Optimized focus.
- **Error:** Coral Spark helper text; invalid state via HeroUI `isInvalid`.

### Navigation
- Sticky header: Abyss/80–95% + blur (white/80–95% in light)—glass reserved here as chrome. Nav labels Montserrat-weight uppercase; active state marked with Coral Spark underline bar. Language toggle and theme control sit as bordered mini-instruments (`rounded-md`, `border-white/20`). Header CTA is a quiet ghost **“Contacto” / “Contact”** (coral primary lives on the hero and conversion closes, not in chrome). Below 768px: full-screen opaque abyss mobile menu overlay.

### Course Card (signature)
Pricing/program tier card with icon header, feature checklist, and primary coral CTA. Popular variant: teal-tinted surface, teal border/glow, coral “popular” pill. Hover lifts (~8px). Prefer readable solid/tonal body over decorative blur stacks.

## Do's and Don'ts

### Do:
- **Do** default to dark Abyss Navy and treat light mode as a first-class parallel theme with optimized coral/teal.
- **Do** use solid Coral Spark for primary CTAs and focus rings; Tide Teal for secondary actions and featured accents.
- **Do** put content in `.container-atlan` (max 1280px) with mobile-first spacing and ≥48px touch targets.
- **Do** use Outfit only on the logo; Montserrat on headings/CTAs; Lato on body; Roboto Mono on metrics.
- **Do** honor `prefers-reduced-motion` and keep coral scarce.

### Don't:
- **Don't** use Tide Teal for small body text on dark backgrounds.
- **Don't** apply Outfit to paragraphs, nav, or buttons.
- **Don't** flood the UI with coral fills, ambient glows, or glass blur on every surface.
- **Don't** invent neon sport kitsch, purple SaaS defaults, aggressive gym culture, or soft wellness-pastel spa looks.
- **Don't** use localStorage for theme/language—cookies only, per product constraints.
