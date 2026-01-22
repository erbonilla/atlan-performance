---
name: atlan-performance
description: >
  Specialized skill for building the Atlan Performance PWA website—a bilingual (ES/EN) 
  React application for a swim and triathlon coaching club in Costa Rica. Use when: 
  (1) Creating React components following the "Liquid Precision" design system, 
  (2) Generating pages with Abyss Navy/Tide Teal/Coral Spark/Foam color palette, 
  (3) Implementing glassmorphism card effects with backdrop blur, 
  (4) Building bilingual i18n features with react-i18next, 
  (5) Applying WCAG 2.2 AA accessibility standards, 
  (6) Creating forms with validation and ARIA labels, 
  (7) Implementing dark/light theme toggling with cookies, 
  (8) Following the Atlan brand voice (70% Sage + 30% Hero),
  (9) Using Phosphor Icons with appropriate weights,
  (10) Building mobile-first responsive layouts,
  (11) Creating Program cards with dual CTAs and QuickFacts,
  (12) Implementing filter bars and quiz components.
  Triggers: "Atlan", "swim coaching", "Liquid Precision", "glassmorphism", 
  "bilingual PWA", "ocean-inspired", "Tide Teal", "Abyss Navy", "Coral Spark",
  "ProgramCard", "QuickFacts", "Running program".
---

# Atlan Performance PWA Skill

Build React components and pages for the Atlan Performance swim & triathlon coaching website following the "Liquid Precision" design philosophy.

**Tagline:** Science-engineered endurance coaching, born from the ocean.

## Quick Start

### Create a Component
```bash
python scripts/generate_component.py ComponentName --variant=card
```
Output: `src/components/ComponentName/ComponentName.jsx`, `ComponentName.module.css`, `index.js`

### Create a Page
```bash
python scripts/create_page.py PageName --route=/route-name
```
Output: `src/pages/PageName/PageName.jsx` with routing setup

### Validate Brand Compliance
```bash
python scripts/validate_brand.py src/components/MyComponent
```

---

## Design System Overview

### Brand Philosophy: "Liquid Precision"

The visual and motion language combines two principles:

| Principle | Character | Usage |
|-----------|-----------|-------|
| **Liquid** | Organic, flowing, water-inspired | Hero images, page reveals, navigation transitions |
| **Precision** | Sharp, accurate, data-driven | Buttons, form validation, metric counters |

### Visual Mood: "The Morning Light"
- High exposure, natural light, golden hour (sunrise)
- Blue water (ocean or pool), clean backgrounds
- Athletes in "flow state"—strong, focused, NOT agonized
- Calm, powerful aesthetic—NOT aggressive "no pain no gain"

---

## Color Palette (LOCKED - Never Alter)

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Abyss Navy | `#0B2A3C` | `--color-abyss-navy` | Primary backgrounds, text |
| Tide Teal | `#0E8A9A` | `--color-tide-teal` | Accents, borders, icons (**NEVER body text**) |
| Coral Spark | `#FF6A3D` | `--color-coral-spark` | Primary CTAs, alerts, focus rings |
| Foam | `#ECF7F8` | `--color-foam` | Light backgrounds, **ALL dark mode text** |

### Interaction States
```
Coral Dark    #E0552D   Coral Spark hover
Teal Dark     #0A6B78   Tide Teal hover
Abyss Light   #0F3A50   Layering on Abyss Navy
```

### WCAG Contrast Matrix
| Background | Foreground | Ratio | Status |
|------------|------------|-------|--------|
| Abyss Navy | Foam | 11.8:1 | ✅ AAA |
| Abyss Navy | Coral Spark | 5.2:1 | ✅ AA |
| Abyss Navy | Tide Teal | 3.8:1 | ⚠️ **Large text only (18px+)** |
| Foam | Abyss Navy | 11.8:1 | ✅ AAA |

---

## Critical Rules (MUST FOLLOW)

1. **NEVER use Tide Teal for body text** — Fails WCAG AA under 18px (3.8:1 contrast)
2. **Tags/Chips MUST use Foam text** — Border can be Tide Teal, text MUST be Foam
3. **All strings in translation files** — No hardcoded text, use `t('key')`
4. **Use cookies, NOT localStorage** — For theme/language persistence
5. **Minimum 48px touch targets** — For mobile accessibility
6. **Dark mode is DEFAULT** — Abyss Navy background on first load
7. **Voice balance: 70% Sage / 30% Hero** — Data-driven + encouraging
8. **Respect `prefers-reduced-motion`** — Disable animations when set
9. **Dual CTA on Program Cards** — Primary "Reservar prueba" + Secondary "Más información"

