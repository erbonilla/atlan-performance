# Atlan Performance | Technical Setup Guide

**Version:** 1.0  
**Date:** December 2025  
**Purpose:** Step-by-step guide to set up the development environment and project structure

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Project Initialization](#2-project-initialization)
3. [Folder Structure](#3-folder-structure)
4. [Configuration Files](#4-configuration-files)
5. [Design System Setup](#5-design-system-setup)
6. [PWA Configuration](#6-pwa-configuration)
7. [Development Workflow](#7-development-workflow)
8. [Deployment](#8-deployment)

---

## 1. Prerequisites

### 1.1 Required Software

| Software | Version | Purpose |
|----------|---------|---------|
| **Node.js** | 18.x or 20.x LTS | JavaScript runtime |
| **npm** | 9.x+ (comes with Node) | Package manager |
| **Git** | 2.x+ | Version control |
| **VS Code** | Latest | Recommended IDE |

### 1.2 Verify Installation

```bash
# Check Node.js version
node --version
# Expected: v18.x.x or v20.x.x

# Check npm version
npm --version
# Expected: 9.x.x or 10.x.x

# Check Git version
git --version
# Expected: git version 2.x.x
```

### 1.3 VS Code Extensions (Recommended)

| Extension | Purpose |
|-----------|---------|
| **ES7+ React Snippets** | React code snippets |
| **ESLint** | Code linting |
| **Prettier** | Code formatting |
| **CSS Peek** | CSS navigation |
| **Auto Rename Tag** | HTML/JSX tag renaming |
| **Error Lens** | Inline error display |
| **GitLens** | Git integration |

---

## 2. Project Initialization

### 2.1 Create Project with Vite

```bash
# Create new Vite project with React template
npm create vite@latest atlan-performance -- --template react

# Navigate to project
cd atlan-performance

# Install dependencies
npm install
```

### 2.2 Install Project Dependencies

```bash
# Core dependencies
npm install react-router-dom@6 react-i18next i18next js-cookie react-ga4 @phosphor-icons/react @supabase/supabase-js

# Development dependencies
npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks prettier vitest @testing-library/react @testing-library/jest-dom jsdom @vitejs/plugin-react
```

### 2.3 Initialize Git Repository

```bash
# Initialize git
git init

# Create initial commit
git add .
git commit -m "chore: initial project setup with Vite + React"

# Create develop branch
git checkout -b develop

# Set up remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/atlan-performance.git
```

---

## 3. Folder Structure

### 3.1 Create Directory Structure

```bash
# Create all directories
mkdir -p src/{components/{common,layout,home,forms,pages},hooks,utils,styles,locales,assets/{images,icons}}
mkdir -p public/icons
mkdir -p docs

# Create placeholder files
touch src/components/common/.gitkeep
touch src/components/layout/.gitkeep
touch src/components/home/.gitkeep
touch src/components/forms/.gitkeep
touch src/components/pages/.gitkeep
touch src/hooks/.gitkeep
touch src/utils/.gitkeep
touch src/styles/.gitkeep
touch src/locales/.gitkeep
touch src/assets/images/.gitkeep
touch src/assets/icons/.gitkeep
```

### 3.2 Final Structure

```
atlan-performance/
├── public/
│   ├── favicon.ico
│   ├── manifest.json
│   ├── sw.js
│   ├── offline.html
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Icon/
│   │   │   └── index.js
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── Layout/
│   │   │   └── index.js
│   │   ├── home/
│   │   │   ├── Hero/
│   │   │   ├── ProgramFinder/
│   │   │   ├── USPGrid/
│   │   │   ├── Testimonials/
│   │   │   ├── Newsletter/
│   │   │   └── index.js
│   │   ├── forms/
│   │   │   ├── ContactForm/
│   │   │   ├── FormField/
│   │   │   └── index.js
│   │   └── pages/
│   │       ├── Home.jsx
│   │       ├── Programs.jsx
│   │       ├── ProgramDetail.jsx
│   │       ├── Courses.jsx
│   │       ├── About.jsx
│   │       ├── Contact.jsx
│   │       ├── NotFound.jsx
│   │       └── index.js
│   │
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useLanguage.js
│   │   ├── useForm.js
│   │   ├── useAnalytics.js
│   │   └── index.js
│   │
│   ├── utils/
│   │   ├── i18n.js
│   │   ├── analytics.js
│   │   ├── validation.js
│   │   ├── constants.js
│   │   └── index.js
│   │
│   ├── styles/
│   │   ├── variables.css
│   │   ├── globals.css
│   │   ├── glass.css
│   │   ├── animations.css
│   │   └── utilities.css
│   │
│   ├── locales/
│   │   ├── es.json
│   │   └── en.json
│   │
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── docs/
│   ├── README.md
│   ├── REQUIREMENTS.md
│   ├── DESIGN.md
│   └── STYLE_GUIDE.md
│
├── package.json
├── vite.config.js
├── .eslintrc.cjs
├── .prettierrc
├── .gitignore
└── README.md
```

---

## 4. Configuration Files

### 4.1 package.json

Update your `package.json` scripts section:

```json
{
  "name": "atlan-performance",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext js,jsx --fix",
    "format": "prettier --write \"src/**/*.{js,jsx,css,json}\"",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

### 4.2 vite.config.js

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@locales': path.resolve(__dirname, './src/locales'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          i18n: ['react-i18next', 'i18next'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
```

### 4.3 .eslintrc.cjs

```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
```

### 4.4 .prettierrc

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "bracketSpacing": true,
  "jsxSingleQuote": false,
  "arrowParens": "avoid"
}
```

### 4.5 .gitignore

```gitignore
# Dependencies
node_modules
.pnp
.pnp.js

# Build
dist
dist-ssr
build
*.local

# IDE
.vscode/*
!.vscode/extensions.json
.idea
*.swp
*.swo
.DS_Store

# Testing
coverage
*.lcov

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Misc
*.pem
.cache
```

### 4.6 jsconfig.json (for VS Code path aliases)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@hooks/*": ["src/hooks/*"],
      "@utils/*": ["src/utils/*"],
      "@styles/*": ["src/styles/*"],
      "@assets/*": ["src/assets/*"],
      "@locales/*": ["src/locales/*"]
    }
  },
  "include": ["src/**/*"]
}
```

---

## 5. Design System Setup

### 5.1 CSS Variables (src/styles/variables.css)

This file contains all design tokens. See the scaffolded code for full implementation.

### 5.2 Global Styles (src/styles/globals.css)

Base styles, resets, and typography. See scaffolded code.

### 5.3 Glassmorphism (src/styles/glass.css)

Glass effect utilities. See scaffolded code.

### 5.4 Animations (src/styles/animations.css)

Keyframe animations and transition utilities. See scaffolded code.

---

## 6. PWA Configuration

### 6.1 Web App Manifest (public/manifest.json)

```json
{
  "name": "Atlan Performance",
  "short_name": "Atlan",
  "description": "Science-engineered swim & triathlon coaching in Costa Rica",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0B2A3C",
  "theme_color": "#0E8A9A",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "screenshots": [],
  "categories": ["sports", "fitness", "health"]
}
```

### 6.2 Service Worker (public/sw.js)

See scaffolded code for full implementation with caching strategies.

### 6.3 Register Service Worker

Add to `src/main.jsx`:

```javascript
// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('SW registered:', registration.scope);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}
```

### 6.4 Add Manifest to HTML (index.html)

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- PWA Meta Tags -->
    <meta name="theme-color" content="#0E8A9A" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="Atlan" />
    
    <!-- Manifest -->
    <link rel="manifest" href="/manifest.json" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/icons/icon-192.png" />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=Montserrat:wght@600;700;800&family=Lato:wght@300;400;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet" />
    
    <title>Atlan Performance | Science-Backed Coaching</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 7. Development Workflow

### 7.1 Git Branching Strategy

```
main (production)
  └── develop (integration)
        ├── feature/homepage
        ├── feature/contact-form
        ├── feature/pwa-setup
        └── fix/responsive-header
```

### 7.2 Branch Naming Convention

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/description` | `feature/hero-section` |
| Bug Fix | `fix/description` | `fix/mobile-menu-close` |
| Hotfix | `hotfix/description` | `hotfix/form-validation` |
| Chore | `chore/description` | `chore/update-dependencies` |

### 7.3 Commit Message Convention

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting (no code change)
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

**Examples:**
```bash
git commit -m "feat(hero): add hero section component"
git commit -m "fix(header): resolve mobile menu z-index issue"
git commit -m "docs: update README with setup instructions"
```

### 7.4 Development Commands

```bash
# Start development server
npm run dev

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Run tests
npm run test

# Build for production
npm run build

# Preview production build
npm run preview

### 7.5 AI Assistance

This project is equipped with a custom AI skill (`atlan-performance`) that helps generating code compliant with our design system.

- **Usage:** Mentions "Atlan" or "Liquid Precision" in your prompt to activate it.
- **Capabilities:** Generates components, pages, and ensures brand compliance.

```

---

## 8. Deployment

### 8.1 Environment Variables

Create `.env` files for different environments:

**.env.development:**
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_EMAIL_ENDPOINT=https://formspree.io/f/xxxxx
VITE_GOOGLE_MAPS_API_KEY=your_key_here
VITE_SUPABASE_URL=https://erdhekfpqseqtlwkhnfp.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**.env.production:**
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_EMAIL_ENDPOINT=https://formspree.io/f/xxxxx
VITE_GOOGLE_MAPS_API_KEY=your_key_here
VITE_SUPABASE_URL=https://erdhekfpqseqtlwkhnfp.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 8.2 Vercel Deployment

1. Connect GitHub repository to Vercel
2. Configure build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
3. Add environment variables in Vercel dashboard
4. Deploy!

### 8.3 Production Checklist

```
[ ] All environment variables set
[ ] Build succeeds without errors
[ ] Lighthouse score >90
[ ] PWA installable
[ ] Forms working
[ ] Analytics receiving events
[ ] SSL certificate active
[ ] Custom domain configured
```

---

## Quick Start Summary

```bash
# 1. Clone/create project
npm create vite@latest atlan-performance -- --template react
cd atlan-performance

# 2. Install dependencies
npm install react-router-dom@6 react-i18next i18next js-cookie react-ga4 @phosphor-icons/react

# 3. Start development
npm run dev

# 4. Open browser
# http://localhost:5173
```

---

**Next Step:** See the scaffolded project code files for complete implementations.
