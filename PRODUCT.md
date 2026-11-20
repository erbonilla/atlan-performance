# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are busy professionals (roughly 30–50), the “Optimizer” persona: career- and family-constrained endurance athletes who want structured, evidence-based swim and triathlon coaching that fits real life. They value efficiency and expertise over motivation alone.

Secondary audiences: parents enrolling children in Swimming for Juniors; recreational swimmers seeking technique improvement; first-time triathletes preparing for events.

## Product Purpose

Atlan Performance’s digital product is the primary acquisition hub for the swim and triathlon coaching business. It presents programs, courses and schedules, community, coach story, and subscription/contact flows so qualified athletes can start coaching relationships.

Success means qualified course and coaching leads (MVP targets in requirements: on the order of 10–20 subscribers/month), brand authority as science-backed coaching, strong mobile performance, and full Spanish/English content parity.

## Positioning

Science-engineered endurance coaching, born from the ocean—for real-world athletes in Costa Rica. Differentiator is biomechanics- and protocol-based training (Scientific Integrity) with structured, sustainable plans (Structured Discipline), not guesswork or aggressive “no pain no gain” culture. Brand voice is Sage + Hero (~70% wisdom/data, ~30% encouragement).

## Operating Context

Costa Rica–based Swim & Triathlon Club. Primary market is local; default language is Spanish (es-CR) with English toggle. Athletes evaluate and enroll via the marketing site; forms and newsletter submissions route to the coach (erbonilla@outlook.com) via Supabase. Live site: https://atlan-performance.vercel.app. Coach of record: Edgar Bonilla (Head Coach).

## Capabilities and Constraints

Confirmed capabilities: bilingual marketing PWA (React 18 + Vite); routes for Home, Programs (with detail), Courses & Schedules, Community, About, Contact, Subscribe, and legal policies; dark/light theme (cookie preference); PWA installability and offline fallback; GA4 analytics; lead forms backed by Supabase.

Explicitly out of scope for current product (post-MVP / later phases): student portal/login, workout logging, video library, e-commerce, native mobile app. Preferences use cookies only (not localStorage). Technical stack is already established in the codebase; do not treat stack as an open greenfield decision.

## Brand Commitments

Name: Atlan Performance. Voice and personality: Sage + Hero; calm, focused power (“Morning Light” mood in brand materials—not visual recipes here). Binding assets: logos under `public/assets/logo/` (including wordmark and light/dark variants). Coach identity and credentials on About are product truth. Style guide and design tokens exist in `docs/` as brand reference; visual world documentation belongs in DESIGN.md when recorded separately.

## Evidence on Hand

Real approved athlete testimonials are present in the product (testimonial carousel and locale copy)—treat as genuine proof, not placeholders. Coach bio, credentials, and philosophy on About. Legal policies in `public/policies/` (ES/EN). Logos in `public/assets/logo/`. Do not invent additional customers, benchmarks, pricing claims, press, or case studies beyond what the product and owner confirm.

## Product Principles

1. Optimize for qualified athlete acquisition, not feature sprawl into training tooling before that job is earned.
2. Default to the Costa Rican athlete: Spanish first, bilingual parity, mobile-first journeys.
3. Preserve scientific integrity and structured discipline in every claim and CTA—no invented proof or hype metrics.
4. Keep coach and club identity (Edgar Bonilla, Atlan Performance) consistent and authoritative.
5. Meet WCAG 2.2 AA as a product requirement for inclusion and trust.

## Accessibility & Inclusion

WCAG 2.2 AA is a stated product requirement (contrast, keyboard/skip navigation, 48px minimum touch targets, respect for `prefers-reduced-motion` where implemented). Mobile-first usage is expected; language toggle must remain available for ES/EN users.
