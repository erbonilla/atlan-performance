# Troubleshooting Guide

## Common Issues and Solutions

### 1. "Cannot read properties of null (reading 'useEffect')" Error

**Symptoms:**
- Error appears in browser console
- App fails to render
- Error mentions `useEffect`, `useState`, or other React hooks
- Error references Vite chunk files (e.g., `chunk-JYVDFSE2.js`)

**Cause:**
Dual React instance problem - multiple copies of React are being loaded.

**Solution:**
1. Clear all caches:
   ```bash
   rm -rf node_modules/.vite dist .vite
   npm cache clean --force
   ```

2. Clear browser cache:
   - Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
   - Or test in incognito window

3. If issue persists, check for React hooks in utility functions or custom hooks that might be causing bundling issues.

**Prevention:**
- Avoid using React hooks in utility functions
- Keep hooks only in components and custom hooks
- Use direct function imports instead of barrel exports when possible

---

### 2. Port 5173 Already in Use

**Symptoms:**
```
Error: Port 5173 is already in use
```

**Solution:**
```bash
# Kill the process using port 5173
lsof -ti:5173 | xargs kill -9

# Or let Vite use a different port
# (vite.config.js already has strictPort: false)
npm run dev
```

---

### 3. Stale Browser Cache After Updates

**Symptoms:**
- Changes don't appear in browser
- Old errors persist after fixes
- Vite shows new version hash but browser shows old

**Solution:**
1. **Hard Refresh:** `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)

2. **Clear Site Data:**
   - Open DevTools (`F12` or `Cmd + Option + I`)
   - Go to **Application** tab
   - Click **Storage** → **Clear site data**

3. **Disable Cache in DevTools:**
   - Open DevTools
   - Go to **Network** tab
   - Check **Disable cache**
   - Keep DevTools open while developing

---

### 4. Supabase Connection Issues

**Symptoms:**
- Database queries fail
- Console warning: "Missing Supabase environment variables"

**Solution:**
1. Check `.env` file has correct values:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

2. Restart dev server after changing `.env`:
   ```bash
   # Stop server (Ctrl + C)
   npm run dev
   ```

3. Verify Supabase client initialization:
   ```javascript
   import { supabase } from './utils/supabaseClient'
   
   if (!supabase) {
     console.error('Supabase not initialized')
   }
   ```

---

### 5. i18n Translation Keys Not Working

**Symptoms:**
- Translation keys appear instead of translated text
- Console warning about missing translations

**Solution:**
1. Check translation files exist:
   - `src/locales/en.json`
   - `src/locales/es.json`

2. Verify key path is correct:
   ```javascript
   // Correct
   t('hero.headline')
   
   // Incorrect
   t('hero-headline')
   ```

3. Check i18n initialization in `src/utils/i18n.js`

---

### 6. Build Errors

**Symptoms:**
```
npm run build
```
fails with errors

**Solution:**
1. Check for TypeScript errors:
   ```bash
   npm run lint
   ```

2. Clear build cache:
   ```bash
   rm -rf dist
   npm run build
   ```

3. Check for missing dependencies:
   ```bash
   npm install
   ```

---

## Development Best Practices

### Clearing Caches (Do this when things break)
```bash
# Full nuclear clean
rm -rf node_modules package-lock.json .vite node_modules/.vite dist
npm cache clean --force
npm install
npm run dev
```

### Testing Changes
1. Always test in incognito window first
2. Clear browser cache between major changes
3. Check browser console for errors
4. Verify network tab shows correct file versions

### When Adding New Dependencies
```bash
# Install dependency
npm install package-name

# Clear Vite cache
rm -rf node_modules/.vite

# Restart dev server
npm run dev
```

---

## Getting Help

If you encounter an issue not listed here:

1. Check browser console for error messages
2. Check terminal for build errors
3. Try the "nuclear clean" command above
4. Search for the error message in the project documentation
5. Check if the issue is related to browser caching

---

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Run tests
npm test

# Clear all caches
rm -rf node_modules/.vite dist .vite && npm cache clean --force
```
