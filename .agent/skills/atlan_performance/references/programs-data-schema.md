# Atlan Programs Data Schema

Data structure specification for all Atlan Performance programs.

## Program Object Schema

```typescript
interface Program {
  id: string;                    // Unique identifier
  slug: string;                  // URL-friendly slug
  title: LocalizedString;        // Display name
  category: ProgramCategory;     // For filtering
  tags: LocalizedStringArray;    // Descriptive tags
  quickFacts: QuickFacts;        // At-a-glance info
  shortDescription: LocalizedString;  // Card description
  detailDescription: LocalizedString; // Full description
  targetAudience: LocalizedString;    // "For whom" section
  includes: LocalizedStringArray;     // What's included list
  results: LocalizedStringArray;      // Expected outcomes
  whatToBring: LocalizedStringArray;  // Pre-trial checklist
  icon: PhosphorIconName;        // Phosphor icon name
  coverImage: string;            // Card image path
  heroImage: string;             // Detail page hero
  isActive: boolean;             // Show/hide program
  order: number;                 // Display order
}

interface LocalizedString {
  es: string;
  en: string;
}

interface LocalizedStringArray {
  es: string[];
  en: string[];
}

interface QuickFacts {
  duration: string;              // e.g., "60 min", "60-90 min"
  level: LevelKey;               // Translation key
  format: FormatKey;             // Translation key
}

type ProgramCategory = 'swimming' | 'running' | 'triathlon' | 'juniors';
type LevelKey = 'all' | 'beginner' | 'intermediate' | 'advanced';
type FormatKey = 'group' | 'individual' | 'plan';
type PhosphorIconName = 'SwimmingPool' | 'Student' | 'Waves' | 'Medal' | 'PersonSimpleRun';
```

---

## Complete Programs Data

### 1. Natación para Adultos

```json
{
  "id": "adult-swimming",
  "slug": "natacion-adultos",
  "title": {
    "es": "Natación para Adultos",
    "en": "Adult Swimming"
  },
  "category": "swimming",
  "tags": {
    "es": ["Todos Niveles", "Técnica", "Eficiencia"],
    "en": ["All Levels", "Technique", "Efficiency"]
  },
  "quickFacts": {
    "duration": "60 min",
    "level": "all",
    "format": "group"
  },
  "shortDescription": {
    "es": "Mejora tu mecánica y eficiencia con drills y retroalimentación—menos esfuerzo, hombros más sanos y mejores tiempos.",
    "en": "Improve your mechanics and efficiency with drills and feedback—less effort, healthier shoulders, and better times."
  },
  "detailDescription": {
    "es": "Natación para Adultos es para adultos que quieren mejorar técnica, condición y confianza en el agua—ya sea que regreses después de años o estés entrenando para triatlón. Priorizamos fundamentos que realmente dan velocidad: respiración, posición del cuerpo y agarre (catch), para que nades más rápido sin pelear contra el agua.",
    "en": "Adult Swimming is for adults who want to improve technique, fitness, and confidence in the water—whether you're returning after years or training for triathlon. We prioritize fundamentals that actually create speed: breathing, body position, and catch, so you swim faster without fighting the water."
  },
  "targetAudience": {
    "es": "Adultos que quieren mejorar técnica, condición y confianza en el agua—ya sea que regreses después de años o estés entrenando para triatlón.",
    "en": "Adults who want to improve technique, fitness, and confidence in the water—whether you're returning after years or training for triathlon."
  },
  "includes": {
    "es": [
      "Mecánica de nado: línea corporal, rotación, agarre y empuje",
      "Patrones de respiración estables incluso con intensidad",
      "Drills que sí se transfieren al nado completo",
      "Sets estructurados para resistencia y control de ritmo",
      "Cues claros para aplicar desde la primera sesión"
    ],
    "en": [
      "Swim mechanics: body line, rotation, catch and push",
      "Stable breathing patterns even at intensity",
      "Drills that actually transfer to full stroke",
      "Structured sets for endurance and pace control",
      "Clear cues to apply from the first session"
    ]
  },
  "results": {
    "es": [
      "Menos esfuerzo al mismo paso (o más rápido con el mismo esfuerzo)",
      "Respiración más limpia + menos tensión en hombros/cuello",
      "Base técnica sostenible para progresar por años"
    ],
    "en": [
      "Less effort at the same pace (or faster at the same effort)",
      "Cleaner breathing + less tension in shoulders/neck",
      "Sustainable technical base to progress for years"
    ]
  },
  "whatToBring": {
    "es": ["Traje de baño", "Gafas de natación", "Gorra de silicona", "Toalla"],
    "en": ["Swimsuit", "Goggles", "Silicone cap", "Towel"]
  },
  "icon": "SwimmingPool",
  "coverImage": "/images/programs/adult-swimming-cover.jpg",
  "heroImage": "/images/programs/adult-swimming-hero.jpg",
  "isActive": true,
  "order": 1
}
```

