# Guía del Componente de Cursos | Courses Component Guide

## 📋 Resumen | Overview

Se ha creado un sistema de tarjetas de cursos moderno y animado inspirado en el diseño proporcionado, con soporte completo para español e inglés.

A modern and animated course card system has been created inspired by the provided design, with full support for Spanish and English.

---

## 🎯 Características | Features

### ✨ Animaciones con Framer Motion
- **Entrada suave**: Las tarjetas aparecen con animación de fade-in y slide-up
- **Efecto hover**: Las tarjetas se elevan al pasar el mouse
- **Animaciones secuenciales**: Cada tarjeta aparece con un delay progresivo
- **Rotación de iconos**: Los iconos SVG rotan al aparecer
- **Badge animado**: El badge "MOST POPULAR" tiene animación de spring

### 🌐 Internacionalización (i18n)
- Soporte completo para ES/EN
- Todas las traducciones en archivos de localización
- Cambio dinámico de idioma sin recarga

### 🎨 Diseño Visual
- **Glassmorphism**: Efecto de vidrio esmerilado con backdrop-blur
- **Gradientes personalizados**: Tarjeta destacada con gradiente teal
- **Bordes brillantes**: Border-glow en la tarjeta popular
- **Iconos SVG**: Iconos de delfín, tiburón y orca personalizados
- **Responsive**: Diseño adaptable a móvil, tablet y desktop

---

## 📁 Estructura de Archivos | File Structure

```
ATLAN 2026v2/
├── public/
│   └── icons/                          # 🆕 Iconos SVG de cursos
│       ├── dolphin.svg
│       ├── shark.svg
│       └── orca.svg
│
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── CourseCard.jsx          # 🆕 Componente de tarjeta animada
│   │
│   ├── pages/
│   │   └── Courses.jsx                 # ♻️ Actualizado con animaciones
│   │
│   └── locales/
│       ├── es.json                     # ♻️ Traducciones españolas
│       └── en.json                     # ♻️ Traducciones inglesas
```

---

## 🎨 Componente CourseCard

### Props

```jsx
<CourseCard 
    course={courseObject}      // Objeto con datos del curso
    icon={iconPath}            // Ruta al SVG
    isPopular={boolean}        // Marca como destacado
    onSelect={function}        // Callback al seleccionar
    delay={number}             // Delay de animación (segundos)
/>
```

### Estructura del Objeto `course`

```javascript
{
    id: 'dolphin',                           // Identificador único
    name: 'DOLPHIN',                         // Nombre del curso
    price: '₡22,000',                        // Precio mensual
    feeLabel: 'MONTHLY FEE',                 // Etiqueta de precio
    description: 'Experience your first...',  // Descripción
    features: ['1 session...', '...'],       // Array de características
    buttonText: 'START NOW',                 // Texto del botón
    icon: '/icons/dolphin.svg',              // Ruta del icono
    isPopular: false,                        // Si es popular
    popularBadge: 'MOST POPULAR'             // Texto del badge
}
```

---

## 🌐 Traducciones | Translations

### Español (`es.json`)

```json
"courses": {
    "monthly_fee": "TARIFA MENSUAL",
    "most_popular": "MÁS POPULAR",
    "dolphin": {
        "name": "DOLPHIN",
        "price": "₡22,000",
        "description": "Experimenta tus primeras sesiones con Atlan.",
        "sessions": "1 sesión por semana",
        "focus": "Enfoque en fundamentos (técnica + confianza)",
        "progression": "Progresión guiada por el entrenador",
        "button": "COMENZAR AHORA"
    },
    "shark": { ... },
    "orca": { ... }
}
```

### English (`en.json`)

```json
"courses": {
    "monthly_fee": "MONTHLY FEE",
    "most_popular": "MOST POPULAR",
    "dolphin": {
        "name": "DOLPHIN",
        "price": "₡22,000",
        "description": "Experience your first sessions with Atlan.",
        "sessions": "1 session per week",
        "focus": "Focus on fundamentals (technique + confidence)",
        "progression": "Coach-guided progression",
        "button": "START NOW"
    },
    "shark": { ... },
    "orca": { ... }
}
```

---

## 🎬 Animaciones Implementadas | Implemented Animations

### 1. Entrada de Tarjetas
```javascript
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
```

### 2. Hover Effect
```javascript
whileHover={{ y: -8, transition: { duration: 0.3 } }}
```

### 3. Badge "Most Popular"
```javascript
initial={{ scale: 0, y: -20 }}
animate={{ scale: 1, y: 0 }}
transition={{ delay: delay + 0.3, type: "spring", stiffness: 200 }}
```

### 4. Rotación de Icono
```javascript
initial={{ scale: 0, rotate: -180 }}
animate={{ scale: 1, rotate: 0 }}
transition={{ delay: delay + 0.2, type: "spring", stiffness: 150, damping: 12 }}
```

### 5. Features Staggered
```javascript
{course.features.map((feature, idx) => (
    <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: delay + 0.5 + (idx * 0.1) }}
    />
))}
```

---

## 🎨 Clases CSS Personalizadas | Custom CSS Classes

