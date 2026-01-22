# Atlan Performance - Component Quick Reference

Quick lookup guide for all component classes in `globals.css`

---

## 🎯 Buttons

| Class | Description | Color |
|-------|-------------|-------|
| `.btn-primary` | Main CTAs | Coral Spark |
| `.btn-secondary` | Secondary actions | Tide Teal |
| `.btn-outline` | Transparent with border | Tide Teal border |
| `.btn-ghost` | Text-only button | Transparent |

---

## 📦 Cards

| Class | Description |
|-------|-------------|
| `.card` | Standard card container |
| `.card-accent` | Card with left Tide Teal border |
| `.card-data-dark` | Dark card for data visualization |
| `.metric-card` | Card for displaying metrics |

---

## 📝 Forms

| Class | Description |
|-------|-------------|
| `.form-group` | Form field wrapper |
| `.form-label` | Field label (uppercase) |
| `.form-input` | Text input field |
| `.form-select` | Select dropdown |
| `.form-textarea` | Multiline text input |
| `.form-error` | Error message text |
| `.form-success` | Success message box |
| `[aria-invalid="true"]` | Error state styling |

---

## 🏷️ Badges & Tags

| Class | Description |
|-------|-------------|
| `.badge` | Pill-shaped badge (Tide Teal) |
| `.badge-coral` | Urgent/important badge |
| `.badge-outline` | Outline badge variant |
| `.tag` | Content tag with border |

---

## 🔔 Alerts

| Class | Description | Color |
|-------|-------------|-------|
| `.alert-info` | Information message | Tide Teal |
| `.alert-success` | Success message | Tide Teal |
| `.alert-warning` | Warning message | Coral Spark |
| `.alert-error` | Error message | Coral Spark |
| `.alert-title` | Alert heading |

---

## 📊 Progress

| Class | Description |
|-------|-------------|
| `.progress` | Progress bar container |
| `.progress-bar` | Progress fill (Tide Teal) |
| `.progress-bar-coral` | Progress fill (Coral) |
| `.progress-labeled` | Progress with label |
| `.progress-label` | Progress percentage text |

---

## 📐 Layout

| Class | Description |
|-------|-------------|
| `.container` | Max-width centered container (1280px) |
| `.section` | Vertical section spacing |
| `.divider` | Horizontal divider line |
| `.divider-thick` | Thick divider (2px) |
| `.divider-accent` | Colored divider (Tide Teal) |

---

## 🧭 Navigation

| Class | Description |
|-------|-------------|
| `.nav-header` | Sticky navigation header |
| `.nav-container` | Nav content wrapper |
| `.nav-logo` | Logo container |
| `.nav-links` | Nav link list |
| `.nav-link` | Individual nav link |
| `.nav-link.active` | Active page indicator |
| `.nav-toggle` | Mobile menu button |
| `.nav-mobile-menu` | Full-screen mobile menu |

---

## 📋 Dropdowns

| Class | Description |
|-------|-------------|
| `.dropdown` | Dropdown wrapper |
| `.dropdown-toggle` | Dropdown trigger |
| `.dropdown-menu` | Dropdown panel |
| `.dropdown-item` | Dropdown link/button |
| `.dropdown.is-open` | Active state |

---

## 🪟 Modals

| Class | Description |
|-------|-------------|
| `.modal-overlay` | Full-screen backdrop |
| `.modal` | Modal container |
| `.modal-header` | Modal top section |
| `.modal-title` | Modal heading |
| `.modal-close` | Close button |
| `.modal-body` | Modal content area |
| `.modal-footer` | Modal action buttons |

---

## 💬 Tooltips

| Class | Description |
|-------|-------------|
| `.tooltip` | Tooltip wrapper |
| `.tooltip-content` | Tooltip popup |

---

## 📊 Tables

| Class | Description |
|-------|-------------|
| `.table` | Standard table |
| `.table-striped` | Alternating row colors |
| `.table-bordered` | Table with borders |
| `.table-responsive` | Horizontal scroll wrapper |

---

## 📋 Lists

| Class | Description |
|-------|-------------|
| `.list-unstyled` | Remove bullets/numbering |
| `.list-inline` | Horizontal list |
| `.list-features` | List with checkmarks |
| `.definition-list` | Key-value pairs |