### 2. Natación para Juveniles

```json
{
  "id": "juniors-swimming",
  "slug": "natacion-juveniles",
  "title": {
    "es": "Natación para Juveniles",
    "en": "Junior Swimming"
  },
  "category": "juniors",
  "tags": {
    "es": ["Edades 8-17", "Fundamentos", "Confianza"],
    "en": ["Ages 8-17", "Fundamentals", "Confidence"]
  },
  "quickFacts": {
    "duration": "45-60 min",
    "level": "all",
    "format": "group"
  },
  "shortDescription": {
    "es": "Un camino seguro y motivante para jóvenes nadadores—fundamentos sólidos, buena técnica y hábitos atléticos a largo plazo.",
    "en": "A safe and motivating path for young swimmers—solid fundamentals, good technique, and long-term athletic habits."
  },
  "detailDescription": {
    "es": "Natación para Juveniles está diseñado para jóvenes de 8 a 17 años que quieren desarrollar habilidades acuáticas sólidas. Enfocamos en técnica correcta desde el inicio, confianza en el agua, y hábitos que servirán toda la vida—ya sea para competencia, triatlón futuro, o simplemente ser un nadador fuerte.",
    "en": "Junior Swimming is designed for young people ages 8-17 who want to develop solid aquatic skills. We focus on correct technique from the start, confidence in the water, and habits that will serve them for life—whether for competition, future triathlon, or simply being a strong swimmer."
  },
  "targetAudience": {
    "es": "Jóvenes de 8 a 17 años que quieren desarrollar habilidades acuáticas sólidas, ya sea para competencia o fitness.",
    "en": "Young people ages 8-17 who want to develop solid aquatic skills, whether for competition or fitness."
  },
  "includes": {
    "es": [
      "Técnica de los 4 estilos adaptada por nivel",
      "Desarrollo de confianza y seguridad acuática",
      "Juegos y actividades que refuerzan mecánica",
      "Progresión estructurada por habilidad",
      "Comunicación con padres sobre progreso"
    ],
    "en": [
      "Technique for 4 strokes adapted by level",
      "Development of confidence and water safety",
      "Games and activities that reinforce mechanics",
      "Structured progression by skill",
      "Communication with parents about progress"
    ]
  },
  "results": {
    "es": [
      "Técnica sólida en todos los estilos",
      "Confianza para nadar en cualquier ambiente",
      "Base atlética para cualquier deporte acuático",
      "Hábitos de disciplina y consistencia"
    ],
    "en": [
      "Solid technique in all strokes",
      "Confidence to swim in any environment",
      "Athletic base for any water sport",
      "Habits of discipline and consistency"
    ]
  },
  "whatToBring": {
    "es": ["Traje de baño", "Gafas de natación", "Gorra de silicona", "Toalla", "Merienda para después"],
    "en": ["Swimsuit", "Goggles", "Silicone cap", "Towel", "Post-session snack"]
  },
  "icon": "Student",
  "coverImage": "/images/programs/juniors-swimming-cover.jpg",
  "heroImage": "/images/programs/juniors-swimming-hero.jpg",
  "isActive": true,
  "order": 2
}
```

### 3. Aguas Abiertas

