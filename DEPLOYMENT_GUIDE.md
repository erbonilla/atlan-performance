# Guía de Despliegue en Vercel - Atlan Performance

**Fecha:** Enero 2026  
**Repositorio:** https://github.com/erbonilla/atlan-performance  
**Vercel Dashboard:** https://vercel.com/edgars-projects-4ea02f46

---

## 📋 Pre-requisitos Completados

✅ Proyecto subido a GitHub  
✅ Build local funciona correctamente  
✅ Configuración de Vercel lista (`vercel.json`)  
✅ Credenciales de Supabase disponibles

---

## 🚀 Paso 1: Conectar GitHub con Vercel

### 1.1 Acceder a Vercel

1. Ve a: https://vercel.com/edgars-projects-4ea02f46
2. Inicia sesión con tu cuenta
3. Haz click en **"Add New..."** en la parte superior derecha
4. Selecciona **"Project"**

### 1.2 Importar Repositorio

1. En la pantalla "Import Git Repository", busca: **`atlan-performance`**
2. Si no aparece, haz click en **"Adjust GitHub App Permissions"** y autoriza el repositorio
3. Click en **"Import"** junto al repositorio `erbonilla/atlan-performance`

---

## ⚙️ Paso 2: Configurar el Proyecto

### 2.1 Configuración Básica

Vercel detectará automáticamente la configuración. Verifica que tenga:

| Campo | Valor |
|-------|-------|
| **Project Name** | `atlan-performance` (puedes cambiarlo si quieres) |
| **Framework Preset** | `Vite` |
| **Root Directory** | `./` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |

> ⚠️ **No hagas click en "Deploy" todavía**

### 2.2 Configurar Variables de Entorno

Antes de desplegar, necesitas agregar las variables de entorno:

1. En la sección **"Environment Variables"**, agrega las siguientes:

#### Variable 1: Supabase URL

```
Name: VITE_SUPABASE_URL
Value: https://erdhekfpqseqtlwkhnfp.supabase.co
```

- **Environments:** Marca las 3 casillas: ✅ Production, ✅ Preview, ✅ Development
- Click **"Add"**

#### Variable 2: Supabase Anon Key

```
Name: VITE_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyZGhla2ZwcXNlcXRsd2tobmZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4NzU2NDcsImV4cCI6MjA4MzQ1MTY0N30.nGux5XqNdMF_ZKV0pCclw_acINGdug9zaGHMcjJd0nE
```

- **Environments:** Marca las 3 casillas: ✅ Production, ✅ Preview, ✅ Development
- Click **"Add"**

#### Variable 3: Google Analytics (Opcional - puedes agregarla después)

```
Name: VITE_GA_MEASUREMENT_ID
Value: (tu ID cuando lo tengas, ej: G-XXXXXXXXXX)
```

- **Environments:** Solo marca ✅ Production
- Click **"Add"**

> 💡 **Tip:** Puedes agregar Google Analytics más tarde desde el Dashboard de Vercel

---

## 🎯 Paso 3: Realizar el Primer Despliegue

### 3.1 Iniciar Deploy

1. Verifica que todas las variables estén agregadas
2. Click en el botón **"Deploy"**
3. Vercel comenzará el proceso de build y despliegue

### 3.2 Monitorear el Build

Verás una pantalla con logs en tiempo real. El proceso tomará aproximadamente **2-3 minutos**:

```
Running "npm install"...
✓ Installed dependencies

Running "npm run build"...
✓ Build completed successfully

Uploading build output...
✓ Deployment ready
```

### 3.3 Deployment Exitoso

Cuando termine, verás:

- ✅ **Deployment Status:** Ready
- 🌐 **URL de producción:** `https://atlan-performance.vercel.app` (o el nombre que elegiste)
- 📊 **Build time:** ~2-3 minutos

---

## ✅ Paso 4: Verificación Post-Despliegue

### 4.1 Pruebas Básicas

Abre tu sitio en el navegador y verifica:

- [ ] **Homepage carga correctamente**
  - URL: `https://atlan-performance.vercel.app`
  - Debería ver el hero, testimonios, USP grid