---

## Typography Stack

| Font | Variable | Usage |
|------|----------|-------|
| Outfit | `--font-logo` | Logo wordmark ONLY |
| Montserrat | `--font-heading` | Headings, CTA buttons, section titles |
| Lato | `--font-body` | Body text, UI elements, descriptions |
| Roboto Mono | `--font-data` | Metrics, timestamps, numerical data |

### Type Scale
```css
--size-h1: clamp(2rem, 5vw, 3rem);      /* 32-48px */
--size-h2: clamp(1.5rem, 4vw, 2rem);    /* 24-32px */
--size-h3: clamp(1.25rem, 3vw, 1.5rem); /* 20-24px */
--size-body: 1rem;                       /* 16px */
--size-small: 0.875rem;                  /* 14px */
```

---

## Programs Section Patterns

### Program Card (with Dual CTA)

```jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import QuickFacts from './QuickFacts';
import styles from './ProgramCard.module.css';

const ProgramCard = ({ program }) => {
  const { t } = useTranslation();
  const { slug, title, tags, quickFacts, shortDescription, coverImage } = program;

  return (
    <article className={`${styles.card} glass`}>
      <img 
        src={coverImage} 
        alt="" 
        className={styles.cardImage}
        loading="lazy"
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        
        {/* Tags - CRITICAL: Text must be Foam, not Tide Teal */}
        <div className={styles.tags} role="list">
          {tags.map((tag) => (
            <span key={tag} className={styles.tag} role="listitem">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Quick Facts Row */}
        <QuickFacts {...quickFacts} />
        
        <p className={styles.cardDescription}>{shortDescription}</p>
        
        {/* Dual CTA - Primary + Secondary */}
        <div className={styles.cardActions}>
          <button 
            className="btn btn-primary"
            onClick={() => handleBookTrial(slug)}
          >
            {t('cta.bookTrial')}
          </button>
          <Link to={`/programs/${slug}`} className="btn btn-ghost">
            {t('cta.moreInfo')}
          </Link>
        </div>
      </div>
    </article>
  );
};
```

```css
/* ProgramCard.module.css */
.card {
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}

@media (min-width: 768px) {
  .card {
    grid-template-columns: 300px 1fr;
  }
}

.cardImage {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  width: 100%;
}

.cardContent {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.cardTitle {
  font-family: var(--font-heading);
  font-size: var(--size-h3);
  font-weight: var(--weight-bold);
  color: var(--color-foam);
  text-transform: uppercase;
}

/* CRITICAL: Tags must use Foam for text */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.tag {
  padding: 4px 12px;
  border: 1px solid var(--color-tide-teal);
  border-radius: var(--radius-full);
  font-size: var(--size-small);
  font-weight: 500;
  color: var(--color-foam); /* NOT Tide Teal */
  background: transparent;
}

.cardDescription {
  color: var(--color-foam);
  line-height: var(--line-height-normal);
}

.cardActions {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-top: auto;
  padding-top: var(--space-md);
}

@media (min-width: 768px) {
  .cardActions {
    flex-direction: row;
  }
}

.cardActions .btn {
  min-height: 48px;
}

@media (max-width: 767px) {
  .cardActions .btn {
    width: 100%;
  }
}
```

### QuickFacts Component

```jsx
import { Timer, Barbell, Users } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';
import styles from './QuickFacts.module.css';

const QuickFacts = ({ duration, level, format }) => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.quickFacts} role="list" aria-label={t('programs.quickFacts')}>
      <span className={styles.fact} role="listitem">
        <Timer size={16} weight="regular" aria-hidden="true" />
        <span>{duration}</span>
      </span>
      <span className={styles.fact} role="listitem">
        <Barbell size={16} weight="regular" aria-hidden="true" />
        <span>{t(`levels.${level}`)}</span>
      </span>
      <span className={styles.fact} role="listitem">
        <Users size={16} weight="regular" aria-hidden="true" />
        <span>{t(`formats.${format}`)}</span>
      </span>
    </div>
  );
};
```

