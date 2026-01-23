# 🚀 Pasos para Desplegar en Vercel - GUÍA RÁPIDA

**¡Sigue estos pasos en orden!** ⬇️

---

## ✅ PREPARACIÓN (Ya completado)

- [x] Proyecto subido a GitHub
- [x] Build funciona correctamente (`npm run build` ✓)
- [x] Archivo `vercel.json` creado
- [x] Credenciales de Supabase listas

---

## 📝 PASO 1: Acceder a Vercel

1. Abre tu navegador
2. Ve a: **https://vercel.com/edgars-projects-4ea02f46**
3. Inicia sesión si es necesario

---

## 🔗 PASO 2: Conectar GitHub

1. En Vercel, haz click en el botón **"Add New..."** (esquina superior derecha)
2. Selecciona **"Project"**
3. En "Import Git Repository", busca: **`atlan-performance`**
4. Si no aparece el repositorio:
   - Click en **"Adjust GitHub App Permissions"**
   - Autoriza el acceso al repositorio
   - Vuelve atrás y búscalo de nuevo
5. Cuando aparezca `erbonilla/atlan-performance`, haz click en **"Import"**

---

## ⚙️ PASO 3: Configurar el Proyecto

### 3.1 Verificar Configuración Básica

Vercel detectará automáticamente:

```
Framework Preset: Vite
Root Directory: ./
Build Command: npm run build
Output Directory: dist
```

✅ Si todo se ve así, ¡perfecto! No cambies nada.

### 3.2 Agregar Variables de Entorno

⚠️ **MUY IMPORTANTE:** Antes de hacer click en "Deploy", configura las variables de entorno.

En la sección **"Environment Variables"** (en la misma página):

#### Variable 1: VITE_SUPABASE_URL

```
Name:  VITE_SUPABASE_URL
Value: https://erdhekfpqseqtlwkhnfp.supabase.co
```

- Marca las 3 casillas: ✅ Production, ✅ Preview, ✅ Development
- Click **"Add"**

#### Variable 2: VITE_SUPABASE_ANON_KEY

```
Name:  VITE_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyZGhla2ZwcXNlcXRsd2tobmZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4NzU2NDcsImV4cCI6MjA4MzQ1MTY0N30.nGux5XqNdMF_ZKV0pCclw_acINGdug9zaGHMcjJd0nE
```

- Marca las 3 casillas: ✅ Production, ✅ Preview, ✅ Development
- Click **"Add"**

#### Variable 3: VITE_GA_MEASUREMENT_ID (OPCIONAL)

```
Name:  VITE_GA_MEASUREMENT_ID
Value: (déjalo en blanco por ahora, lo agregas después)
```

---

## 🎯 PASO 4: Deploy

1. Verifica que tengas las 2 variables de Supabase agregadas
2. Haz click en el botón azul **"Deploy"**
3. Espera 2-3 minutos mientras Vercel:
   - Instala las dependencias
   - Ejecuta el build
   - Despliega tu sitio

### Durante el Deploy verás:

```
Building...
▲ Vercel CLI 28.0.0
Installing dependencies...
✓ Dependencies installed
Building...
✓ Build completed successfully
Deploying...
✓ Deployment ready
```

### Cuando termine:

Verás: **🎉 Congratulations! Your deployment is ready.**

---

## ✅ PASO 5: Verificar el Sitio

### 5.1 Obtener la URL

Vercel te mostrará la URL de tu sitio:

```
https://atlan-performance.vercel.app
```

(O el nombre que hayas elegido)

### 5.2 Probar Funcionalidad Básica

Abre la URL y verifica:

1. **Homepage carga** ✓
   - Debe mostrar el hero con la imagen
   - USP grid
   - Testimonios

2. **Navegación funciona** ✓
   - Click en "Programas" → debe navegar
   - Click en "Cursos" → debe navegar
   - Click en "Contacto" → debe navegar
   - Click en "Comunidad" → debe navegar

3. **Cambio de idioma** ✓
   - Click en el toggle ES/EN en el header
   - El contenido debe cambiar

4. **Tema claro/oscuro** ✓
   - Click en el icono de sol/luna
   - Los colores deben cambiar

### 5.3 Probar Supabase (MUY IMPORTANTE)

1. Ve a: **Tu URL + `/courses`**
   - Ejemplo: `https://atlan-performance.vercel.app/courses`

2. Selecciona cualquier curso

3. Click en el botón de inscripción

4. Llena el formulario con datos de prueba:
   ```
   Nombre: Juan Pérez Test
   Email: test@example.com
   Teléfono: 88888888
   Fecha nacimiento: 01/01/1990
   Cédula: 123456789
   ```

5. Envía el formulario

6. Deberías ver un mensaje de éxito ✓

7. **Verificar en Supabase:**
   - Ve a: https://supabase.com/dashboard
   - Selecciona tu proyecto
   - Click en **"Table Editor"** (lado izquierdo)
   - Click en la tabla **`course_registrations`**
   - Verifica que aparezca el registro de prueba ✓

---

## 🎊 ¡LISTO! Tu sitio está en vivo

### URLs Importantes:

- **Sitio en vivo:** https://atlan-performance.vercel.app
- **Dashboard Vercel:** https://vercel.com/edgars-projects-4ea02f46/atlan-performance
- **GitHub Repo:** https://github.com/erbonilla/atlan-performance

---

## 🔄 Próximos Deployments (Automático)

A partir de ahora, **cada vez que hagas push a GitHub**, Vercel desplegará automáticamente:

```bash
# Hacer cambios localmente
git add .
git commit -m "Tu mensaje"
git push origin main

# Vercel detecta el push y redespliega automáticamente ✨
```

---

## 🆘 Si algo sale mal...

### Build falla en Vercel

1. Ve a la pestaña **"Deployments"** en Vercel
2. Click en el deployment fallido
3. Revisa los **logs** para ver el error
4. Contacta con el error específico

### Formularios no funcionan

1. Verifica que las variables de entorno estén configuradas
2. Ve a **Project Settings** → **Environment Variables**
3. Asegúrate que `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` estén ahí
4. Si las agregaste después del primer deploy, haz **Redeploy**

### Rutas dan 404

1. Verifica que `vercel.json` esté en la raíz del proyecto
2. Haz un **Redeploy** desde Vercel Dashboard

---

## 📞 Soporte

**Documentación completa:** Ver [`DEPLOYMENT_GUIDE.md`](DEPLOYMENT_GUIDE.md)

**Vercel Docs:** https://vercel.com/docs

---

## ✅ Checklist Final

Marca cuando completes:

- [ ] Proyecto conectado a Vercel
- [ ] Variables de Supabase agregadas
- [ ] Deploy exitoso
- [ ] Sitio carga correctamente
- [ ] Navegación funciona
- [ ] Formularios envían a Supabase
- [ ] Registro de prueba aparece en Supabase

---

**¡Éxito! 🎉**

Si completaste todos los pasos, tu sitio Atlan Performance ya está en vivo en Vercel.
