# Atlan Performance | PWA Task Checklist

**Quick Reference for Development Tracking**

---

## Sprint 1: Foundation (Weeks 1-2)

### Week 1: Project Setup
- [ ] Initialize Vite + React project
- [ ] Configure ESLint + Prettier
- [ ] Configure Vitest for testing
- [ ] Set up Git repository
- [ ] Create branching strategy (main/develop/feature)
- [ ] Create folder structure
- [ ] Install core dependencies
  - [ ] react-router-dom
  - [ ] react-i18next + i18next
  - [ ] js-cookie
  - [ ] react-ga4
  - [ ] @phosphor-icons/react
- [ ] Configure i18next
- [ ] Create placeholder ES/EN JSON files
- [ ] **Install & Configure HeroUI**
  - [ ] `npm install @heroui/react framer-motion`
  - [ ] `npm install -D tailwindcss postcss autoprefixer`
  - [ ] `npx tailwindcss init -p`
  - [ ] Configure `tailwind.config.js` (add HeroUI plugin)
  - [ ] Add `HeroUIProvider` to `main.jsx`
- [ ] Create CSS variables file (all design tokens)
- [ ] Implement useTheme hook
- [ ] Implement useLanguage hook
- [ ] Set up Phosphor Icon context provider

### Week 2: Design System
- [ ] **Button Component**
  - [ ] Primary variant (Coral Spark)
  - [ ] Secondary variant (Tide Teal outline)
  - [ ] Ghost variant
  - [ ] Loading state
  - [ ] Disabled state
- [ ] **Card Component**
  - [ ] Glass effect (dark mode)
  - [ ] Glass light variant
  - [ ] Hover animation
- [ ] **Form Components**
  - [ ] Input (text, email, tel)
  - [ ] Textarea
  - [ ] Select
  - [ ] Checkbox
  - [ ] Error states
  - [ ] Success states
- [ ] **Header Component**
  - [ ] Logo
  - [ ] Desktop navigation
  - [ ] Language toggle (ES | EN)
  - [ ] Theme toggle (Sun/Moon)
  - [ ] Mobile hamburger menu
  - [ ] Sticky on scroll
- [ ] **Footer Component**
  - [ ] Navigation links
  - [ ] Contact info
  - [ ] Social links
  - [ ] Legal links
- [ ] **Layout Component**
  - [ ] Max-width container
  - [ ] Page transitions
- [ ] **Glassmorphism Utilities**
  - [ ] .glass class
  - [ ] .glass-subtle class
  - [ ] .glass-accent class
- [ ] **Animation Utilities**
  - [ ] Fade-in animation
  - [ ] Slide-up animation
  - [ ] Liquid transitions
  - [ ] Precision transitions

---

## Sprint 2: Core Pages (Weeks 3-4)

### Week 3: Homepage
- [ ] **Hero Section**
  - [ ] Background image/video
  - [ ] Headline (H1)
  - [ ] Subheadline
  - [ ] Primary CTA button (“GET STARTED TODAY!”)
  - [ ] Secondary CTA button
  - [ ] Responsive layout
- [ ] **USP Grid (4 Pillars)**
  - [ ] Scientific Integrity card
  - [ ] Structured Discipline card
  - [ ] Resilience card
  - [ ] Athlete-Centric card
  - [ ] Icons from Phosphor
  - [ ] Responsive 2x2 → 4x1 grid
- [ ] **Testimonial Carousel**
  - [ ] Testimonial card design
  - [ ] Navigation dots
  - [ ] Auto-play (optional)
  - [ ] Touch/swipe support
  - [ ] Pause on hover
- [ ] **Newsletter Section**
  - [ ] Email input
  - [ ] Submit button
  - [ ] Success message
  - [ ] Error handling
  - [ ] GA4 event: newsletter_signup

### Week 4: Secondary Pages
- [ ] **Programs Page**
  - [ ] Page header
  - [ ] Program cards (4)
    - [ ] Swimming for Adults
    - [ ] Swimming for Juniors
    - [ ] Open Water
    - [ ] Running
    - [ ] Triathlon
  - [ ] Filter/tabs (optional)
  - [ ] CTA to individual program
- [ ] **Program Detail Pages** (×4)
  - [ ] Hero with program name
  - [ ] Description
  - [ ] Schedule/frequency
  - [ ] What's included
  - [ ] Pricing reference
  - [ ] CTA to subscribe/join