- [ ] **Navegación funciona**
  - Click en "Programas" → debe cargar la página
  - Click en "Cursos" → debe cargar la página
  - Click en "Contacto" → debe cargar la página
  - Click en "Comunidad" → debe cargar la página
  - Click en "Nosotros" → debe cargar la página

- [ ] **Cambio de idioma funciona**
  - Click en el selector ES/EN en el header
  - El contenido debe cambiar

- [ ] **Tema claro/oscuro funciona**
  - Click en el icono de sol/luna
  - Los colores deben cambiar

### 4.2 Probar Integración con Supabase

**Muy importante:** Probar que los formularios funcionen

1. Ve a: `https://atlan-performance.vercel.app/courses`
2. Selecciona un curso y haz click en "Inscribirse"
3. Llena el formulario con datos de prueba
4. Envía el formulario
5. Deberías ver un mensaje de éxito

**Verificar en Supabase:**

1. Ve a: https://supabase.com/dashboard
2. Selecciona tu proyecto
3. Ve a **Table Editor** → `course_registrations`
4. Verifica que aparezca el registro de prueba

### 4.3 Probar PWA (Progressive Web App)

1. En Chrome, abre: `https://atlan-performance.vercel.app`
2. Abre DevTools (F12)
3. Ve a la pestaña **Application**
4. En el panel izquierdo:
   - **Manifest:** Debería cargar sin errores
   - **Service Workers:** Debería mostrar uno activo
5. Deberías ver un botón "Instalar app" en la barra de direcciones

### 4.4 Performance Check (Opcional pero recomendado)

1. En Chrome DevTools, ve a la pestaña **Lighthouse**
2. Selecciona:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
3. Click en **"Analyze page load"**
4. Objetivo: Score > 90 en todas las categorías

---

## 🔧 Paso 5: Configuraciones Adicionales (Opcional)

### 5.1 Configurar Dominio Personalizado

Si tienes un dominio propio (ej: `atlanperformance.com`):

1. En Vercel Dashboard, ve a tu proyecto
2. Click en **"Settings"** → **"Domains"**
3. Click en **"Add"**
4. Ingresa tu dominio: `atlanperformance.com`
5. Sigue las instrucciones para configurar DNS

### 5.2 Activar Vercel Analytics

Para ver estadísticas de visitas (gratis en plan Hobby):

1. Ve a tu proyecto en Vercel Dashboard
2. Click en **"Analytics"** en el menú izquierdo
3. Click en **"Enable Analytics"**

### 5.3 Configurar Notificaciones

Para recibir notificaciones de deployments:

1. Ve a **Project Settings** → **"Git"**
2. En **"Deploy Notifications"**, activa:
   - ✅ Deployment Started
   - ✅ Deployment Ready
   - ✅ Deployment Failed

---

## 🔄 Flujo de Trabajo Continuo

### Deployments Automáticos

Vercel está configurado para desplegar automáticamente:

| Branch/Acción | Resultado |
|---------------|-----------|
| Push a `main` | 🚀 Deploy a producción automático |
| Crear Pull Request | 🔍 Deploy de preview con URL única |
| Merge PR | 🚀 Deploy a producción automático |

### Hacer Cambios y Redesplegar

1. Haz cambios en tu código localmente
2. Commit y push a GitHub:
   ```bash
   git add .
   git commit -m "Descripción de cambios"
   git push origin main
   ```
3. Vercel detectará el push y desplegará automáticamente
4. Recibirás notificaciones (si las activaste)
5. Nueva versión estará disponible en ~2-3 minutos

### URLs de Preview

Cada Pull Request genera una URL única:
```
https://atlan-performance-git-[nombre-branch]-edgars-projects.vercel.app
```

Úsala para probar cambios antes de merge a producción.

---

## 🐛 Troubleshooting

### Problema: Build falla en Vercel

**Síntomas:**
- Deployment status: Failed
- Error en logs de build

**Soluciones:**

1. **Verificar dependencias:**
   ```bash
   # Local
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```
   Si funciona local, commitea el nuevo `package-lock.json`

2. **Verificar variables de entorno:**
   - Ve a Project Settings → Environment Variables
   - Verifica que `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` estén presentes
   - Los nombres deben ser exactos (case-sensitive)

