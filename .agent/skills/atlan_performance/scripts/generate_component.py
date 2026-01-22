#!/usr/bin/env python3
"""
Atlan Performance - React Component Generator
Scaffolds a new React component following Atlan brand guidelines.

Usage:
    python generate_component.py <ComponentName>
    python generate_component.py Button
    python generate_component.py --variant=form ContactForm
    
Options:
    --variant=basic     Basic component (default)
    --variant=form      Form component with validation
    --variant=card      Glassmorphism card component
    --variant=layout    Layout/container component
"""

import os
import sys
import argparse
from pathlib import Path
from datetime import datetime

# Component Templates
BASIC_COMPONENT = '''import React from 'react';
import {{ useTranslation }} from 'react-i18next';
import styles from './{name}.module.css';

/**
 * {name} Component
 * 
 * @description [Add component description]
 * @created {date}
 */
const {name} = ({{ className = '', ...props }}) => {{
  const {{ t }} = useTranslation();

  return (
    <div className={{`${{styles.container}} ${{className}`}} {{...props}}>
      {{/* Component content */}}
    </div>
  );
}};

export default {name};
'''

FORM_COMPONENT = '''import React, {{ useState }} from 'react';
import {{ useTranslation }} from 'react-i18next';
import styles from './{name}.module.css';

/**
 * {name} Component
 * Form component with validation following Atlan accessibility standards.
 * 
 * @created {date}
 */
const {name} = ({{ onSubmit, className = '' }}) => {{
  const {{ t }} = useTranslation();
  const [formData, setFormData] = useState({{}});
  const [errors, setErrors] = useState({{}});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {{
    switch (name) {{
      case 'email':
        return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value) 
          ? '' 
          : t('form.validation.emailInvalid');
      case 'phone':
        return /^[+]?[\\d\\s-]{{8,}}$/.test(value) 
          ? '' 
          : t('form.validation.phoneInvalid');
      default:
        return value.trim() ? '' : t('form.validation.required');
    }}
  }};

  const handleChange = (e) => {{
    const {{ name, value }} = e.target;
    setFormData(prev => ({{ ...prev, [name]: value }}));
  }};

  const handleBlur = (e) => {{
    const {{ name, value }} = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({{ ...prev, [name]: error }}));
  }};

  const handleSubmit = async (e) => {{
    e.preventDefault();
    setIsSubmitting(true);
    
    try {{
      await onSubmit?.(formData);
    }} catch (error) {{
      console.error('Form submission error:', error);
    }} finally {{
      setIsSubmitting(false);
    }}
  }};

  return (
    <form 
      className={{`${{styles.form}} ${{className}`}}
      onSubmit={{handleSubmit}}
      noValidate
    >
      <div className={{styles.formGroup}}>
        <label htmlFor="{name_lower}-email">
          {{t('form.email')}}
        </label>
        <input
          type="email"
          id="{name_lower}-email"
          name="email"
          value={{formData.email || ''}}
          onChange={{handleChange}}
          onBlur={{handleBlur}}
          aria-describedby={{errors.email ? '{name_lower}-email-error' : undefined}}
          aria-invalid={{errors.email ? 'true' : 'false'}}
          className={{errors.email ? styles.inputError : ''}}
        />
        {{errors.email && (
          <span 
            id="{name_lower}-email-error" 
            className={{styles.errorMessage}}
            role="alert"
          >
            {{errors.email}}
          </span>
        )}}
      </div>

      <button 
        type="submit" 
        className={{styles.submitButton}}
        disabled={{isSubmitting}}
      >
        {{isSubmitting ? t('form.submitting') : t('form.submit')}}
      </button>
    </form>
  );
}};

export default {name};
'''

