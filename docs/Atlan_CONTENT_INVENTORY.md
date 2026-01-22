# Atlan Performance | Content Inventory & Copy Checklist

**Version:** 1.0  
**Date:** December 2025  
**Owner:** Edgar Bonilla  

Purpose: provide a **single map of all copy**, by page and language, so we can track what’s written, translated, and published.

Status codes:

- `TODO` – Not written
- `DRAFT` – Needs review
- `APPROVED` – Final content ready
- `LIVE` – Published on site

---

## 1. Pages Overview

| ID | Route        | Page Name   | Priority | Notes                            |
|----|-------------|------------|----------|----------------------------------|
| P1 | `/`          | Home       | P0       | Hero, pillars, social proof |
| P2 | `/programs`  | Programs   | P0       | Program matrix                   |
| P3 | `/programs/:id` | Program Detail | P0 | One per program                 |
| P4 | `/courses`| Courses & Schedules | P0       | Pricing tiers + Weekly calendar + map |
| P5 | `/about`     | About      | P0       | Coach bio, philosophy           |
| P6 | `/contact`   | Contact    | P0       | Course/contact form         |
| P7 | `/privacy`   | Privacy    | P0       | Legal                            |
| P8 | `/terms`     | Terms      | P0       | Legal                            |
| P9 | `*` (404)    | Not Found  | P1       | Friendly, branded                |

---

## 2. Home (`/`)

### 2.1 Sections

1. Hero (headline, subheadline, CTAs)
2. 4 Pillars (USP grid)
3. Testimonials carousel
4. Newsletter / community block

### 2.2 Copy Inventory

| Block          | Key String                         | ES Status | EN Status | Owner  |
|----------------|------------------------------------|----------|----------|--------|
| Hero           | Headline                          | APPROVED | DRAFT    | Edgar  |
| Hero           | Subheadline                       | APPROVED | DRAFT    | Edgar  |
| Hero           | Primary CTA (“GET STARTED TODAY!”) | APPROVED | APPROVED | Edgar  |
| Hero           | Secondary CTA (optional)          | TODO     | TODO     | Edgar  |
| Pillars        | 4 pillar titles                   | APPROVED | APPROVED | Edgar  |
| Pillars        | 4 pillar descriptions             | APPROVED | DRAFT    | Edgar  |
| Testimonials   | 4 athlete quotes (short)          | DRAFT    | TODO     | Athlete |
| Testimonials   | Data blurbs (before/after)        | DRAFT    | DRAFT    | Edgar  |
| Newsletter     | Headline                          | APPROVED | APPROVED | Edgar  |
| Newsletter     | Support text                      | DRAFT    | DRAFT    | Edgar  |
| Newsletter     | CTA label                         | APPROVED | APPROVED | Edgar  |

> Tip: when copy is approved, sync into `locales/es.json` and `locales/en.json` immediately.

---

## 3. Programs (`/programs`)

### 3.1 Program Cards

- Swimming for Adults
- Swimming for Juniors
- Open Water
- Running
- Triathlon

### 3.2 Copy Inventory

| Program        | Block             | ES Status | EN Status | Notes               |
|----------------|-------------------|----------|----------|---------------------|
| Swimming for Adults | Name              | APPROVED | APPROVED |                     |
|                | Short description | APPROVED | DRAFT    |                      |
|                | 3 bullet points   | DRAFT    | TODO     |                      |
| Swimming for Juniors | Name              | APPROVED | APPROVED |                     |
|                | Short description | DRAFT    | TODO     | tone for parents    |
|                | 3 bullet points   | TODO     | TODO     | safety angle        |
| Open Water     | Name              | APPROVED | APPROVED |                     |
|                | Short description | DRAFT    | TODO     |                      |
|                | 3 bullet points   | DRAFT    | TODO     |                      |
| Running        | Name              | TODO     | TODO     |                      |
|                | Short description | TODO     | TODO     |                      |
|                | 3 bullet points   | TODO     | TODO     |                      |
| Triathlon      | Name              | APPROVED | APPROVED |                     |
|                | Short description | DRAFT    | DRAFT    | 70.3 vs IM nuance   |
|                | 3 bullet points   | TODO     | TODO     |                      |