---

## 📑 Tabs

| Class | Description |
|-------|-------------|
| `.tabs` | Tab navigation wrapper |
| `.tab` | Individual tab button |
| `.tab.active` | Active tab |
| `.tab-content` | Tab content wrapper |
| `.tab-pane` | Tab panel |
| `.tab-pane.active` | Visible tab panel |

---

## 🎨 Glassmorphism

| Class | Description | Blur |
|-------|-------------|------|
| `.glass` | Standard glass effect | 16px |
| `.glass-subtle` | Lighter glass | 12px |
| `.glass-strong` | Stronger glass (nav) | 16px |
| `.glass-accent` | Teal accent glass | 12px |
| `.glass-card` | Glass card with hover | 16px |

---

## 🎭 Utility Classes

### Text Colors
- `.text-spark` - Coral Spark
- `.text-tide` - Tide Teal
- `.text-abyss` - Abyss Navy
- `.text-foam` - Foam

### Background Colors
- `.bg-abyss` - Abyss Navy
- `.bg-tide` - Tide Teal
- `.bg-coral` - Coral Spark
- `.bg-foam` - Foam

### Background Patterns
- `.bg-currents` - Linear pattern
- `.bg-currents-organic` - Organic pattern

### Spacing (Margin Top)
- `.mt-xs` - 8px
- `.mt-sm` - 16px
- `.mt-md` - 24px
- `.mt-lg` - 32px

### Spacing (Margin Bottom)
- `.mb-xs` - 8px
- `.mb-sm` - 16px
- `.mb-md` - 24px
- `.mb-lg` - 32px

### Padding
- `.p-sm` - 16px
- `.p-md` - 24px
- `.p-lg` - 32px

### Responsive
- `.hide-mobile` - Hide on screens < 768px
- `.show-mobile` - Show only on < 768px
- `.text-center-mobile` - Center text on mobile

---

## ♿ Accessibility

| Class | Description |
|-------|-------------|
| `.skip-link` | Skip to main content |
| `.sr-only` | Screen reader only |

**Note:** All interactive elements automatically get focus states with `:focus-visible`

---

## 🌓 Dark Mode

Add `.dark-mode` class to `<body>` element to activate dark theme.

All components automatically adapt colors and shadows for dark mode.

---

## 📱 Touch Targets

All interactive elements (buttons, links, inputs) have a minimum height of **48px** for mobile accessibility.

Variable: `var(--touch-target-min)`

---

## 🎬 Animation Classes

See `animations.css` for:
- `.animate-fade-in`
- `.animate-fade-in-up`
- `.animate-count-up`
- `.hover-lift`
- `.hover-scale`
- And many more...

---

## 🔑 Key Variables

```css
/* Colors */
--color-abyss-navy: #0B2A3C
--color-tide-teal:  #0E8A9A
--color-coral-spark:#FF6A3D
--color-foam:       #ECF7F8

/* Spacing */
--space-xs:  8px
--space-sm:  16px
--space-md:  24px
--space-lg:  32px
--space-xl:  48px
--space-2xl: 64px
--space-3xl: 96px

/* Border Radius */
--radius-sm:   4px
--radius-md:   8px
--radius-lg:   16px
--radius-full: 9999px

/* Transitions */
--transition-liquid: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
--transition-snap:   all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
--transition-hover:  transform 0.3s ease-out
```

---

## 📖 Usage Tips

1. **Always use semantic HTML** - These classes enhance native elements
2. **Combine classes** - Mix utility classes for custom styling
3. **Dark mode first** - Design looks best in dark mode (ocean aesthetic)
4. **Mobile-first** - All components are responsive by default
5. **Accessibility** - Use proper ARIA attributes with form components

---

## 🔗 Related Files

- **Variables:** `src/styles/variables.css`
- **Components:** `src/styles/globals.css`
- **Glassmorphism:** `src/styles/glass.css`
- **Animations:** `src/styles/animations.css`
- **Showcase:** `public/component-showcase.html`

---

**Last Updated:** December 10, 2025  
**Version:** 1.0