- [ ] **Courses & Schedules Page**
  - [ ] Page header: "Courses & Schedules"
  - [ ] Unified Pricing & Schedule layout
  - [ ] Pricing table (Dolphin, Shark, Orca)
    - [ ] Dolphin tier (₡22k)
    - [ ] Shark tier (₡28k)
    - [ ] Orca tier (₡35k)
  - [ ] Weekly calendar view (Tue/Thu/Sat)
  - [ ] Google Maps embed (Apamar Pool)
  - [ ] Location details & Travel times
  - [ ] Important Course Information sidebar
  - [ ] FAQ accordion
  - [ ] CTA buttons (“GET STARTED TODAY!”) to Courses/Form
- [ ] **About Page**
  - [ ] Coach bio/photo
  - [ ] Philosophy section
  - [ ] Credentials
  - [ ] Brand story
- [ ] **Contact Page**
  - [ ] Contact form
    - [ ] Name field
    - [ ] Email field
    - [ ] Phone field
    - [ ] Program interest dropdown
    - [ ] Message textarea
    - [ ] Submit button
  - [ ] Contact info sidebar
  - [ ] Map embed
  - [ ] Hours of operation
- [ ] **404 Not Found Page**
  - [ ] Friendly message
  - [ ] Link back to home
  - [ ] Search (optional)

---

## Sprint 3: Features & Integration (Week 5)

### Forms & Validation
- [ ] Create validation utility functions
  - [ ] Required field
  - [ ] Email format
  - [ ] Phone format
  - [ ] Min/max length
- [ ] Implement useForm hook
- [ ] Add validation to Contact form
- [ ] Add validation to Newsletter form
- [ ] Add validation to Course subscription form
- [ ] Error message announcements (ARIA)
- [ ] Success state handling

### Email Integration
- [ ] Choose email service (Formspree/EmailJS/custom)
- [ ] Configure endpoint
- [ ] Implement submission handler
- [ ] Add loading state during submission
- [ ] Handle success response
- [ ] Handle error response
- [ ] Test email delivery

### Analytics (GA4)
- [ ] Install react-ga4
- [ ] Initialize GA4 with measurement ID
- [ ] Implement page view tracking
- [ ] Create useAnalytics hook
- [ ] Configure custom events:
  - [ ] `language_change`
  - [ ] `theme_change`
  - [ ] `subscribe`
  - [ ] `newsletter_signup`
  - [ ] `pwa_install`
- [ ] Test events in GA4 DebugView

### PWA Features
- [ ] Create manifest.json
  - [ ] name, short_name
  - [ ] description
  - [ ] start_url
  - [ ] display: standalone
  - [ ] background_color: #0B2A3C
  - [ ] theme_color: #0E8A9A
  - [ ] icons (192px, 512px)
- [ ] Create PWA icons
  - [ ] icon-192.png
  - [ ] icon-512.png
  - [ ] Maskable versions
- [ ] Create Service Worker
  - [ ] Cache static assets
  - [ ] Cache-first strategy for assets
  - [ ] Network-first for HTML
  - [ ] Offline fallback
- [ ] Create offline.html page
- [ ] Register Service Worker in main.jsx
- [ ] Add install prompt UI
- [ ] Test PWA with Lighthouse

---

## Sprint 4: Content, Polish & Launch (Weeks 6-8)

### Week 6: Content Integration
- [ ] **Spanish Copy**
  - [ ] Homepage content
  - [ ] Program descriptions
  - [ ] Courses details
  - [ ] About page
  - [ ] Contact page
  - [ ] Legal pages
  - [ ] Meta descriptions
- [ ] **English Copy**
  - [ ] Homepage content
  - [ ] Program descriptions
  - [ ] Courses details
  - [ ] About page
  - [ ] Contact page
  - [ ] Legal pages
  - [ ] Meta descriptions
- [ ] **Testimonials**
  - [ ] Collect 5+ athlete testimonials
  - [ ] Photos (with permission)
  - [ ] ES/EN versions
- [ ] **FAQ Content**
  - [ ] 10+ questions
  - [ ] ES/EN versions
- [ ] **Images**
  - [ ] Hero images (optimized <200KB)
  - [ ] Program images
  - [ ] Coach photo
  - [ ] Athlete photos
  - [ ] Convert to WebP
  - [ ] Create JPEG fallbacks
- [ ] **Legal Pages**
  - [ ] Privacy Policy (ES)
  - [ ] Privacy Policy (EN)
  - [ ] Terms of Service (ES)
  - [ ] Terms of Service (EN)

### Week 7: Testing & Optimization
- [ ] **Lighthouse Audits**
  - [ ] Performance >90
  - [ ] Accessibility >90
  - [ ] Best Practices >90
  - [ ] SEO >90
  - [ ] PWA pass
