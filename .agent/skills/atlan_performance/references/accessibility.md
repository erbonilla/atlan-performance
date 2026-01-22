# Atlan Accessibility Standards

WCAG 2.2 AA compliance requirements for the Atlan Performance website.

## Color Contrast Requirements

### Minimum Ratios
| Text Size | Required Ratio | Standard |
|-----------|---------------|----------|
| Normal text (<18px) | 4.5:1 | AA |
| Large text (18px+ bold, 24px+ regular) | 3:1 | AA |
| UI components & graphics | 3:1 | AA |

### Atlan Color Combinations

✅ **Approved Combinations**
| Background | Foreground | Ratio | Status |
|------------|------------|-------|--------|
| Abyss Navy (#0B2A3C) | Foam (#ECF7F8) | 11.8:1 | ✅ AAA |
| Abyss Navy (#0B2A3C) | Coral Spark (#FF6A3D) | 5.2:1 | ✅ AA |
| Foam (#ECF7F8) | Abyss Navy (#0B2A3C) | 11.8:1 | ✅ AAA |
| Coral Spark (#FF6A3D) | White (#FFFFFF) | 4.8:1 | ✅ AA |

⚠️ **Restricted Combinations**
| Background | Foreground | Ratio | Restriction |
|------------|------------|-------|-------------|
| Abyss Navy | Tide Teal (#0E8A9A) | 3.8:1 | Large text only (18px+ bold) |

❌ **Prohibited**
- Tide Teal on Abyss Navy for body text
- Low contrast decorative text
- Color as the only means of conveying information

---

## ⚠️ CRITICAL: Tags/Chips Color Rules

### The Problem
Tags and chips in the Programs section were using Tide Teal (#0E8A9A) for text color. This **fails WCAG AA** because:
- Tide Teal on Abyss Navy = 3.8:1 contrast ratio
- WCAG AA requires 4.5:1 for text under 18px
- Tags typically use 12-14px font sizes

### The Solution
**Tags/chips MUST use Foam (#ECF7F8) for text color.**

✅ **Correct Implementation:**
```css
.tag {
  color: var(--color-foam);              /* 11.8:1 contrast - PASSES */
  border: 1px solid var(--color-tide-teal);  /* Border OK */
  font-size: 0.875rem;                   /* 14px minimum */
  font-weight: 500;
}
```

❌ **WRONG Implementation:**
```css
.tag {
  color: var(--color-tide-teal);         /* 3.8:1 contrast - FAILS */
  border: 1px solid var(--color-tide-teal);
}
```

### Quick Reference for Tags
| Element | Color | Allowed? |
|---------|-------|----------|
| Tag text | Foam | ✅ Yes |
| Tag text | Tide Teal | ❌ No |
| Tag border | Tide Teal | ✅ Yes |
| Tag background | Transparent or Glass | ✅ Yes |

---

## Touch Targets

### Minimum Size
All interactive elements must be at least **48×48 pixels**.

```css
.btn,
.nav-link,
.form-input,
.toggle-btn,
.filter-chip {
  min-height: 48px;
  min-width: 48px;
}
```

### Spacing Between Targets
Minimum **8px** gap between adjacent touch targets.

```css
.btn-group,
.card-actions,
.filter-list {
  gap: var(--space-xs); /* 8px minimum */
}
```

### Mobile Full-Width Buttons
On mobile, action buttons should be full-width for easier tapping:

```css
@media (max-width: 767px) {
  .card-actions .btn {
    width: 100%;
  }
}
```

---

## Keyboard Navigation

### Requirements
1. All interactive elements must be focusable
2. Focus order must be logical (left-to-right, top-to-bottom)
3. Focus must be visible at all times
4. No keyboard traps

### Focus Styles
```css
*:focus-visible {
  outline: 3px solid var(--color-coral-spark);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Remove default outline when using focus-visible */
*:focus:not(:focus-visible) {
  outline: none;
}
```

### Skip Navigation
Provide skip link as first focusable element:

```jsx
<body>
  <a href="#main-content" className="skip-link">
    {t('accessibility.skipToContent')}
  </a>
  <header>...</header>
  <main id="main-content" tabIndex="-1">
    ...
  </main>
</body>
```

---

## Screen Readers

### Semantic HTML
```jsx
// ✅ Good - semantic structure
<article>
  <header>
    <h2>Program Title</h2>
  </header>
  <p>Description...</p>
  <footer>
    <button>Book Trial</button>
  </footer>
</article>

// ❌ Bad - div soup
<div className="card">
  <div className="title">Program Title</div>
  <div>Description...</div>
  <div className="action">
    <span onClick={...}>Book Trial</span>
  </div>
</div>
```

### ARIA Labels

**Icons without visible text:**
```jsx
<button aria-label={t('nav.openMenu')}>
  <List size={24} aria-hidden="true" />
</button>
```

**Decorative icons:**
```jsx
<Timer size={16} weight="regular" aria-hidden="true" />
```

**Form fields:**
```jsx
<input
  id="email"
  type="email"
  aria-label={t('form.email')}
  aria-required="true"
  aria-invalid={hasError ? 'true' : 'false'}
  aria-describedby={hasError ? 'email-error' : undefined}
/>
```

**Lists (including tags and quick facts):**
```jsx
<div role="list" aria-label={t('programs.quickFacts')}>
  <span role="listitem">60 min</span>
  <span role="listitem">Intermediate</span>
</div>
```

**Live regions for dynamic content:**
```jsx
<div 
  role="status" 
  aria-live="polite"
  aria-atomic="true"
>
  {statusMessage}
</div>
```

### Toggle Buttons (Filters)
```jsx
<button
  aria-pressed={activeFilter === key}
  onClick={() => onFilterChange(key)}
>
  {t(`filters.${key}`)}
</button>
```

### Images
```jsx
// Informative image
<img 
  src="/athlete.jpg" 
  alt={t('images.athleteSwimming')}
/>

// Decorative image (card covers)
<img 
  src="/program-cover.jpg" 
  alt="" 
  role="presentation"
/>
```

---

## Forms

### Error Handling

```jsx
<div className="form-group">
  <label htmlFor="email">
    {t('form.email')}
    <span className="required" aria-hidden="true">*</span>
  </label>
  
  <input
    type="email"
    id="email"
    name="email"
    aria-required="true"
    aria-invalid={errors.email ? 'true' : 'false'}
    aria-describedby={errors.email ? 'email-error' : 'email-hint'}
  />
  
  {!errors.email && (
    <span id="email-hint" className="form-hint">
      {t('form.emailHint')}
    </span>
  )}
  
  {errors.email && (
    <span 
      id="email-error" 
      className="form-error"
      role="alert"
    >
      {errors.email}
    </span>
  )}
</div>
```

### Submit Feedback
```jsx
const [submitStatus, setSubmitStatus] = useState(null);

<form onSubmit={handleSubmit}>
  {/* Form fields */}
  
  <button type="submit" disabled={isSubmitting}>
    {isSubmitting ? t('form.submitting') : t('form.submit')}
  </button>
  
  {/* Status announcement for screen readers */}
  <div 
    role="status" 
    aria-live="assertive"
    className="sr-only"
  >
    {submitStatus}
  </div>
</form>
```

---

## Motion & Animation

### Reduced Motion
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

### React Implementation
```jsx
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const animationProps = prefersReducedMotion 
  ? {} 
  : { 
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    };
```

---

## Language & Internationalization

### HTML Lang Attribute
```jsx
<html lang={currentLanguage}>
```

### Language Toggle Announcement
```jsx
const changeLanguage = (newLang) => {
  i18n.changeLanguage(newLang);
  // Announce to screen readers
  announceToScreenReader(
    t('accessibility.languageChanged', { lang: newLang })
  );
};
```

---

## Testing Checklist

### Automated Testing
- [ ] Run axe DevTools on all pages
- [ ] Run Lighthouse accessibility audit (target: 100)
- [ ] Validate HTML with W3C validator

### Manual Testing
- [ ] Navigate entire site using only keyboard
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Test at 200% zoom level
- [ ] Test with high contrast mode
- [ ] Test with reduced motion enabled

### Color Testing
- [ ] Verify all text meets contrast requirements
- [ ] **Verify tags/chips use Foam text (not Tide Teal)**
- [ ] Test with color blindness simulators
- [ ] Ensure no information conveyed by color alone

### Programs Section Testing
- [ ] Program cards have dual CTA buttons
- [ ] All tags use Foam text color
- [ ] QuickFacts have proper ARIA labels
- [ ] Filter buttons have aria-pressed state
- [ ] Touch targets are 48px minimum

### Form Testing
- [ ] All fields have visible labels
- [ ] Error messages are announced
- [ ] Focus moves to first error on submit
- [ ] Success/failure feedback is announced

---

## Quick Reference

### ARIA Roles
| Element | Role |
|---------|------|
| Main navigation | `role="navigation"` |
| Main content | `role="main"` or `<main>` |
| Search | `role="search"` |
| Form errors | `role="alert"` |
| Status messages | `role="status"` |
| Modal dialogs | `role="dialog"` |
| Tag lists | `role="list"` |
| Individual tags | `role="listitem"` |

### Common ARIA States
| State | Usage |
|-------|-------|
| `aria-expanded` | Collapsible sections, menus |
| `aria-selected` | Tabs, selectable items |
| `aria-pressed` | Toggle buttons, filters |
| `aria-current="page"` | Current page in navigation |
| `aria-busy` | Loading states |
| `aria-hidden` | Decorative icons |
