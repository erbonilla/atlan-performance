# Community Page - Quick Reference

## 📋 Overview

The Community section showcases athlete profiles, testimonials, success stories, and community events. It follows the 4-slide story format and supports both Atlan-hosted and third-party events.

## 🎯 Key Features

1. **Hero Section** - Title, subtitle, CTAs
2. **Community Snapshot** - Quick stats (athletes, stories, events, consistency)
3. **Athlete Profiles** - Filterable grid with discipline filters
4. **Athlete Stories** - 4-slide carousel (Hero → Challenge → Data → Transformation)
5. **Testimonials Wall** - Short quotes with star ratings
6. **Events Hub** - Atlan + partner events with disclaimers
7. **Bottom CTA** - Final conversion section

## 🔧 How to Add Content

### Add a New Athlete

**1. Update `src/data/communityData.js`:**

```javascript
// In communityAthletes array
{
  id: 'new_athlete_id',
  discipline: 'open_water', // open_water | pool | triathlon | juniors
  level: 'intermediate', // beginner | intermediate | advanced
  image: '/images/athletes/new-athlete-portrait.webp',
  imageFallback: '/images/athletes/new-athlete-portrait.jpg',
  featured: true
}
```

**2. Update `src/locales/es.json` and `en.json`:**

```json
{
  "community": {
    "athletes": {
      "new_athlete_id": {
        "name": "Athlete Name",
        "location": "City, Country",
        "focus": "Focus area",
        "tagline": "One-line summary",
        "story": {
          "heroAlt": "Image alt text",
          "challenge": "The challenge quote",
          "data": {
            "summary": "Data summary"
          },
          "transformation": "Transformation quote"
        }
      }
    }
  }
}
```

**3. Add image files:**
```
public/images/athletes/
  - new-athlete-portrait.webp (< 75KB, 1:1 square)
  - new-athlete-portrait.jpg (fallback)
```

### Add a New Story

**1. Update `src/data/communityData.js`:**

```javascript
// In communityStories array
{
  id: 'story_new',
  athleteId: 'new_athlete_id', // Must match athlete id
  heroImage: {
    src: '/images/hero/story-hero.webp',
    fallback: '/images/hero/story-hero.jpg'
  },
  metrics: [
    {
      id: 'pace',
      before: '2:30',
      after: '2:05',
      unit: 'per_100m'
    },
    // Add more metrics...
  ],
  ctaRoute: '/contact?source=community_story&athlete=new_athlete_id'
}
```

### Add a New Event

**1. Update `src/data/communityData.js`:**

```javascript
// In communityEvents array
{
  id: 'event_new',
  type: 'atlan', // or 'partner'
  discipline: 'open_water', // open_water | pool | triathlon
  startDate: '2026-03-15T06:00:00-06:00', // ISO 8601 format
  endDate: '2026-03-15T10:00:00-06:00',
  timezone: 'America/Costa_Rica',
  registrationUrl: '/contact?source=event', // or external URL
  isExternal: false, // true for partner events
  featured: true,
  tags: ['open_water', 'all_levels']
}
```

**2. Update i18n:**

```json
{
  "community": {
    "eventItems": {
      "event_new": {
        "title": "Event Title",
        "host": "Organizer Name",
        "type": "Event Type",
        "location": "Location"
      }
    }
  }
}
```

### Add a New Testimonial

**1. Update `src/data/communityData.js`:**

```javascript
// In communityTestimonials array
{
  id: 'testimonial_new',
  athleteId: null, // Optional link to athlete
  rating: 5 // 1-5 stars
}
```

**2. Update i18n:**

```json
{
  "community": {
    "testimonialItems": {
      "testimonial_new": {
        "quote": "The testimonial quote",
        "name": "Person Name",
        "context": "Program or Context"
      }
    }
  }
}
```

## 🎨 Image Guidelines

### Athlete Portraits
- **Format**: WebP + JPG fallback
- **Size**: < 75KB per image
- **Aspect Ratio**: 1:1 (square)
- **Recommended**: 400x400px or 600x600px
- **Style**: "Morning Light" aesthetic (sunrise, flow state, positive energy)
- **Location**: `public/images/athletes/`

### Story Hero Images
- **Format**: WebP + JPG fallback
- **Size**: < 200KB per image
- **Aspect Ratio**: 16:9
- **Recommended**: 1280x720px
- **Style**: "Morning Light" aesthetic
- **Location**: `public/images/hero/`

### Event Images (Optional)
- **Format**: WebP + JPG fallback
- **Size**: < 100KB per image
- **Aspect Ratio**: 16:9 or 4:3
- **Location**: `public/images/events/`

## 🔗 URL Patterns

### Query Parameters for CTAs

**From Stories:**
```
/contact?source=community_story&athlete=maria_castro
```

**From Events:**
```
/contact?source=community_event&event=event_id
```

**From Hero:**
```
/contact?source=community
```

**Suggest Event:**
```
/contact?source=suggest_event
```

## 📊 Analytics Events

### Tracked Automatically:
- `community_athlete_filter` - Discipline filter changed
- `community_athlete_select` - Athlete profile clicked
- `community_story_slide` - Story slide navigated
- `community_story_athlete_change` - Athlete changed in carousel
- `community_story_cta` - Story CTA clicked
- `community_event_filter` - Event filter changed
- `community_event_click` - Event clicked
- `community_event_contact` - Contact CTA from events

### With Parameters:
- `language` - Current UI language
- `page_path` - Current page
- `athlete_id`, `event_id`, etc. - Contextual IDs

## ♿ Accessibility Checklist

- ✅ Touch targets ≥ 48px
- ✅ Keyboard navigation (Arrow keys for carousel)
- ✅ ARIA labels on all interactive elements
- ✅ Alt text for all images (via i18n)
- ✅ Focus indicators visible
- ✅ Semantic HTML (section, article, h1-h3)
- ✅ Screen reader friendly
- ✅ Respects prefers-reduced-motion

## 🌐 Internationalization

**Current Languages:**
- Spanish (ES) - Primary
- English (EN) - Full parity

**All text must be in i18n files:**
- `src/locales/es.json`
- `src/locales/en.json`

**Never hardcode UI text in components!**

## 🧪 Testing Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint

# Format
npm run format
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Container Max**: 1280px

## 🎯 Component Hierarchy

```
Community.jsx (Page)
├── CommunityHero
├── CommunitySnapshot
├── SectionHeader + AthleteProfiles
├── SectionHeader + AthleteStoriesCarousel
├── SectionHeader + TestimonialsWall
├── SectionHeader + EventsHub
└── CommunityCTA
```

## 🚀 Quick Start Checklist

To go live with Community page:

1. [ ] Add real athlete portrait images (< 75KB WebP)
2. [ ] Update athlete data with real names, quotes, metrics
3. [ ] Add real testimonial quotes with permissions
4. [ ] Update event dates and registration URLs
5. [ ] Add `/community` to analytics tracking docs
6. [ ] Test on mobile, tablet, desktop
7. [ ] Test keyboard navigation
8. [ ] Test with screen reader
9. [ ] Verify all links work correctly
10. [ ] Check analytics events fire correctly

## 📞 Support

For questions or issues with the Community section, refer to:
- `COMMUNITY_IMPLEMENTATION.md` - Full technical documentation
- Design System docs in `/docs`
- Component source code with inline comments

---

**Last Updated**: December 2025
**Version**: 1.0
