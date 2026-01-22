# Guía de Estilos del Navbar - Atlan Performance

## 🎨 Paleta de Colores del Navbar

```css
/* Backgrounds */
--bg-transparent: transparent
--bg-scrolled: rgba(5, 25, 55, 0.95)  /* abyss-navy/95 */
--bg-normal: rgba(5, 25, 55, 0.80)    /* abyss-navy/80 */

/* Text Colors */
--text-active: #FFFFFF          /* white */
--text-inactive: #B8C5D6        /* foam */
--text-hover: #FFFFFF           /* white */

/* Brand Colors */
--tide-teal: #0E8A9A           /* Underline activo, iconos */
--coral-spark: #FF6A3D         /* Botón CTA, acentos */
--abyss-navy: #0B2A3C          /* Background principal */

/* Borders */
--border-normal: rgba(255, 255, 255, 0.10)  /* white/10 */
--border-scrolled: rgba(255, 255, 255, 0.05) /* white/5 */
--border-divider: rgba(255, 255, 255, 0.20)  /* white/20 */
```

## 📐 Espaciado y Dimensiones

```css
/* Container */
max-width: 1200px (container-atlan)
padding-x: responsive (contenedor de Tailwind)

/* Header Heights */
--height-normal: py-4 (16px top & bottom)
--height-scrolled: py-3 (12px top & bottom)

/* Logo */
--logo-icon-size: 40px × 40px
--logo-text-width: 60px × 16px

/* Navigation Gap */
--nav-gap: 1px (entre links)
--controls-gap: 3px (entre controles)
--logo-gap: 2px (entre icono y texto)

/* Divider */
--divider-height: h-6 (24px)
--divider-width: w-px (1px)
--divider-margin: mx-2 (8px)
```

## 🔤 Tipografía

```css
/* Navigation Links */
font-size: text-sm (14px)
font-weight: font-bold (700)
letter-spacing: tracking-wide
text-transform: uppercase

/* Language Toggle */
font-size: text-sm (14px)
font-weight: font-bold (700)

/* Button (Get Started) */
font-family: font-heading
tracking: tracking-wide
```

## ✨ Efectos y Animaciones

### 1. Logo Hover
```javascript
whileHover: { scale: 1.05 }
transition: { 
  type: 'spring', 
  stiffness: 400, 
  damping: 10 
}
```
**Resultado**: Logo crece 5% con efecto elástico suave

### 2. Link Hover (Vertical Movement)
```javascript
whileHover: { y: -2 }
transition: { 
  type: 'spring', 
  stiffness: 400, 
  damping: 10 
}
```
**Resultado**: Link se mueve 2px hacia arriba al hacer hover

### 3. Active Link Underline (Shared Layout)
```javascript
<motion.div
  layoutId="navbar-underline"
  className="absolute bottom-0 left-0 right-0 h-0.5 bg-tide-teal"
  transition={{ 
    type: 'spring', 
    stiffness: 380, 
    damping: 30 
  }}
/>
```
**Resultado**: Subrayado animado que se desliza entre links activos

### 4. Hover Link Underline
```javascript
<motion.div
  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white opacity-0 
             group-hover:opacity-100 transition-opacity"
  initial={{ scaleX: 0 }}
  whileHover={{ scaleX: 1 }}
  transition={{ duration: 0.2 }}
/>
```
**Resultado**: Línea blanca que aparece de izquierda a derecha en hover

### 5. Theme Toggle Icon
```javascript
whileHover: { rotate: 180, scale: 1.1 }
transition: { duration: 0.3 }
```
**Resultado**: Icono rota 180° y crece 10% en hover

### 6. Button Active State
```css
active:scale-95
```
**Resultado**: Botón reduce a 95% al hacer click (feedback táctil)

## 🎭 Estados de los Links

### Link Activo
```jsx
{({ isActive }) => (
  <>
    <span className={isActive ? 'text-white' : 'text-foam'}>
    {isActive && (
      <motion.div layoutId="navbar-underline" />
    )}
  </>
)}
```
- Texto: **Blanco**
- Subrayado: **Teal** (0.5px height)
- Animación: **Smooth transition** entre links