3. **Forzar re-deploy:**
   - Ve a Deployments
   - Click en los 3 puntos del deployment fallido
   - Click en "Redeploy"

### Problema: Formularios no envían datos a Supabase

**Síntomas:**
- Formulario no se envía
- Error en consola del navegador

**Soluciones:**

1. **Verificar CORS en Supabase:**
   - Ve a Supabase Dashboard
   - Settings → API → API Settings
   - En "URL Configuration" agrega:
     ```
     https://atlan-performance.vercel.app
     ```

2. **Verificar RLS (Row Level Security):**
   - Ve a Table Editor → `course_registrations`
   - Click en el icono de escudo
   - Debe haber una policy que permita INSERT para anon

3. **Verificar en DevTools:**
   - Abre Console (F12)
   - Busca errores relacionados con Supabase
   - Verifica que las variables de entorno se carguen

### Problema: Rutas dan 404

**Síntomas:**
- Al navegar a `/programs` o `/courses` da error 404
- Al recargar una página interna da 404

**Solución:**

El archivo `vercel.json` ya tiene la configuración correcta. Si persiste:

1. Verifica que `vercel.json` esté en la raíz del proyecto
2. Fuerza un re-deploy
3. Limpia cache del navegador (Ctrl+Shift+R)

### Problema: Variables de entorno no se cargan

**Síntomas:**
- En consola del navegador: `undefined` al acceder a `import.meta.env.VITE_...`

**Solución:**

1. Verifica nombres exactos en Vercel Dashboard
2. Las variables deben empezar con `VITE_` para ser accesibles en el cliente
3. Después de agregar/modificar variables, debes hacer un **Redeploy**

---

## 📊 Monitoreo y Mantenimiento

### Dashboard de Vercel

Tu proyecto: https://vercel.com/edgars-projects-4ea02f46/atlan-performance

**Secciones importantes:**

- **Overview:** Status actual, última deployment
- **Deployments:** Historial de deploys
- **Analytics:** Visitas, performance (si está activado)
- **Logs:** Errores de runtime
- **Settings:** Configuración, variables de entorno

### Supabase Dashboard

Tu proyecto: https://supabase.com/dashboard/project/erdhekfpqseqtlwkhnfp

**Secciones importantes:**

- **Table Editor:** Ver registros de `course_registrations`
- **API:** Verificar URLs y keys
- **Logs:** Ver requests y errores

---

## ✨ Próximos Pasos

Después del primer despliegue exitoso:

1. [ ] **Configurar Google Analytics**
   - Crear propiedad GA4
   - Agregar `VITE_GA_MEASUREMENT_ID` en Vercel
   - Redesplegar

2. [ ] **Optimizar imágenes**
   - Algunas imágenes son grandes (>8MB)
   - Considera usar formato WebP
   - Usa servicios como TinyPNG

3. [ ] **Dominio personalizado** (opcional)
   - Comprar dominio (ej: atlanperformance.com)
   - Configurar en Vercel

4. [ ] **Email notifications**
   - Configurar para recibir emails cuando alguien se registre
   - Puede hacerse con Supabase Functions o Zapier

5. [ ] **SEO**
   - Agregar meta tags
   - Configurar sitemap.xml
   - Google Search Console

---

## 📞 Soporte

**Vercel Docs:** https://vercel.com/docs  
**Supabase Docs:** https://supabase.com/docs  
**Vite Docs:** https://vitejs.dev/guide/

**Contacto Proyecto:**  
Edgar Bonilla - erbonilla@outlook.com

---

## ✅ Checklist Final

Marca cuando completes cada paso:

- [ ] Proyecto conectado a Vercel
- [ ] Variables de entorno configuradas
- [ ] Primer deployment exitoso
- [ ] Homepage carga correctamente
- [ ] Navegación funciona
- [ ] Cambio de idioma funciona
- [ ] Formularios envían a Supabase
- [ ] PWA funciona (manifest + service worker)
- [ ] Performance verificado con Lighthouse
- [ ] Notificaciones configuradas (opcional)
- [ ] Analytics activado (opcional)

---

**¡Felicidades! Tu sitio Atlan Performance está en vivo en Vercel 🎉**

URL de producción: https://atlan-performance.vercel.app