- [ ] **Accessibility Audit**
  - [ ] Run axe DevTools
  - [ ] Fix all critical issues
  - [ ] Fix all serious issues
  - [ ] Keyboard navigation test
  - [ ] Screen reader test
  - [ ] Color contrast verification
- [ ] **Cross-Browser Testing**
  - [ ] Chrome (latest 2)
  - [ ] Firefox (latest 2)
  - [ ] Safari (latest 2)
  - [ ] Edge (latest 2)
- [ ] **Mobile Testing**
  - [ ] iOS Safari 14+
  - [ ] Chrome Android
  - [ ] Samsung Internet
- [ ] **Responsive Testing**
  - [ ] 320px (small phone)
  - [ ] 375px (iPhone)
  - [ ] 768px (tablet)
  - [ ] 1024px (laptop)
  - [ ] 1440px (desktop)
- [ ] **Performance Optimization**
  - [ ] Lazy load images
  - [ ] Lazy load routes
  - [ ] Code splitting
  - [ ] Font optimization
  - [ ] Remove unused CSS
- [ ] **Form Testing**
  - [ ] Contact form end-to-end
  - [ ] Newsletter form end-to-end
  - [ ] Subscription request end-to-end
  - [ ] Error states
  - [ ] Success states

### Week 8: Launch
- [ ] **Pre-Launch**
  - [ ] Final stakeholder review
  - [ ] Fix critical bugs
  - [ ] Configure production environment variables
  - [ ] Set up domain (atlanperformance.com)
  - [ ] Configure SSL certificate
  - [ ] Set up CDN (if applicable)
  - [ ] Configure redirects (www → non-www)
- [ ] **SEO Setup**
  - [ ] robots.txt
  - [ ] sitemap.xml
  - [ ] Meta tags (title, description)
  - [ ] Open Graph tags
  - [ ] Twitter Card tags
  - [ ] Canonical URLs
  - [ ] Structured data (Organization, LocalBusiness)
- [ ] **Launch Day**
  - [ ] Deploy to production
  - [ ] Verify DNS propagation
  - [ ] Smoke test all pages
  - [ ] Verify GA4 receiving data
  - [ ] Verify forms working
  - [ ] Verify PWA installable
  - [ ] Submit sitemap to Google Search Console
  - [ ] Social media announcement
- [ ] **Post-Launch (48h)**
  - [ ] Monitor GA4 traffic
  - [ ] Check error logs
  - [ ] Verify form submissions received
  - [ ] Address user feedback
  - [ ] Fix any critical issues

---

## Quick Metrics Dashboard

### Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Performance | >90 | ⬜ |
| Lighthouse Accessibility | >90 | ⬜ |
| Lighthouse Best Practices | >90 | ⬜ |
| Lighthouse SEO | >90 | ⬜ |
| LCP | <2.5s | ⬜ |
| FCP | <1.5s | ⬜ |
| CLS | <0.1 | ⬜ |
| TTI | <3.5s | ⬜ |

### Feature Completion

| Feature | Status |
|---------|--------|
| Bilingual (ES/EN) | ⬜ |
| Dark/Light Theme | ⬜ |
| Contact Form | ⬜ |
| Newsletter Signup | ⬜ |
| PWA Installable | ⬜ |
| Offline Support | ⬜ |
| GA4 Analytics | ⬜ |

### Page Completion

| Page | Desktop | Mobile | ES | EN |
|------|---------|--------|----|----|
| Home | ⬜ | ⬜ | ⬜ | ⬜ |
| Programs | ⬜ | ⬜ | ⬜ | ⬜ |
| Program Detail (×4) | ⬜ | ⬜ | ⬜ | ⬜ |
| Courses | ⬜ | ⬜ | ⬜ | ⬜ |
| Schedule | ⬜ | ⬜ | ⬜ | ⬜ |
| About | ⬜ | ⬜ | ⬜ | ⬜ |
| Contact | ⬜ | ⬜ | ⬜ | ⬜ |
| Privacy Policy | ⬜ | ⬜ | ⬜ | ⬜ |
| Terms of Service | ⬜ | ⬜ | ⬜ | ⬜ |
| 404 | ⬜ | ⬜ | ⬜ | ⬜ |

---

## Notes

_Use this space for sprint notes, blockers, and decisions._

### Sprint 1 Notes
- 

### Sprint 2 Notes
- 

### Sprint 3 Notes
- 

### Sprint 4 Notes
- 

---

**Legend:**
- ⬜ Not started
- 🟡 In progress
- ✅ Complete
- ❌ Blocked