```json
{
  "id": "open-water",
  "slug": "aguas-abiertas",
  "title": {
    "es": "Aguas Abiertas",
    "en": "Open Water"
  },
  "category": "swimming",
  "tags": {
    "es": ["Intermedios", "Confianza Mar", "Navegación"],
    "en": ["Intermediate", "Ocean Confidence", "Navigation"]
  },
  "quickFacts": {
    "duration": "60-90 min",
    "level": "intermediate",
    "format": "group"
  },
  "shortDescription": {
    "es": "Gana confianza en el mar con navegación, drafting y técnica de avistamiento—para nadar recto, mantener la calma y salir del agua listo para competir.",
    "en": "Build ocean confidence with navigation, drafting, and sighting technique—to swim straight, stay calm, and exit the water ready to compete."
  },
  "detailDescription": {
    "es": "Aguas Abiertas prepara nadadores para el entorno real de competencia: el mar. Trabajamos navegación sin referencias, técnica de drafting, gestión de oleaje y entrada/salida de playa. Todo lo que necesitas para que el segmento de nado no sea una incógnita el día de carrera.",
    "en": "Open Water prepares swimmers for the real competition environment: the ocean. We work on navigation without references, drafting technique, wave management, and beach entry/exit. Everything you need so the swim segment isn't an unknown on race day."
  },
  "targetAudience": {
    "es": "Nadadores de nivel intermedio que quieren competir en triatlón o eventos de aguas abiertas y necesitan confianza en el mar.",
    "en": "Intermediate-level swimmers who want to compete in triathlon or open water events and need ocean confidence."
  },
  "includes": {
    "es": [
      "Navegación y avistamiento cada 6-8 brazadas",
      "Técnica de drafting en grupo",
      "Gestión de oleaje y corrientes",
      "Entradas y salidas de playa",
      "Simulacros de carrera con boyas"
    ],
    "en": [
      "Navigation and sighting every 6-8 strokes",
      "Group drafting technique",
      "Wave and current management",
      "Beach entries and exits",
      "Race simulations with buoys"
    ]
  },
  "results": {
    "es": [
      "Nadar recto sin perder tiempo en zigzag",
      "Confianza para manejar condiciones variables",
      "Transición eficiente del agua a T1",
      "Menor ansiedad pre-carrera en el segmento de nado"
    ],
    "en": [
      "Swim straight without losing time zigzagging",
      "Confidence to handle variable conditions",
      "Efficient water-to-T1 transition",
      "Less pre-race anxiety on the swim segment"
    ]
  },
  "whatToBring": {
    "es": ["Wetsuit (si aplica)", "Gafas de natación oscuras", "Gorra brillante (visibilidad)", "Protector solar", "Agua e hidratación"],
    "en": ["Wetsuit (if applicable)", "Dark swim goggles", "Bright cap (visibility)", "Sunscreen", "Water and hydration"]
  },
  "icon": "Waves",
  "coverImage": "/images/programs/open-water-cover.jpg",
  "heroImage": "/images/programs/open-water-hero.jpg",
  "isActive": true,
  "order": 3
}
```

### 4. Triatlón

```json
{
  "id": "triathlon",
  "slug": "triatlon",
  "title": {
    "es": "Triatlón",
    "en": "Triathlon"
  },
  "category": "triathlon",
  "tags": {
    "es": ["Resistencia", "Específico Carrera", "Estructura"],
    "en": ["Endurance", "Race Specific", "Structure"]
  },
  "quickFacts": {
    "duration": "Varía",
    "level": "intermediate",
    "format": "plan"
  },
  "shortDescription": {
    "es": "Planificación integrada natación-ciclismo-carrera para 70.3 e Ironman—semanas estructuradas, bricks inteligentes y ejecución segura el día de carrera.",
    "en": "Integrated swim-bike-run planning for 70.3 and Ironman—structured weeks, smart bricks, and confident race-day execution."
  },
  "detailDescription": {
    "es": "Triatlón ofrece entrenamiento periodizado para atletas que preparan 70.3, Ironman o distancias sprint/olímpicas. Integramos las tres disciplinas con bloques de construcción específicos, sesiones brick que simulan fatiga de carrera, y planificación nutricional/logística para que llegues preparado.",
    "en": "Triathlon offers periodized training for athletes preparing 70.3, Ironman, or sprint/Olympic distances. We integrate all three disciplines with specific building blocks, brick sessions that simulate race fatigue, and nutrition/logistics planning so you arrive prepared."
  },
  "targetAudience": {
    "es": "Atletas de resistencia que preparan triatlones desde sprint hasta Ironman y buscan estructura científica y seguimiento personalizado.",
    "en": "Endurance athletes preparing triathlons from sprint to Ironman who seek scientific structure and personalized tracking."
  },
  "includes": {
    "es": [
      "Periodización por bloques: base, construcción, específico, taper",
      "Sesiones brick (bici-carrera) semanales",
      "Plan de nutrición e hidratación para entrenamiento y carrera",
      "Análisis de recorrido y estrategia de pacing",
      "Seguimiento de métricas y ajustes semanales"
    ],
    "en": [
      "Block periodization: base, build, specific, taper",
      "Weekly brick sessions (bike-run)",
      "Nutrition and hydration plan for training and racing",
      "Course analysis and pacing strategy",
      "Metrics tracking and weekly adjustments"
    ]
  },
  "results": {
    "es": [
      "Llegar al día de carrera sin sobreentrenamiento",
      "Ejecutar cada segmento con estrategia clara",
      "Minimizar tiempo en transiciones",
      "Cruzar la meta sabiendo que diste tu mejor esfuerzo"
    ],
    "en": [
      "Arrive at race day without overtraining",
      "Execute each segment with clear strategy",
      "Minimize transition time",
      "Cross the finish line knowing you gave your best effort"
    ]
  },
  "whatToBring": {
    "es": ["Equipo de las 3 disciplinas", "Reloj GPS", "Datos de entrenamiento previo (si hay)", "Objetivos claros de carrera"],
    "en": ["Gear for all 3 disciplines", "GPS watch", "Previous training data (if available)", "Clear race goals"]
  },
  "icon": "Medal",
  "coverImage": "/images/programs/triathlon-cover.jpg",
  "heroImage": "/images/programs/triathlon-hero.jpg",
  "isActive": true,
  "order": 4
}
```

