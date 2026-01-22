# Atlan Performance – Swim & Tri Club Website MVP PRD

## Atlan Performance – Swim & Tri Club Website
### Consolidated MVP Product Requirements & USP (Enhanced)

**Version:** 1.1 (Enhanced with Technical Specifications)  
**Date:** December 2025  
**Owner:** Edgar Bonilla (Head Coach)  
**Contact:** erbonilla@outlook.com

---

**Language Default:** Spanish (Costa Rica)  
**Visual Mode Default:** Dark Mode

---

## 1. Executive Summary

### 1.1 One-Sentence Pitch

A science-engineered, ocean-inspired digital home where busy endurance athletes find structured discipline, biomechanical mastery, and a community built for longevity.

### 1.2 The "Atlan Standard" & Business Goal

The website serves as the primary acquisition hub, translating the "Sage + Hero" brand archetype into a digital experience.

- **Primary Objective:** Generate paid course subscriptions (Target: 10 new subscribers/month in first 90 days).
- **Secondary Objective:** Establish Atlan as the "Science-Backed" authority in a market of generic clubs.
- **Tertiary Objective:** Achieve 60%+ mobile traffic with <2.5s page load time.

---

## 2. Unique Selling Proposition (USP)

### 2.1 Core USP Statement

> **"Science-engineered coaching, to achieve your full potential, for real-world athletes."**

### 2.2 The "Why Atlan?" Differentiators

1. **Scientific Integrity:** Protocols are based on testing and biomechanics, not guesswork.
2. **Structured Discipline for Real Life:** "The Optimizer" persona needs plans that fit a busy career/family life without burnout.
3. **Liquid Precision:** A training philosophy that combines the fluid nature of water with the mechanical precision of data.
4. **Ocean-Inspired Aesthetics:** Unlike aggressive "no pain no gain" brands, Atlan uses a "Morning Light" aesthetic—calm, focused, and powerful.

---

## 3. Brand & Design System Specifications

### 3.1 Color Palette (Locked)

| Color | Hex Code | Role | WCAG Contrast on Abyss Navy |
|-------|----------|------|------------------------------|
| Abyss Navy | `#0B2A3C` | Primary backgrounds, text | Base color |
| Tide Teal | `#0E8A9A` | Accents, data lines, secondary buttons | 3.8:1 (Large text only) |
| Coral Spark | `#FF6A3D` | Primary CTAs, alerts, threshold data | 5.2:1 (AA compliant) |
| Foam | `#ECF7F8` | Secondary backgrounds, dark mode text | 11.8:1 (AAA compliant) |

