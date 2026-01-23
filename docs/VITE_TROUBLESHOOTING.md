# Solución de Problemas de Vite

## Error: Chunks de Dependencias Optimizadas No Encontrados

### Problema
Cuando ves este error en la terminal:
```
The file does not exist at ".../node_modules/.vite/deps/chunk-XXXXX.js" which is in the optimize deps directory. 
The dependency might be incompatible with the dep optimizer. Try adding it to `optimizeDeps.exclude`.
```

### Causa
Este error ocurre cuando:
- El caché de Vite está corrupto o desactualizado
- Las dependencias han cambiado pero el caché no se ha actualizado
- Hay conflictos en la optimización de dependencias

### Solución Rápida

#### Opción 1: Limpiar el caché de Vite (Recomendado)
```bash
npm run clean:vite
npm run dev
```

O manualmente:
```bash
rm -rf node_modules/.vite
npm run dev
```

#### Opción 2: Usar el script combinado
```bash
npm run dev:clean
```

#### Opción 3: Limpiar todo y reconstruir
```bash
npm run clean:all
npm run dev
```

### Solución Permanente

La configuración en `vite.config.js` ya está optimizada para prevenir este problema:

```javascript
optimizeDeps: {
  include: [
    'react',
    'react-dom',
    'react-router-dom',
    '@heroui/react',
    'framer-motion',
    'i18next',
    'react-i18next',
    '@supabase/supabase-js',
    'react-ga4',
    'react-markdown',
  ],
  exclude: [],
}
```

### Si el Problema Persiste

1. **Forzar reoptimización**: Descomenta `force: true` en `vite.config.js`:
   ```javascript
   optimizeDeps: {
     force: true,  // Descomentar esta línea
     // ...
   }
   ```

2. **Excluir dependencias problemáticas**: Si una dependencia específica causa problemas, agrégala a `exclude`:
   ```javascript
   optimizeDeps: {
     exclude: ['nombre-del-paquete-problematico'],
   }
   ```

3. **Reinstalar dependencias**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Scripts Disponibles

- `npm run clean:vite` - Limpia solo el caché de Vite
- `npm run clean:all` - Limpia caché de Vite y carpeta dist
- `npm run dev:clean` - Limpia caché y ejecuta el servidor de desarrollo

### Prevención

- Ejecuta `npm run clean:vite` después de actualizar dependencias importantes
- Si cambias versiones de React o otras dependencias principales, limpia el caché
- Mantén las dependencias actualizadas regularmente