### Link Inactivo (Normal)
- Texto: **Foam** (gris claro)
- Subrayado: **Ninguno**
- Cursor: **Pointer**

### Link en Hover
- Texto: **Foam → White** (transition-colors)
- Movimiento: **-2px vertical**
- Subrayado: **White** (scale de 0 a 1)

## 🌐 Language Selector

### Estructura
```
[ES] | [EN]
 ↑       ↑
activo  inactivo
```

### Estados
```jsx
// Idioma Activo (ES ejemplo)
<button className="text-white">ES</button>

// Separador
<span className="text-foam">|</span>

// Idioma Inactivo (EN)
<button className="text-foam hover:text-white">EN</button>
```

### Lógica de Click
```javascript
onClick={() => language !== 'es' && toggleLanguage()}
```
Solo cambia si se hace click en el idioma que NO está activo

## 🎯 Get Started Button

### Estilos Base (variant="primary")
```css
background: #FF6A3D (coral-spark)
color: white
font-weight: bold
border-radius: 0.375rem (rounded-md)
padding: 0.5rem 1rem (size="sm")
shadow: shadow-glow-coral
```

### Hover
```css
background: coral-dark
transition: all 300ms
```

### Active
```css
scale: 0.95
transition: all 300ms
```

## 📱 Responsive Breakpoints

### Desktop (md: 768px+)
- Navbar completo visible
- Logo + Links + Controles + Button
- Gap entre elementos: gap-1 para links, gap-3 para controles

### Tablet (sm-md: 640px-768px)
- Navbar colapsado
- Visible: Logo + Language + Hamburger
- Hidden: Links y Theme toggle

### Mobile (< 640px)
- Navbar mínimo
- Visible: Logo + Language (xs) + Hamburger
- Hidden: Todo lo demás
- Menu: Fullscreen overlay

## 🔍 Glassmorphism Effects

### Background Blur
```css
/* Normal */
backdrop-blur-md /* blur(12px) */

/* Scrolled */
backdrop-blur-lg /* blur(16px) */
```

### Border Glow
```css
border-b border-white/5 /* Scrolled */
border-b border-white/10 /* Normal */
```

### Shadow
```css
/* Scrolled */
shadow-glass /* Custom shadow con glassmorphism */
```

## 🎬 Animation Timeline

```
User hovers link:
0ms   → Text color transition starts
0ms   → Vertical movement (-2px) starts
0ms   → Underline scale animation starts
200ms → Underline fully visible
300ms → All animations complete

User clicks different link:
0ms   → Active underline starts moving
0ms   → Previous link text → foam
0ms   → New link text → white
~400ms → Underline reaches new link (spring)
```

## 💡 Tips de Implementación

### ✅ DO
- Usar `layoutId` para underline animation (smooth entre links)
- Aplicar `whileHover` en elementos individuales
- Usar `type: 'spring'` para animaciones orgánicas
- Mantener `stiffness` alto (380-400) para responsividad
- Usar `backdrop-blur` para glassmorphism

### ❌ DON'T
- No usar `transition-all` en elementos con `motion.*`
- No poner animaciones muy lentas (max 0.3s)
- No olvidar `overflow-hidden` en containers animados
- No usar `opacity` transitions en layout animations
- No mezclar Tailwind transitions con Framer Motion en el mismo elemento

## 🧪 Testing Checklist

- [ ] Logo se ve correctamente en todos los tamaños de pantalla
- [ ] Hover en links mueve el texto suavemente
- [ ] Underline activo se desliza entre links sin jumps
- [ ] Underline hover aparece correctamente
- [ ] Language selector solo cambia al idioma opuesto
- [ ] Theme toggle rota en hover
- [ ] Botón reduce tamaño al hacer click
- [ ] Mobile menu incluye todos los links
- [ ] Glassmorphism visible en scroll
- [ ] Transiciones suaves entre páginas
- [ ] No hay flickering en animaciones
- [ ] Accesibilidad: Tab navigation funciona
- [ ] Aria labels presentes en botones

---

**Nota**: Estos estilos están optimizados para performance. Las animaciones usan `transform` y `opacity` que son GPU-accelerated, evitando reflows y repaints costosos.
