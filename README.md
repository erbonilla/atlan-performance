# Atlan Performance

[![Deployment Status](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Supabase](https://img.shields.io/badge/Backend-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)

**Science-engineered endurance coaching, born from the ocean.**

Progressive Web App (PWA) para Atlan Performance Swim & Triathlon Club—el destino de entrenamiento respaldado por ciencia en Costa Rica para nadadores y triatletas que buscan disciplina estructurada, dominio biomecánico y una comunidad construida para la longevidad.

🌐 **Live Site:** [https://atlan-performance.vercel.app](https://atlan-performance.vercel.app)  
📦 **Repository:** [https://github.com/erbonilla/atlan-performance](https://github.com/erbonilla/atlan-performance)

---

## 🌊 Resumen

Atlan Performance sirve a atletas de resistencia ocupados (el perfil "The Optimizer") que demandan entrenamiento basado en evidencia que se adapte a sus vidas reales. El sitio web funciona como el centro principal de adquisición, traduciendo el arquetipo de marca "Sage + Hero" en una experiencia digital que genera nuevas suscripciones a cursos.

### ✨ Diferenciadores Clave

- **Integridad Científica** — Protocolos basados en biomecánica y pruebas, no en conjeturas
- **Disciplina Estructurada** — Planes que se adaptan a la vida real sin burnout
- **Precisión Líquida** — Filosofía de entrenamiento que combina la fluidez del agua con precisión de datos
- **Estética de Luz Matutina** — Calma, enfoque, poder—no agresivo "no pain no gain"

---

## 🚀 Quick Start

### Prerequisitos

- Node.js 18+ 
- npm o yarn
- Git

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/erbonilla/atlan-performance.git
cd atlan-performance

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Supabase (Backend)
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key

# Google Analytics 4 (Opcional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

> ⚠️ **Importante:** Nunca commitees el archivo `.env` al repositorio. Ya está incluido en `.gitignore`.

---

## 📁 Estructura del Proyecto

```
atlan-performance/
├── public/                      # Assets estáticos
│   ├── assets/
│   │   ├── images/             # Imágenes optimizadas
│   │   ├── logo/               # Logos y branding
│   │   └── policies/           # Documentos legales
│   ├── icons/                  # Iconos SVG
│   └── policies/               # Políticas (ES/EN)
├── src/
│   ├── components/             # Componentes React
│   │   ├── forms/              # Formularios
│   │   ├── home/               # Homepage específicos
│   │   ├── layout/             # Header, Footer, Nav
│   │   └── ui/                 # Componentes UI reutilizables
│   ├── pages/                  # Componentes de páginas (rutas)
│   ├── hooks/                  # Custom React hooks
│   ├── utils/                  # Utilidades (i18n, analytics)
│   ├── locales/                # Traducciones (ES/EN)
│   ├── styles/                 # CSS global
│   ├── lib/                    # Clientes externos (Supabase)
│   ├── App.jsx                 # Componente raíz
│   └── main.jsx                # Punto de entrada
├── docs/                       # Documentación del proyecto
├── .agent/                     # AI Skills para desarrollo
├── vercel.json                 # Configuración de Vercel
├── vite.config.js              # Configuración de Vite
├── tailwind.config.cjs         # Configuración de Tailwind
├── package.json
└── README.md
```

---

## 🛠️ Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con hot reload |
| `npm run build` | Build para producción |
| `npm run preview` | Preview del build de producción localmente |
| `npm run lint` | Ejecuta ESLint |
| `npm run lint:fix` | Ejecuta ESLint y corrige errores automáticamente |
| `npm run format` | Formatea código con Prettier |
| `npm run test` | Ejecuta suite de tests |
| `npm run test:ui` | Ejecuta tests con UI |
| `npm run test:coverage` | Genera reporte de cobertura |

---

## 🎨 Características Principales

### 🌐 Soporte Bilingüe (ES/EN)

- Idioma por defecto: Español (Costa Rica)
- Toggle de idioma en header (ES | EN)
- Todo el contenido gestionado via archivos JSON de traducción
- Preferencia guardada en cookie (`atlan_lang`)

### 🌓 Tema Oscuro/Claro

- Modo por defecto: Oscuro (Abyss Navy background)
- Toggle de tema en header (iconos Luna/Sol)
- Preferencia guardada en cookie (`atlan_theme`)
- Respeta `prefers-color-scheme` en primera visita

### 📱 Progressive Web App (PWA)

- Instalable en dispositivos móviles y desktop
- Service Worker para funcionalidad offline
- Manifest configurado con branding de Atlan
- Iconos optimizados para todas las plataformas

### 📧 Formularios de Contacto y Suscripción

- Validación en tiempo real
- Mensajes de error accesibles (ARIA)
- Integración con Supabase para almacenamiento
- Tracking de conversiones en GA4

---

## 💻 Stack Tecnológico

| Categoría | Tecnología |
|-----------|------------|
| **Framework** | React 18 + Vite |
| **UI Library** | HeroUI (v2+) |
| **Estilos** | Tailwind CSS + Glassmorphism |
| **Animación** | Framer Motion |
| **Iconos** | Phosphor Icons |
| **i18n** | react-i18next |
| **Estado** | React hooks + cookies (js-cookie) |
| **Analytics** | Google Analytics 4 (react-ga4) |
| **Backend** | Supabase (PostgreSQL + API) |
| **Formularios** | HTML5 nativo + validación custom |
| **Testing** | Vitest + React Testing Library |
| **Linting** | ESLint + Prettier |
| **Deployment** | Vercel |

---

## 🎨 Sistema de Diseño "Liquid Precision"

### Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Abyss Navy | `#0B2A3C` | Fondos primarios, texto |
| Tide Teal | `#0E8A9A` | Acentos, CTAs secundarios |
| Coral Spark | `#FF6A3D` | CTAs primarios, alertas |
| Foam | `#ECF7F8` | Fondos claros, texto en modo oscuro |

### Tipografía

| Fuente | Rol |
|--------|------|
| Outfit | Logo wordmark únicamente |
| Montserrat | Headings, CTAs |
| Lato | Texto de cuerpo, UI |
| Roboto Mono | Datos/métricas |

### Movimiento

- **Transiciones líquidas** (0.6s): Imágenes hero, revelaciones de página, navegación
- **Transiciones de precisión** (0.2s): Botones, validación de formularios, actualizaciones de datos

### Glassmorphism

Efectos de glassmorphism que refuerzan la filosofía "Liquid Precision":
- Fondos translúcidos con backdrop blur
- Bordes sutiles con tintes Tide Teal
- Sombras elevadas con efectos de brillo suave

Para especificaciones completas de diseño, ver [`docs/Atlan_Performance_Style_Guide_v1.0.md`](docs/Atlan_Performance_Style_Guide_v1.0.md).

---

## 📊 Objetivos de Performance

| Métrica | Objetivo |
|---------|----------|
| Lighthouse Score (Mobile) | >90 |
| First Contentful Paint | <1.5s |
| Largest Contentful Paint | <2.5s |
| Cumulative Layout Shift | <0.1 |
| Time to Interactive | <3.5s |

---

## ♿ Accesibilidad

El sitio cumple con **WCAG 2.2 AA**:

- Todo el texto cumple ratios mínimos de contraste (4.5:1 normal, 3:1 grande)
- Elementos interactivos tienen targets táctiles mínimos de 48px
- Soporte completo de navegación por teclado
- Compatible con lectores de pantalla (HTML semántico + ARIA)
- Respeta `prefers-reduced-motion`
- Skip navigation link para usuarios de teclado

---

## 🌐 Soporte de Navegadores

| Navegador | Versión |
|-----------|---------|
| Chrome | Últimas 2 versiones |
| Firefox | Últimas 2 versiones |
| Safari | Últimas 2 versiones |
| Edge | Últimas 2 versiones |
| iOS Safari | 14+ |
| Chrome Android | Últimas 2 versiones |

---

## 🚀 Deployment en Vercel

### Deploy Automático

El proyecto está configurado para deploy automático:

- **Push a `main`** → Deploy a producción
- **Pull Request** → Deploy de preview con URL única
- **Merge PR** → Deploy a producción

### Variables de Entorno en Vercel

Configuradas en Vercel Dashboard:

```env
VITE_SUPABASE_URL=https://erdhekfpqseqtlwkhnfp.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### URLs

- **Producción:** https://atlan-performance.vercel.app
- **Preview:** `https://atlan-performance-git-[branch]-edgars-projects.vercel.app`
- **Dashboard:** https://vercel.com/edgars-projects-4ea02f46/atlan-performance

### Guía Completa de Deployment

Para instrucciones detalladas paso a paso, ver [`DEPLOYMENT_GUIDE.md`](DEPLOYMENT_GUIDE.md).

---

## 🧪 Testing

### Ejecutar Tests

```bash
# Tests unitarios
npm run test

# Tests con UI
npm run test:ui

# Coverage report
npm run test:coverage
```

### Testing Local del Build de Producción

```bash
# Build
npm run build

# Preview
npm run preview
```

El preview estará disponible en `http://localhost:4173`

---

## 🤝 Contribuir

### Workflow de Desarrollo

1. Crear feature branch desde `main`
2. Hacer cambios siguiendo la guía de estilo
3. Escribir/actualizar tests según necesidad
4. Ejecutar `npm run lint` y `npm run test`
5. Enviar pull request con descripción

### Estilo de Código

- Seguir la [Style Guide](docs/Atlan_Performance_Style_Guide_v1.0.md) para decisiones de diseño
- Usar metodología BEM para nombres de clases CSS
- Preferir componentes funcionales con hooks
- Todos los strings deben estar en archivos de traducción (no texto hardcodeado)

### Mensajes de Commit

Usar conventional commits:

```
feat: agregar componente de hero section
fix: corregir persistencia de toggle de tema
docs: actualizar README con pasos de deployment
style: formatear archivo de variables CSS
```

---

## 📚 Documentación

| Documento | Descripción |
|-----------|-------------|
| [README.md](README.md) | Resumen del proyecto y setup (este archivo) |
| [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) | Guía completa de deployment en Vercel |
| [Atlan_REQUIREMENTS.md](docs/Atlan_REQUIREMENTS.md) | Requerimientos funcionales y no funcionales |
| [Atlan_DESIGN.md](docs/Atlan_DESIGN.md) | Arquitectura técnica e implementación |
| [Atlan_Performance_Style_Guide_v1.0.md](docs/Atlan_Performance_Style_Guide_v1.0.md) | Referencia completa del sistema de diseño |
| [Atlan_Supabase_Integration.md](docs/Atlan_Supabase_Integration.md) | Guía de integración con Supabase |

---

## 🤖 AI Skills

Este proyecto incluye custom AI skills para asistir con el desarrollo:

- **atlan_performance**: Skill especializado para construir la PWA, siguiendo el sistema de diseño "Liquid Precision"
  - **Triggers**: "Atlan", "swim coaching", "Liquid Precision", "glassmorphism"
  - **Uso**: Se activa automáticamente al trabajar en tareas relevantes

Ver [`.agent/skills/atlan_performance/SKILL.md`](.agent/skills/atlan_performance/SKILL.md) para más detalles.

---

## 🐛 Troubleshooting

Ver [`TROUBLESHOOTING.md`](docs/TROUBLESHOOTING.md) para soluciones a problemas comunes.

---

## 📞 Soporte

**Project Owner:** Edgar Bonilla (Head Coach)  
**Email:** erbonilla@outlook.com  
**Website:** https://atlan-performance.vercel.app

### Reportar Issues

1. Revisar issues existentes primero
2. Proveer información de navegador/dispositivo
3. Incluir pasos para reproducir
4. Adjuntar screenshots si es relevante

---

## 📄 Licencia

Este proyecto es software propietario de Atlan Performance.  
Todos los derechos reservados © 2026 Atlan Performance.

---

## 🙏 Agradecimientos

- Inspiración de diseño: Corrientes oceánicas, estética "Morning Light"
- Tipografía: Google Fonts (Outfit, Montserrat, Lato, Roboto Mono)
- Iconos: Phosphor Icons

---

## 📈 Status del Proyecto

- ✅ **MVP Completado**
- ✅ **Deployed en Vercel**
- ✅ **Integración con Supabase**
- ✅ **PWA Funcional**
- 🔄 **Analytics en configuración**
- 🔄 **SEO en optimización**

---

**Version:** 1.0  
**Last Updated:** Enero 2026  
**Built with ❤️ by Atlan Performance**