---

## 4. Program Detail (`/programs/:id`)

Each program detail page should have:

1. Hero title + short positioning line
2. Who it’s for (1–2 paragraphs)
3. What’s included (bullets)
4. Training schedule / frequency
5. Expected outcomes
6. CTA (“Join subscription”)

Use this table per program:

| Program | Section          | ES Status | EN Status | Owner  |
|---------|------------------|----------|----------|--------|
| All     | Hero title       | APPROVED | APPROVED | Edgar  |
| All     | Hero subtitle    | DRAFT    | DRAFT    | Edgar  |
| All     | “Who it’s for”   | DRAFT    | TODO     | Edgar  |
| All     | “What’s included” bullets | DRAFT | TODO | Edgar |
| All     | Outcomes         | TODO     | TODO     | Edgar  |
| All     | CTA label        | APPROVED | APPROVED | Edgar  |

---

## 5. Courses & Schedules (`/courses`)

Sections:

- Page hero (title + promise)
- 3-tier pricing table (Dolphin, Shark, Orca)
- Schedule & Location sections
- FAQ accordions

| Block             | ES Status | EN Status | Owner |
|-------------------|----------|----------|-------|
| Hero title        | DRAFT    | TODO     | Edgar |
| Hero body         | DRAFT    | TODO     | Edgar |
| Dolphin name      | APPROVED | APPROVED | Edgar |
| Dolphin CTA       | APPROVED | APPROVED | Edgar |
| Dolphin bullets   | DRAFT    | TODO     | Edgar |
| Shark name        | APPROVED | APPROVED | Edgar |
| Shark CTA         | APPROVED | APPROVED | Edgar |
| Shark bullets     | DRAFT    | TODO     | Edgar |
| Orca name         | APPROVED | APPROVED | Edgar |
| Orca CTA          | APPROVED | APPROVED | Edgar |
| Orca bullets      | DRAFT    | TODO     | Edgar |
| Schedule Intro    | DRAFT    | TODO     | Edgar |
| MapPanel desc     | DRAFT    | TODO     | Edgar |
| FAQ questions (10+)| TODO    | TODO     | Edgar |

---


Use a small checklist:

- [ ] Filter labels translated (ES/EN)
- [ ] Session intensity scale explained
- [ ] Map captions localized

---

## 7. About (`/about`)

Sections:

- Coach story (1–2 hero paragraphs)
- Credentials (bullet list)
- Philosophy (The Atlan Standard)
- Brand story (why ocean, why science)

| Block         | ES Status | EN Status | Notes         |
|---------------|----------|----------|---------------|
| Coach bio     | DRAFT    | TODO     | 250–400 words |
| Credentials   | DRAFT    | DRAFT    | use bullets   |
| Philosophy    | DRAFT    | TODO     | 4 pillars     |
| Brand story   | TODO     | TODO     | emotional arc |

---

## 8. Contact (`/contact`)

- Hero text (“Let’s design your next season”)
- Short reassurance (“No spam, no obligation”)
- Form field labels & placeholders (in i18n)
- Success & error copy

Track in a mini-table:

| Block          | ES Status | EN Status |
|----------------|----------|----------|
| Hero title     | DRAFT    | TODO     |
| Hero subcopy   | DRAFT    | TODO     |
| Form labels    | APPROVED | APPROVED |
| Placeholder text| DRAFT   | DRAFT    |
| Success message| APPROVED | APPROVED |
| Error messages | APPROVED | APPROVED |

---

## 9. Legal Pages (`/privacy`, `/terms`)

- Use a **base Spanish legal template** adapted to Costa Rica
- Translate into English with same structure

Checklist:

- [ ] Privacy policy ES
- [ ] Privacy policy EN
- [ ] Terms of service ES
- [ ] Terms of service EN
- [ ] Footer links wired to correct routes

---

## 10. Maintenance

- Keep this file as a **living document**
- Whenever copy is added/changed, update:
  1. This inventory (`Status` and notes)
  2. The translation JSONs
- Before launch, ensure **no `TODO` remains** in P0 pages (P1+ can go live with small gaps if needed)
