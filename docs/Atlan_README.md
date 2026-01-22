# Atlan Performance

**Science-engineered endurance coaching, born from the ocean.**

A modern, bilingual website for Atlan Performance Swim & Triathlon Club—Costa Rica's science-backed training destination for swimmers and triathletes seeking structured discipline, biomechanical mastery, and a community built for longevity.

---

## Overview

Atlan Performance serves busy endurance athletes ("The Optimizer" persona) who demand evidence-based training that fits their real lives. The website functions as the primary acquisition hub, translating the "Sage + Hero" brand archetype into a digital experience that generates new course subscriptions.

### Key Differentiators

- **Scientific Integrity** — Protocols based on biomechanics and testing, not guesswork
- **Structured Discipline** — Plans that adapt to real life without burnout
- **Liquid Precision** — Training philosophy combining water's fluidity with data precision
- **Morning Light Aesthetic** — Calm, focused, powerful—not aggressive "no pain no gain"

### AI Skills

This project includes custom AI skills to assist with development:

- **atlan-performance**: Specialized skill for building the PWA, following the "Liquid Precision" design system. 
  - **Triggers**: "Atlan", "swim coaching", "Liquid Precision", "glassmorphism"
  - **Usage**: Automatically activates when working on relevant tasks.

---

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/atlan-performance/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Analytics 4
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# Contact Form API (optional - for backend integration)
VITE_API_ENDPOINT=https://api.atlanperformance.com

# Feature Flags
VITE_ENABLE_CALENDLY=false
```

---

## Project Structure

```
atlan-website/
├── public/
│   ├── images/               # Optimized images (WebP format)
│   │   ├── hero/
│   │   ├── athletes/
│   │   ├── programs/
│   │   └── icons/
│   ├── fonts/                # Self-hosted fonts (fallback)
│   └── favicon.ico
├── src/
│   ├── components/           # React components
│   │   ├── common/           # Shared components (Button, Card, etc.)
│   │   ├── layout/           # Header, Footer, Navigation
│   │   ├── home/             # Homepage-specific components
│   │   └── forms/            # Form components
│   ├── pages/                # Page components (route-level)
│   ├── styles/
│   │   ├── globals.css       # Global styles & resets
│   │   └── variables.css     # CSS custom properties (design tokens)
│   ├── utils/
│   │   ├── i18n.js           # Internationalization setup
│   │   └── analytics.js      # GA4 tracking utilities
│   ├── locales/
│   │   ├── es.json           # Spanish translations
│   │   └── en.json           # English translations
│   ├── hooks/                # Custom React hooks
│   ├── App.jsx               # Root component
│   └── main.jsx              # Entry point
├── docs/                     # Project documentation
│   ├── REQUIREMENTS.md
│   ├── DESIGN.md
│   └── STYLE_GUIDE.md
├── .env.example
├── package.json
├── vite.config.js
└── README.md
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run test suite |
| `npm run lighthouse` | Run Lighthouse CI audit |

---

## Core Features

### Bilingual Support (ES/EN)
- Default language: Spanish (Costa Rica)
- Language toggle in header (ES | EN)
- All content managed via JSON translation files
- Preference stored in cookie (`atlan_lang`)

### Dark/Light Theme
- Default mode: Dark (Abyss Navy background)
- Theme toggle in header (Moon/Sun icons)
- Preference stored in cookie (`atlan_theme`)
- Respects `prefers-color-scheme` on first visit

### Contact & Subscription Forms
- Real-time validation on blur
- Accessible error messaging (ARIA)
- Routes submissions to coach email
- Conversion tracking in GA4

---

## Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 + Vite |
| **UI Library** | HeroUI (v2+) |
| **Styling** | Tailwind CSS v4 + Glassmorphism |
| **Animation** | Framer Motion |
| **Icons** | Phosphor Icons |
| **i18n** | react-i18next |
| **State** | React hooks + cookies (js-cookie) |
| **Analytics** | Google Analytics 4 (react-ga4) |
| **Forms** | Native HTML5 + custom validation |
| **Testing** | Vitest + React Testing Library |
| **Linting** | ESLint + Prettier |

---

## Design System

