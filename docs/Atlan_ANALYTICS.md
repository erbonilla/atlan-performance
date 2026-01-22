# Atlan Performance | Analytics & Events Spec

**Version:** 1.1  
**Date:** January 2026  
**Owner:** Edgar Bonilla  
**Scope:** Marketing/PWA MVP

---

## 1. Purpose

This document defines **what we track**, **where we track it**, and **how we name events** in Google Analytics 4 (GA4) for the Atlan Performance website.

Goals:

- Measure how well the site generates **new course subscriptions**
- Understand which **programs** and **content** drive engagement
- Monitor usage of **language** and **theme** toggles
- Validate adoption of **PWA features** (install, offline usage)

---

## 2. Tools & Implementation

- **Analytics platform:** Google Analytics 4 (GA4)
- **Library:** `react-ga4`
- **Wrapper:** `useAnalytics` custom hook
- **Environment variable:** `VITE_GA4_MEASUREMENT_ID`

### 2.1 GA4 Initialization

- Initialize GA4 in a single place (e.g. `src/utils/analytics.js`)
- Only initialize in **production** or when env var is set
- All pageviews and events flow through `useAnalytics`

```js
// utils/analytics.js
import ReactGA from 'react-ga4';

export const initAnalytics = () => {
  const id = import.meta.env.VITE_GA4_MEASUREMENT_ID;
  if (!id) return;
  ReactGA.initialize(id);
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackEvent = (action, params = {}) => {
  ReactGA.event(action, params);
};
```

---

## 3. Page View Tracking

### 3.1 Routes to Track

| Route            | GA Page Name     | Notes                          |
|------------------|------------------|--------------------------------|
| `/`              | home             | Hero, USP, testimonials |
| `/programs`      | programs         | Program matrix                |
| `/programs/:id`  | program_detail   | One page per program         |
| `/courses`       | courses          | Pricing + Schedule + Map     |
| `/about`         | about            | Coach story & philosophy     |
| `/contact`       | contact          | Course/contact form      |
| `/404`           | not_found        | Custom 404                   |

### 3.2 Implementation Notes

- Use a `useEffect` in the **router layout** to track page changes
- Include language and theme as **page-level parameters**

```js
trackPageView(window.location.pathname + window.location.search);
```

---

## 4. Core Events

### 4.1 Event Naming Conventions

- **Format:** `snake_case`
- **Category:** implied by event name, not separate field
- **Parameters:** always include `language`, `theme`, and `page_path` where relevant

### 4.2 Event Catalog

| Event Name         | When It Fires                                      | Key Params                                   |
|--------------------|----------------------------------------------------|----------------------------------------------|
| `language_change`  | User toggles ES/EN                                 | `from`, `to`, `page_path`                    |
| `theme_change`     | User toggles dark/light                            | `from`, `to`, `page_path`                    |
| `subscribe`        | Course subscription form successfully submitted             | `program_interest`, `experience`, `source`   |
| `newsletter_signup`| Newsletter form successfully submitted             | `source_page`, `language`                    |
| `pwa_install_prompt`| Custom install banner shown                      | `trigger` (`auto|user`), `page_path`         |
| `pwa_install`      | User accepts browser install prompt                | `platform` (`ios|android|desktop`), `source` |
| `nav_click`        | User clicks any header/footer navigation link      | `nav_label`, `nav_position`                  |

---

## 5. Funnel Definitions

### 5.1 Course Funnel

**Goal:** Measure conversion from landing to paid subscriber.

1. **Landing:** `page_view` on `/`
2. **Interest:** `programs` OR `program_detail` page
3. **Intent:** `courses` page view
4. **Conversion:** `subscribe`

**Dashboard Segments:**

- By **program_interest** (Swimming for Adults / Swimming for Juniors / Open Water / Running / Triathlon)
- By **device category** (mobile/desktop)
- By **language** (es/en)

### 5.2 Newsletter Funnel

1. `page_view` on `/` or any page with signup block
2. `newsletter_signup`

Segment by:

- `source_page` (home, blog, courses, etc.)
- `language`

---

## 6. Implementation Checklist

- [ ] Initialize GA4 with `initAnalytics()` in `main.jsx`
- [ ] Implement `useAnalytics` hook that wraps `trackEvent`
- [ ] Track page views on route change
- [ ] Implement all core events listed above
- [ ] Verify events using **GA4 DebugView**
- [ ] Create custom reports and funnels in GA4 UI

---

## 7. QA & Debugging

- Use **GA4 DebugView** during development (debug mode on)
- Validate that every **form submission** produces `subscribe` or `newsletter_signup`
- Ensure `language` and `theme` params are present on all events
- After launch, review events weekly for:
  - Unexpected spikes/drops
  - Missing events in key flows
  - Mismatched param values