**Accessibility Rules:**
- Body text on dark backgrounds: Use Foam (#ECF7F8), NOT Tide Teal
- Tide Teal: Reserve for accent elements, icons, and large headings (18px+ bold or 24px+ regular)
- All interactive elements: Minimum 4.5:1 contrast ratio

### 3.2 Typography

- **Logo Wordmark:** `Outfit` (Bold 700) - *Must be imported*
- **Headings:** `Montserrat` (Bold/Extra Bold 700/800). The "Performance Voice"
- **Body:** `Lato` (Regular/Light 300/400). The "Clarity Voice"
- **Data/Numbers:** `Lato` (Monospace variant) or `Roboto Mono` for clear metrics

### 3.3 UI & Motion Strategy ("Liquid Precision")

- **Default Mode:** Dark Mode (Abyss Navy background). This is mandatory for the MVP to reduce glare and save battery.
- **Motion Philosophy:**
  - **Liquid (organic):** Hero images, backgrounds, navigation menus fade/slide with smooth easing
  - **Precision (mechanical):** Metric counters, data points, form validation snap into place quickly

**Transition Values:**
```css
--transition-liquid: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
--transition-snap: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
--transition-hover: transform 0.3s ease-out;
```

### 3.4 Responsive Breakpoints

| Breakpoint | Value | Target Device |
|------------|-------|---------------|
| Mobile (sm) | 640px | Large phones |
| Tablet (md) | 768px | Tablets |
| Desktop (lg) | 1024px | Laptops/Desktops |
| Wide (xl) | 1280px | Large monitors |

**Touch Targets:** Minimum 48px × 48px for wet/tired hands (especially on mobile).

---

## 4. MVP Functional Scope

### 4.1 Localization & Settings (High Priority)

#### Language System
- **Default Language:** Spanish (Costa Rica).
- **Language Toggle:** Visible switch in Header (ES | EN). 
- **Implementation:**
  - Use i18n library (react-i18next or similar)
  - Store preference in cookie: `atlan_lang` (expires 1 year)
  - Default: `es` (Costa Rica Spanish)
  - Fallback hierarchy: `es` → `en` → `es`
  - All UI strings must be in translation files (no hardcoded text)

#### Theme System
- **Default:** Dark Mode
- **Toggle:** Moon/Sun icon in header
- **Storage:** 
  - ⚠️ **DO NOT USE localStorage** (not supported in all environments)
  - Use cookie: `atlan_theme` (expires 1 year)
  - For demo artifacts: Use React state only
- **Persistence:** Theme preference loads on page refresh

### 4.2 Global Navigation (Sticky Header)

**Components:**
- **Logo:** Atlan Circle + Wordmark (Coral Spark text on dark bg / Abyss Navy on light bg)
- **Navigation Links:**
  - Inicio / Home
  - Programas / Programs
  - Cursos y Horarios / Courses & Schedules
  - Comunidad / Community
  - Sobre Nosotros / About
- **CTAs:**
  - Primary: "COMENZAR" / "GET STARTED" (Coral Spark Button, 48px min height)
  - Secondary: "Saber más" / "Learn More" (Tide Teal outline button)
- **Toggles:** 
  - Language switcher (ES/EN flag icons)
  - Theme toggle (Moon/Sun icons)

**Mobile Behavior:**
- Hamburger menu at <768px
- Full-screen overlay navigation (Abyss Navy bg)
- CTAs remain visible at top of mobile menu

### 4.3 Homepage Modules

#### 1. Hero Section
- **Visual:** Full-width video/image of "Morning Light" (athletes in flow state)
- **Headline (ES):** "Coaching de resistencia diseñado con ciencia, nacido del océano"
- **Headline (EN):** "Science-engineered endurance coaching, born from the ocean"
- **Subheadline:** Brief explanation of the Atlan approach (2-3 sentences)
- **CTA:** "GET STARTED TODAY!" button
- **Background Treatment:** Subtle "Currents" topographic overlay at 5% opacity

#### 2. USP Grid: "The 4 Pillars"
Visual grid showcasing core values with custom icons:

1. **Integridad Científica / Scientific Integrity**
   - Icon: Molecule/Lab flask
   - Copy: "Protocolos basados en biomecánica, no en suposiciones"

2. **Disciplina Estructurada / Structured Discipline**
   - Icon: Grid/Calendar
   - Copy: "Planes que se adaptan a tu vida real, sin quemarte"

3. **Resiliencia / Resilience**
   - Icon: Wave/Mountain
   - Copy: "Cultivamos la capacidad de resistir y superar"

4. **Centrado en el Atleta / Athlete-Centric**
   - Icon: Heart/Person
   - Copy: "Tu fisiología y contexto definen el plan"

#### 4. Social Proof Carousel
**Format:** 4-slide athlete story cards

**Slide Template:**
1. **Slide 1:** Hero image (Morning Light aesthetic) + athlete name
2. **Slide 2:** "El Reto" / "The Challenge" - Athlete quote on their struggle
3. **Slide 3:** "Los Datos" / "The Data" - Dark mode card with before/after metrics
4. **Slide 4:** "La Transformación" / "The Transformation" - Success quote + CTA

**Example Metrics to Highlight:**
- Swim split improvement (e.g., "2:30/100m → 2:05/100m en 12 semanas")
- Race finish time vs. goal
- Injury-free training streak (e.g., "180 días sin lesiones")
- Consistency score (e.g., "94% de entrenamientos completados")

#### 5. Newsletter Signup
- **Headline:** "GET STARTED TODAY!" / "COMENZAR HOY"
- **Copy:** "Recibe tips de entrenamiento y ciencia del deporte cada semana"
- **Form Fields:**
  - Email (required)
  - Nombre / Name (optional)
- **CTA:** "GET STARTED TODAY!"
- **Design:** Coral Spark CTA button on Abyss Navy card

### 4.4 Courses & Schedules Page

**Goal:** Present pricing tiers and logistics in one unified view.

#### Hero Section
- **Headline:** "Courses & Schedules"
- **Subheadline:** "Choose the plan that fits your lifestyle."

#### Pricing Tiers (Dolphin, Shark, Orca)
1. **Dolphin (Mensual)**
   - **Monthly Fee:** ₡22,000
   - **Positioning:** "Experience your first sessions with Atlan."
   - **Features:** 1 session per week, Focus on fundamentals (technique + confidence), Coach-guided progression.
   - **CTA:** "Get Started Today!" (Tide Teal border)

2. **Shark (Mensual) - MOST POPULAR**
   - **Monthly Fee:** ₡28,000
   - **Positioning:** "For athletes aiming to improve and join events."
   - **Features:** 2 sessions per week, All levels, Progress-focused training (technique + fitness).
   - **CTA:** "Get Started Today!" (Coral Spark background)

3. **Orca (Mensual)**
   - **Monthly Fee:** ₡35,000
   - **Positioning:** "Built for event participation and competition goals."
   - **Features:** 3 sessions per week, All levels, Performance-oriented preparation.
   - **CTA:** "Get Started Today!" (Tide Teal border)

#### Schedule & Location Section
- **Title:** "Schedule & Location"
- **Subtitle:** "Check current session times and how to get to the facility."

**Course Schedule:**
- Tuesday: 7:00pm
- Thursday: 7:00pm
- Saturday: 8:30am
- Saturday: 9:30am
- *Important:* Plan to arrive 15 minutes early.

**Apamar Pool Facilities:**
- **Address:** 400 m West of the Park, 21101 Zarcero, Costa Rica.
- **Markers:** 
  - Pool locations (blue marker)
  - Ocean swim locations (teal marker)
- **CTAs:** "Obtener Direcciones / Get Directions", "Descargar Ubicación / Download Location".
- **Map:** Google Maps Embed showing Apamar location.

**Additional Information:**
- For participants aged 8 and older.
- Average class duration: 60 minutes.
- All sessions are group-based, organized by level (Beginner, Intermediate, Advanced).
- Average pool temperature: 28°C.

### 4.6 Contact & Conversion

#### Contact / Course Subscription Form

**Form Fields:**
- Nombre completo / Full name (required, min 2 words)
  - Error: "Necesitamos tu nombre completo para personalizar tu plan"
- Email (required, regex validation)
  - Error: "Revisa el formato: ejemplo@dominio.com"
- Teléfono / Phone (optional, Costa Rica format +506 XXXX-XXXX)
- Experiencia / Experience (required dropdown):
  - Principiante / Beginner
  - Intermedio / Intermediate
  - Avanzado / Advanced
- Programa de Interés / Program of Interest (optional dropdown)
- Mensaje / Message (optional textarea, max 500 chars)

**Validation Rules:**
- Real-time validation on blur
- Display errors in Coral Spark below field
- Use `aria-invalid` and `aria-describedby` for accessibility
- Focus first invalid field on submit attempt

**Success Message:**
- "¡Listo! Te contactaremos en 24 horas para completar tu inscripción."
- "All set! We'll contact you within 24 hours to complete your registration."
- Auto-clear form after 3 seconds

**Backend:**
- Route form submissions to: erbonilla@outlook.com
- Include all form data + timestamp + user language preference
- CC user with automated welcome email (template in Spanish/English)

#### Optional: Calendly Integration
- **Link:** Embed Calendly widget for "Book Discovery Call"
- **Placement:** Secondary CTA on Program pages
- **Language:** Ensure Calendly language matches site language toggle

---

## 5. Technical Requirements

### 5.1 Accessibility (WCAG 2.2 AA)

#### Contrast Standards
- **Text on Dark Backgrounds:** Use Foam (#ECF7F8) for body text (11.8:1 ratio)
- **Interactive Elements:** Minimum 4.5:1 contrast ratio
- **Large Text:** Minimum 3:1 contrast ratio (18px+ bold or 24px+ regular)
- **Focus States:** 3px solid Coral Spark outline with 2px offset

#### Keyboard Navigation
- All interactive elements must be focusable via Tab key
- Skip navigation link for keyboard users
- Escape key closes modals/overlays
- Arrow keys navigate carousel

#### Screen Reader Support
- Semantic HTML5 elements (`<nav>`, `<main>`, `<article>`, etc.)
- ARIA labels for icon-only buttons
- Alt text for all images (descriptive for content images, empty for decorative)
- `lang` attribute on `<html>` tag switches with language toggle

#### Data Visualization
- **Color + Pattern Rule:** Charts must not rely on color alone
- Example: Solid line (Tide Teal) vs. Dashed line (Coral Spark) for comparing metrics
- Include data table alternative for complex charts

### 5.2 Responsive & Performance

#### Performance Budget (MVP)
| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contentful Paint | <1.5s | Lighthouse |
| Largest Contentful Paint | <2.5s | Lighthouse |
| Time to Interactive | <3.5s | Lighthouse |
| Cumulative Layout Shift | <0.1 | Lighthouse |
| Animation Frame Rate | 60fps (30fps fallback on low-power) | DevTools Performance |

#### Image Optimization
- **Format:** WebP with JPEG fallback
- **Hero Images:** <200KB, progressive loading
- **Thumbnails:** <50KB
- **Lazy Loading:** All below-fold images use `loading="lazy"` attribute
- **Responsive Images:** Use `<picture>` element with multiple sources for different breakpoints

#### Technology Stack Recommendations
**CMS Options:**
1. **Webflow** (Recommended for non-technical editors)
   - Pros: Visual editing, built-in hosting, fast
   - Cons: Less flexibility for custom logic
2. **Framer** (Recommended for React developers)
   - Pros: Component-based, smooth animations, good performance
   - Cons: Steeper learning curve
3. **Headless CMS** (e.g., Sanity + Next.js)
   - Pros: Maximum flexibility, excellent i18n support
   - Cons: Requires developer for template changes

**Requirements:**
- i18n support (Spanish/English content management)
- Form builder with validation
- Analytics integration (GA4)
- Easy image optimization pipeline

### 5.3 Data Storage & State Management

#### Theme & Language Preferences
⚠️ **CRITICAL:** Do NOT use `localStorage` or `sessionStorage` in artifacts (unsupported in Claude environment)

**Production Implementation:**
```javascript
// Use cookies for persistence
import Cookies from 'js-cookie';

// Set theme preference (expires in 1 year)
Cookies.set('atlan_theme', 'dark', { expires: 365 });

// Set language preference
Cookies.set('atlan_lang', 'es', { expires: 365 });
```

**Demo/Artifact Implementation:**
```javascript
// Use React state only (no persistence)
const [theme, setTheme] = useState('dark');
const [language, setLanguage] = useState('es');
```

---

## 6. Content Strategy

### 6.1 Tone of Voice: "Sage + Hero"

**Philosophy:** Acknowledge the data (reality) first, then provide the encouragement (spirit). No shaming.

#### ✅ Good Examples

**Example 1: Workout Recap**
> "Tu ritmo de nado fue 2:15/100m la semana pasada—8% más rápido que tu línea base. Los datos muestran que estás listo para agregar trabajo de umbral. Vamos a presionar."

> "Your swim pace was 2:15/100m last week—8% faster than your baseline. The data shows you're ready to add threshold work. Let's push."

**Example 2: Missed Session**
> "Veo que saltaste el entrenamiento del miércoles. La vida pasa—lo importante es que vuelvas hoy. Tu próxima sesión: técnica de brazada, 45 min."

> "I see you missed Wednesday's session. Life happens—the important thing is you're back today. Your next session: stroke technique, 45 min."

#### ❌ Bad Examples

**Bad Example 1: Pure Hero (No Sage)**
> "¡Lo aplastaste! ¡Sigue moliendo! ¡Sin dolor no hay ganancia!"

> "You crushed it! Keep grinding! No pain no gain!"

*Why it fails:* No acknowledgment of data, purely motivational fluff

**Bad Example 2: Pure Sage (No Hero)**
> "Tu umbral de lactato indica una capacidad anaeróbica subóptima relativa a tu VO2max proyectado."

> "Your lactate threshold indicates suboptimal anaerobic capacity relative to your projected VO2max."

*Why it fails:* Too clinical, no encouragement or actionable guidance

**Bad Example 3: Shaming**
> "Otra sesión perdida. ¿Cuándo te vas a tomar esto en serio?"

> "Another missed session. When are you going to take this seriously?"

*Why it fails:* Violates athlete-centric value, creates guilt instead of support

### 6.2 Imagery: "The Morning Light"

**Photography Style Guidelines:**

**Visual Characteristics:**
- **Lighting:** High exposure, natural light, golden hour (sunrise preferred)
- **Environment:** Blue water (ocean or pool), clean backgrounds, minimal clutter
- **Subjects:** Athletes looking strong, focused, and in "flow state"—NOT agonized or exhausted
- **Composition:** Rule of thirds, leading lines (pool lanes, horizon), depth of field

**What to Show:**
- Underwater shots with sunlight rays
- Athletes with proper stroke technique
- Post-workout smiles and camaraderie
- Equipment in use (goggles, wetsuits, bikes) in context

**What to Avoid:**
- Red faces, grimacing, "suffer porn"
- Dark, moody lighting
- Generic stock photos of "fitness models"
- Cluttered gym environments

**Background Treatment: "The Currents"**
- Subtle topographic line patterns overlaid at 5% opacity
- Use on Abyss Navy backgrounds to add depth without distraction
- Pattern should suggest water flow or ocean depth contours

---

## 7. Success Metrics (KPIs)

### 7.1 Primary KPIs (First 90 Days)

| Metric | Baseline | Target | Measurement Tool |
|--------|----------|--------|------------------|
| **Course Conversion Rate** | 0% (new site) | 2% of visitors | GA4 Goal Conversion |
| **Lead Quality Score** | N/A | 70% qualified | CRM scoring (engagement + experience match) |
| **Mobile Traffic** | N/A | 60%+ | GA4 Device Category |
| **Avg. Session Duration** | N/A | 3min+ | GA4 Engagement |
| **Bounce Rate** | N/A | <50% | GA4 |

### 7.2 Secondary KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Time on Programs Page** | 2min+ | GA4 Page Analytics |
| **Language Toggle Usage** | 15% switch to EN | Custom event |
| **Newsletter Signups** | 10/week | Form submissions |
| **Page Load Speed (Mobile)** | <2.5s LCP | Lighthouse CI |

### 7.3 Review Cadence

- **Week 1-4:** Weekly review with Head Coach
- **Month 2-3:** Bi-weekly review
- **Month 4+:** Monthly review with quarterly deep-dive

### 7.4 Analytics Implementation

**Required Events to Track:**
```javascript
// GA4 Custom Events

// Language toggle
gtag('event', 'language_change', {
  'previous_language': 'es',
  'new_language': 'en'
});

// Theme toggle
gtag('event', 'theme_change', {
  'theme': 'light' // or 'dark'
});

// Subscription form submission
gtag('event', 'subscribe', {
  'value': 100, // estimated lead value
  'currency': 'USD'
});

// Program page CTA clicks
gtag('event', 'select_content', {
  'content_type': 'program',
  'item_id': 'swimming_adults'
});
```

---

## 8. Launch Checklist

### Pre-Launch (1 Week Before)

**Content:**
- [ ] All copy translated and reviewed (ES/EN)
- [ ] 5+ athlete testimonials collected with photos
- [ ] All program descriptions finalized
- [ ] FAQ section complete (minimum 10 questions)

**Technical:**
- [ ] Lighthouse score >90 on mobile
- [ ] WCAG 2.2 AA validation passed (using WAVE or axe DevTools)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing on iOS and Android devices
- [ ] Form submissions routing to correct email
- [ ] Google Analytics 4 installed and tested
- [ ] Cookie banner implemented (EU/GDPR compliance if needed)

**Design:**
- [ ] All images optimized (<200KB for hero, <50KB for thumbnails)
- [ ] Favicon and social share images created
- [ ] Dark mode thoroughly tested
- [ ] Print stylesheet for training plan PDFs

**Legal:**
- [ ] Privacy policy published (in Spanish and English)
- [ ] Terms of service published
- [ ] Liability waiver reviewed by lawyer
- [ ] Cookie policy (if applicable)

### Launch Day

- [ ] DNS configured and SSL certificate active
- [ ] 301 redirects from old site (if applicable)
- [ ] Submit sitemap to Google Search Console
- [ ] Social media announcement prepared
- [ ] Email blast to existing subscribers

### Post-Launch (Week 1)

- [ ] Monitor form submissions for errors
- [ ] Check analytics daily for anomalies
- [ ] Gather user feedback via email survey
- [ ] Fix any critical bugs within 24 hours
- [ ] Document any UX friction points for future iteration

---

## 9. Future Enhancements (Post-MVP)

**Phase 2 (Months 4-6):**
- Course portal with workout logging
- Video library of technique drills
- Blog with training articles (SEO strategy)
- Integration with Strava/Garmin

**Phase 3 (Months 7-12):**
- Native mobile app (React Native)
- Live workout tracking with real-time coaching cues
- Community forum for athletes
- E-commerce for Atlan branded gear

---

## Appendix A: File Naming Conventions

All website assets must follow this protocol:

**Format:** `Atlan_[Category]_[Descriptor]_[Width]_v[Version]_[YYYYMMDD]`

**Examples:**
- `Atlan_Hero_MorningSwim_1920px_v1.0_20251209.webp`
- `Atlan_Icon_ScientificIntegrity_512px_v1.0_20251209.svg`
- `Atlan_Athlete_JuanPerez_800px_v1.0_20251209.jpg`

**Categories:**
- `Hero` - Homepage hero images
- `Program` - Program page visuals
- `Athlete` - Testimonial photos
- `Icon` - UI icons and symbols
- `Logo` - Logo variations

---

## Appendix B: Contact Information

**For Technical Questions:**
- Developer: [Name]
- Email: [email]

**For Content/Brand Questions:**
- Head Coach: Edgar Bonilla
- Email: erbonilla@outlook.com

**For Emergency Site Issues:**
- Hosting Support: [Provider contact]
- On-call Developer: [Phone]

---

**Document Control:**
- Version: 1.1 (Enhanced)
- Last Updated: December 9, 2025
- Next Review: March 2026