The website implements the **"Liquid Precision"** design philosophy:

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Abyss Navy | `#0B2A3C` | Primary backgrounds, text |
| Tide Teal | `#0E8A9A` | Accents, secondary CTAs |
| Coral Spark | `#FF6A3D` | Primary CTAs, alerts |
| Foam | `#ECF7F8` | Light backgrounds, dark mode text |

### Typography

| Font | Role |
|------|------|
| Outfit | Logo wordmark only |
| Montserrat | Headings, CTAs |
| Lato | Body text, UI |
| Roboto Mono | Data/metrics |

### Motion

- **Liquid transitions** (0.6s): Hero images, page reveals, navigation
- **Precision transitions** (0.2s): Buttons, form validation, data updates

### Glassmorphism

The UI employs glassmorphism effects that reinforce the "Liquid Precision" philosophy:
- Translucent backgrounds with backdrop blur
- Subtle borders with Tide Teal tints
- Elevated shadows with soft glow effects

### Icons

- **Library:** Phosphor Icons (rounded, friendly style matching Outfit logo)
- **Weights:** Thin to Bold (supporting Liquid to Precision spectrum)
- **Default:** 24px, Regular weight

For complete design specifications, see [STYLE_GUIDE.md](docs/STYLE_GUIDE.md).

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Score (Mobile) | >90 |
| First Contentful Paint | <1.5s |
| Largest Contentful Paint | <2.5s |
| Cumulative Layout Shift | <0.1 |
| Time to Interactive | <3.5s |

---

## Accessibility

The website targets **WCAG 2.2 AA** compliance:

- All text meets minimum contrast ratios (4.5:1 normal, 3:1 large)
- Interactive elements have 48px minimum touch targets
- Full keyboard navigation support
- Screen reader compatible (semantic HTML + ARIA)
- Respects `prefers-reduced-motion`
- Skip navigation link for keyboard users

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| iOS Safari | 14+ |
| Chrome Android | Last 2 versions |

---

## Deployment

### Production Build

```bash
npm run build
```

Output will be in the `dist/` directory.

### Hosting Recommendations

1. **Vercel** (Recommended) — Zero-config deployment, excellent performance
2. **Netlify** — Great for static sites with form handling
3. **Cloudflare Pages** — Fast global CDN

### Pre-Launch Checklist

- [ ] All translations complete (ES/EN)
- [ ] Images optimized (<200KB hero, <50KB thumbnails)
- [ ] Lighthouse audit passed (>90 mobile)
- [ ] WCAG 2.2 AA validation passed
- [ ] Cross-browser testing complete
- [ ] Form submissions routing correctly
- [ ] GA4 tracking verified
- [ ] SSL certificate active
- [ ] Privacy policy & terms published

---

## Contributing

### Development Workflow

1. Create feature branch from `main`
2. Make changes following the style guide
3. Write/update tests as needed
4. Run `npm run lint` and `npm run test`
5. Submit pull request with description

### Code Style

- Follow the [Style Guide](docs/STYLE_GUIDE.md) for design decisions
- Use BEM methodology for CSS class names
- Prefer functional components with hooks
- All strings must be in translation files (no hardcoded text)

### Commit Messages

Use conventional commits:
```
feat: add hero section component
fix: correct theme toggle persistence
docs: update README with deployment steps
style: format CSS variables file
```

---

## Documentation

| Document | Description |
|----------|-------------|
| [README.md](README.md) | Project overview and setup (this file) |
| [REQUIREMENTS.md](docs/REQUIREMENTS.md) | Functional and non-functional requirements |
| [DESIGN.md](docs/DESIGN.md) | Technical architecture and implementation |
| [STYLE_GUIDE.md](docs/STYLE_GUIDE.md) | Complete design system reference |

---

## Support

**Project Owner:** Edgar Bonilla (Head Coach)  
**Email:** erbonilla@outlook.com

### Reporting Issues

1. Check existing issues first
2. Provide browser/device information
3. Include steps to reproduce
4. Attach screenshots if relevant

---

## License

This project is proprietary software owned by Atlan Performance.  
All rights reserved © 2025 Atlan Performance.

---

## Acknowledgments

- Design inspiration: Ocean currents, "Morning Light" aesthetic
- Typography: Google Fonts (Outfit, Montserrat, Lato, Roboto Mono)
- Icons: Custom SVG icon set

---

**Version:** 1.0  
**Last Updated:** December 2025