### 5. Running (NEW)

```json
{
  "id": "running-program",
  "slug": "running",
  "title": {
    "es": "Running",
    "en": "Running"
  },
  "category": "running",
  "tags": {
    "es": ["Técnica", "Rendimiento", "Adultos"],
    "en": ["Technique", "Performance", "Adults"]
  },
  "quickFacts": {
    "duration": "60-90 min",
    "level": "all",
    "format": "group"
  },
  "shortDescription": {
    "es": "Coaching de carrera para triatletas y atletas de resistencia que buscan mejorar ritmo sin lesionarse. Construimos forma eficiente, volumen progresivo y sesiones específicas que complementan tu carga de nado y bici.",
    "en": "Run coaching for triathletes and endurance athletes who want to improve pace without breaking down. We build efficient form, progressive volume, and targeted sessions that match your swim/bike load."
  },
  "detailDescription": {
    "es": "Running está diseñado para triatletas y corredores de resistencia que quieren mejorar su rendimiento sin aumentar el riesgo de lesión. Construimos forma eficiente (cadencia, postura, apoyo), volumen progresivo y sesiones específicas (intervalos, tempo, cuestas) que complementan tu carga de nado y bici. Espera estructura semanal clara, mejor estrategia de ritmo y menos lesiones—para correr más fuerte el día de carrera y recuperarte para el siguiente bloque.",
    "en": "Running is designed for triathletes and endurance runners who want to improve performance without increasing injury risk. We build efficient form (cadence, posture, foot strike), progressive volume, and targeted sessions (intervals, tempo, hills) that match your swim/bike load. Expect clearer weekly structure, better pacing strategy, and fewer injury setbacks—so you can run stronger on race day and still recover for the next block."
  },
  "targetAudience": {
    "es": "Triatletas y corredores de resistencia que quieren mejorar su rendimiento sin aumentar el riesgo de lesión. Ya sea que vengas de natación o ciclismo y necesites equilibrar tu tercer deporte, o seas corredor buscando estructura científica.",
    "en": "Triathletes and endurance runners who want to improve performance without increasing injury risk. Whether you come from swimming or cycling and need to balance your third sport, or you're a runner seeking scientific structure."
  },
  "includes": {
    "es": [
      "Mecánica de carrera: cadencia, postura, apoyo y propulsión",
      "Periodización progresiva compatible con nado/bici",
      "Sesiones estructuradas: intervalos, tempo, fartlek, cuestas",
      "Feedback técnico con video cuando aplica",
      "Estrategia de pacing para competencias"
    ],
    "en": [
      "Running mechanics: cadence, posture, foot strike, propulsion",
      "Progressive periodization compatible with swim/bike",
      "Structured sessions: intervals, tempo, fartlek, hills",
      "Technical feedback with video when applicable",
      "Pacing strategy for race day"
    ]
  },
  "results": {
    "es": [
      "Mejor economía de carrera (mismo esfuerzo, mayor velocidad)",
      "Menos fatiga acumulada en entrenamientos multi-deporte",
      "Reducción de riesgo de lesiones comunes (banda IT, fascitis, periostitis)",
      "Estructura clara para progresar temporada tras temporada"
    ],
    "en": [
      "Better running economy (same effort, higher speed)",
      "Less accumulated fatigue in multi-sport training",
      "Reduced risk of common injuries (IT band, plantar fasciitis, shin splints)",
      "Clear structure to progress season after season"
    ]
  },
  "whatToBring": {
    "es": ["Zapatillas de running", "Ropa transpirable", "Hidratación personal", "Reloj GPS (opcional)"],
    "en": ["Running shoes", "Breathable clothing", "Personal hydration", "GPS watch (optional)"]
  },
  "icon": "PersonSimpleRun",
  "coverImage": "/images/programs/running-cover.jpg",
  "heroImage": "/images/programs/running-hero.jpg",
  "isActive": true,
  "order": 5
}
```