CARD_COMPONENT = '''import React from 'react';
import {{ useTranslation }} from 'react-i18next';
import styles from './{name}.module.css';

/**
 * {name} Component
 * Glassmorphism card following Atlan "Liquid Precision" design.
 * 
 * @created {date}
 */
const {name} = ({{ 
  title,
  children,
  variant = 'default', // 'default' | 'subtle' | 'accent'
  className = '',
  ...props 
}}) => {{
  const {{ t }} = useTranslation();

  const variantClass = {{
    default: styles.glass,
    subtle: styles.glassSubtle,
    accent: styles.glassAccent,
  }}[variant];

  return (
    <div 
      className={{`${{styles.card}} ${{variantClass}} ${{className}`}}
      {{...props}}
    >
      {{title && <h3 className={{styles.title}}>{{title}}</h3>}}
      <div className={{styles.content}}>
        {{children}}
      </div>
    </div>
  );
}};

export default {name};
'''

LAYOUT_COMPONENT = '''import React from 'react';
import styles from './{name}.module.css';

/**
 * {name} Component
 * Layout container following Atlan responsive breakpoints.
 * 
 * @created {date}
 */
const {name} = ({{ 
  children,
  maxWidth = 'default', // 'narrow' | 'default' | 'wide' | 'full'
  padding = true,
  className = '',
  as: Component = 'div',
  ...props 
}}) => {{
  const widthClass = {{
    narrow: styles.narrow,
    default: styles.default,
    wide: styles.wide,
    full: styles.full,
  }}[maxWidth];

  return (
    <Component 
      className={{`
        ${{styles.container}} 
        ${{widthClass}} 
        ${{padding ? styles.padded : ''}}
        ${{className}}
      `}}
      {{...props}}
    >
      {{children}}
    </Component>
  );
}};

export default {name};
'''

# CSS Templates
BASIC_CSS = '''/* {name} Component Styles */
/* Atlan "Liquid Precision" Design System */

.container {{
  /* Base styles */
}}
'''

FORM_CSS = '''/* {name} Form Component Styles */
/* Atlan "Liquid Precision" Design System */

.form {{
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}}

.formGroup {{
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}}

.formGroup label {{
  font-family: var(--font-body);
  font-weight: var(--weight-bold);
  color: var(--color-foam);
  font-size: var(--size-small);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}}

.formGroup input,
.formGroup textarea,
.formGroup select {{
  min-height: var(--touch-target-min);
  padding: var(--space-sm);
  font-family: var(--font-body);
  font-size: var(--size-body);
  color: var(--color-foam);
  background-color: rgba(11, 42, 60, 0.5);
  border: 1px solid var(--color-tide-teal);
  border-radius: var(--radius-md);
  transition: var(--transition-snap);
}}

.formGroup input:focus,
.formGroup textarea:focus,
.formGroup select:focus {{
  outline: none;
  border-color: var(--color-coral-spark);
  box-shadow: 0 0 0 3px rgba(255, 106, 61, 0.2);
}}

.inputError {{
  border-color: var(--color-coral-spark) !important;
}}

.errorMessage {{
  color: var(--color-coral-spark);
  font-size: var(--size-small);
  font-family: var(--font-body);
}}

.submitButton {{
  min-height: var(--touch-target-min);
  padding: var(--space-sm) var(--space-lg);
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  font-size: var(--size-body);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-white);
  background-color: var(--color-coral-spark);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: var(--transition-hover);
}}

.submitButton:hover:not(:disabled) {{
  background-color: var(--color-coral-dark);
  transform: translateY(-2px);
}}

.submitButton:disabled {{
  opacity: 0.6;
  cursor: not-allowed;
}}

.submitButton:focus-visible {{
  outline: 3px solid var(--color-coral-spark);
  outline-offset: 2px;
}}
'''

