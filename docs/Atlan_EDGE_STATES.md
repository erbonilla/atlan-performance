# Atlan Performance | Edge States, Errors & Offline UX

**Version:** 1.0  
**Date:** December 2025  
**Owner:** Edgar Bonilla  

This spec defines how the PWA behaves when things are **empty, loading, failing or offline**, so the experience always feels intentional and on-brand.

---

## 1. Design Principles

1. **Sage + Hero voice**  
   - Explain what’s happening in clear, factual terms (Sage)  
   - Then gently encourage or suggest next steps (Hero)

2. **No dead ends**  
   - Every error state should give at least one way forward

3. **Respect the athlete’s context**  
   - Assume the user might be tired, on the way to a session, or on bad signal

---

## 2. Global States

### 2.1 Global Loading

- Use a **subtle top progress bar** or spinner near the header when:
  - Routes change (initial data load)
  - Critical API calls are in progress (forms, schedule load)
- Text: none (keep minimal)

### 2.2 Global Offline Banner

Condition: `navigator.onLine === false` or service worker detects offline.

- Fixed banner at top or bottom:

  ES: “Estás sin conexión. Algunas funciones pueden no actualizarse.”  
  EN: “You’re offline. Some features may not update.”

- Show until network returns, then fade out with:

  ES: “Conexión restaurada. Actualizamos tus datos.”  
  EN: “Connection restored. Your data has been updated.”

---

## 3. Homepage Edge States

### 3.1 Hero

- If hero image fails to load, fall back to **solid Abyss Navy background** and keep text + CTA visible.

### 3.2 Testimonials Carousel

- If no testimonials are configured:
  - Hide carousel entirely
- If testimonials API fails:
  - Show a **single static block**:
    - ES: “Atletas reales, resultados reales. Muy pronto verás aquí sus historias.”  
    - EN: “Real athletes, real results. We’ll show their stories here soon.”

---

## 4. Programs & Courses

### 4.1 Programs List (`/programs`)

- **Empty list (no programs configured):**
  - Show message:
    - ES: “Estamos actualizando nuestra oferta de programas. Escríbenos para recibir una recomendación personalizada.”  
    - EN: “We’re updating our program lineup. Message us for a personalised recommendation.”  
  - CTA: button → `/contact`

- **Error loading programs:**
  - Use same copy as empty state plus a “Retry” button that re-fetches.

### 4.2 Program Detail (`/programs/:id`)

- **Program not found (invalid slug):**
  - Show friendly message instead of blank:
    - ES: “No encontramos este programa. Tal vez cambió de nombre.”  
    - EN: “We couldn’t find this program. It may have changed names.”  
  - CTA: “Ver todos los programas” / “See all programs” → `/programs`

- **Image fails to load:**
  - Replace hero image with solid background; keep content.

### 4.3 Courses & Schedules (`/courses`)

- **No tiers defined:**
  - Show message:
    - ES: “Estamos ajustando nuestra estructura de cursos. Mientras tanto, escríbenos y creamos un plan para ti.”  
    - EN: “We’re adjusting our courses structure. In the meantime, message us and we’ll build a plan for you.”  
  - CTA → `/contact`

- **Schedule / Map fails to load (API Error):**
  - ES: “No pudimos cargar los horarios en este momento. Por favor recarga la página o contáctanos.”
  - EN: “We couldn’t load the schedule at this moment. Please refresh the page or contact us.”
  - Buttons: “Reintentar” / “Retry” (re-fetch) and “Contactar” / “Contact” → `/contact`

- **Initial load (loading state):**
  - Show skeleton cards for sessions.
  - Show text stub: “Cargando horarios…” / “Loading Courses & Schedules…”

- **Map blocked or fails (e.g. ad blocker):**
  - Show text fallback with address and Google Maps search suggestion.

---

## 5. Forms

(See `Atlan_FORMS_AND_EMAIL.md` for field-level behaviors.)

### 6.1 Inline Validation

- Always show errors **just below** the invalid field
- Focus moves to first invalid field on submit

### 6.2 Network/Server Errors

- If network is offline:
  - ES: “Parece que no tienes conexión. Guarda tu mensaje y vuelve a intentarlo cuando tengas internet.”  
  - EN: “It looks like you’re offline. Save your message and try again once you’re back online.”

- If server returns 4xx or 5xx:
  - ES: “Tuvimos un problema al enviar el formulario. Intenta de nuevo en unos minutos o escríbenos directamente a [correo].”  
  - EN: “We had trouble sending the form. Try again in a few minutes or email us directly at [email].”

- Show a **single, non-technical message**; log details in console where needed.

---

## 6. PWA & Offline Behavior

### 7.1 Offline Routes

- When completely offline and navigation fails, show `offline.html` with:
  - Short explanation:
    - ES: “Estás sin conexión. Puedes revisar la información que se haya guardado en tu dispositivo o volver cuando tengas internet.”  
    - EN: “You’re offline. You can review any content stored on your device or come back when you’re online.”
  - Links that still work:
    - Home (if cached)
    - Programs (if cached)
  - CTA: encourage installing the PWA (if supported)

### 7.2 Cached vs. Fresh Content

- Service worker should use:
  - **Cache-first** for static assets (CSS/JS/images)
  - **Network-first with fallback** for HTML pages
- If network is slow but not offline, user sees **stale content** quickly, then fresh content replaces it when ready.

---

## 7. 404 / Not Found

### 8.1 Design

- Friendly illustration or simple typography using brand colors
- Copy:
  - ES: “No encontramos lo que buscabas, pero sí podemos ayudarte a entrenar mejor.”  
  - EN: “We couldn’t find what you were looking for, but we can help you train smarter.”
- CTAs:
  - “Volver al inicio” / “Back to home”
  - “Ver programas” / “View programs”

### 8.2 Technical

- React router catch-all route (`*`) returns custom 404 page
- Ensure proper HTTP 404 status if served via SSR or hosting configuration

---

## 8. Tracking Edge States

- Optional GA4 events for debugging:

| Event Name       | When                                   |
|------------------|----------------------------------------|
| `error_schedule` | Schedule API fails                     |
| `error_form`     | Form submission fails (network/server) |
| `offline_view`   | offline.html shown                     |

These events help understand reliability issues but are lower priority than core business events.
