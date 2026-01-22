# Atlan Performance | PWA Project Plan

**Version:** 1.0  
**Date:** December 2025  
**Status:** Ready for Execution  
**Project Owner:** Edgar Bonilla (erbonilla@outlook.com)  
**Methodology:** Agile (2-week sprints)

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Project Scope](#2-project-scope)
3. [Timeline Overview](#3-timeline-overview)
4. [Sprint Breakdown](#4-sprint-breakdown)
5. [Resource Requirements](#5-resource-requirements)
6. [Technical Architecture](#6-technical-architecture)
7. [Risk Management](#7-risk-management)
8. [Quality Assurance](#8-quality-assurance)
9. [Deployment Strategy](#9-deployment-strategy)
10. [Post-Launch Plan](#10-post-launch-plan)

---

## 1. Executive Summary

### 1.1 Project Overview

Build a Progressive Web Application (PWA) for Atlan Performance—a bilingual (ES/EN), mobile-first marketing website with lead generation capabilities for the swim and triathlon coaching business based in Costa Rica.

### 1.2 Key Deliverables

| Deliverable | Description |
|-------------|-------------|
| **PWA Website** | Installable, offline-capable marketing site |
| **Course Subscription System** | Contact forms, course sign-up, newsletter signup |
| **Bilingual Content** | Full Spanish/English content parity |
| **Analytics Dashboard** | GA4 integration with custom event tracking |

### 1.3 Success Criteria

| Metric | Target |
|--------|--------|
| Lighthouse Performance Score | >90 (mobile) |
| Largest Contentful Paint | <2.5s |
| WCAG 2.2 AA Compliance | 100% |
| PWA Installability | Pass all criteria |
| Lead Generation | 20 subscriptions/month (first 90 days) |

### 1.4 Timeline Summary

| Phase | Duration | Dates |
|-------|----------|-------|
| **Phase 1:** Foundation | 2 weeks | Weeks 1-2 |
| **Phase 2:** Core Features | 3 weeks | Weeks 3-5 |
| **Phase 3:** Content & Polish | 2 weeks | Weeks 6-7 |
| **Phase 4:** Testing & Launch | 1 week | Week 8 |
| **Total** | **8 weeks** | ~2 months |

---

## 2. Project Scope

### 2.1 In Scope (MVP)

#### Pages
- [ ] Homepage (Hero, USP Grid, Testimonials, Newsletter)
- [ ] Programs (Swimming for Adults, Swimming for Juniors, Open Water, Running, Triathlon)
- [ ] Courses (Pricing tiers: Dolphin, Shark, Orca)
- [ ] Courses & Schedules (Pricing tiers + Calendar view + Google Maps)
- [ ] About (Coach bio, philosophy, credentials)
- [ ] Contact (Form, location, hours)
- [ ] Legal (Privacy Policy, Terms of Service)

#### Features
- [ ] Bilingual support (ES default, EN toggle)
- [ ] Dark/Light theme (Dark default)
- [ ] Contact/Course subscription forms
- [ ] Newsletter signup
- [ ] PWA installation prompt
- [ ] Offline fallback page
- [ ] GA4 analytics with custom events

#### Technical
- [ ] React 18 + Vite
- [ ] CSS Custom Properties + Glassmorphism
- [ ] Phosphor Icons
- [ ] Service Worker (offline support)
- [ ] Web App Manifest
- [ ] Responsive design (mobile-first)
- [ ] WCAG 2.2 AA accessibility

### 2.2 Out of Scope (Post-MVP)

| Feature | Phase |
|---------|-------|
| Course portal / login | Phase 2 |
| Workout logging | Phase 2 |
| Video library | Phase 2 |
| Blog / CMS | Phase 2 |
| Strava integration | Phase 2 |
| E-commerce / payments | Phase 3 |
| Mobile app (native) | Phase 3 |

---

## 3. Timeline Overview

### 3.1 Gantt Chart (8 Weeks)

```
Week    1    2    3    4    5    6    7    8
        |    |    |    |    |    |    |    |
Phase 1 ████████
        Foundation & Setup
        
Phase 2      ████████████████
             Core Features
             
Phase 3                      ████████
                             Content & Polish
                             
Phase 4                              ████
                                     Testing & Launch
```

### 3.2 Key Milestones

| Milestone | Target Date | Sprint |
|-----------|-------------|--------|
| **M1:** Dev environment ready | End of Week 1 | Sprint 1 |
| **M2:** Design system implemented | End of Week 2 | Sprint 1 |
| **M3:** Homepage complete | End of Week 3 | Sprint 2 |
| **M4:** All pages functional | End of Week 5 | Sprint 3 |
| **M5:** Content finalized | End of Week 6 | Sprint 4 |
| **M6:** PWA audit passed | End of Week 7 | Sprint 4 |
| **M7:** Production launch | End of Week 8 | Sprint 4 |

---

## 4. Sprint Breakdown

### Sprint 1: Foundation (Weeks 1-2)

**Goal:** Establish development environment, design system, and core architecture.

#### Week 1: Project Setup

| Task | Priority | Estimate | Owner |
|------|----------|----------|-------|
| Initialize Vite + React project | P0 | 2h | Dev |
| Configure ESLint, Prettier, Vitest | P0 | 2h | Dev |
| Set up Git repository + branching strategy | P0 | 1h | Dev |
| Create folder structure per DESIGN.md | P0 | 2h | Dev |
| Configure i18next with ES/EN JSON files | P0 | 4h | Dev |
| Install dependencies (react-router, js-cookie, etc.) | P0 | 1h | Dev |
| Set up Phosphor Icons with context provider | P0 | 2h | Dev |
| Create CSS variables file (design tokens) | P0 | 4h | Dev |
| Implement dark/light theme switching | P0 | 4h | Dev |
| **Week 1 Total** | | **22h** | |

**Deliverables:**
- [ ] Running dev environment with hot reload
- [ ] Git repo with main/develop branches
- [ ] Theme toggle functional
- [ ] Language toggle functional (placeholder content)

#### Week 2: Design System Implementation

| Task | Priority | Estimate | Owner |
|------|----------|----------|-------|
| Build Button component (all variants) | P0 | 4h | Dev |
| Build Card component (glass effect) | P0 | 4h | Dev |
| Build Form components (Input, Select, Textarea) | P0 | 6h | Dev |
| Build Header component (desktop + mobile) | P0 | 6h | Dev |
| Build Footer component | P0 | 3h | Dev |
| Build Layout wrapper component | P0 | 2h | Dev |
| Implement glassmorphism utilities | P0 | 4h | Dev |
| Create animation/transition utilities | P1 | 3h | Dev |
| Write component documentation | P1 | 2h | Dev |
| **Week 2 Total** | | **34h** | |

**Deliverables:**
- [ ] Complete component library (Storybook optional)
- [ ] Header with nav, language toggle, theme toggle
- [ ] Footer with links and contact info
- [ ] All form elements styled and accessible

---

### Sprint 2: Core Pages (Weeks 3-4)

**Goal:** Build all primary pages with placeholder content.

#### Week 3: Homepage

| Task | Priority | Estimate | Owner |
|------|----------|----------|-------|
| Build Hero section with CTA | P0 | 6h | Dev |
| Build USP Grid (4 pillars) | P0 | 4h | Dev |
| Build Testimonial Carousel | P0 | 6h | Dev |
| Build Newsletter signup section | P0 | 4h | Dev |
| Add scroll animations (fade-in) | P1 | 3h | Dev |
| **Week 3 Total** | | **23h** | |

**Deliverables:**
- [ ] Fully functional homepage
- [ ] Newsletter form submits (placeholder endpoint)

#### Week 4: Secondary Pages

| Task | Priority | Estimate | Owner |
|------|----------|----------|-------|
| Build Programs page (5 program cards) | P0 | 6h | Dev |
| Build Swimming for Adults detail page | P0 | 4h | Dev |
| Build Swimming for Juniors detail page | P0 | 4h | Dev |
| Build Open Water detail page | P0 | 4h | Dev |
| Build Running detail page | P0 | 4h | Dev |
| Build Triathlon detail page | P0 | 4h | Dev |
| Build Courses & Schedules page (pricing + calendar + map) | P0 | 12h | Dev |
| Build About page (coach bio) | P0 | 4h | Dev |
| Build Contact page (form + info) | P0 | 6h | Dev |
| Build 404 Not Found page | P1 | 2h | Dev |
| **Week 4 Total** | | **38h** | |

**Deliverables:**
- [ ] All pages accessible via navigation
- [ ] Contact form with validation
- [ ] Google Maps embed functional

---

### Sprint 3: Features & Integration (Week 5)

**Goal:** Complete forms, analytics, and PWA features.

#### Week 5: Integration

| Task | Priority | Estimate | Owner |
|------|----------|----------|-------|
| Implement form validation (all forms) | P0 | 6h | Dev |
| Set up email submission endpoint | P0 | 4h | Dev |
| Integrate GA4 (react-ga4) | P0 | 4h | Dev |
| Configure custom GA4 events | P0 | 4h | Dev |
| Create Service Worker | P0 | 6h | Dev |
| Create Web App Manifest | P0 | 2h | Dev |
| Build offline fallback page | P0 | 3h | Dev |
| Add PWA install prompt | P1 | 4h | Dev |
| Test PWA installability | P0 | 2h | Dev |
| **Week 5 Total** | | **35h** | |

**GA4 Custom Events:**

| Event Name | Trigger |
|------------|---------|
| `language_change` | User toggles language |
| `theme_change` | User toggles theme |
| `subscribe` | Contact/subscription form submitted |
| `newsletter_signup` | Newsletter form submitted |
| `pwa_install` | User installs PWA |

**Deliverables:**
- [ ] All forms submit to email endpoint
- [ ] GA4 tracking all custom events
- [ ] PWA installable on mobile/desktop
- [ ] Offline page displays when disconnected

---

### Sprint 4: Content, Polish & Launch (Weeks 6-8)

**Goal:** Finalize content, optimize performance, and launch.

#### Week 6: Content Integration

| Task | Priority | Estimate | Owner |
|------|----------|----------|-------|
| Integrate final Spanish copy | P0 | 8h | Content |
| Integrate final English copy | P0 | 8h | Content |
| Optimize and compress all images | P0 | 4h | Dev |
| Add testimonials (5+ athletes) | P0 | 2h | Content |
| Write FAQ content (10+ questions) | P0 | 3h | Content |
| Create Privacy Policy (ES/EN) | P0 | 2h | Content |
| Create Terms of Service (ES/EN) | P0 | 2h | Content |
| Review all i18n translations | P0 | 4h | Content |
| **Week 6 Total** | | **33h** | |

**Deliverables:**
- [ ] All placeholder content replaced
- [ ] All images optimized (<200KB heroes, <50KB thumbnails)
- [ ] Legal pages complete

#### Week 7: Testing & Optimization

| Task | Priority | Estimate | Owner |
|------|----------|----------|-------|
| Run Lighthouse audits (fix issues) | P0 | 8h | Dev |
| Run WCAG accessibility audit (axe) | P0 | 6h | Dev |
| Cross-browser testing | P0 | 4h | QA |
| Mobile device testing (iOS, Android) | P0 | 4h | QA |
| Fix responsive layout issues | P0 | 4h | Dev |
| Performance optimization (lazy load, code split) | P0 | 6h | Dev |
| Test- [ ] Subscription request end-to-end | P0 | 3h | QA |
| Test PWA on multiple devices | P0 | 2h | QA |
| **Week 7 Total** | | **37h** | |

**Testing Checklist:**

| Category | Tests |
|----------|-------|
| **Browsers** | Chrome, Firefox, Safari, Edge (last 2 versions) |
| **Mobile** | iOS Safari 14+, Chrome Android |
| **Screen Sizes** | 320px, 375px, 768px, 1024px, 1440px |
| **Accessibility** | Keyboard nav, screen reader, color contrast |
| **Performance** | Lighthouse mobile >90, LCP <2.5s |

#### Week 8: Launch

| Task | Priority | Estimate | Owner |
|------|----------|----------|-------|
| Final stakeholder review | P0 | 4h | All |
| Fix critical bugs from review | P0 | 8h | Dev |
| Configure production environment | P0 | 4h | Dev |
| Set up domain and SSL | P0 | 2h | Dev |
| Configure CDN (if applicable) | P1 | 2h | Dev |
| Deploy to production | P0 | 2h | Dev |
| Verify GA4 in production | P0 | 1h | Dev |
| Verify forms in production | P0 | 1h | Dev |
| Announce launch | P0 | 2h | Marketing |
| **Week 8 Total** | | **26h** | |

**Launch Checklist:**

```
PRE-LAUNCH
[ ] All P0 features complete
[ ] Lighthouse mobile score >90
[ ] WCAG 2.2 AA audit passed
[ ] All forms tested in production
[ ] GA4 receiving events
[ ] PWA installable
[ ] SSL certificate active
[ ] robots.txt configured
[ ] sitemap.xml generated
[ ] Meta tags (OG, Twitter) configured
[ ] Favicon and app icons present

LAUNCH DAY
[ ] DNS propagation complete
[ ] Smoke test all pages
[ ] Submit sitemap to Google Search Console
[ ] Announce on social media
[ ] Monitor error logs

POST-LAUNCH (48h)
[ ] Monitor GA4 for traffic
[ ] Check for console errors
[ ] Verify form submissions received
[ ] Address any user feedback
```

---

## 5. Resource Requirements

### 5.1 Team Roles

| Role | Responsibility | Allocation |
|------|----------------|------------|
| **Project Owner** | Requirements, approvals, content review | 5h/week |
| **Developer** | Frontend development, PWA, testing | 40h/week |
| **Content Writer** | ES/EN copy, testimonials, legal | 10h/week (Weeks 6-7) |
| **QA Tester** | Cross-browser, accessibility, mobile testing | 15h/week (Week 7) |

### 5.2 Technology Stack

| Category | Technology | Cost |
|----------|------------|------|
| **Framework** | React 18 + Vite | Free |
| **Hosting** | Vercel / Netlify / Cloudflare Pages | Free tier |
| **Analytics** | Google Analytics 4 | Free |
| **Email** | Formspree / EmailJS / Custom endpoint | Free-$10/mo |
| **Domain** | atlanperformance.com | ~$12/year |
| **SSL** | Let's Encrypt (via host) | Free |
| **Maps** | Google Maps Embed | Free |
| **Icons** | Phosphor Icons | Free (MIT) |
| **Fonts** | Google Fonts | Free |

### 5.3 Development Tools

| Tool | Purpose |
|------|---------|
| VS Code | IDE |
| Git + GitHub | Version control |
| Figma (optional) | Design reference |
| Chrome DevTools | Debugging, Lighthouse |
| axe DevTools | Accessibility testing |
| BrowserStack (optional) | Cross-browser testing |

---

## 6. Technical Architecture

### 6.1 Project Structure

```
atlan-performance/
├── public/
│   ├── favicon.ico
│   ├── manifest.json          # PWA manifest
│   ├── sw.js                  # Service worker
│   ├── offline.html           # Offline fallback
│   ├── icons/                 # PWA icons (192, 512)
│   └── images/                # Static images
│
├── src/
│   ├── components/
│   │   ├── common/            # Button, Card, Icon, etc.
│   │   ├── layout/            # Header, Footer, Layout
│   │   ├── home/              # Hero, USP, Testimonials
│   │   └── forms/             # ContactForm, NewsletterForm
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Programs.jsx
│   │   ├── ProgramDetail.jsx
│   │   ├── Courses.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useLanguage.js
│   │   ├── useForm.js
│   │   └── useAnalytics.js
│   │
│   ├── utils/
│   │   ├── i18n.js
│   │   ├── analytics.js
│   │   └── validation.js
│   │
│   ├── styles/
│   │   ├── variables.css      # Design tokens
│   │   ├── globals.css        # Base styles
│   │   ├── glass.css          # Glassmorphism utilities
│   │   └── animations.css     # Keyframes
│   │
│   ├── locales/
│   │   ├── es.json
│   │   └── en.json
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── docs/
│   ├── README.md
│   ├── REQUIREMENTS.md
│   ├── DESIGN.md
│   └── STYLE_GUIDE.md
│
├── package.json
├── vite.config.js
├── .eslintrc.js
├── .prettierrc
└── .gitignore
```

### 6.2 PWA Configuration

**manifest.json:**
```json
{
  "name": "Atlan Performance",
  "short_name": "Atlan",
  "description": "Science-engineered swim & triathlon coaching",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0B2A3C",
  "theme_color": "#0E8A9A",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

**Service Worker Strategy:**
- Cache-first for static assets (CSS, JS, images)
- Network-first for HTML pages
- Offline fallback page for failed requests

### 6.3 Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| Lighthouse Performance | >90 | Lighthouse CI |
| First Contentful Paint | <1.5s | Web Vitals |
| Largest Contentful Paint | <2.5s | Web Vitals |
| Time to Interactive | <3.5s | Lighthouse |
| Cumulative Layout Shift | <0.1 | Web Vitals |
| Total Blocking Time | <200ms | Lighthouse |
| Bundle Size (gzipped) | <150KB | Vite build |

---

## 7. Risk Management

### 7.1 Risk Register

| ID | Risk | Probability | Impact | Mitigation |
|----|------|-------------|--------|------------|
| R1 | Content delays (copy not ready) | Medium | High | Start with placeholder content; content can be swapped without code changes |
| R2 | Scope creep | Medium | Medium | Strict adherence to MVP scope; document all change requests for Phase 2 |
| R3 | Performance issues on mobile | Medium | High | Test early and often; use Lighthouse in CI pipeline |
| R4 | Third-party API issues (Maps, Email) | Low | Medium | Use fallbacks; Maps can show static image; Email can queue |
| R5 | Browser compatibility bugs | Medium | Medium | Test across browsers in Week 7; use progressive enhancement |
| R6 | Accessibility failures | Low | High | Use axe during development; audit in Week 7 |
| R7 | PWA installation issues | Low | Low | Test on multiple devices; follow Google's PWA checklist |

### 7.2 Contingency Plans

| Risk | Contingency |
|------|-------------|
| Content delays | Launch with Spanish only; add English in fast-follow |
| Performance issues | Defer non-critical features (animations, carousel) |
| Email service down | Show success message with fallback contact info |
| Maps API issue | Display static map image with link to Google Maps |

---

## 8. Quality Assurance

### 8.1 Testing Strategy

| Test Type | Tool | Coverage |
|-----------|------|----------|
| **Unit Tests** | Vitest | Utility functions, validation logic |
| **Component Tests** | Testing Library | Button, Form, Card components |
| **Integration Tests** | Testing Library | Form submission |
| **E2E Tests** | Playwright (optional) | Critical user journeys |
| **Accessibility Tests** | axe-core, jest-axe | All components |
| **Visual Tests** | Manual | Cross-browser, responsive |
| **Performance Tests** | Lighthouse CI | Every PR |

### 8.2 Definition of Done

A feature is complete when:

- [ ] Code is written and follows BEM/style guide
- [ ] Unit tests pass (where applicable)
- [ ] Component is accessible (keyboard, screen reader)
- [ ] Component is responsive (mobile-first)
- [ ] Both languages have content (ES/EN)
- [ ] Lighthouse score maintained (>90)
- [ ] Code reviewed and approved
- [ ] Merged to develop branch

### 8.3 Acceptance Criteria Template

```markdown
## Feature: [Feature Name]

**As a** [user type]
**I want** [action]
**So that** [benefit]

### Acceptance Criteria

- [ ] Given [context], when [action], then [result]
- [ ] Given [context], when [action], then [result]

### Technical Requirements

- [ ] Works on mobile (320px+)
- [ ] Meets WCAG 2.2 AA
- [ ] Loads in <2.5s
- [ ] Works offline (if applicable)
```

---

## 9. Deployment Strategy

### 9.1 Environments

| Environment | URL | Purpose |
|-------------|-----|---------|
| **Local** | localhost:5173 | Development |
| **Preview** | Auto-generated | PR previews |
| **Staging** | staging.atlanperformance.com | Pre-production testing |
| **Production** | atlanperformance.com | Live site |

### 9.2 CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test

  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          configPath: './lighthouserc.json'
          uploadArtifacts: true

  deploy-preview:
    if: github.event_name == 'pull_request'
    needs: [lint, test]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy Preview
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}

  deploy-production:
    if: github.ref == 'refs/heads/main'
    needs: [lint, test, lighthouse]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy Production
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### 9.3 Hosting Recommendation

**Primary:** Vercel (recommended)
- Free tier sufficient for MVP
- Automatic preview deployments
- Edge caching
- Excellent React/Vite support

**Alternatives:**
- Netlify (similar features)
- Cloudflare Pages (best edge performance)

---

## 10. Post-Launch Plan

### 10.1 Monitoring (Week 1-4 Post-Launch)

| Metric | Tool | Frequency |
|--------|------|-----------|
| Traffic & conversions | GA4 | Daily |
| Performance (Web Vitals) | GA4 / CrUX | Weekly |
| Errors | Console / Sentry | Daily |
| Form submissions | Email / CRM | Daily |
| PWA installs | GA4 custom event | Weekly |

### 10.2 Quick Wins (First 30 Days)

| Task | Priority | Estimate |
|------|----------|----------|
| Fix bugs from user feedback | P0 | Ongoing |
| Add additional testimonials | P1 | 2h |
| Optimize based on GA4 data | P1 | 4h |
| A/B test CTA copy | P2 | 4h |
| Add micro-interactions | P2 | 4h |

### 10.3 Phase 2 Planning

After 90 days, evaluate for Phase 2 features:

| Feature | Trigger |
|---------|---------|
| Course portal | >50 active subscribers |
| Blog / Content marketing | SEO priority identified |
| Online booking | High volume of scheduling requests |
| Video library | Demand for remote coaching |

---

## Appendix A: Sprint Velocity Tracking

| Sprint | Planned Hours | Actual Hours | Velocity |
|--------|---------------|--------------|----------|
| Sprint 1 (Weeks 1-2) | 56h | - | - |
| Sprint 2 (Weeks 3-4) | 79h | - | - |
| Sprint 3 (Week 5) | 35h | - | - |
| Sprint 4 (Weeks 6-8) | 96h | - | - |
| **Total** | **266h** | - | - |

---

## Appendix B: Communication Plan

| Meeting | Frequency | Participants | Purpose |
|---------|-----------|--------------|---------|
| Daily Standup | Daily (15 min) | Dev, Owner | Progress, blockers |
| Sprint Review | Bi-weekly | All | Demo completed work |
| Sprint Planning | Bi-weekly | All | Plan next sprint |
| Stakeholder Update | Weekly | Owner, Dev | Status report |

---

## Appendix C: Document References

| Document | Location | Purpose |
|----------|----------|---------|
| Requirements | `docs/REQUIREMENTS.md` | Functional specs |
| Design | `docs/DESIGN.md` | Technical architecture |
| Style Guide | `docs/STYLE_GUIDE.md` | UI/UX standards |
| Brand Kit | `docs/BRAND_KIT.md` | Brand guidelines |
| Glassmorphism & Icons | `docs/GLASS_ICONS.md` | Visual system |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | December 2025 | Project Team | Initial project plan |

---

**Document Control**

- **Status:** Approved for Execution
- **Next Review:** End of Sprint 1
- **Owner:** Edgar Bonilla (erbonilla@outlook.com)