```css
/* QuickFacts.module.css */
.quickFacts {
  display: flex;
  gap: var(--space-md);
  padding: var(--space-sm) 0;
  border-top: 1px solid rgba(14, 138, 154, 0.2);
}

.fact {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-foam);
  font-size: var(--size-small);
}

.fact svg {
  color: var(--color-tide-teal);
  flex-shrink: 0;
}
```

### Program Filters

```jsx
import { useTranslation } from 'react-i18next';
import styles from './ProgramFilters.module.css';

const FILTER_OPTIONS = ['all', 'swimming', 'running', 'triathlon', 'juniors'];

const ProgramFilters = ({ activeFilter, onFilterChange }) => {
  const { t } = useTranslation();
  
  return (
    <nav 
      className={styles.filterBar} 
      role="navigation" 
      aria-label={t('programs.filterNavigation')}
    >
      <ul className={styles.filterList}>
        {FILTER_OPTIONS.map((key) => (
          <li key={key}>
            <button
              className={`${styles.filterChip} ${activeFilter === key ? styles.active : ''}`}
              onClick={() => onFilterChange(key)}
              aria-pressed={activeFilter === key}
            >
              {t(`filters.${key}`)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
```

```css
/* ProgramFilters.module.css */
.filterBar {
  overflow-x: auto;
  padding: var(--space-sm) 0;
  margin-bottom: var(--space-lg);
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.filterBar::-webkit-scrollbar {
  display: none;
}

.filterList {
  display: flex;
  gap: var(--space-sm);
  list-style: none;
  padding: 0;
  margin: 0;
}

.filterChip {
  padding: var(--space-xs) var(--space-md);
  border-radius: 9999px;
  font-family: var(--font-body);
  font-size: var(--size-small);
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: var(--transition-snap);
  background: rgba(11, 42, 60, 0.5);
  border: 1px solid rgba(14, 138, 154, 0.3);
  color: var(--color-foam);
  min-height: 44px;
}

.filterChip:hover {
  background: rgba(11, 42, 60, 0.7);
  border-color: var(--color-tide-teal);
}

.filterChip.active {
  background: var(--color-tide-teal);
  border-color: var(--color-tide-teal);
}

.filterChip:focus-visible {
  outline: 3px solid var(--color-coral-spark);
  outline-offset: 2px;
}
```

---

## Available Programs

| Program | Category | Icon (Phosphor) | Status |
|---------|----------|-----------------|--------|
| Natación para Adultos | swimming | SwimmingPool | Active |
| Natación para Juveniles | juniors | Student | Active |
| Aguas Abiertas | swimming | Waves | Active |
| Triatlón | triathlon | Medal | Active |
| **Running** | running | PersonSimpleRun | **NEW** |

### Running Program Data

```json
{
  "id": "running-program",
  "slug": "running",
  "title": { "es": "Running", "en": "Running" },
  "category": "running",
  "tags": {
    "es": ["Técnica", "Rendimiento", "Adultos"],
    "en": ["Technique", "Performance", "Adults"]
  },
  "quickFacts": {
    "duration": "60-90 min",
    "level": "all",
    "format": "group"
  },
  "shortDescription": {
    "es": "Coaching de carrera para triatletas y atletas de resistencia que buscan mejorar ritmo sin lesionarse.",
    "en": "Run coaching for triathletes and endurance athletes who want to improve pace without breaking down."
  },
  "icon": "PersonSimpleRun"
}
```

---

## Motion Philosophy

```css
/* Liquid - organic, flowing (hero images, page reveals) */
--transition-liquid: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Precision - mechanical, snappy (buttons, form validation) */
--transition-snap: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

/* Hover - quick feedback */
--transition-hover: transform 0.3s ease-out;
```

| Transition | Use For |
|------------|---------|
| Liquid | Hero images, page reveals, navigation, card hovers |
| Precision | Buttons, form validation, metric counters, data updates |
| Hover | Interactive element feedback |

---

## Glassmorphism System

