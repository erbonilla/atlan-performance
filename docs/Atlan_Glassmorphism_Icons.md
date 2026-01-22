# Atlan Performance | Glassmorphism & Icon System

**Version:** 1.0  
**Date:** December 2025  
**Status:** Approved Extension  
**Parent Document:** Atlan Brand Kit v2.0

---

## Table of Contents

1. [Glassmorphism System](#1-glassmorphism-system)
2. [Icon Library](#2-icon-library)
3. [Component Patterns](#3-component-patterns)
4. [Accessibility Considerations](#4-accessibility-considerations)
5. [Implementation Reference](#5-implementation-reference)

---

## 1. Glassmorphism System

### 1.1 Design Rationale

Glassmorphism reinforces Atlan's "Liquid Precision" philosophy by evoking:

| Brand Connection | Visual Expression |
|------------------|-------------------|
| **Water/Ocean** | Translucent surfaces suggest looking through water |
| **Morning Light** | Frosted glass mimics light diffusion at sunrise |
| **Liquid Layer** | Soft, flowing blur effects |
| **Premium Feel** | Elevated, modern aesthetic |

### 1.2 Glass Variants

#### Primary Glass (Cards, Modals)

```css
.glass {
  background: rgba(11, 42, 60, 0.7);  /* Abyss Navy at 70% */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(14, 138, 154, 0.2);  /* Tide Teal border */
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(236, 247, 248, 0.1);  /* Top highlight */
}
```

#### Secondary Glass (Subtle Elements)

```css
.glass-subtle {
  background: rgba(11, 42, 60, 0.5);  /* Abyss Navy at 50% */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(14, 138, 154, 0.15);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}
```

#### Accent Glass (CTAs, Highlights)

```css
.glass-accent {
  background: rgba(14, 138, 154, 0.25);  /* Tide Teal at 25% */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(14, 138, 154, 0.4);
  border-radius: 12px;
  box-shadow: 
    0 8px 32px rgba(14, 138, 154, 0.2),
    inset 0 1px 0 rgba(236, 247, 248, 0.15);
}
```

#### Light Mode Glass

```css
.glass-light {
  background: rgba(236, 247, 248, 0.7);  /* Foam at 70% */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(11, 42, 60, 0.1);
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(11, 42, 60, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}
```

### 1.3 CSS Custom Properties

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
  --glass-border-light: rgba(236, 247, 248, 0.2);
  --glass-border-dark: rgba(11, 42, 60, 0.1);
  
  /* Glass Blur Values */
  --glass-blur-sm: blur(8px);
  --glass-blur-md: blur(12px);
  --glass-blur-lg: blur(16px);
  --glass-blur-xl: blur(24px);
  
  /* Glass Shadows */
  --glass-shadow-sm: 0 4px 16px rgba(0, 0, 0, 0.2);
  --glass-shadow-md: 0 8px 32px rgba(0, 0, 0, 0.3);
  --glass-shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.4);
  --glass-shadow-glow: 0 8px 32px rgba(14, 138, 154, 0.2);
  
  /* Glass Highlights (inset top border effect) */
  --glass-highlight: inset 0 1px 0 rgba(236, 247, 248, 0.1);
  --glass-highlight-strong: inset 0 1px 0 rgba(236, 247, 248, 0.2);
}
```

### 1.4 Application Guidelines

| Component | Glass Variant | Blur | Opacity |
|-----------|---------------|------|---------|
| **Navigation Header** | Primary | 16px | 70-85% |
| **Cards** | Primary | 16px | 70% |
| **Modals/Overlays** | Primary Strong | 24px | 85% |
| **Dropdowns** | Subtle | 12px | 50% |
| **Tooltips** | Subtle | 8px | 50% |
| **Feature Highlights** | Accent | 12px | 25% |
| **Mobile Menu** | Primary Strong | 24px | 90% |
| **Pricing Cards** | Primary | 16px | 70% |

### 1.5 Glass with "The Currents" Pattern

Combine glassmorphism with the currents background for depth:

```css
.glass-currents {
  position: relative;
  background: rgba(11, 42, 60, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(14, 138, 154, 0.2);
  border-radius: 16px;
  overflow: hidden;
}

.glass-currents::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    repeating-linear-gradient(
      45deg,
      rgba(14, 138, 154, 0.03) 0px,
      rgba(14, 138, 154, 0.03) 2px,
      transparent 2px,
      transparent 12px
    );
  pointer-events: none;
}
```

### 1.6 Hover States

```css
.glass-card {
  transition: 
    transform 0.3s ease-out,
    box-shadow 0.3s ease-out,
    background 0.3s ease-out;
}

.glass-card:hover {
  transform: translateY(-4px);
  background: rgba(11, 42, 60, 0.8);  /* Slightly more opaque */
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(14, 138, 154, 0.3),  /* Teal glow border */
    inset 0 1px 0 rgba(236, 247, 248, 0.15);
}
```

### 1.7 Interactive Glass Button

```css
.btn-glass {
  background: rgba(14, 138, 154, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(14, 138, 154, 0.4);
  border-radius: 8px;
  padding: 12px 24px;
  color: var(--color-foam);
  font-family: var(--font-heading);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-glass:hover {
  background: rgba(14, 138, 154, 0.35);
  border-color: rgba(14, 138, 154, 0.6);
  box-shadow: 0 8px 24px rgba(14, 138, 154, 0.3);
  transform: translateY(-2px);
}

.btn-glass:active {
  transform: translateY(0);
  background: rgba(14, 138, 154, 0.4);
}
```

---

## 2. Icon Library

### 2.1 Primary Library: Phosphor Icons

**Selection Rationale:**

| Criteria | Phosphor Score | Why It Fits Atlan |
|----------|----------------|-------------------|
| **Style** | ★★★★★ | Rounded, friendly forms match Outfit logo font |
| **Weights** | ★★★★★ | 6 weights (thin→bold) support "Liquid→Precision" spectrum |
| **Consistency** | ★★★★★ | 7,000+ icons with unified design language |
| **React Support** | ★★★★★ | First-class React components |
| **Accessibility** | ★★★★★ | Includes aria-labels, role attributes |
| **License** | ★★★★★ | MIT (free for commercial use) |

### 2.2 Installation

```bash
# npm
npm install @phosphor-icons/react

# yarn
yarn add @phosphor-icons/react
```

### 2.3 Icon Weights

| Weight | Stroke | Use Case | "Liquid Precision" Layer |
|--------|--------|----------|--------------------------|
| **Thin** | 1px | Decorative, large sizes | Liquid (softest) |
| **Light** | 1.5px | Secondary UI elements | Liquid |
| **Regular** | 2px | Default UI icons | Balanced |
| **Bold** | 2.5px | Emphasis, CTAs | Precision |
| **Fill** | Solid | Active states, selection | Precision |
| **Duotone** | 2-color | Feature highlights | Special use |

### 2.4 Usage Patterns

#### Basic Import

```jsx
import { 
  Waves,           // Brand/Ocean
  Flask,           // Scientific Integrity
  CalendarCheck,   // Structured Discipline
  Mountains,       // Resilience
  HeartHalf,       // Athlete-Centric
  Play,            // CTAs
  CaretRight,      // Navigation
  Sun,             // Light mode
  Moon,            // Dark mode
  Globe,           // Language
  List,            // Menu
  X                // Close
} from '@phosphor-icons/react';
```

#### With Weight Variants

```jsx
// Regular weight (default)
<Waves size={24} />

// Bold weight for emphasis
<Waves size={24} weight="bold" />

// Light weight for decorative
<Waves size={48} weight="light" />

// Fill for active states
<Waves size={24} weight="fill" />
```

#### With Custom Colors

```jsx
// Using CSS variables
<Waves 
  size={24} 
  color="var(--color-tide-teal)" 
/>

// Using hex directly
<Flask 
  size={24} 
  color="#FF6A3D" 
  weight="bold"
/>
```

### 2.5 Icon Mapping for Atlan

#### Core Pillar Icons

| Pillar | Phosphor Icon | Weight | Color |
|--------|---------------|--------|-------|
| Scientific Integrity | `Flask` or `Atom` | Regular | Tide Teal |
| Structured Discipline | `CalendarCheck` or `GridFour` | Regular | Tide Teal |
| Resilience | `Mountains` or `Waves` | Regular | Tide Teal |
| Athlete-Centric | `HeartHalf` or `UserFocus` | Regular | Tide Teal |

#### Navigation Icons

| Action | Phosphor Icon | Weight |
|--------|---------------|--------|
| Home | `House` | Regular |
| Programs | `SwimmingPool` | Regular |
| Courses | `CreditCard` | Regular |
| Schedule | `Calendar` | Regular |
| Community | `Users` | Regular |
| About | `Info` | Regular |
| Menu (mobile) | `List` | Bold |
| Close | `X` | Bold |

#### UI Icons

| Action | Phosphor Icon | Weight |
|--------|---------------|--------|
| Light mode | `Sun` | Regular |
| Dark mode | `Moon` | Regular |
| Language | `Globe` | Regular |
| Search | `MagnifyingGlass` | Regular |
| Arrow right | `ArrowRight` | Bold |
| Caret/Chevron | `CaretRight` | Regular |
| Check | `Check` | Bold |
| Error/Alert | `Warning` | Bold |
| Success | `CheckCircle` | Fill |
| Play | `Play` | Fill |
| External link | `ArrowSquareOut` | Regular |

#### Program Icons

| Program | Phosphor Icon | Weight |
|---------|---------------|--------|
| Open Water | `Waves` | Regular |
| Pool Masters | `SwimmingPool` | Regular |
| Triathlon | `Medal` | Regular |
| Juniors | `Student` | Regular |
| Cycling | `Bicycle` | Regular |
| Running | `PersonSimpleRun` | Regular |

#### Data & Metrics Icons

| Metric | Phosphor Icon | Weight |
|--------|---------------|--------|
| Time/Pace | `Timer` | Regular |
| Distance | `Path` | Regular |
| Heart Rate | `Heartbeat` | Regular |
| Progress | `TrendUp` | Bold |
| Calendar event | `CalendarBlank` | Regular |
| Location | `MapPin` | Regular |

### 2.6 Icon Sizing

| Context | Size | Example |
|---------|------|---------|
| Inline with text | 16px | Buttons, links |
| Standard UI | 24px | Navigation, cards |
| Feature icons | 32px | USP grid, highlights |
| Hero icons | 48-64px | Large decorative |
| Pillar icons | 48px | Value proposition grid |

### 2.7 Icon Button Component

```jsx
import { IconContext } from '@phosphor-icons/react';

// Provider for consistent icon styling
<IconContext.Provider
  value={{
    color: 'currentColor',
    size: 24,
    weight: 'regular',
    mirrored: false,
  }}
>
  {children}
</IconContext.Provider>

// Icon button component
const IconButton = ({ icon: Icon, label, onClick, variant = 'ghost' }) => (
  <button
    onClick={onClick}
    className={`icon-btn icon-btn--${variant}`}
    aria-label={label}
  >
    <Icon weight={variant === 'primary' ? 'bold' : 'regular'} />
  </button>
);
```

---

## 3. Component Patterns

### 3.1 Glass Card with Icon

```jsx
import { Flask } from '@phosphor-icons/react';

const PillarCard = ({ icon: Icon, title, description }) => (
  <div className="glass pillar-card">
    <div className="pillar-card__icon">
      <Icon size={48} weight="light" color="var(--color-tide-teal)" />
    </div>
    <h3 className="pillar-card__title">{title}</h3>
    <p className="pillar-card__description">{description}</p>
  </div>
);

// CSS
.pillar-card {
  padding: 2rem;
  text-align: center;
}

.pillar-card__icon {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.pillar-card__title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  color: var(--color-foam);
}

.pillar-card__description {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-foam);
  opacity: 0.9;
}
```

### 3.2 Glass Navigation Header

```jsx
import { List, X, Sun, Moon, Globe } from '@phosphor-icons/react';

const Header = ({ theme, toggleTheme, language, toggleLanguage }) => (
  <header className="glass-nav">
    <nav className="glass-nav__container">
      <a href="/" className="glass-nav__logo">
        <img src="/logo.svg" alt="Atlan Performance" />
      </a>
      
      <ul className="glass-nav__links">
        {/* Navigation links */}
      </ul>
      
      <div className="glass-nav__actions">
        <button onClick={toggleLanguage} aria-label="Toggle language">
          <Globe size={24} />
          <span>{language.toUpperCase()}</span>
        </button>
        
        <button onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        
        <a href="/subscription" className="btn btn-primary">
          Subscribe
        </a>
      </div>
    </nav>
  </header>
);

// CSS
.glass-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  background: var(--glass-bg-dark-strong);
  backdrop-filter: var(--glass-blur-lg);
  -webkit-backdrop-filter: var(--glass-blur-lg);
  border-bottom: 1px solid var(--glass-border-teal);
}
```

### 3.3 Glass Modal

```jsx
import { X } from '@phosphor-icons/react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="glass-modal" onClick={e => e.stopPropagation()}>
        <div className="glass-modal__header">
          <h2>{title}</h2>
          <button onClick={onClose} aria-label="Close modal">
            <X size={24} weight="bold" />
          </button>
        </div>
        <div className="glass-modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};

// CSS
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
}

.glass-modal {
  background: var(--glass-bg-dark-strong);
  backdrop-filter: var(--glass-blur-xl);
  -webkit-backdrop-filter: var(--glass-blur-xl);
  border: 1px solid var(--glass-border-teal);
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: var(--glass-shadow-lg);
}

.glass-modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--glass-border-teal);
}

