# Atlan Performance | End-to-End Test Plan

**Version:** 1.0  
**Date:** December 2025  
**Owner:** QA / Dev  

Objective: ensure that the **critical user journeys** for the Atlan Performance MVP behave correctly in realistic conditions before launch.

---

## 1. Scope

### 1.1 In Scope

- Bilingual navigation (ES/EN)
- Theme toggle (dark/light)
- Homepage hero
- Program list and detail pages
- Courses & Schedules page
- Contact & Course Subscription form & Newsletter form
- PWA install & offline behavior
- GA4 event firing for key actions

### 1.2 Out of Scope (Manual)

- Long-term analytics trends
- Content correctness in every paragraph (spot-check only)

---

## 2. Test Environments

| Env     | URL example                    | Notes                          |
|---------|--------------------------------|--------------------------------|
| DEV     | `http://localhost:5173`       | Local development              |
| STAGING | `https://staging.atlan…`      | Pre-production mirror          |
| PROD    | `https://atlanperformance.com`| Live site (post-launch checks) |

All e2e tests should run on **staging** before going to prod.

---

## 3. Critical Journeys

### CJ1 – Visitor → Subscription

1. Land on `/` in Spanish
2. Scroll hero, click “GET STARTED TODAY!”
3. Reach `/contact`
4. Fill out form with valid data
5. Submit and see success message
6. Confirm GA4 `subscribe` event fired

**Expected Result:** user sees clear confirmation, no errors, lead email received.

### CJ3 – Browse Programs & Courses

1. Land on `/programs`
2. Open each program detail page
3. Verify copy loads in Spanish
4. Switch to English with header toggle
5. Confirm program names & descriptions change language
6. Navigate to `/courses`
7. Check 3 tiers show correctly (Dolphin, Shark, Orca)
8. Scroll down and verify Schedule & Location section loads correctly

**Expected:** no broken links, no console errors, content matches translations.

### CJ4 – Courses & Schedules interaction

1. Go to `/courses`
2. Scroll to "Schedule & Location" section
3. Apply filters if available or check markers on map
4. Click on a visible session or "Get Directions"
5. Confirm interaction fires relevant events if implemented

### CJ5 – PWA Install & Offline

1. On mobile, visit site and trigger install prompt
2. Install PWA to home screen
3. Open PWA from icon
4. Turn on airplane mode
5. Navigate between cached pages (home, programs, courses)
6. Attempt to open `/courses` in airplane mode

**Expected:** PWA opens offline, cached pages load, offline banner/`offline.html` appears where needed, forms fail gracefully with helpful copy.

---

## 4. Test Cases (Summary)

### 4.1 Navigation & Language

| ID   | Description                          | Steps (short)                                    | Expected                         |
|------|--------------------------------------|--------------------------------------------------|----------------------------------|
| NAV-01 | Header links (ES)                   | Click all nav links in ES                        | Correct pages load, ES content   |
| NAV-02 | Header links (EN)                   | Switch EN, click all nav links                   | Correct pages load, EN content   |
| NAV-03 | Language persistence                | Switch EN, refresh, return to site               | Stays EN                         |
| NAV-04 | Theme switch + persistence          | Toggle light/dark, refresh                       | Mode stays selected              |

### 4.2 Homepage

| ID   | Description                          | Expected                                         |
|------|--------------------------------------|-------------------------------------------------|
| HOME-01 | Hero CTAs route correctly          | Buttons go to `/contact` or relevant section    |

### 4.3 Forms

| ID   | Description                            | Expected                                       |
|------|----------------------------------------|------------------------------------------------|
| FORM-01 | Submit empty form                    | Field errors shown, focus moves to first error |
| FORM-02 | Invalid email                        | Email-specific error message                   |
| FORM-03 | Valid submission                     | Success message + GA4 `subscribe`          |
| FORM-04 | Network error                        | Friendly error, no duplicate submissions       |
| FORM-05 | Newsletter valid email               | Success & `newsletter_signup` event            |

### 4.4 PWA

| ID   | Description                            | Expected                                      |
|------|----------------------------------------|-----------------------------------------------|
| PWA-01 | Manifest/is installable               | Lighthouse PWA checks pass                    |
| PWA-02 | Install from Chrome/Android           | App adds to home screen                       |
| PWA-03 | Offline home                          | Home renders offline if previously visited    |
| PWA-04 | Offline Courses & Schedules          | Graceful offline message / offline.html       |

---

## 5. Devices & Browsers

Minimum matrix to test manually:

- Desktop: Chrome (latest), Firefox (latest), Safari (macOS), Edge
- Mobile: iOS Safari 14+, Chrome on Android, Samsung Internet

Resolutions:

- 320px (small phone)
- 375px (iPhone)
- 768px (tablet)
- 1024px (small laptop)
- 1440px (desktop)

---

## 6. Acceptance Criteria

MVP is ready to launch when:

- [ ] All **P0 test cases** pass in staging
- [ ] No **critical** or **high** severity bugs open
- [ ] Lighthouse mobile score ≥ 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] GA4 receives events for:
  - `page_view` on all main routes
  - `subscribe`, `newsletter_signup`
  - `language_change`, `theme_change`
- [ ] Forms successfully deliver emails to the coach inbox
- [ ] PWA is installable and works offline for cached content

---

## 7. Regression Checklist (Post-Launch Changes)

Every time we touch navigation, forms, or PWA config, re-run:

- CJ1 (Visitor → Subscription)
- FORM-01 to FORM-03
- NAV-01 to NAV-03
- PWA-01 to PWA-03

Keep this plan in the repo so it evolves with the product.