### Primary Glass (Cards, Modals)
```css
.glass {
  background: rgba(11, 42, 60, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(14, 138, 154, 0.2);
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

### Glass Variants
| Variant | Opacity | Blur | Use Case |
|---------|---------|------|----------|
| Primary | 70% | 16px | Cards, modals |
| Subtle | 50% | 12px | Dropdowns, tooltips |
| Strong | 85% | 24px | Navigation, overlays |
| Accent | 25% Teal | 12px | Feature highlights |

---

## Icon System: Phosphor Icons

### Installation
```bash
npm install @phosphor-icons/react
```

### Icon Weights (Liquid → Precision)
| Weight | Use Case |
|--------|----------|
| Thin/Light | Decorative, large sizes (Liquid) |
| Regular | Default UI icons (Balanced) |
| Bold/Fill | Emphasis, CTAs, active states (Precision) |

### Program Icon Mapping
```jsx
import { 
  SwimmingPool,     // Adult Swimming
  Student,          // Juniors
  Waves,            // Open Water
  Medal,            // Triathlon
  PersonSimpleRun,  // Running (NEW)
  Timer,            // Duration
  Barbell,          // Level
  Users,            // Format
} from '@phosphor-icons/react';
```

---

## Voice & Tone (Sage + Hero)

### The Balance
Every piece of copy should blend:
- **70% Sage:** Data, expertise, measured guidance, scientific rationale
- **30% Hero:** Encouragement, achievement recognition, motivational push

### Good Example
> "Your swim pace was 2:15/100m last week—8% faster than your baseline. 
> The data shows you're ready to add threshold work. Let's push."

### Bad Examples
- **Pure Hero:** "You crushed it! Keep grinding!" ❌ (No data)
- **Pure Sage:** "Your lactate threshold indicates suboptimal anaerobic capacity." ❌ (No encouragement)
- **Shaming:** "Another missed session?" ❌ (Creates guilt)

---

## Translation Keys (Programs Section)

```json
{
  "programs": {
    "pageTitle": "Nuestros Programas",
    "pageSubtitle": "Entrenamiento especializado para cada nivel y objetivo.",
    "quickFacts": "Datos rápidos",
    "filterNavigation": "Filtrar programas"
  },
  "filters": {
    "all": "Todos",
    "swimming": "Natación",
    "running": "Running",
    "triathlon": "Triatlón",
    "juniors": "Juveniles"
  },
  "levels": {
    "all": "Todos los niveles",
    "beginner": "Principiante",
    "intermediate": "Intermedio",
    "advanced": "Avanzado"
  },
  "formats": {
    "group": "Grupal",
    "individual": "Individual",
    "plan": "Con plan"
  },
  "cta": {
    "bookTrial": "Reservar prueba",
    "moreInfo": "Más información"
  }
}
```

---

## GA4 Event Tracking

```javascript
// Program interactions
gtag('event', 'select_content', {
  content_type: 'program_card',
  item_id: 'adult-swimming'
});

gtag('event', 'view_item', {
  currency: 'USD',
  value: 0,
  items: [{ item_name: 'Running Program' }]
});

// Filter usage
gtag('event', 'filter_programs', {
  filter_category: 'running'
});

// Trial booking
gtag('event', 'begin_checkout', {
  currency: 'USD',
  value: 0,
  items: [{ item_name: 'Trial Session', item_category: 'Running' }]
});
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Score (Mobile) | >90 |
| First Contentful Paint | <1.5s |
| Largest Contentful Paint | <2.5s |
| Cumulative Layout Shift | <0.1 |
| Hero Image Size | <200KB |
| Thumbnail Size | <50KB |

---

## File References

Load these as needed for detailed specifications:

| Need | Reference File |
|------|----------------|
| Brand rules & locked elements | `references/brand-guidelines.md` |
| All CSS custom properties | `references/design-tokens.md` |
| React component patterns | `references/component-patterns.md` |
| WCAG 2.2 AA compliance | `references/accessibility.md` |
| Programs data structure | `references/programs-data-schema.md` |

## Assets

| Asset | Path | Usage |
|-------|------|-------|
| Logo (SVG) | `assets/logo/atlan_logo.svg` | Standard logo |
| Component template | `assets/templates/component.jsx` | Base React component |
| ProgramCard template | `assets/templates/ProgramCard.jsx` | Program card component |
| QuickFacts template | `assets/templates/QuickFacts.jsx` | Quick facts component |
| ProgramFilters template | `assets/templates/ProgramFilters.jsx` | Filter bar component |
| Page template | `assets/templates/page.jsx` | Page-level component |
| CSS template | `assets/templates/styles.css` | CSS module starter |

---

## Validation

Run brand compliance check:
```bash
python scripts/validate_brand.py src/components/MyComponent
```

Checks performed:
- Color palette validation (no Tide Teal text under 18px)
- Typography hierarchy
- Accessibility contrast ratios
- Translation key usage
- Touch target sizes (48px minimum)
- Dual CTA presence on program cards