---

## Translation Keys

Add these to your `locales/es.json` and `locales/en.json`:

### es.json

```json
{
  "programs": {
    "pageTitle": "Nuestros Programas",
    "pageSubtitle": "Entrenamiento especializado para cada nivel y objetivo.",
    "quickFacts": "Datos rápidos",
    "filterNavigation": "Filtrar programas",
    "bookTrialFor": "Reservar sesión de prueba para {{program}}",
    "learnMoreAbout": "Más información sobre {{program}}",
    "tags": "Etiquetas del programa"
  },
  "filters": {
    "all": "Todos",
    "swimming": "Natación",
    "running": "Running",
    "triathlon": "Triatlón",
    "juniors": "Juveniles"
  },
  "levels": {
    "all": "Todos los niveles",
    "beginner": "Principiante",
    "intermediate": "Intermedio",
    "advanced": "Avanzado"
  },
  "formats": {
    "group": "Grupal",
    "individual": "Individual",
    "plan": "Con plan"
  },
  "cta": {
    "bookTrial": "Reservar prueba",
    "moreInfo": "Más información"
  },
  "programDetail": {
    "forWho": "¿Para quién es?",
    "whatIncludes": "¿Qué incluye?",
    "schedule": "Horario",
    "results": "Resultados",
    "whatToBring": "¿Qué necesito llevar?",
    "viewFullSchedule": "Ver horario completo"
  },
  "quiz": {
    "notSureTitle": "¿No sabes por dónde empezar?",
    "subtitle": "Responde 3 preguntas y te recomendaremos el programa perfecto para ti.",
    "startCta": "Iniciar Quiz"
  }
}
```

### en.json

```json
{
  "programs": {
    "pageTitle": "Our Programs",
    "pageSubtitle": "Specialized training for every level and goal.",
    "quickFacts": "Quick facts",
    "filterNavigation": "Filter programs",
    "bookTrialFor": "Book trial session for {{program}}",
    "learnMoreAbout": "Learn more about {{program}}",
    "tags": "Program tags"
  },
  "filters": {
    "all": "All",
    "swimming": "Swimming",
    "running": "Running",
    "triathlon": "Triathlon",
    "juniors": "Juniors"
  },
  "levels": {
    "all": "All levels",
    "beginner": "Beginner",
    "intermediate": "Intermediate",
    "advanced": "Advanced"
  },
  "formats": {
    "group": "Group",
    "individual": "Individual",
    "plan": "With plan"
  },
  "cta": {
    "bookTrial": "Book trial",
    "moreInfo": "Learn more"
  },
  "programDetail": {
    "forWho": "Who is it for?",
    "whatIncludes": "What's included?",
    "schedule": "Schedule",
    "results": "Results",
    "whatToBring": "What do I need to bring?",
    "viewFullSchedule": "View full schedule"
  },
  "quiz": {
    "notSureTitle": "Not sure where to start?",
    "subtitle": "Answer 3 questions and we'll recommend the perfect program for you.",
    "startCta": "Start Quiz"
  }
}
```

---

## Icon Mapping

| Program | Phosphor Icon | Import |
|---------|---------------|--------|
| Natación para Adultos | SwimmingPool | `import { SwimmingPool } from '@phosphor-icons/react'` |
| Natación para Juveniles | Student | `import { Student } from '@phosphor-icons/react'` |
| Aguas Abiertas | Waves | `import { Waves } from '@phosphor-icons/react'` |
| Triatlón | Medal | `import { Medal } from '@phosphor-icons/react'` |
| **Running** | PersonSimpleRun | `import { PersonSimpleRun } from '@phosphor-icons/react'` |
