# Atlan Performance | Technical Design Document

**Version:** 1.0  
**Date:** December 2025  
**Status:** Approved for Implementation  
**Author:** Development Team  
**Contact:** erbonilla@outlook.com

---

## Table of Contents

1. [Overview](#1-overview)
2. [Architecture](#2-architecture)
3. [Technology Stack](#3-technology-stack)
4. [Component Design](#4-component-design)
5. [State Management](#5-state-management)
6. [Internationalization (i18n)](#6-internationalization-i18n)
7. [Styling Architecture](#7-styling-architecture)
8. [API & Data Flow](#8-api--data-flow)
9. [Performance Strategy](#9-performance-strategy)
10. [Testing Strategy](#10-testing-strategy)
11. [Deployment Architecture](#11-deployment-architecture)
12. [Security Considerations](#12-security-considerations)

---

## 1. Overview

### 1.1 Purpose

This document defines the technical architecture and implementation approach for the Atlan Performance website MVP. It serves as a reference for developers building and maintaining the system.

### 1.2 Design Goals

| Goal | Description |
|------|-------------|
| **Performance First** | Mobile LCP <2.5s, Lighthouse >90 |
| **Accessibility** | WCAG 2.2 AA compliance |
| **Maintainability** | Component-based architecture, clear separation of concerns |
| **Scalability** | Ready for Phase 2 features (course portal, CMS) |
| **Developer Experience** | Fast iteration, hot reload, linting, formatting |

### 1.3 Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | React + Vite | Fast builds, HMR, React ecosystem |
| UI Library | HeroUI (v2+) | Premium "Liquid" aesthetics, accessibility, speed |
| Styling | Tailwind CSS v4 | Utility-first, required for HeroUI |
| Animation | Framer Motion | Complex timeline animations and gestures |
| State | React hooks + cookies | Simple, no external deps for MVP |
| i18n | react-i18next | Industry standard, lazy loading support |
| Analytics | GA4 via react-ga4 | Official Google integration |

> [!NOTE]
> **Styling Framework Confirmed:** HeroUI + Tailwind CSS v4 has been selected as the styling approach. Component patterns in SKILL.md should be updated to use Tailwind utility classes during implementation.

---

## 2. Architecture

### 2.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT (Browser)                         │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │   React     │  │   i18next   │  │    HeroUI +     │  │
│  │   App       │  │   (i18n)    │  │  Tailwind CSS   │  │
│  └──────┬──────┘  └──────┬──────┘  └────────────┬────────────┘  │
│         │                │                      │                │
│  ┌──────▼──────────────────▼──────────────────────▼──────────┐  │
│  │                    Component Layer                         │  │
│  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐  │  │
│  │  │ Header │ │  Hero  │ │ Forms  │ │ Footer │  │  │
│  │  └────────┘ └────────┘ └────────┘ └────────┘  │  │
│  └──────────────────────────────────────────────────────────┘  │
│         │                │                      │                │
│  ┌──────▼────────────────▼──────────────────────▼────────────┐  │
│  │                     Hooks Layer                            │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐  │  │
│  │  │useTheme  │ │useLang   │ │useForm   │ │useAnalytics  │  │  │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────────┘  │  │
│  └──────────────────────────────────────────────────────────┘  │
│         │                │                      │                │
│  ┌──────▼────────────────▼──────────────────────▼────────────┐  │
│  │                   Utilities Layer                          │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐  │  │
│  │  │ cookies  │ │ i18n.js  │ │analytics │ │ validation   │  │  │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────────┘  │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      EXTERNAL SERVICES                           │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │   GA4       │  │  Email API  │  │    Google Maps          │  │
│  │  (Analytics)│  │  (Forms)    │  │    (Locations)          │  │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Directory Structure

```
atlan-website/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   ├── morning-swim-1920.webp
│   │   │   ├── morning-swim-1280.webp
│   │   │   └── morning-swim-640.webp
│   │   ├── programs/
│   │   │   ├── swimming-adults.webp
│   │   │   ├── swimming-juniors.webp
│   │   │   ├── open-water.webp
│   │   │   ├── running.webp
│   │   │   └── triathlon.webp
│   │   ├── athletes/
│   │   └── icons/
│   │       ├── scientific-integrity.svg
│   │       ├── structured-discipline.svg
│   │       ├── resilience.svg
│   │       └── athlete-centric.svg
│   ├── fonts/
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Button.css
│   │   │   │   └── index.js
│   │   │   ├── Card/
│   │   │   ├── Input/
│   │   │   └── index.js
│   │   │
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Header.css
│   │   │   │   ├── LanguageToggle.jsx
│   │   │   │   ├── ThemeToggle.jsx
│   │   │   │   ├── MobileMenu.jsx
│   │   │   │   └── index.js
│   │   │   ├── Footer/
│   │   │   └── Navigation/
│   │   │
│   │   ├── home/
│   │   │   ├── Hero/
│   │   │   ├── USPGrid/
│   │   │   ├── TestimonialCarousel/
│   │   │   └── Newsletter/
│   │   │
│   │   └── forms/
│   │       ├── ContactForm/
│   │       └── FormField/
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Programs.jsx
│   │   ├── Courses.jsx
│   │   ├── Community.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   │
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useLanguage.js
│   │   ├── useForm.js
│   │   ├── useAnalytics.js
│   │   └── useMediaQuery.js
│   │
│   ├── utils/
│   │   ├── i18n.js
│   │   ├── analytics.js
│   │   ├── validation.js
│   │   └── constants.js
│   │
│   ├── styles/
│   │   ├── variables.css      # Design tokens
│   │   ├── globals.css        # Base styles, resets
│   │   ├── utilities.css      # Utility classes
│   │   └── animations.css     # Keyframe animations
│   │
│   ├── locales/
│   │   ├── es.json
│   │   └── en.json
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── docs/
│   ├── README.md
│   ├── REQUIREMENTS.md
│   ├── DESIGN.md
│   └── STYLE_GUIDE.md
│
├── tests/
│   ├── components/
│   ├── hooks/
│   └── utils/
│
├── .env.example
├── .eslintrc.cjs
├── .prettierrc
├── package.json
├── vite.config.js
└── README.md
```

### 2.3 Component Hierarchy

```
App
├── Header
│   ├── Logo
│   ├── Navigation
│   │   └── NavLink (×6)
│   ├── LanguageToggle
│   ├── ThemeToggle
│   ├── Button (GET STARTED)
│   └── MobileMenu (conditional)
│
├── Main (Router)
│   ├── Home
│   │   ├── Hero
│   │   │   ├── BackgroundImage
│   │   │   ├── Headline
│   │   │   └── Button (GET STARTED TODAY!)
│   │   ├── USPGrid
│   │   │   └── USPCard (×4)
│   │   ├── TestimonialCarousel
│   │   │   └── TestimonialSlide (×4)
│   │   └── Newsletter
│   │       └── NewsletterForm
│   │
│   ├── Programs
│   │   └── ProgramCard (×5)
│   │
│   ├── Courses
│   │   ├── PricingCard (×3)
│   │   ├── ScheduleSection
│   │   │   ├── CourseSchedule
│   │   │   └── MapPanel
│   │   └── FAQSection
│   │
│   ├── Community
│   ├── About
│   └── NotFound
│
└── Footer
    ├── FooterNav
    ├── ContactInfo
    ├── SocialLinks
    └── LegalLinks
```

---

## 3. Technology Stack

### 3.1 Core Technologies

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Runtime** | Node.js | 18+ | Development environment |
| **Framework** | React | 18.2.0 | UI library |
| **Build Tool** | Vite | 5.0.0 | Development server, bundling |
| **Routing** | React Router | 6.x | Client-side routing |
| **i18n** | react-i18next | 13.5.0 | Internationalization |
| **Cookies** | js-cookie | 3.0.5 | Preference persistence |
| **Analytics** | react-ga4 | 2.1.0 | Google Analytics 4 |
| **Icons** | Phosphor Icons | 2.0.0 | UI icon library |

### 3.2 Development Tools

| Tool | Version | Purpose |
|------|---------|---------|
| ESLint | 8.55.0 | Code linting |
| Prettier | 3.1.0 | Code formatting |
| Vitest | Latest | Unit testing |
| Testing Library | Latest | Component testing |
| Lighthouse CI | Latest | Performance auditing |

### 3.3 Package.json Dependencies

```json
{
  "name": "atlan-performance-website",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext js,jsx",
    "format": "prettier --write \"src/**/*.{js,jsx,css,json}\"",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "lighthouse": "lhci autorun"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.0",
    "react-i18next": "^13.5.0",
    "i18next": "^23.7.0",
    "js-cookie": "^3.0.5",
    "react-ga4": "^2.1.0",
    "@phosphor-icons/react": "^2.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "prettier": "^3.1.0",
    "vitest": "^1.0.0",
    "@testing-library/react": "^14.1.0",
    "@testing-library/jest-dom": "^6.1.0",
    "@lhci/cli": "^0.13.0"
  }
}
```

---

## 4. Component Design

### 4.1 Component Patterns

#### Presentational Components

Pure UI components with no business logic:

```jsx
// src/components/common/Button/Button.jsx
import './Button.css';

const Button = ({ 
  variant = 'primary', 
  size = 'medium',
  children, 
  onClick,
  disabled = false,
  type = 'button',
  ariaLabel,
  className = ''
}) => {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
```

// Next component...

### 4.2 Component Specifications

#### Header Component

```jsx
// Props
interface HeaderProps {
  // No props - uses hooks for state
}

// Internal State
- mobileMenuOpen: boolean

// Hooks Used
- useTranslation() for text
- useTheme() for theme toggle
- useLanguage() for language toggle
- useMediaQuery() for responsive behavior

// Behavior
- Sticky positioning (z-index: 200)
- Logo routes to home
- Nav links route to respective pages
- Mobile menu triggers at <768px
- CTA visible on desktop, moves to mobile menu on small screens
```

#### Contact Form

```jsx
// Fields
- fullName: string (required, min 2 words)
- email: string (required, email format)
- phone: string (optional, CR format)
- experience: enum (required)
- program: enum (optional)
- message: string (optional, max 500)

// Validation
- Real-time on blur
- Full validation on submit
- Focus first invalid field

// Submission
- POST to /api/contact (or email service)
- Include: form data, language, timestamp
- Track: subscribe event

// Success State
- Show success message
- Clear form after 3 seconds
```

---

## 5. State Management

### 5.1 State Categories

| Category | Storage | Persistence | Example |
|----------|---------|-------------|---------|
| **UI State** | React useState | None | Mobile menu open/close |
| **Form State** | React useState | None | Form field values |
| **Preferences** | Cookies | 1 year | Theme, language |
| **Session** | React Context | Tab lifetime | Current user state |

### 5.2 Theme Management

```jsx
// src/hooks/useTheme.js
import { useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';

const COOKIE_NAME = 'atlan_theme';
const DEFAULT_THEME = 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check cookie first
    const saved = Cookies.get(COOKIE_NAME);
    if (saved) return saved;
    
    // Check system preference
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    
    return DEFAULT_THEME;
  });

  useEffect(() => {
    // Apply theme to body
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(`${theme}-mode`);
    
    // Save to cookie
    Cookies.set(COOKIE_NAME, theme, { 
      expires: 365,
      path: '/',
      sameSite: 'lax'
    });
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  return { theme, toggleTheme, setTheme };
};
```

### 5.3 Language Management

```jsx
// src/hooks/useLanguage.js
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { useAnalytics } from './useAnalytics';

const COOKIE_NAME = 'atlan_lang';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const { trackEvent } = useAnalytics();

  const changeLanguage = useCallback((lang) => {
    const previousLang = i18n.language;
    
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    
    Cookies.set(COOKIE_NAME, lang, { 
      expires: 365,
      path: '/',
      sameSite: 'lax'
    });
    
    trackEvent('language_change', {
      previous_language: previousLang,
      new_language: lang
    });
  }, [i18n, trackEvent]);

  return {
    language: i18n.language,
    changeLanguage,
    isSpanish: i18n.language === 'es',
    isEnglish: i18n.language === 'en'
  };
};
```

### 5.4 Form State Hook

```jsx
// src/hooks/useForm.js
import { useState, useCallback } from 'react';

export const useForm = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback((name, value) => {
    const rule = validationRules[name];
    if (!rule) return '';
    return rule(value) || '';
  }, [validationRules]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [validateField]);

  const validate = useCallback(() => {
    const newErrors = {};
    Object.keys(validationRules).forEach(name => {
      const error = validateField(name, values[name]);
      if (error) newErrors[name] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values, validationRules, validateField]);

  const handleSubmit = useCallback((onSubmit) => async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      // Focus first error field
      const firstError = Object.keys(errors)[0];
      document.getElementById(firstError)?.focus();
      return;
    }
    
    setIsSubmitting(true);
    try {
      await onSubmit(values);
      setValues(initialValues);
      setErrors({});
      setTouched({});
    } finally {
      setIsSubmitting(false);
    }
  }, [validate, values, initialValues, errors]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues
  };
};
```

---

## 6. Internationalization (i18n)

### 6.1 Configuration

```jsx
// src/utils/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cookies from 'js-cookie';
import es from '../locales/es.json';
import en from '../locales/en.json';

const savedLanguage = Cookies.get('atlan_lang') || 'es';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en }
    },
    lng: savedLanguage,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
```

### 6.2 Translation File Structure

```json
// src/locales/es.json
{
  "meta": {
    "title": "Atlan Performance | Swim & Tri Club",
    "description": "Coaching de resistencia diseñado con ciencia, nacido del océano"
  },
  "nav": {
    "home": "Inicio",
    "programs": "Programas",
    "courses": "Cursos",
    "schedule": "Horarios",
    "community": "Comunidad",
    "about": "Sobre Nosotros"
  },
  "hero": {
    "headline": "Coaching de resistencia diseñado con ciencia, nacido del océano",
    "subheadline": "Protocolos basados en biomecánica, planes que se adaptan a tu vida real",
    "cta": "Reserva tu Sesión de Prueba"
  },
  },
  "programs": {
    "poolMasters": {
      "title": "Pool Masters",
      "description": "Perfecto para mejorar tu técnica y eficiencia en la piscina",
      "features": [
        "Análisis de video mensual",
        "Enfoque en biomecánica",
        "Grupos de nivel similar"
      ]
    },
    "openWater": {
      "title": "Aguas Abiertas",
      "description": "Desarrolla confianza y habilidades en el océano",
      "features": [
        "Navegación y corrientes",
        "Técnica de drafting",
        "Sesiones en playa"
      ]
    },
    "triathlon703": {
      "title": "Triatlón 70.3",
      "description": "Plan equilibrado para medio Ironman",
      "features": [
        "Nado-Bici-Carrera integrado",
        "Brick workouts",
        "Estrategia de carrera"
      ]
    },
    "triathlonIronman": {
      "title": "Triatlón Ironman",
      "description": "Programa intensivo para distancia completa",
      "features": [
        "Periodización avanzada",
        "Nutrición en carrera",
        "1:1 coaching opcional"
      ]
    }
  },
  "form": {
    "fullName": "Nombre completo",
    "email": "Email",
    "phone": "Teléfono",
    "experience": "Experiencia",
    "program": "Programa de interés",
    "message": "Mensaje",
    "submit": "Enviar",
    "errors": {
      "required": "Este campo es obligatorio",
      "invalidEmail": "Revisa el formato: ejemplo@dominio.com",
      "minWords": "Necesitamos tu nombre completo para personalizar tu plan"
    },
    "success": "¡Listo! Te contactaremos en 24 horas para coordinar tu sesión de prueba"
  },
  "footer": {
    "copyright": "© 2025 Atlan Performance. Todos los derechos reservados.",
    "privacy": "Política de Privacidad",
    "terms": "Términos de Servicio"
  }
}
```

### 6.3 Usage Pattern

```jsx
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="hero">
      <h1>{t('hero.headline')}</h1>
      <p>{t('hero.subheadline')}</p>
      <Button>{t('hero.cta')}</Button>
    </section>
  );
};
```

---

## 7. Styling Architecture

### 7.1 CSS Custom Properties (Design Tokens)

```css
/* src/styles/variables.css */
:root {
  /* Colors */
  --color-abyss-navy: #0B2A3C;
  --color-tide-teal: #0E8A9A;
  --color-coral-spark: #FF6A3D;
  --color-foam: #ECF7F8;
  --color-coral-dark: #E0552D;
  --color-teal-dark: #0A6B78;
  --color-abyss-light: #0F3A50;
  
  /* Typography */
  --font-logo: 'Outfit', sans-serif;
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Lato', sans-serif;
  --font-data: 'Roboto Mono', monospace;
  
  /* Font Sizes */
  --size-h1: clamp(2rem, 5vw, 3rem);
  --size-h2: clamp(1.5rem, 4vw, 2rem);
  --size-h3: clamp(1.25rem, 3vw, 1.5rem);
  --size-body: 1rem;
  --size-small: 0.875rem;
  
  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
  
  /* Transitions */
  --transition-liquid: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --transition-snap: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-hover: transform 0.3s ease-out;
  
  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  
  /* Z-Index */
  --z-base: 1;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal: 500;
  
  /* Touch Target */
  --touch-target-min: 48px;
}
```

### 7.2 BEM Naming Convention

```css
/* Block */
.card { }

/* Element */
.card__header { }
.card__body { }
.card__footer { }

/* Modifier */
.card--featured { }
.card--dark { }

/* Example: Button */
.btn { }
.btn__icon { }
.btn__text { }
.btn--primary { }
.btn--secondary { }
.btn--large { }
.btn--disabled { }
```

### 7.3 Responsive Breakpoints

```css
/* Mobile First */
.component { 
  /* Base styles (mobile) */
}

@media (min-width: 640px) {
  .component { /* sm: Large phones */ }
}

@media (min-width: 768px) {
  .component { /* md: Tablets */ }
}

@media (min-width: 1024px) {
  .component { /* lg: Desktops */ }
}

@media (min-width: 1280px) {
  .component { /* xl: Large monitors */ }
}
```

### 7.4 Theme Implementation

```css
/* Light mode (default in CSS, but not used as default) */
body {
  color: var(--color-abyss-navy);
  background-color: var(--color-foam);
}

/* Dark mode (actual default via JS) */
body.dark-mode {
  color: var(--color-foam);
  background-color: var(--color-abyss-navy);
}

/* Component theming */
.card {
  background: var(--color-white);
  border: 1px solid rgba(11, 42, 60, 0.1);
}

.dark-mode .card {
  background: var(--color-abyss-light);
  border: 1px solid rgba(14, 138, 154, 0.2);
}
```

---

## 8. API & Data Flow

### 8.1 Form Submission

```
User submits form
       │
       ▼
┌─────────────────┐
│ Client-side     │
│ Validation      │
└────────┬────────┘
         │ Valid?
         │
    ┌────┴────┐
    │ No      │ Yes
    ▼         ▼
┌───────┐ ┌─────────────────┐
│ Show  │ │ POST /api/contact │
│ Error │ │ {                 │
└───────┘ │   fullName,       │
          │   email,          │
          │   phone,          │
          │   experience,     │
          │   program,        │
          │   message,        │
          │   language,       │
          │   timestamp       │
          │ }                 │
          └────────┬──────────┘
                   │
                   ▼
          ┌─────────────────┐
          │ Email Service   │
          │ (Resend, etc.)  │
          └────────┬────────┘
                   │
                   ▼
          ┌─────────────────┐
          │ Coach Inbox     │
          │ erbonilla@...   │
          └─────────────────┘
```

### 8.2 Analytics Events

```javascript
// src/utils/analytics.js
import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize(import.meta.env.VITE_GA4_MEASUREMENT_ID);
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackEvent = (action, params = {}) => {
  ReactGA.event({ action, ...params });
};

// Specific events
export const trackLanguageChange = (prev, next) => {
  trackEvent('language_change', {
    previous_language: prev,
    new_language: next
  });
};

export const trackThemeChange = (theme) => {
  trackEvent('theme_change', { theme });
};

// Course subscription event
export const trackSubscription = (formType) => {
  trackEvent('subscribe', {
    value: 100,
    currency: 'USD',
    form_type: formType
  });
};
```

---

## 9. Performance Strategy

### 9.1 Image Optimization

```jsx
// Responsive hero image
<picture>
  <source
    media="(min-width: 1280px)"
    srcSet="/images/hero/morning-swim-1920.webp"
    type="image/webp"
  />
  <source
    media="(min-width: 768px)"
    srcSet="/images/hero/morning-swim-1280.webp"
    type="image/webp"
  />
  <source
    srcSet="/images/hero/morning-swim-640.webp"
    type="image/webp"
  />
  <img
    src="/images/hero/morning-swim-640.jpg"
    alt="Athlete swimming at sunrise"
    loading="eager"
    fetchpriority="high"
    width="1920"
    height="1080"
  />
</picture>

// Lazy loaded below-fold image
<img
  src="/images/athletes/testimonial-1.webp"
  alt="Juan Pérez"
  loading="lazy"
  width="400"
  height="400"
/>
```

### 9.2 Code Splitting

```jsx
// src/App.jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Eager load
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

// Lazy load
const Programs = lazy(() => import('./pages/Programs'));
const Courses = lazy(() => import('./pages/Courses'));
// Schedule merged into Courses page
const Courses = lazy(() => import('./pages/Courses'));
const Community = lazy(() => import('./pages/Community'));
const About = lazy(() => import('./pages/About'));

const LoadingFallback = () => (
  <div className="loading-spinner" aria-label="Loading...">
    {/* Spinner component */}
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programas" element={<Programs />} />
            <Route path="/membresia" element={<Courses />} />
            <Route path="/horarios" element={<Schedule />} />
            <Route path="/comunidad" element={<Community />} />
            <Route path="/sobre-nosotros" element={<About />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
```

### 9.3 Font Loading

```html
<!-- index.html -->
<head>
  <!-- Preconnect to Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Preload critical fonts -->
  <link 
    rel="preload" 
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap" 
    as="style"
  >
  
  <!-- Load fonts with display=swap -->
  <link 
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@700&family=Montserrat:wght@600;700;800&family=Lato:wght@300;400;700&family=Roboto+Mono:wght@400;500&display=swap" 
    rel="stylesheet"
  >
</head>
```

### 9.4 Vite Configuration

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'i18n': ['i18next', 'react-i18next'],
        }
      }
    }
  },
  css: {
    devSourcemap: true
  }
});
```

---

## 10. Testing Strategy

### 10.1 Testing Pyramid

```
         ┌─────────────┐
         │   E2E       │  ← Few (critical paths)
         │   Tests     │
         └──────┬──────┘
                │
       ┌────────┴────────┐
       │  Integration    │  ← Some (component interactions)
       │  Tests          │
       └────────┬────────┘
                │
  ┌─────────────┴─────────────┐
  │       Unit Tests          │  ← Many (functions, hooks)
  │                           │
  └───────────────────────────┘
```

### 10.2 Unit Test Example

```javascript
// tests/utils/validation.test.js
import { describe, it, expect } from 'vitest';
import { validateEmail, validateFullName } from '../../src/utils/validation';

describe('validateEmail', () => {
  it('returns empty string for valid email', () => {
    expect(validateEmail('test@example.com')).toBe('');
  });

  it('returns error for invalid email', () => {
    expect(validateEmail('invalid')).toBeTruthy();
  });

  it('returns error for empty email', () => {
    expect(validateEmail('')).toBeTruthy();
  });
});

describe('validateFullName', () => {
  it('returns empty string for valid name', () => {
    expect(validateFullName('Juan Pérez')).toBe('');
  });

  it('returns error for single word', () => {
    expect(validateFullName('Juan')).toBeTruthy();
  });
});
```

### 10.3 Component Test Example

```javascript
// tests/components/Button.test.jsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../src/components/common/Button/Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant class', () => {
    render(<Button variant="secondary">Click me</Button>);
    expect(screen.getByText('Click me')).toHaveClass('btn--secondary');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDisabled();
  });
});
```

### 10.4 Accessibility Test

```javascript
// tests/accessibility/pages.test.jsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Home from '../../src/pages/Home';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('Home page has no accessibility violations', async () => {
    const { container } = render(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

---

## 11. Deployment Architecture

### 11.1 Build Pipeline

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   GitHub    │────▶│   GitHub    │────▶│   Vercel    │
│   Push      │     │   Actions   │     │   Deploy    │
└─────────────┘     └──────┬──────┘     └─────────────┘
                           │
                    ┌──────┴──────┐
                    │             │
              ┌─────▼─────┐ ┌─────▼─────┐
              │   Lint    │ │   Test    │
              │   Check   │ │   Suite   │
              └─────┬─────┘ └─────┬─────┘
                    │             │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │  Lighthouse │
                    │   CI Audit  │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │   Build     │
                    │   Vite      │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │   Deploy    │
                    │   Preview   │
                    └─────────────┘
```

### 11.2 GitHub Actions Workflow

```yaml
# .github/workflows/ci.yml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run test

  lighthouse:
    runs-on: ubuntu-latest
    needs: [lint, test]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          configPath: './lighthouserc.json'
```

### 11.3 Lighthouse CI Configuration

```json
// lighthouserc.json
{
  "ci": {
    "collect": {
      "staticDistDir": "./dist"
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "categories:best-practices": ["error", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.9 }]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

---

## 12. Security Considerations

### 12.1 Input Sanitization

```javascript
// Sanitize form inputs before submission
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 1000); // Limit length
};
```

### 12.2 Cookie Security

```javascript
// Secure cookie settings
Cookies.set('atlan_theme', theme, {
  expires: 365,
  path: '/',
  sameSite: 'lax',
  secure: process.env.NODE_ENV === 'production'
});
```

### 12.3 Environment Variables

```bash
# .env.example
# Public (exposed to client)
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_API_ENDPOINT=https://api.atlanperformance.com

# Never expose API keys in client-side code
# Use server-side endpoints for sensitive operations
```

### 12.4 Content Security Policy

```html
<!-- index.html -->
<meta 
  http-equiv="Content-Security-Policy" 
  content="
    default-src 'self';
    script-src 'self' https://www.googletagmanager.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: https:;
    connect-src 'self' https://www.google-analytics.com;
  "
>
```

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | December 2025 | Dev Team | Initial technical design |

---

## Related Documents

- [README.md](../README.md) — Project overview
- [REQUIREMENTS.md](REQUIREMENTS.md) — Functional requirements
- [STYLE_GUIDE.md](STYLE_GUIDE.md) — Design system reference

---

**Document Control**

- Location: `/docs/DESIGN.md`
- Status: Approved for Implementation
- Next Review: Post-MVP Launch