### Tarjeta Normal
```jsx
className="bg-abyss-navy/40 border border-white/10 backdrop-blur-md"
```

### Tarjeta Popular
```jsx
className="bg-gradient-to-br from-tide-teal/20 to-abyss-navy/40 
           border-2 border-tide-teal shadow-glow-teal"
```

### Icono con Glow (Popular)
```jsx
className="filter drop-shadow-[0_0_12px_rgba(79,209,197,0.6)]"
```

---

## 🔄 Flujo de Navegación | Navigation Flow

1. Usuario ve las tarjetas de cursos
2. Hace clic en el botón de una tarjeta
3. Se ejecuta `handleCourseSelect(courseId)`
4. Navega a `/contact` con el plan pre-seleccionado:

```javascript
const handleCourseSelect = (courseId) => {
    navigate('/contact', { state: { selectedPlan: courseId } });
};
```

---

## 📱 Responsive Design

### Mobile (< 768px)
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
```
- 1 columna
- Tarjetas apiladas verticalmente

### Tablet/Desktop (≥ 768px)
- 3 columnas
- Tarjetas lado a lado
- Tarjeta central (Shark) ligeramente elevada

---

## 🎯 Elementos del Diseño Original Implementados

✅ **Iconos SVG personalizados** (Delfín, Tiburón, Orca)  
✅ **Badge "MOST POPULAR"** en la tarjeta central  
✅ **Gradiente de fondo** en tarjeta destacada  
✅ **Precio grande y prominente**  
✅ **Descripción en itálica**  
✅ **Lista de características con checkmarks**  
✅ **Botones con estilos diferenciados**  
✅ **Etiqueta "MONTHLY FEE"**  
✅ **Layout de 3 columnas**  
✅ **Efectos glassmorphism**  
✅ **Animaciones suaves con Framer Motion**

---

## 🚀 Cómo Usar | How to Use

### 1. Importar el Componente

```jsx
import CourseCard from '@components/ui/CourseCard';
```

### 2. Crear Datos de Cursos

```jsx
const courses = [
    {
        id: 'dolphin',
        name: t('courses.dolphin.name'),
        price: t('courses.dolphin.price'),
        // ... más propiedades
    }
];
```

### 3. Renderizar

```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {courses.map((course, index) => (
        <CourseCard
            key={course.id}
            course={course}
            icon={course.icon}
            isPopular={course.isPopular}
            onSelect={() => handleCourseSelect(course.id)}
            delay={index * 0.15}
        />
    ))}
</div>
```

---

## 🎨 Paleta de Colores Utilizada | Color Palette Used

- **tide-teal**: `#4FD1C5` - Precio y checkmarks
- **coral-spark**: `#FF6A3D` - Badge "Most Popular"
- **abyss-navy**: `#0A192F` - Fondo de tarjetas
- **foam**: `#E6F6F4` - Textos secundarios
- **white**: `#FFFFFF` - Títulos

---

## 🔧 Configuración de Delays | Delay Configuration

```javascript
// Tarjeta 1: delay = 0 * 0.15 = 0s
// Tarjeta 2: delay = 1 * 0.15 = 0.15s
// Tarjeta 3: delay = 2 * 0.15 = 0.30s

delay={index * 0.15}
```

Esto crea un efecto de cascada donde cada tarjeta aparece 150ms después de la anterior.

---

## 📊 Timing de Animaciones Internas | Internal Animation Timing

```
0.00s - Tarjeta fade-in
0.20s - Icono rotación
0.30s - Badge aparece
0.30s - Título fade-in
0.35s - Fee label fade-in
0.40s - Precio scale-in
0.45s - Descripción fade-in
0.50s - Features stagger (cada 0.1s)
0.70s - Botón slide-up
```

---

## 🎯 Mejoras Futuras Sugeridas | Suggested Future Improvements

1. **Analytics**: Trackear clics en cada tarjeta
2. **A/B Testing**: Probar diferentes colores de botones
3. **Comparación**: Modal comparativo de planes
4. **Testimonios**: Agregar quotes de usuarios
5. **FAQ**: Dropdown con preguntas frecuentes
6. **Descuentos**: Badge de promociones temporales
7. **Calculadora**: Estimador de costo anual

---

## 🐛 Solución de Problemas | Troubleshooting

### Los iconos no se muestran
- Verificar que los SVG están en `/public/icons/`
- Revisar la ruta: debe ser `/icons/nombre.svg` (sin `public`)

### Las animaciones no funcionan
- Verificar que `framer-motion` está instalado: `npm install framer-motion`
- Revisar versión en `package.json`: `"framer-motion": "^11.18.0"`

### Traducciones no aparecen
- Verificar que el hook `useLanguage` está funcionando
- Revisar que los keys en `es.json` y `en.json` coinciden

---

## 📝 Notas de Implementación | Implementation Notes

- **Performance**: Framer Motion está optimizado para 60fps
- **Accesibilidad**: Todos los botones tienen texto descriptivo
- **SEO**: Los títulos son semánticamente correctos (h1, h2, h3)
- **Mobile First**: El diseño prioriza la experiencia móvil

---

Creado por: Cursor AI Assistant  
Fecha: 19 de Enero, 2026  
Versión: 1.0