CARD_CSS = '''/* {name} Card Component Styles */
/* Atlan "Liquid Precision" Design System - Glassmorphism */

.card {{
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  transition: var(--transition-liquid);
}}

.card:hover {{
  transform: translateY(-4px);
}}

/* Glassmorphism Variants */
.glass {{
  background: rgba(11, 42, 60, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(14, 138, 154, 0.3);
  box-shadow: var(--shadow-dark-md);
}}

.glassSubtle {{
  background: rgba(11, 42, 60, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(14, 138, 154, 0.15);
}}

.glassAccent {{
  background: rgba(14, 138, 154, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(14, 138, 154, 0.4);
  box-shadow: 
    var(--shadow-dark-md),
    inset 0 1px 1px rgba(255, 255, 255, 0.05);
}}

.title {{
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  font-size: var(--size-h3);
  color: var(--color-foam);
  margin-bottom: var(--space-md);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-tight);
}}

.content {{
  font-family: var(--font-body);
  color: var(--color-foam);
  line-height: var(--line-height-normal);
}}
'''

LAYOUT_CSS = '''/* {name} Layout Component Styles */
/* Atlan "Liquid Precision" Design System */

.container {{
  width: 100%;
  margin: 0 auto;
}}

.padded {{
  padding-left: var(--space-md);
  padding-right: var(--space-md);
}}

/* Width variants */
.narrow {{
  max-width: 768px;
}}

.default {{
  max-width: 1024px;
}}

.wide {{
  max-width: 1280px;
}}

.full {{
  max-width: 100%;
}}

/* Responsive padding */
@media (min-width: 768px) {{
  .padded {{
    padding-left: var(--space-lg);
    padding-right: var(--space-lg);
  }}
}}

@media (min-width: 1024px) {{
  .padded {{
    padding-left: var(--space-xl);
    padding-right: var(--space-xl);
  }}
}}
'''

INDEX_TEMPLATE = '''export {{ default }} from './{name}';
'''


def generate_component(name: str, variant: str = 'basic', output_dir: str = 'src/components'):
    """Generate a new Atlan-branded React component."""
    
    # Select templates based on variant
    templates = {
        'basic': (BASIC_COMPONENT, BASIC_CSS),
        'form': (FORM_COMPONENT, FORM_CSS),
        'card': (CARD_COMPONENT, CARD_CSS),
        'layout': (LAYOUT_COMPONENT, LAYOUT_CSS),
    }
    
    if variant not in templates:
        print(f"❌ Unknown variant: {variant}")
        print(f"   Available: {', '.join(templates.keys())}")
        sys.exit(1)
    
    jsx_template, css_template = templates[variant]
    
    # Create component directory
    component_dir = Path(output_dir) / name
    component_dir.mkdir(parents=True, exist_ok=True)
    
    # Template variables
    date = datetime.now().strftime('%Y-%m-%d')
    vars = {
        'name': name,
        'name_lower': name.lower(),
        'date': date,
    }
    
    # Create JSX file
    jsx_path = component_dir / f"{name}.jsx"
    jsx_content = jsx_template.format(**vars)
    jsx_path.write_text(jsx_content)
    print(f"✅ Created: {jsx_path}")
    
    # Create CSS module
    css_path = component_dir / f"{name}.module.css"
    css_content = css_template.format(**vars)
    css_path.write_text(css_content)
    print(f"✅ Created: {css_path}")
    
    # Create index.js for clean imports
    index_path = component_dir / "index.js"
    index_path.write_text(INDEX_TEMPLATE.format(name=name))
    print(f"✅ Created: {index_path}")
    
    print(f"\n🎉 Component '{name}' created successfully!")
    print(f"   Import with: import {name} from '@/components/{name}';")


def main():
    parser = argparse.ArgumentParser(
        description='Generate Atlan-branded React components'
    )
    parser.add_argument(
        'name',
        help='Component name (PascalCase)'
    )
    parser.add_argument(
        '--variant',
        choices=['basic', 'form', 'card', 'layout'],
        default='basic',
        help='Component variant (default: basic)'
    )
    parser.add_argument(
        '--output',
        default='src/components',
        help='Output directory (default: src/components)'
    )
    
    args = parser.parse_args()
    
    # Validate component name (PascalCase)
    if not args.name[0].isupper():
        print(f"❌ Component name should be PascalCase: {args.name} → {args.name.capitalize()}")
        sys.exit(1)
    
    generate_component(args.name, args.variant, args.output)


if __name__ == "__main__":
    main()
