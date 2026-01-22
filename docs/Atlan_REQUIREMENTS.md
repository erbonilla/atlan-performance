# Atlan Performance | Requirements Document

**Version:** 1.0  
**Date:** December 2025  
**Status:** Approved for MVP  
**Owner:** Edgar Bonilla (Head Coach)  
**Contact:** erbonilla@outlook.com

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Business Requirements](#2-business-requirements)
3. [Functional Requirements](#3-functional-requirements)
4. [Non-Functional Requirements](#4-non-functional-requirements)
5. [Content Requirements](#5-content-requirements)
6. [Constraints & Assumptions](#6-constraints--assumptions)
7. [Success Criteria](#7-success-criteria)
8. [Out of Scope (Post-MVP)](#8-out-of-scope-post-mvp)

---

## 1. Introduction

### 1.1 Purpose

This document defines the requirements for the Atlan Performance website MVP—a bilingual, mobile-first web application serving as the primary acquisition hub for the swim and triathlon coaching business.

### 1.2 Scope

The MVP includes a marketing website with lead generation capabilities. It does not include student portals, workout logging, or e-commerce functionality (reserved for future phases).

### 1.3 Target Users

**Primary Persona: "The Optimizer"**
- Busy professionals (30-50 years old)
- Career/family balance constraints
- Data-driven decision makers
- Seeking structured, sustainable training
- Value efficiency and expertise over motivation alone

**Secondary Personas:**
- Parents enrolling children in Swimming for Juniors programs
- Recreational swimmers seeking technique improvement
- First-time triathletes preparing for events

### 1.4 Document Conventions

| Priority | Meaning |
|----------|---------|
| **P0** | Must have for MVP launch |
| **P1** | Should have, include if time permits |
| **P2** | Nice to have, defer to post-MVP |

---

## 2. Business Requirements

### 2.1 Business Objectives

| ID | Objective | Target | Timeline |
|----|-----------|--------|----------|
| BR-01 | Generate qualified coaching leads | 10 course subscribers/month (MVP), 20/month (stretch) | First 90 days |
| BR-02 | Establish brand authority | Position as "science-backed" leader | Ongoing |
| BR-03 | Achieve mobile-first performance | 60%+ mobile traffic with <2.5s LCP | Launch |
| BR-04 | Enable bilingual operation | Full ES/EN content parity | Launch |

### 2.2 Key Performance Indicators (KPIs)

**Primary KPIs:**

| Metric | Baseline | Target | Measurement |
|--------|----------|--------|-------------|
| Course Conversion Rate | 0% (new site) | 2% (MVP baseline), 5% (stretch goal) | GA4 Goal Conversion |
| Lead Quality Score | N/A | 70% qualified | CRM scoring |
| Mobile Traffic | N/A | 60%+ | GA4 Device Category |
| Avg. Session Duration | N/A | 3min+ | GA4 Engagement |
| Bounce Rate | N/A | <50% | GA4 |

**Secondary KPIs:**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Time on Programs Page | 2min+ | GA4 Page Analytics |
| Language Toggle Usage | 15% switch to EN | Custom event |
| Newsletter Signups | 10/week | Form submissions |
| Page Load Speed (Mobile) | <2.5s LCP | Lighthouse CI |

### 2.3 Business Rules

| ID | Rule | Rationale |
|----|------|-----------|
| BZ-01 | Default language is Spanish (Costa Rica) | Primary market is local Costa Rican athletes |
| BZ-02 | Default theme is Dark Mode | Reduces glare, saves battery, brand differentiation |
| BZ-03 | All form submissions route to erbonilla@outlook.com | Single point of contact for MVP |

---

## 3. Functional Requirements

### 3.1 Global Features

#### FR-3.1.1 Language System [P0]

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-3.1.1a | System shall default to Spanish (es-CR) | Page loads in Spanish without user action |
| FR-3.1.1b | Language toggle visible in header | ES/EN toggle accessible on all pages |
| FR-3.1.1c | Language preference persists across sessions | Cookie `atlan_lang` stores preference (1 year expiry) |
| FR-3.1.1d | All UI text externalized to translation files | No hardcoded strings in components |
| FR-3.1.1e | HTML `lang` attribute updates with selection | `<html lang="es">` or `<html lang="en">` |
| FR-3.1.1f | Fallback hierarchy: es → en → es | Graceful degradation if translation missing |

#### FR-3.1.2 Theme System [P0]

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-3.1.2a | System shall default to Dark Mode | Abyss Navy background on first visit |
| FR-3.1.2b | Theme toggle visible in header | Moon/Sun icon accessible on all pages |
| FR-3.1.2c | Theme preference persists across sessions | Cookie `atlan_theme` stores preference (1 year expiry) |
| FR-3.1.2d | Theme applies to all components | No visual inconsistencies between modes |
| FR-3.1.2e | System respects `prefers-color-scheme` on first visit | Only if no cookie preference exists |

**Technical Constraint:** Do NOT use localStorage (unsupported in some environments). Use cookies only.

#### FR-3.1.3 Navigation [P0]

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-3.1.3a | Sticky header on all pages | Header remains visible on scroll |
| FR-3.1.3b | Navigation links: Home, Programs, Courses & Schedules, Community, About | All links functional and translated |
| FR-3.1.3c | Primary CTA in header: "GET STARTED" | Coral Spark button, routes to subscription form |
| FR-3.1.3d | Mobile hamburger menu at <768px | Full-screen overlay with all navigation items |
| FR-3.1.3e | Skip navigation link for keyboard users | Hidden by default, visible on focus |

### 3.2 Homepage Requirements

#### FR-3.2.1 Hero Section [P0]

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-3.2.1a | Full-width hero with "Morning Light" visual | High-exposure, natural light imagery |
| FR-3.2.1b | Headline reflects USP in current language | ES: "Coaching de resistencia diseñado con ciencia, nacido del océano" |
| FR-3.2.1c | Subheadline explains Atlan approach (2-3 sentences) | Translated, concise value proposition |
| FR-3.2.1d | Primary CTA: "GET STARTED TODAY!" | Large button, routes to subscription form |
| FR-3.2.1e | Subtle "Currents" pattern at 5% opacity | Topographic texture on background |

#### FR-3.2.2 USP Grid ("The 4 Pillars") [P0]

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-3.2.3a | 4-column grid (2x2 on mobile) | Responsive layout |
| FR-3.2.3b | Each pillar has icon, title, and description | Custom icons per pillar |
| FR-3.2.3c | Pillars: Scientific Integrity, Structured Discipline, Resilience, Athlete-Centric | All content translated |

#### FR-3.2.4 Social Proof Carousel [P1]

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-3.2.4a | 4-slide athlete story format | Hero image → Challenge → Data → Transformation |
| FR-3.2.4b | Each slide features real athlete testimonial | Name, photo, quote |
| FR-3.2.4c | Data slide shows before/after metrics | Dark mode card styling |
| FR-3.2.4d | Auto-advance with manual controls | Pause on hover, arrow navigation |
| FR-3.2.4e | Keyboard accessible (arrow keys) | Left/right arrows navigate |

#### FR-3.2.5 Newsletter Signup [P1]

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-3.2.5a | Newsletter Headline: "Join the Squad" (ES: "Únete al Equipo") | Translated |
| FR-3.2.5b | Email field (required) | Validation on submit |
| FR-3.2.5c | Name field (optional) | No validation |
| FR-3.2.5d | Coral Spark CTA on Abyss Navy card | Visual contrast |
| FR-3.2.5e | Success message on submission | Confirmation feedback |

### 3.3 Program Pages [P0]

#### FR-3.3.1 Program Matrix

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-3.3.1a | Clear visual distinction between programs | Unique imagery/icons per program |
| FR-3.3.1b | Programs: Swimming for Adults, Swimming for Juniors, Open Water, Running, Triathlon | All programs represented |
| FR-3.3.1c | Each program shows target audience, key features, schedule | Consistent card format |
| FR-3.3.1d | CTA per program routes to contact form | Pre-fills "Program of Interest" field |

**Program Details:**

| Program | Target Audience | Key Features |
|---------|-----------------|--------------|
| Swimming for Adults | Adults improving technique | Stroke mechanics, breathing, efficiency |
| Swimming for Juniors | Ages 8-17 | Foundational skills, age-appropriate progression |
| Open Water / Aguas Abiertas | Intermediate swimmers | Navigation, drafting, sighting technique |
| Running | Runners of all levels | Technique, endurance, speed work |
| Triathlon (70.3/Ironman) | Multi-sport athletes | Brick workouts, race strategy, periodization |

### 3.4 Courses & Schedules Page [P0]

#### FR-3.4.1 Unified View
| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-3.4.1a | Consolidated pricing and schedule information | Both sections visible on `/courses` |
| FR-3.4.1b | Dark mode card design for pricing | Abyss bg + Tide Teal/Coral Spark accents |
| FR-3.4.1c | Pricing hierarchies: Dolphin, Shark, Orca | Weekly session frequency clearly marked |

#### FR-3.4.2 Pricing Table

| Tier | Price Model | Features | CTA |
|------|-------------|----------|-----|
| Dolphin (Mensual) | ₡22,000/mo | 1 session/week, Technique focus, Coach-guided | "GET STARTED TODAY!" (Tide Teal) |
| Shark (Mensual) | ₡28,000/mo | 2 sessions/week, Progress-focused, All levels | "GET STARTED TODAY!" (Coral Spark) |
| Orca (Mensual) | ₡35,000/mo | 3 sessions/week, Performance-oriented, All levels | "GET STARTED TODAY!" (Tide Teal) |

#### FR-3.4.3 Schedule & Location

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-3.4.3a | Display weekly calendar: Tue/Thu/Sat | 7:00pm (T/Th), 8:30am/9:30am (Sat) |
| FR-3.4.3b | Facility info: Apamar Pool | Address and distance from Zarcero Park |
| FR-3.4.3c | Google Maps integration with directions | Embed and direct link to Google Maps |
| FR-3.4.3d | Important info: Age 8+, 60 min duration | Clear sidebar/text block |

### 3.6 Contact & Lead Capture [P0]

#### FR-3.6.1 Course Subscription Form

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-3.6.1a | Full name field (required, min 2 words) | Custom error: "We need your full name to personalize your plan" |
| FR-3.6.1b | Email field (required, regex validation) | Custom error: "Check the format: example@domain.com" |
| FR-3.6.1c | Phone field (optional, Costa Rica format) | Format hint: +506 XXXX-XXXX |
| FR-3.6.1d | Experience dropdown (required) | Options: Beginner, Intermediate, Advanced |
| FR-3.6.1e | Program of Interest dropdown (optional) | All programs listed |
| FR-3.6.1f | Message textarea (optional, max 500 chars) | Character counter |
| FR-3.6.1g | Real-time validation on blur | Errors appear immediately |
| FR-3.6.1h | Focus first invalid field on submit | Accessibility requirement |
| FR-3.6.1i | Success message displayed on submission | Auto-clear form after 3 seconds |
| FR-3.6.1j | Submission routes to erbonilla@outlook.com | Include all data + timestamp + language |

#### FR-3.6.2 Calendly Integration [P2]

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-3.6.2a | Embedded widget for "Book Discovery Call" | Secondary CTA on program pages |
| FR-3.6.2b | Language matches site language toggle | Spanish/English Calendly |

### 3.7 Footer [P0]

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-3.7a | Navigation links mirror header | All pages accessible |
| FR-3.7b | Contact information (email, phone) | Coach contact details |
| FR-3.7c | Social media links | Icons with external links |
| FR-3.7d | Legal links: Privacy Policy, Terms of Service | Published documents |
| FR-3.7e | Copyright notice | © 2025 Atlan Performance |

---

## 4. Non-Functional Requirements

### 4.1 Performance [P0]

| ID | Requirement | Target | Measurement |
|----|-------------|--------|-------------|
| NFR-4.1a | First Contentful Paint | <1.5s | Lighthouse |
| NFR-4.1b | Largest Contentful Paint | <2.5s | Lighthouse |
| NFR-4.1c | Time to Interactive | <3.5s | Lighthouse |
| NFR-4.1d | Cumulative Layout Shift | <0.1 | Lighthouse |
| NFR-4.1e | Animation Frame Rate | 60fps (30fps low-power fallback) | DevTools |
| NFR-4.1f | Lighthouse Score (Mobile) | >90 | Lighthouse CI |

### 4.2 Accessibility [P0]

| ID | Requirement | Standard |
|----|-------------|----------|
| NFR-4.2a | Color contrast (normal text) | 4.5:1 minimum |
| NFR-4.2b | Color contrast (large text) | 3:1 minimum |
| NFR-4.2c | Touch targets | 48px × 48px minimum |
| NFR-4.2d | UI Framework | HeroUI + Framer Motion |
| NFR-4.2d | Keyboard navigation | All interactive elements focusable |
| NFR-4.2e | Screen reader support | Semantic HTML + ARIA labels |
| NFR-4.2f | Focus states | 3px Coral Spark outline, 2px offset |
| NFR-4.2g | Reduced motion | Respect `prefers-reduced-motion` |
| NFR-4.2h | Skip navigation | Hidden link for keyboard users |
| NFR-4.2i | Data visualizations | Not dependent on color alone |

**Target Standard:** WCAG 2.2 Level AA

### 4.3 Security [P0]

| ID | Requirement | Implementation |
|----|-------------|----------------|
| NFR-4.3a | HTTPS required | SSL certificate on all pages |
| NFR-4.3b | Form data protection | Sanitize all inputs |
| NFR-4.3c | Cookie security | Secure, SameSite attributes |
| NFR-4.3d | No sensitive data in URLs | POST for form submissions |

### 4.4 Compatibility [P0]

| ID | Requirement | Support Level |
|----|-------------|---------------|
| NFR-4.4a | Chrome | Last 2 versions |
| NFR-4.4b | Firefox | Last 2 versions |
| NFR-4.4c | Safari | Last 2 versions |
| NFR-4.4d | Edge | Last 2 versions |
| NFR-4.4e | iOS Safari | 14+ |
| NFR-4.4f | Chrome Android | Last 2 versions |

### 4.5 Image Optimization [P0]

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-4.5a | Hero images | <200KB, WebP with JPEG fallback |
| NFR-4.5b | Thumbnails | <50KB |
| NFR-4.5c | Lazy loading | All below-fold images |
| NFR-4.5d | Responsive images | `<picture>` element with srcset |
| NFR-4.5e | Progressive loading | Blur placeholder for hero |

### 4.6 SEO [P1]

| ID | Requirement | Implementation |
|----|-------------|----------------|
| NFR-4.6a | Semantic HTML | Proper heading hierarchy |
| NFR-4.6b | Meta tags | Title, description per page |
| NFR-4.6c | Open Graph tags | Social sharing optimization |
| NFR-4.6d | Sitemap | XML sitemap submitted to GSC |
| NFR-4.6e | Robots.txt | Proper crawl directives |
| NFR-4.6f | Canonical URLs | Avoid duplicate content |

### 4.7 Analytics [P0]

| ID | Requirement | Implementation |
|----|-------------|----------------|
| NFR-4.7a | Google Analytics 4 | Measurement ID configured |
| NFR-4.7b | Page view tracking | All routes |
| NFR-4.7c | Language change events | Track `language_change` |
| NFR-4.7d | Theme change events | Track `theme_change` |
| NFR-4.7e | Form submissions | Track `subscribe` |
| NFR-4.7g | CTA clicks | Track `select_content` |

---

## 5. Content Requirements

### 5.1 Copywriting Standards

| Requirement | Description |
|-------------|-------------|
| Voice | "Sage + Hero" balance (70% data/wisdom, 30% motivation) |
| Tone | Warm, supportive, data-driven—never shaming |
| Languages | Full parity between Spanish (primary) and English |
| No hardcoding | All text externalized to translation files |

### 5.2 Required Content (Pre-Launch)

| Content Type | Quantity | Status |
|--------------|----------|--------|
| Athlete testimonials | 5+ with photos | Required |
| Program descriptions | 4 (one per program) | Required |
| FAQ questions | 10+ | Required |
| Privacy Policy | 1 (ES + EN) | Required |
| Terms of Service | 1 (ES + EN) | Required |
| Hero imagery | 3-5 variations | Required |
| Program imagery | 1 per program | Required |

### 5.3 Image Guidelines

**Must Show:**
- Athletes in "flow state" (focused, composed)
- Natural light, golden hour preferred
- Blue water (ocean or pool)
- Proper technique demonstration
- Post-workout camaraderie

**Must Avoid:**
- Red faces, grimacing
- Dark, moody lighting
- Generic stock photos
- Cluttered backgrounds

---

## 6. Constraints & Assumptions

### 6.1 Constraints

| ID | Constraint | Impact |
|----|------------|--------|
| C-01 | No localStorage/sessionStorage | Use cookies for persistence |
| C-02 | Single recipient for forms (MVP) | All leads to erbonilla@outlook.com |
| C-03 | No user authentication | No course portal in MVP |
| C-04 | No payment processing | No e-commerce in MVP |
| C-05 | Static content only | No CMS in MVP (content in code) |

### 6.2 Assumptions

| ID | Assumption | Risk if False |
|----|------------|---------------|
| A-01 | Primary traffic from Costa Rica | May need additional languages |
| A-02 | 60%+ traffic will be mobile | Desktop experience may need enhancement |
| A-03 | Coach can respond to leads within 24h | May need auto-responder |
| A-04 | Google Maps API is sufficient | May need additional map features |
| A-05 | GA4 provides adequate analytics | May need additional tracking tools |

### 6.3 Dependencies

| ID | Dependency | Owner |
|----|------------|-------|
| D-01 | Photography assets | Head Coach |
| D-02 | Testimonial content | Head Coach |
| D-03 | Legal documents (privacy, terms) | Head Coach / Legal |
| D-04 | GA4 Measurement ID | Developer |
| D-05 | Domain and hosting | Developer |

---

## 7. Success Criteria

### 7.1 Launch Criteria (MVP)

All P0 requirements must be complete and verified:

- [ ] All pages functional (Home, Programs, Courses & Schedules, Community, About)
- [ ] Language toggle works correctly (ES/EN)
- [ ] Theme toggle works correctly (Dark/Light)
- [ ] Contact form submits and routes to email
- [ ] Mobile responsive at all breakpoints
- [ ] Lighthouse score >90 on mobile
- [ ] WCAG 2.2 AA validation passed
- [ ] GA4 tracking verified
- [ ] SSL certificate active

### 7.2 Success Metrics (90-Day)

| Metric | Target | Review Cadence |
|--------|--------|----------------|
| Subscription signups | 20/month | Weekly (Month 1), Bi-weekly (Month 2-3) |
| Conversion rate | 5% | Weekly |
| Mobile performance | <2.5s LCP | Weekly |
| Bounce rate | <50% | Weekly |

### 7.3 Review Schedule

| Period | Cadence | Attendees |
|--------|---------|-----------|
| Week 1-4 | Weekly | Head Coach, Developer |
| Month 2-3 | Bi-weekly | Head Coach, Developer |
| Month 4+ | Monthly | Head Coach, Developer |
| Quarterly | Deep-dive | Full team |

---

## 8. Out of Scope (Post-MVP)

The following features are explicitly excluded from MVP and planned for future phases:

### Phase 2 (Months 4-6)

- Course portal with workout logging
- Video library of technique drills
- Blog with training articles (SEO strategy)
- Integration with Strava/Garmin
- CMS for content management

### Phase 3 (Months 7-12)

- Native mobile app (React Native)
- Live workout tracking with real-time coaching cues
- Community forum for athletes
- E-commerce for Atlan branded gear
- Advanced analytics dashboard

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | December 2025 | Atlan Team | Initial requirements document |

---

## Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Project Owner | Edgar Bonilla | | |
| Lead Developer | | | |

---

**Document Control**

- Location: `/docs/REQUIREMENTS.md`
- Related Documents:
  - [README.md](../README.md)
  - [DESIGN.md](DESIGN.md)
  - [STYLE_GUIDE.md](STYLE_GUIDE.md)