.glass-modal__content {
  padding: 1.5rem;
  overflow-y: auto;
}
```

### 3.4 Glass Form Input

```jsx
const FormInput = ({ label, error, ...props }) => (
  <div className="form-group">
    <label className="form-label">{label}</label>
    <input 
      className={`glass-input ${error ? 'glass-input--error' : ''}`}
      {...props}
    />
    {error && <span className="form-error">{error}</span>}
  </div>
);

// CSS
.glass-input {
  width: 100%;
  padding: 12px 16px;
  min-height: 48px;
  background: rgba(236, 247, 248, 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(14, 138, 154, 0.3);
  border-radius: 8px;
  color: var(--color-foam);
  font-family: var(--font-body);
  font-size: 1rem;
  transition: all 0.2s ease;
}

.glass-input:focus {
  outline: none;
  border-color: var(--color-tide-teal);
  background: rgba(236, 247, 248, 0.08);
  box-shadow: 
    0 0 0 3px rgba(14, 138, 154, 0.2),
    inset 0 1px 0 rgba(236, 247, 248, 0.1);
}

.glass-input--error {
  border-color: var(--color-coral-spark);
  background: rgba(255, 106, 61, 0.05);
}

.glass-input::placeholder {
  color: rgba(236, 247, 248, 0.5);
}
```

---

## 4. Accessibility Considerations

### 4.1 Glass Contrast Requirements

Glassmorphism can reduce text contrast. Follow these rules:

| Element | Minimum Opacity | Text Treatment |
|---------|-----------------|----------------|
| Cards with body text | 70% | Use Foam (#ECF7F8) only |
| Headers/Nav | 85% | Foam for links |
| Tooltips | 80% | Foam, 14px minimum |
| Buttons | 70% | Bold weight, Foam |

### 4.2 Testing Checklist

```
[ ] Test all glass elements with WAVE or axe DevTools
[ ] Verify 4.5:1 contrast for body text on glass
[ ] Verify 3:1 contrast for large text on glass
[ ] Test with Windows High Contrast mode
[ ] Test on low-end devices (blur performance)
[ ] Ensure focus states are visible on glass
```

### 4.3 Fallback for Unsupported Browsers

```css
/* Fallback for browsers without backdrop-filter */
@supports not (backdrop-filter: blur(16px)) {
  .glass {
    background: rgba(11, 42, 60, 0.95);  /* More opaque fallback */
  }
}
```

### 4.4 Performance Considerations

Backdrop-filter can be expensive. Optimize by:

```css
/* Promote glass elements to own layer */
.glass {
  will-change: backdrop-filter;
  transform: translateZ(0);  /* Force GPU acceleration */
}

/* Reduce blur on mobile for performance */
@media (max-width: 768px) {
  .glass {
    backdrop-filter: blur(12px);  /* Reduced from 16px */
  }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .glass {
    backdrop-filter: none;
    background: rgba(11, 42, 60, 0.95);
  }
}
```

---

## 5. Implementation Reference

### 5.1 Full CSS Variables (Add to variables.css)

```css
:root {
  /* ===== GLASSMORPHISM ===== */
  
  /* Glass Backgrounds */
  --glass-bg-dark: rgba(11, 42, 60, 0.7);
  --glass-bg-dark-subtle: rgba(11, 42, 60, 0.5);
  --glass-bg-dark-strong: rgba(11, 42, 60, 0.85);
  --glass-bg-light: rgba(236, 247, 248, 0.7);
  --glass-bg-accent: rgba(14, 138, 154, 0.25);
  
  /* Glass Borders */
  --glass-border-teal: rgba(14, 138, 154, 0.2);
  --glass-border-teal-strong: rgba(14, 138, 154, 0.4);
  --glass-border-light: rgba(236, 247, 248, 0.2);
  --glass-border-dark: rgba(11, 42, 60, 0.1);
  
  /* Glass Blur */
  --glass-blur-sm: blur(8px);
  --glass-blur-md: blur(12px);
  --glass-blur-lg: blur(16px);
  --glass-blur-xl: blur(24px);
  
  /* Glass Shadows */
  --glass-shadow-sm: 0 4px 16px rgba(0, 0, 0, 0.2);
  --glass-shadow-md: 0 8px 32px rgba(0, 0, 0, 0.3);
  --glass-shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.4);
  --glass-shadow-glow: 0 8px 32px rgba(14, 138, 154, 0.2);
  
  /* Glass Highlights */
  --glass-highlight: inset 0 1px 0 rgba(236, 247, 248, 0.1);
  --glass-highlight-strong: inset 0 1px 0 rgba(236, 247, 248, 0.2);
  
  /* ===== ICON SYSTEM ===== */
  
  /* Icon Sizes */
  --icon-sm: 16px;
  --icon-md: 24px;
  --icon-lg: 32px;
  --icon-xl: 48px;
  --icon-2xl: 64px;
}
```

### 5.2 Package.json Addition

```json
{
  "dependencies": {
    "@phosphor-icons/react": "^2.0.0"
  }
}
```

### 5.3 Icon Context Provider (App.jsx)

```jsx
import { IconContext } from '@phosphor-icons/react';

function App() {
  return (
    <IconContext.Provider
      value={{
        color: 'currentColor',
        size: 24,
        weight: 'regular',
        mirrored: false,
      }}
    >
      {/* App content */}
    </IconContext.Provider>
  );
}
```

---

## Documents to Update

After implementing glassmorphism and Phosphor Icons, update these documents:

| Document | Updates Needed |
|----------|----------------|
| **STYLE_GUIDE.md** | Add Glass section, Icon library reference |
| **DESIGN.md** | Add dependencies, component patterns |
| **REQUIREMENTS.md** | Add performance requirements for blur |
| **Brand_Kit_v2.0.md** | Add Glass as approved technique |
| **CSS_Variables.md** | Add all glass custom properties |

---

## Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | December 2025 | Initial glassmorphism and icon system |

---

**Related Documents:**
- Atlan Brand Kit v2.0
- Atlan Style Guide v1.0
- Atlan Technical Design v1.0
