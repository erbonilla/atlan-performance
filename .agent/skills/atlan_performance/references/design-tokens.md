# Atlan Design Tokens

Complete CSS custom properties for the Atlan Performance design system.

## Colors

```css
/* Primary Brand Colors */
--color-abyss-navy: #0B2A3C;
--color-tide-teal: #0E8A9A;
--color-coral-spark: #FF6A3D;
--color-foam: #ECF7F8;

/* Neutrals */
--color-white: #FFFFFF;
--color-black: #000000;

/* Interaction States */
--color-coral-dark: #E0552D;    /* Coral hover */
--color-teal-dark: #0A6B78;     /* Teal hover */
--color-abyss-light: #0F3A50;   /* Layering */
```

## Typography

```css
/* Font Families */
--font-logo: 'Outfit', sans-serif;
--font-heading: 'Montserrat', sans-serif;
--font-body: 'Lato', sans-serif;
--font-data: 'Roboto Mono', monospace;

/* Font Sizes (Responsive) */
--size-h1: clamp(2rem, 5vw, 3rem);      /* 32-48px */
--size-h2: clamp(1.5rem, 4vw, 2rem);    /* 24-32px */
--size-h3: clamp(1.25rem, 3vw, 1.5rem); /* 20-24px */
--size-body: 1rem;                       /* 16px */
--size-small: 0.875rem;                  /* 14px */
--size-tiny: 0.75rem;                    /* 12px */

/* Font Weights */
--weight-light: 300;
--weight-regular: 400;
--weight-bold: 700;
--weight-extra-bold: 800;

/* Line Heights */
--line-height-tight: 1.2;    /* Headings */
--line-height-normal: 1.5;   /* Body */
--line-height-loose: 1.8;    /* Long-form */

/* Letter Spacing */
--letter-spacing-tight: -0.02em;   /* Large headings */
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.05em;     /* Uppercase labels */
```

## Spacing (8px Base Grid)

```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
--space-3xl: 6rem;    /* 96px */
```

## Border Radius

```css
--radius-sm: 4px;
--radius-md: 8px;        /* Standard */
--radius-lg: 16px;
--radius-full: 9999px;   /* Pills */
```

## Shadows

```css
/* Light Mode */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

/* Dark Mode (Teal glow) */
--shadow-dark-sm: 0 1px 2px 0 rgba(14, 138, 154, 0.1);
--shadow-dark-md: 0 4px 6px -1px rgba(14, 138, 154, 0.15);
```

## Z-Index Scale

```css
--z-base: 1;
--z-dropdown: 100;
--z-sticky: 200;
--z-modal: 500;
--z-tooltip: 600;
```

## Motion ("Liquid Precision")

```css
/* Liquid - organic, flowing */
--transition-liquid: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Precision - mechanical, snappy */
--transition-snap: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

/* Hover - quick feedback */
--transition-hover: transform 0.3s ease-out;

/* Page transitions */
--transition-page: opacity 0.4s ease-in-out;
```

### When to Use Each

| Transition | Use For |
|------------|---------|
| Liquid | Hero images, page reveals, navigation, card hovers |
| Precision | Buttons, form validation, metric counters, data updates |
| Hover | Interactive element feedback |

## Responsive Breakpoints

```css
--breakpoint-sm: 640px;    /* Large phones */
--breakpoint-md: 768px;    /* Tablets */
--breakpoint-lg: 1024px;   /* Desktops */
--breakpoint-xl: 1280px;   /* Wide screens */
--breakpoint-2xl: 1536px;  /* Ultra-wide */
```

### Media Query Usage
```css
/* Mobile-first approach */
.element {
  padding: var(--space-sm);
}

@media (min-width: 768px) {
  .element {
    padding: var(--space-lg);
  }
}

@media (min-width: 1024px) {
  .element {
    padding: var(--space-xl);
  }
}
```

## Accessibility

```css
/* Minimum touch target */
--touch-target-min: 48px;

/* Focus ring */
*:focus-visible {
  outline: 3px solid var(--color-coral-spark);
  outline-offset: 2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Glassmorphism Presets

```css
/* Standard glass */
.glass {
  background: rgba(11, 42, 60, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(14, 138, 154, 0.3);
  border-radius: var(--radius-lg);
}

/* Subtle glass */
.glass-subtle {
  background: rgba(11, 42, 60, 0.4);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(14, 138, 154, 0.15);
}

/* Accent glass (Teal tint) */
.glass-accent {
  background: rgba(14, 138, 154, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(14, 138, 154, 0.4);
}
```

## Complete Font Imports

```css
/* Required Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap');
```
