# Atlan Performance | Complete Style Guide

**Version:** 1.0  
**Date:** December 2025  
**Status:** Production Ready  
**Owner:** Edgar Bonilla (Head Coach)  
**Contact:** erbonilla@outlook.com

---

## Table of Contents

1. [Brand Foundation](#1-brand-foundation)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Components](#5-components)
6. [Motion & Interaction](#6-motion--interaction)
7. [Iconography & Imagery](#7-iconography--imagery)
8. [Voice & Tone](#8-voice--tone)
9. [Accessibility Standards](#9-accessibility-standards)
10. [Implementation Reference](#10-implementation-reference)

---

## 1. Brand Foundation

### 1.1 Brand Essence

**One-Sentence Pitch:**
> A science-engineered, ocean-inspired digital home where busy endurance athletes find structured discipline, biomechanical mastery, and a community built for longevity.

**Core USP Statement:**
> "Science-engineered coaching, to achieve your full potential, for real-world athletes."

### 1.2 Brand Archetype: Sage + Hero

Atlan blends two archetypes to create a unique voice:

| Archetype | Characteristics | Application |
|-----------|-----------------|-------------|
| **Sage** | Wisdom, expertise, data-driven | Scientific protocols, biomechanical analysis, measured feedback |
| **Hero** | Courage, achievement, inspiration | Motivational messaging, triumph narratives, challenge framing |

**The Balance:** Every communication should contain ~70% Sage (data/wisdom) and ~30% Hero (motivation/encouragement).

### 1.3 The Four Pillars (Core Values)

| Pillar | Spanish | Description |
|--------|---------|-------------|
| **Scientific Integrity** | Integridad Científica | Protocols based on biomechanics, not guesswork |
| **Structured Discipline** | Disciplina Estructurada | Plans that adapt to real life without burnout |
| **Resilience** | Resiliencia | Cultivating the capacity to endure and overcome |
| **Athlete-Centric** | Centrado en el Atleta | Your physiology and context define the plan |

### 1.4 Design Philosophy: "Liquid Precision"

The visual and motion language combines two principles:

- **Liquid (Organic):** Flowing, natural movements inspired by water—used for brand/story elements
- **Precision (Mechanical):** Sharp, accurate, data-driven—used for metrics and UI feedback

### 1.5 Visual Mood: "The Morning Light"

Unlike aggressive "no pain no gain" brands, Atlan uses a calm, focused, powerful aesthetic:

- **Lighting:** High exposure, natural light, golden hour (sunrise preferred)
- **Environment:** Blue water (ocean or pool), clean backgrounds, minimal clutter
- **Subjects:** Athletes in "flow state"—strong, focused, NOT agonized or exhausted
- **Composition:** Rule of thirds, leading lines, depth of field

---

## 2. Color System

### 2.1 Brand Color Palette

| Color Name | Hex Code | Role | Semantic Meaning |
|------------|----------|------|------------------|
| **Abyss Navy** | `#0B2A3C` | Primary backgrounds, text | Authority, depth, trust |
| **Tide Teal** | `#0E8A9A` | Accents, data lines, secondary CTAs | Energy, ocean vitality |
| **Coral Spark** | `#FF6A3D` | Primary CTAs, alerts, thresholds | Action, urgency, achievement |
| **Foam** | `#ECF7F8` | Light backgrounds, dark mode text | Clarity, openness, breathing room |

### 2.2 Extended Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Coral Dark** | `#E0552D` | Coral Spark hover state |
| **Teal Dark** | `#0A6B78` | Tide Teal hover state |
| **Abyss Light** | `#0F3A50` | Lighter Abyss for layering |
| **White** | `#FFFFFF` | Neutral backgrounds |
| **Black** | `#000000` | Maximum contrast text |

### 2.3 WCAG Contrast Compliance

| Background | Text Color | Contrast Ratio | WCAG Level | Use Case |
|------------|------------|----------------|------------|----------|
| Abyss Navy | Foam | 11.8:1 | AAA ✅ | Body text (dark mode) |
| Abyss Navy | Coral Spark | 5.2:1 | AA ✅ | CTAs, highlights |
| Abyss Navy | Tide Teal | 3.8:1 | Large text only ⚠️ | Headings 18px+ bold, 24px+ regular |
| Foam | Abyss Navy | 11.8:1 | AAA ✅ | Body text (light mode) |
| White | Coral Spark | 4.8:1 | AA ✅ | Button text |

> **⚠️ Critical Rule:** Never use Tide Teal for small body text on dark backgrounds. Reserve for accent elements, icons, and large headings only.

### 2.4 Color Application by Mode

**Dark Mode (Default):**
```
Background: Abyss Navy (#0B2A3C)
Body Text: Foam (#ECF7F8)
Headings: Foam or Coral Spark
Primary CTA: Coral Spark (#FF6A3D)
Secondary CTA: Tide Teal outline
Accents: Tide Teal (#0E8A9A)
```

**Light Mode:**
```
Background: Foam (#ECF7F8)
Body Text: Abyss Navy (#0B2A3C)
Headings: Abyss Navy
Primary CTA: Coral Spark (#FF6A3D)
Secondary CTA: Abyss Navy outline
Accents: Tide Teal (#0E8A9A)
```

### 2.5 CSS Custom Properties

```css
:root {
  /* Primary Colors */
  --color-abyss-navy: #0B2A3C;
  --color-tide-teal:  #0E8A9A;
  --color-coral-spark:#FF6A3D;
  --color-foam:       #ECF7F8;
  
  /* Interaction States */
  --color-coral-dark: #E0552D;
  --color-teal-dark:  #0A6B78;
  --color-abyss-light:#0F3A50;
  
  /* Neutrals */
  --color-white:      #FFFFFF;
  --color-black:      #000000;
}
```

---

## 3. Typography

### 3.1 Font Families

| Font | Weight(s) | Role | Voice |
|------|-----------|------|-------|
| **Outfit** | 700, 800 | Logo wordmark ONLY | Brand identity |
| **Montserrat** | 600, 700, 800 | Headings, CTAs, section titles | "Performance Voice" |
| **Lato** | 300, 400, 700 | Body text, descriptions, UI | "Clarity Voice" |
| **Roboto Mono** | 400, 500 | Metrics, timestamps, data | Data precision |

### 3.2 Font Import

```css
/* Outfit: Logo wordmark */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&display=swap');

/* Montserrat: Headings */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&display=swap');

/* Lato: Body text */
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

/* Roboto Mono: Data displays */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap');
```

### 3.3 Type Scale

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| **H1** | clamp(2rem, 5vw, 3rem) | Extra Bold (800) | 1.2 | -0.02em |
| **H2** | clamp(1.5rem, 4vw, 2rem) | Bold (700) | 1.2 | -0.02em |
| **H3** | clamp(1.25rem, 3vw, 1.5rem) | Bold (700) | 1.2 | -0.02em |
| **Body** | 1rem (16px) | Regular (400) | 1.5 | 0 |
| **Small** | 0.875rem (14px) | Regular (400) | 1.5 | 0 |
| **Tiny** | 0.75rem (12px) | Regular (400) | 1.5 | 0 |

### 3.4 Heading Styles

- **Transform:** Uppercase (for "Team Bold" aesthetic)
- **Font Family:** Montserrat
- **Margin Bottom:** 24px (--space-md)

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  margin-bottom: var(--space-md);
  text-transform: uppercase;
}
```

### 3.5 Logo Typography

- **Font:** Outfit
- **Weight:** Bold (700)
- **Case:** Lowercase
- **Usage:** Logo wordmark exclusively—never for headings or body text

```css
.logo-text {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  letter-spacing: 0;
}
```

### 3.6 Data Typography

```css
.text-data {
  font-family: 'Roboto Mono', monospace;
  font-variant-numeric: tabular-nums;
}
```

---

## 4. Spacing & Layout

### 4.1 Spacing Scale (8px Base)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 0.5rem (8px) | Tight internal spacing |
| `--space-sm` | 1rem (16px) | Default element spacing |
| `--space-md` | 1.5rem (24px) | Section padding, margins |
| `--space-lg` | 2rem (32px) | Large component spacing |
| `--space-xl` | 3rem (48px) | Section breaks |
| `--space-2xl` | 4rem (64px) | Major sections |
| `--space-3xl` | 6rem (96px) | Hero/banner spacing |

### 4.2 Responsive Breakpoints

| Breakpoint | Value | Target Device |
|------------|-------|---------------|
| **sm** | 640px | Large phones |
| **md** | 768px | Tablets |
| **lg** | 1024px | Laptops/Desktops |
| **xl** | 1280px | Large monitors |
| **2xl** | 1536px | Ultra-wide screens |

### 4.3 Container

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}
```

### 4.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Small elements, tags |
| `--radius-md` | 8px | Buttons, cards |
| `--radius-lg` | 16px | Large cards, modals |
| `--radius-full` | 9999px | Pills, avatars |

### 4.5 Shadow System

**Light Mode Shadows:**
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

**Dark Mode Shadows (Teal Glow):**
```css
--shadow-dark-sm: 0 1px 2px 0 rgba(14, 138, 154, 0.1);
--shadow-dark-md: 0 4px 6px -1px rgba(14, 138, 154, 0.15);
```

### 4.6 Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | 1 | Default stacking |
| `--z-dropdown` | 100 | Dropdowns, menus |
| `--z-sticky` | 200 | Sticky headers |
| `--z-modal` | 500 | Modals, overlays |
| `--z-tooltip` | 600 | Tooltips |

---

## 5. Components

### 5.1 Buttons

**Touch Target:** All buttons must have a minimum height of 48px for mobile accessibility.

#### Primary Button (Coral Spark)
- **Usage:** Main CTAs—"Join Subscription", form submissions
- **Background:** Coral Spark (#FF6A3D)
- **Text:** White
- **Hover:** Coral Dark (#E0552D)

```css
.btn-primary {
  background-color: var(--color-coral-spark);
  color: var(--color-white);
  min-height: 48px;
  padding: 12px 24px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn-primary:hover {
  background-color: var(--color-coral-dark);
  transform: translateY(-2px);
}
```

#### Secondary Button (Tide Teal Outline)
- **Usage:** Secondary actions—"Learn More"
- **Background:** Transparent
- **Border:** Tide Teal (#0E8A9A)
- **Text:** Tide Teal (dark mode) / Abyss Navy (light mode)

```css
.btn-secondary {
  background-color: transparent;
  border: 2px solid var(--color-tide-teal);
  color: var(--color-tide-teal);
}
```

#### Ghost Button
- **Usage:** Subtle actions in navigation, toggles
- **Background:** Transparent
- **Border:** None
- **Text:** Foam (dark mode) / Abyss Navy (light mode)

### 5.2 Cards

#### Dark Mode Card
```css
.card {
  background-color: var(--color-abyss-light);
  border: 1px solid rgba(14, 138, 154, 0.2);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  box-shadow: var(--shadow-dark-md);
}
```

#### Light Mode Card
```css
.card-light {
  background-color: var(--color-white);
  border: 1px solid rgba(11, 42, 60, 0.1);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  box-shadow: var(--shadow-md);
}
```

#### Card with Accent Border
```css
.card-accent {
  border-left: 4px solid var(--color-tide-teal);
}
```

### 5.3 Forms

#### Input Fields
- **Background:** Slightly lighter than card background
- **Border:** 1px solid with Tide Teal on focus
- **Border Radius:** 8px
- **Min Height:** 48px

```css
.form-input {
  width: 100%;
  padding: 12px 16px;
  min-height: 48px;
  background-color: rgba(236, 247, 248, 0.05);
  border: 1px solid rgba(14, 138, 154, 0.3);
  border-radius: var(--radius-md);
  color: var(--color-foam);
  font-family: var(--font-body);
  font-size: var(--size-body);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-tide-teal);
  box-shadow: 0 0 0 3px rgba(14, 138, 154, 0.2);
}
```

#### Error States
```css
.form-input[aria-invalid="true"] {
  border-color: var(--color-coral-spark);
  background-color: rgba(255, 106, 61, 0.05);
}

.form-error {
  color: var(--color-coral-spark);
  font-size: var(--size-small);
  margin-top: 4px;
}
```

#### Success States
```css
.form-success {
  background-color: rgba(14, 138, 154, 0.1);
  color: var(--color-tide-teal);
  padding: var(--space-md);
  border-radius: var(--radius-md);
}
```

### 5.4 Navigation

#### Sticky Header
- **Background:** Abyss Navy (dark mode) / Foam (light mode)
- **Height:** 64px (desktop), 56px (mobile)
- **Z-Index:** 200

#### Mobile Menu
- **Trigger:** Hamburger icon at <768px
- **Overlay:** Full-screen with Abyss Navy background
- **Navigation Links:** Stacked vertically with 48px touch targets

### 5.5 Data Display Components

#### Metric Card
```css
.metric-card {
  text-align: center;
  padding: var(--space-lg);
}

.metric-value {
  font-family: var(--font-data);
  font-size: var(--size-h1);
  font-weight: var(--weight-bold);
  color: var(--color-coral-spark);
}

.metric-label {
  font-size: var(--size-small);
  color: var(--color-tide-teal);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}
```

### 5.6 Glassmorphism System

Glassmorphism reinforces Atlan's "Liquid Precision" philosophy by evoking water, transparency, and the "Morning Light" aesthetic.

#### Glass Variants

**Primary Glass (Cards, Modals):**
```css
.glass {
  background: rgba(11, 42, 60, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(14, 138, 154, 0.2);
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(236, 247, 248, 0.1);
}
```

**Secondary Glass (Subtle Elements):**
```css
.glass-subtle {
  background: rgba(11, 42, 60, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(14, 138, 154, 0.15);
  border-radius: 12px;
}
```

**Accent Glass (CTAs, Highlights):**
```css
.glass-accent {
  background: rgba(14, 138, 154, 0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(14, 138, 154, 0.4);
  border-radius: 12px;
}
```

#### Glass CSS Variables

```css
:root {
  /* Glass Backgrounds */
  --glass-bg-dark: rgba(11, 42, 60, 0.7);
  --glass-bg-dark-subtle: rgba(11, 42, 60, 0.5);
  --glass-bg-dark-strong: rgba(11, 42, 60, 0.85);
  --glass-bg-light: rgba(236, 247, 248, 0.7);
  --glass-bg-accent: rgba(14, 138, 154, 0.25);
  
  /* Glass Borders */
  --glass-border-teal: rgba(14, 138, 154, 0.2);
  --glass-border-teal-strong: rgba(14, 138, 154, 0.4);
  
  /* Glass Blur */
  --glass-blur-sm: blur(8px);
  --glass-blur-md: blur(12px);
  --glass-blur-lg: blur(16px);
  --glass-blur-xl: blur(24px);
  
  /* Glass Shadows */
  --glass-shadow-md: 0 8px 32px rgba(0, 0, 0, 0.3);
  --glass-shadow-glow: 0 8px 32px rgba(14, 138, 154, 0.2);
  
  /* Glass Highlight */
  --glass-highlight: inset 0 1px 0 rgba(236, 247, 248, 0.1);
}
```

#### Glass Application Guide

| Component | Glass Variant | Blur | Opacity |
|-----------|---------------|------|---------|
| Navigation Header | Primary Strong | 16px | 85% |
| Cards | Primary | 16px | 70% |
| Modals/Overlays | Primary Strong | 24px | 85% |
| Dropdowns | Subtle | 12px | 50% |
| Feature Highlights | Accent | 12px | 25% |

#### Glass Hover State

```css
.glass-card:hover {
  transform: translateY(-4px);
  background: rgba(11, 42, 60, 0.8);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(14, 138, 154, 0.3);
}
```

#### Browser Fallback

```css
@supports not (backdrop-filter: blur(16px)) {
  .glass {
    background: rgba(11, 42, 60, 0.95);
  }
}
```

---

## 6. Motion & Interaction

### 6.1 Transition Values

```css
/* Liquid: For brand/story elements */
--transition-liquid: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Precision: For data/UI elements */
--transition-snap: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

/* Hover: Quick feedback */
--transition-hover: transform 0.3s ease-out;

/* Page: Page transitions */
--transition-page: opacity 0.4s ease-in-out;
```

### 6.2 When to Use Each Transition

| Transition | Use Cases |
|------------|-----------|
| **Liquid** | Hero images, backgrounds, navigation menus, page reveals, card hover effects |
| **Precision** | Form validation, button clicks, metric counters, data chart updates, toggle switches |
| **Hover** | Button lifts, link underlines, icon rotations |

### 6.3 Animation Classes

#### Fade In (Page Load)
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

#### Count Up (Metrics)
```css
@keyframes countUp {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-count-up {
  animation: countUp 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### Pulse (Notifications)
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### 6.4 Hover Behaviors

**Buttons:**
```css
.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

**Cards:**
```css
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

---

## 7. Iconography & Imagery

### 7.1 Icon System

### 7.1 Icon Library: Phosphor Icons

**Primary Library:** [Phosphor Icons](https://phosphoricons.com/)

Phosphor Icons was selected for its rounded, friendly forms that align with the Outfit logo font and its support for multiple weights matching the "Liquid to Precision" spectrum.

#### Installation

```bash
npm install @phosphor-icons/react
```

#### Icon Weights

| Weight | Stroke | Use Case | Layer |
|--------|--------|----------|-------|
| **Thin** | 1px | Decorative, large sizes | Liquid (softest) |
| **Light** | 1.5px | Secondary UI elements | Liquid |
| **Regular** | 2px | Default UI icons | Balanced |
| **Bold** | 2.5px | Emphasis, CTAs | Precision |
| **Fill** | Solid | Active states, selection | Precision |

#### Icon Sizing

| Context | Size | CSS Variable |
|---------|------|--------------|
| Inline with text | 16px | `--icon-sm` |
| Standard UI | 24px | `--icon-md` |
| Feature icons | 32px | `--icon-lg` |
| Pillar/Hero icons | 48px | `--icon-xl` |

#### Core Icon Mapping

**Pillar Icons:**

| Pillar | Phosphor Icon | Weight | Color |
|--------|---------------|--------|-------|
| Scientific Integrity | `Flask` or `Atom` | Regular | Tide Teal |
| Structured Discipline | `CalendarCheck` or `GridFour` | Regular | Tide Teal |
| Resilience | `Mountains` or `Waves` | Regular | Tide Teal |
| Athlete-Centric | `HeartHalf` or `UserFocus` | Regular | Tide Teal |

**Navigation Icons:**

| Action | Phosphor Icon | Weight |
|--------|---------------|--------|
| Home | `House` | Regular |
| Programs | `SwimmingPool` | Regular |
| Schedule | `Calendar` | Regular |
| Menu (mobile) | `List` | Bold |
| Close | `X` | Bold |
| Light mode | `Sun` | Regular |
| Dark mode | `Moon` | Regular |
| Language | `Globe` | Regular |

**Program Icons:**

| Program | Phosphor Icon |
|---------|---------------|
| Open Water | `Waves` |
| Pool Masters | `SwimmingPool` |
| Triathlon | `Medal` |
| Juniors | `Student` |

#### Usage Example

```jsx
import { Flask, Waves, Sun, Moon } from '@phosphor-icons/react';

// Basic usage
<Flask size={24} color="var(--color-tide-teal)" />

// With weight variant
<Waves size={48} weight="light" />

// Bold for emphasis
<Sun size={24} weight="bold" />
```

#### Icon Context Provider

```jsx
import { IconContext } from '@phosphor-icons/react';

<IconContext.Provider
  value={{
    color: 'currentColor',
    size: 24,
    weight: 'regular',
  }}
>
  {children}
</IconContext.Provider>
```

### 7.2 Photography Guidelines

**DO:**
- Use high exposure, natural lighting (golden hour preferred)
- Show athletes in "flow state"—focused, strong, composed
- Include underwater shots with sunlight rays
- Capture proper technique demonstrations
- Show post-workout camaraderie and genuine smiles
- Use clean backgrounds with minimal clutter

**DON'T:**
- Show red faces, grimacing, "suffer porn"
- Use dark, moody lighting
- Use generic stock photos of fitness models
- Include cluttered gym environments
- Show agonized or exhausted expressions

### 7.3 Background Patterns: "The Currents"

Subtle topographic patterns overlaid at 5% opacity on Abyss Navy backgrounds.

**Linear Pattern:**
```css
.bg-currents {
  background-color: var(--color-abyss-navy);
  background-image: 
    repeating-linear-gradient(
      45deg,
      rgba(14, 138, 154, 0.05) 0px,
      rgba(14, 138, 154, 0.05) 2px,
      transparent 2px,
      transparent 12px
    );
}
```

**Organic Pattern:**
```css
.bg-currents-organic {
  background-color: var(--color-abyss-navy);
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(14, 138, 154, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(14, 138, 154, 0.03) 0%, transparent 50%);
}
```

### 7.4 Image Optimization

| Type | Max Size | Format | Notes |
|------|----------|--------|-------|
| Hero images | <200KB | WebP | Include blur placeholder |
| Thumbnails | <50KB | WebP | Lazy load below fold |
| Icons | <5KB | SVG | Inline when possible |
| Logo | <10KB | SVG | Include PNG fallback |

### 7.5 File Naming Convention

**Format:** `Atlan_[Category]_[Descriptor]_[Width]_v[Version]_[YYYYMMDD]`

**Examples:**
- `Atlan_Hero_MorningSwim_1920px_v1.0_20251209.webp`
- `Atlan_Icon_Sun_512px_v1.0_20251209.svg`
- `Atlan_Athlete_JuanPerez_800px_v1.0_20251209.jpg`

**Categories:**
- `Hero` — Homepage hero images
- `Program` — Program page visuals
- `Athlete` — Testimonial photos
- `Icon` — UI icons and symbols
- `Logo` — Logo variations

---

## 8. Voice & Tone

### 8.1 The Sage + Hero Balance

Every piece of copy should blend:
- **70% Sage:** Data, expertise, measured guidance
- **30% Hero:** Encouragement, achievement, motivation

### 8.2 Good Examples

**Progress Feedback:**
> **Spanish:** "Tu ritmo de nado fue 2:15/100m la semana pasada—8% más rápido que tu línea base. Los datos muestran que estás listo para agregar trabajo de umbral. Vamos a exigirte."
>
> **English:** "Your swim pace was 2:15/100m last week—8% faster than your baseline. The data shows you're ready to add threshold work. Let's push."

**Missed Session:**
> **Spanish:** "Veo que saltaste el entrenamiento del miércoles. La vida pasa—lo importante es que vuelvas hoy. Tu próxima sesión: técnica de brazada, 45 min."
>
> **English:** "I see you missed Wednesday's session. Life happens—the important thing is you're back today. Your next session: stroke technique, 45 min."

### 8.3 Bad Examples (What to Avoid)

**Pure Hero (No Sage):**
> "¡Lo aplastaste! ¡Sigue moliendo! ¡Sin dolor no hay ganancia!"

*Why it fails:* No data, purely motivational fluff

**Pure Sage (No Hero):**
> "Tu umbral de lactato indica una capacidad anaeróbica subóptima relativa a tu VO2max proyectado."

*Why it fails:* Too clinical, no encouragement

**Shaming:**
> "Otra sesión perdida. ¿Cuándo te vas a tomar esto en serio?"

*Why it fails:* Creates guilt instead of support

### 8.4 Key Phrases by Language

| Context | Spanish | English |
|---------|---------|---------|
| Primary CTA | "Suscripción Directa" | "Direct Subscription" |
| Secondary CTA | "Saber más" | "Learn more" |
| Headline | "Coaching de resistencia diseñado con ciencia, nacido del océano" | "Science-engineered endurance coaching, born from the ocean" |
| Newsletter | "Únete al Equipo" | "Join the Squad" |
| Form Success | "¡Listo! Te contactaremos en 24 horas" | "All set! We'll contact you within 24 hours" |

---

## 9. Accessibility Standards

### 9.1 WCAG 2.2 AA Compliance

All interfaces must meet these requirements:

| Requirement | Standard | Implementation |
|-------------|----------|----------------|
| Color Contrast | 4.5:1 (normal text), 3:1 (large text) | Use approved color pairings only |
| Touch Targets | 48px × 48px minimum | All buttons, links, form elements |
| Keyboard Navigation | Full support | Tab order, focus states |
| Screen Readers | Semantic HTML + ARIA | Labels, roles, live regions |
| Reduced Motion | Respect preference | @prefers-reduced-motion |

### 9.2 Focus States

All interactive elements must have visible focus:

```css
*:focus-visible {
  outline: 3px solid var(--color-coral-spark);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

### 9.3 Skip Navigation

Include a skip link for keyboard users:

```css
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  padding: var(--space-sm);
  background-color: var(--color-coral-spark);
  color: var(--color-white);
  font-weight: 700;
  z-index: 500;
  transition: top 0.2s;
}

.skip-link:focus {
  top: 0;
}
```

### 9.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 9.5 Screen Reader Utilities

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## 10. Implementation Reference

### 10.1 Required Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-i18next": "^13.5.0",
    "i18next": "^23.7.0",
    "js-cookie": "^3.0.5",
    "react-ga4": "^2.1.0"
  }
}
```

### 10.2 Default Settings

| Setting | Default Value | Storage Method |
|---------|---------------|----------------|
| Language | Spanish (es) | Cookie: `atlan_lang` |
| Theme | Dark Mode | Cookie: `atlan_theme` |
| Cookie Expiry | 1 year | — |

> **⚠️ Important:** Do NOT use localStorage. Use cookies for persistence.

### 10.3 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Score (Mobile) | >90 |
| First Contentful Paint | <1.5s |
| Largest Contentful Paint | <2.5s |
| Cumulative Layout Shift | <0.1 |
| Hero Image Size | <200KB |
| Thumbnail Size | <50KB |

### 10.4 Project Structure

```
atlan-website/
├── public/
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── atlan-variables.css
│   ├── utils/
│   │   ├── i18n.js
│   │   └── analytics.js
│   ├── locales/
│   │   ├── es.json
│   │   └── en.json
│   └── App.jsx
├── package.json
└── README.md
```

### 10.5 Implementation Checklist

**Fonts:**
- [ ] All fonts imported (Outfit, Montserrat, Lato, Roboto Mono)
- [ ] Font fallbacks defined

**Colors:**
- [ ] CSS custom properties defined
- [ ] Dark mode tested with all components
- [ ] Light mode tested with all components
- [ ] Color contrast validated (WAVE or axe DevTools)

**Components:**
- [ ] All buttons meet 48px touch target
- [ ] Form fields have proper ARIA labels
- [ ] Error/success states implemented
- [ ] Focus states visible on all interactive elements

**Accessibility:**
- [ ] Skip navigation link functional
- [ ] Keyboard navigation tested
- [ ] Screen reader tested
- [ ] Reduced motion preference respected

**Performance:**
- [ ] Images optimized and lazy loaded
- [ ] Fonts preloaded
- [ ] Code split by route
- [ ] Lighthouse audit passed

---

## Appendix: Quick Reference

### Color Hex Codes
```
Abyss Navy:   #0B2A3C
Tide Teal:    #0E8A9A
Coral Spark:  #FF6A3D
Foam:         #ECF7F8
```

### Font Stack
```
Logo:     Outfit, sans-serif
Headings: Montserrat, sans-serif
Body:     Lato, sans-serif
Data:     Roboto Mono, monospace
```

### Key Transitions
```css
Liquid:    all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
Precision: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
Hover:     transform 0.3s ease-out
```

### Breakpoints
```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | December 2025 | Atlan Team | Initial consolidated style guide |

**Support**

- Technical Questions: erbonilla@outlook.com
- Related Documents:
  - `Atlan_MVP_PRD_USP_v1.1.md`
  - `Atlan_Technical_Implementation_v1.1.md`
  - `Atlan_CSS_Variables_Design_System_v1.1.md`
