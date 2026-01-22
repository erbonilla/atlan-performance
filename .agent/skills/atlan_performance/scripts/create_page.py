#!/usr/bin/env python3
"""
Atlan Performance - Page Generator
Scaffolds a new page component with routing and SEO setup.

Usage:
    python create_page.py <PageName>
    python create_page.py Programs
    python create_page.py --route=/programas Programs
"""

import sys
import argparse
from pathlib import Path
from datetime import datetime

PAGE_TEMPLATE = '''import React from 'react';
import {{ useTranslation }} from 'react-i18next';
import {{ Helmet }} from 'react-helmet-async';
import styles from './{name}.module.css';

/**
 * {name} Page
 * 
 * @description [Add page description]
 * @route {route}
 * @created {date}
 */
const {name}Page = () => {{
  const {{ t }} = useTranslation();

  return (
    <>
      <Helmet>
        <title>{{t('pages.{name_lower}.title')}} | Atlan Performance</title>
        <meta name="description" content={{t('pages.{name_lower}.metaDescription')}} />
        <meta property="og:title" content={{`${{t('pages.{name_lower}.title')}} | Atlan Performance`}} />
        <meta property="og:description" content={{t('pages.{name_lower}.metaDescription')}} />
        <link rel="canonical" href={{`https://atlanperformance.com{route}`}} />
      </Helmet>

      <main className={{styles.page}}>
        <section className={{styles.hero}}>
          <div className={{styles.container}}>
            <h1 className={{styles.title}}>
              {{t('pages.{name_lower}.headline')}}
            </h1>
            <p className={{styles.subtitle}}>
              {{t('pages.{name_lower}.subheadline')}}
            </p>
          </div>
        </section>

        <section className={{styles.content}}>
          <div className={{styles.container}}>
            {{/* Page content */}}
          </div>
        </section>
      </main>
    </>
  );
}};

export default {name}Page;
'''

PAGE_CSS = '''/* {name} Page Styles */
/* Atlan "Liquid Precision" Design System */

.page {{
  min-height: 100vh;
  background-color: var(--color-abyss-navy);
}}

.container {{
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}}

@media (min-width: 768px) {{
  .container {{
    padding: 0 var(--space-lg);
  }}
}}

/* Hero Section */
.hero {{
  padding: var(--space-3xl) 0 var(--space-2xl);
  background: linear-gradient(
    180deg,
    var(--color-abyss-navy) 0%,
    var(--color-abyss-light) 100%
  );
}}

.title {{
  font-family: var(--font-heading);
  font-size: var(--size-h1);
  font-weight: var(--weight-extra-bold);
  color: var(--color-foam);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-tight);
  margin-bottom: var(--space-md);
  animation: fadeIn 0.6s ease-out;
}}

.subtitle {{
  font-family: var(--font-body);
  font-size: var(--size-h3);
  font-weight: var(--weight-light);
  color: var(--color-foam);
  line-height: var(--line-height-normal);
  max-width: 600px;
  animation: fadeIn 0.6s ease-out 0.2s both;
}}

/* Content Section */
.content {{
  padding: var(--space-2xl) 0;
}}

/* Animations */
@keyframes fadeIn {{
  from {{
    opacity: 0;
    transform: translateY(20px);
  }}
  to {{
    opacity: 1;
    transform: translateY(0);
  }}
}}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {{
  .title,
  .subtitle {{
    animation: none;
  }}
}}
'''

INDEX_TEMPLATE = '''export {{ default }} from './{name}Page';
'''

I18N_TEMPLATE = '''
// Add these keys to your locales/es.json and locales/en.json files:

// Spanish (es.json):
{{
  "pages": {{
    "{name_lower}": {{
      "title": "[Título de la página]",
      "headline": "[Titular principal]",
      "subheadline": "[Subtítulo descriptivo]",
      "metaDescription": "[Meta descripción para SEO - máx 160 caracteres]"
    }}
  }}
}}

// English (en.json):
{{
  "pages": {{
    "{name_lower}": {{
      "title": "[Page Title]",
      "headline": "[Main Headline]",
      "subheadline": "[Descriptive subheadline]",
      "metaDescription": "[Meta description for SEO - max 160 characters]"
    }}
  }}
}}
'''

ROUTE_TEMPLATE = '''
// Add this route to your App.jsx or router configuration:

import {name}Page from '@/pages/{name}';

// Inside your Routes:
<Route path="{route}" element={{<{name}Page />}} />

// For lazy loading (recommended):
const {name}Page = React.lazy(() => import('@/pages/{name}'));

<Route 
  path="{route}" 
  element={{
    <Suspense fallback={{<LoadingSpinner />}}>
      <{name}Page />
    </Suspense>
  }} 
/>
'''


def generate_page(name: str, route: str, output_dir: str = 'src/pages'):
    """Generate a new Atlan page component."""
    
    # Create page directory
    page_dir = Path(output_dir) / name
    page_dir.mkdir(parents=True, exist_ok=True)
    
    # Template variables
    date = datetime.now().strftime('%Y-%m-%d')
    vars = {
        'name': name,
        'name_lower': name.lower(),
        'route': route,
        'date': date,
    }
    
    # Create page component
    page_path = page_dir / f"{name}Page.jsx"
    page_path.write_text(PAGE_TEMPLATE.format(**vars))
    print(f"✅ Created: {page_path}")
    
    # Create CSS module
    css_path = page_dir / f"{name}.module.css"
    css_path.write_text(PAGE_CSS.format(**vars))
    print(f"✅ Created: {css_path}")
    
    # Create index.js
    index_path = page_dir / "index.js"
    index_path.write_text(INDEX_TEMPLATE.format(**vars))
    print(f"✅ Created: {index_path}")
    
    # Print i18n keys to add
    print("\n📝 Translation keys to add:")
    print("-" * 40)
    print(I18N_TEMPLATE.format(**vars))
    
    # Print routing instructions
    print("\n🔗 Routing setup:")
    print("-" * 40)
    print(ROUTE_TEMPLATE.format(**vars))
    
    print(f"\n🎉 Page '{name}' created successfully!")


def main():
    parser = argparse.ArgumentParser(
        description='Generate Atlan page components'
    )
    parser.add_argument(
        'name',
        help='Page name (PascalCase, e.g., Programs, About, Contact)'
    )
    parser.add_argument(
        '--route',
        help='URL route (e.g., /programs). Defaults to lowercase name.'
    )
    parser.add_argument(
        '--output',
        default='src/pages',
        help='Output directory (default: src/pages)'
    )
    
    args = parser.parse_args()
    
    # Validate page name
    if not args.name[0].isupper():
        print(f"❌ Page name should be PascalCase: {args.name} → {args.name.capitalize()}")
        sys.exit(1)
    
    # Default route
    route = args.route or f'/{args.name.lower()}'
    
    generate_page(args.name, route, args.output)


if __name__ == "__main__":
    main()
