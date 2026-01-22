# Atlan Brand Guidelines (Condensed Reference)

Quick reference for brand compliance. For full specifications, see the master Brand Kit.

## Locked Elements (NEVER Alter)

| Element | Specification |
|---------|---------------|
| Logo geometry | Fixed proportions, no distortion |
| Primary colors | Abyss Navy, Tide Teal, Coral Spark, Foam |
| Wordmark font | Outfit Bold 700 |
| WCAG standard | 2.2 AA minimum |

## Color Palette

### Primary Colors
```
Abyss Navy    #0B2A3C   Authority - Primary backgrounds, text
Tide Teal     #0E8A9A   Energy - Accents, secondary CTAs
Coral Spark   #FF6A3D   Action - Primary CTAs, alerts
Foam          #ECF7F8   Clarity - Light backgrounds, dark mode text
```

### Interaction States
```
Coral Dark    #E0552D   Coral Spark hover
Teal Dark     #0A6B78   Tide Teal hover
Abyss Light   #0F3A50   Layering on Abyss Navy
```

## Accessibility Contrast Matrix

| Background | Text Color | Min Size | Ratio | Status |
|------------|------------|----------|-------|--------|
| Abyss Navy | Foam | Any | 11.8:1 | ✅ AAA |
| Abyss Navy | Coral Spark | Any | 5.2:1 | ✅ AA |
| Abyss Navy | Tide Teal | 18px+ bold | 3.8:1 | ⚠️ Large only |
| Foam | Abyss Navy | Any | 11.8:1 | ✅ AAA |
| Coral Spark | White | Any | 4.8:1 | ✅ AA |

### Critical Rule
**NEVER use Tide Teal (#0E8A9A) for body text under 18px on dark backgrounds.**
It fails WCAG AA contrast requirements (3.8:1 < 4.5:1 required).

## Typography

| Font | Variable | Usage |
|------|----------|-------|
| Outfit | `--font-logo` | Logo wordmark ONLY |
| Montserrat | `--font-heading` | Headings, CTA buttons, section titles |
| Lato | `--font-body` | Body text, descriptions, UI labels |
| Roboto Mono | `--font-data` | Metrics, timestamps, numerical data |

### Font Weights
- Light: 300 (body emphasis)
- Regular: 400 (default body)
- Bold: 700 (headings, CTAs)
- Extra Bold: 800 (hero headlines)

## Voice & Tone

### Brand Archetype Balance
```
70% SAGE    Data, expertise, measured guidance, scientific rationale
30% HERO    Encouragement, achievement recognition, motivational push
```

### Good Example (Sage + Hero)
> "Your swim pace was 2:15/100m last week—8% faster than your baseline. 
> The data shows you're ready to add threshold work. Let's push."

### Bad Example (Pure Hero - No Sage)
> "You crushed it! Keep grinding! No pain no gain!"
❌ No data, purely motivational fluff

### Bad Example (Pure Sage - No Hero)
> "Your lactate threshold indicates suboptimal anaerobic capacity."
❌ Too clinical, no encouragement

### Prohibited
- Shaming language ("Another missed session?")
- Aggressive "suffer porn" imagery
- Generic motivational clichés

## Photography Style ("Morning Light")

### Do Use
- High exposure, natural light, golden hour
- Blue water (ocean or pool), clean backgrounds
- Athletes looking strong, focused, in "flow state"
- Post-workout smiles and camaraderie

### Don't Use
- Red faces, grimacing, "suffer porn"
- Dark, moody lighting
- Generic stock fitness models
- Cluttered gym environments

## Logo Usage

### Clear Space
Minimum clear space = height of the "a" in wordmark on all sides.

### Minimum Size
- Digital: 120px width minimum
- Print: 25mm width minimum

### Color Applications
| Background | Logo Color |
|------------|------------|
| Dark (Abyss Navy) | Coral Spark wordmark + Tide Teal circle |
| Light (Foam/White) | Abyss Navy wordmark + Tide Teal circle |

### Prohibited
- Distorting or stretching
- Adding effects (shadows, gradients, outlines)
- Placing on busy backgrounds
- Using unapproved colors
