#!/usr/bin/env python3
"""
Atlan Performance - Brand Compliance Validator
Validates CSS and JSX files against Atlan brand guidelines.

Usage:
    python validate_brand.py <path_to_file_or_directory>
    python validate_brand.py src/components/Button
    python validate_brand.py src/styles/globals.css
"""

import os
import sys
import re
from pathlib import Path
from typing import List, Dict, Tuple

# Atlan Brand Color Palette (LOCKED)
BRAND_COLORS = {
    'abyss-navy': '#0B2A3C',
    'tide-teal': '#0E8A9A',
    'coral-spark': '#FF6A3D',
    'foam': '#ECF7F8',
    'coral-dark': '#E0552D',
    'teal-dark': '#0A6B78',
    'abyss-light': '#0F3A50',
}

# Approved font families
APPROVED_FONTS = [
    'Outfit',
    'Montserrat', 
    'Lato',
    'Roboto Mono',
    'sans-serif',
    'monospace',
]

# CSS variable pattern
CSS_VAR_PATTERN = re.compile(r'var\(--([a-z-]+)\)')

# Hardcoded color pattern (hex)
HEX_COLOR_PATTERN = re.compile(r'#([0-9A-Fa-f]{3}){1,2}\b')

# Hardcoded string pattern in JSX
HARDCODED_TEXT_PATTERN = re.compile(r'>\s*[A-Za-zÁ-ÿ][A-Za-zÁ-ÿ\s]{3,}\s*<')


class BrandValidator:
    def __init__(self):
        self.errors: List[Dict] = []
        self.warnings: List[Dict] = []
        
    def validate_file(self, filepath: Path) -> None:
        """Validate a single file."""
        if not filepath.exists():
            self.errors.append({
                'file': str(filepath),
                'line': 0,
                'message': 'File not found'
            })
            return
            
        content = filepath.read_text(encoding='utf-8')
        lines = content.split('\n')
        
        if filepath.suffix == '.css':
            self._validate_css(filepath, lines)
        elif filepath.suffix in ['.jsx', '.js', '.tsx']:
            self._validate_jsx(filepath, lines)
            
    def _validate_css(self, filepath: Path, lines: List[str]) -> None:
        """Validate CSS file against brand guidelines."""
        for i, line in enumerate(lines, 1):
            # Check for hardcoded hex colors (should use CSS variables)
            hex_matches = HEX_COLOR_PATTERN.findall(line)
            for match in hex_matches:
                full_hex = f'#{match}' if len(match) == 3 else f'#{match}'
                # Normalize to uppercase for comparison
                normalized = full_hex.upper()
                if normalized not in [c.upper() for c in BRAND_COLORS.values()]:
                    self.warnings.append({
                        'file': str(filepath),
                        'line': i,
                        'message': f'Non-brand color detected: {full_hex}. Use CSS variables instead.'
                    })
                else:
                    self.warnings.append({
                        'file': str(filepath),
                        'line': i,
                        'message': f'Hardcoded brand color: {full_hex}. Prefer var(--color-*) for maintainability.'
                    })
                    
            # Check for Tide Teal used with small font sizes
            if 'tide-teal' in line.lower() or '#0E8A9A' in line.upper():
                # Look for font-size in nearby lines
                context_start = max(0, i - 5)
                context_end = min(len(lines), i + 5)
                context = '\n'.join(lines[context_start:context_end])
                
                if re.search(r'font-size:\s*(1[0-7]|[0-9])px', context):
                    self.errors.append({
                        'file': str(filepath),
                        'line': i,
                        'message': 'Tide Teal used with small font size (<18px). Fails WCAG AA contrast (3.8:1).'
                    })
                    
            # Check for non-approved fonts
            font_match = re.search(r'font-family:\s*([^;]+)', line)
            if font_match:
                fonts = font_match.group(1)
                for font in APPROVED_FONTS:
                    fonts = fonts.replace(font, '')
                fonts = re.sub(r'[,\s\'\"]+', '', fonts)
                if fonts and not fonts.startswith('var('):
                    self.errors.append({
                        'file': str(filepath),
                        'line': i,
                        'message': f'Non-approved font family detected. Use Outfit, Montserrat, Lato, or Roboto Mono.'
                    })
                    
    def _validate_jsx(self, filepath: Path, lines: List[str]) -> None:
        """Validate JSX file for hardcoded strings and accessibility."""
        in_jsx = False
        
        for i, line in enumerate(lines, 1):
            # Check for hardcoded text (should use i18n)
            if HARDCODED_TEXT_PATTERN.search(line):
                # Exclude common false positives
                if not any(skip in line for skip in ['className=', 'id=', 'aria-', 'data-']):
                    self.warnings.append({
                        'file': str(filepath),
                        'line': i,
                        'message': 'Possible hardcoded text detected. Use t() from react-i18next.'
                    })
                    
            # Check for localStorage usage (should use cookies)
            if 'localStorage' in line:
                self.errors.append({
                    'file': str(filepath),
                    'line': i,
                    'message': 'localStorage detected. Use cookies (js-cookie) for theme/language persistence.'
                })
                
            # Check for missing aria labels on interactive elements
            if re.search(r'<(button|a|input)[^>]*(?<!aria-label)[^>]*>', line, re.IGNORECASE):
                if 'aria-label' not in line and 'aria-labelledby' not in line:
                    # Only warn if there's no visible text content
                    if re.search(r'<(button|a)[^>]*>\s*<', line):
                        self.warnings.append({
                            'file': str(filepath),
                            'line': i,
                            'message': 'Interactive element may need aria-label for accessibility.'
                        })
                        
            # Check for images without alt text
            if '<img' in line and 'alt=' not in line:
                self.errors.append({
                    'file': str(filepath),
                    'line': i,
                    'message': 'Image missing alt attribute. Required for WCAG 2.2 AA.'
                })
                
    def validate_directory(self, dirpath: Path) -> None:
        """Recursively validate all files in a directory."""
        for filepath in dirpath.rglob('*'):
            if filepath.suffix in ['.css', '.jsx', '.js', '.tsx']:
                self.validate_file(filepath)
                
    def report(self) -> Tuple[int, int]:
        """Print validation report and return counts."""
        print("\n" + "=" * 60)
        print("ATLAN BRAND COMPLIANCE REPORT")
        print("=" * 60)
        
        if self.errors:
            print(f"\n❌ ERRORS ({len(self.errors)}):")
            print("-" * 40)
            for err in self.errors:
                print(f"  {err['file']}:{err['line']}")
                print(f"    → {err['message']}\n")
                
        if self.warnings:
            print(f"\n⚠️  WARNINGS ({len(self.warnings)}):")
            print("-" * 40)
            for warn in self.warnings:
                print(f"  {warn['file']}:{warn['line']}")
                print(f"    → {warn['message']}\n")
                
        if not self.errors and not self.warnings:
            print("\n✅ All files pass brand compliance checks!")
            
        print("=" * 60)
        print(f"Summary: {len(self.errors)} errors, {len(self.warnings)} warnings")
        print("=" * 60 + "\n")
        
        return len(self.errors), len(self.warnings)


def main():
    if len(sys.argv) < 2:
        print("Usage: python validate_brand.py <path>")
        print("  path: File or directory to validate")
        sys.exit(1)
        
    target = Path(sys.argv[1])
    validator = BrandValidator()
    
    if target.is_file():
        validator.validate_file(target)
    elif target.is_dir():
        validator.validate_directory(target)
    else:
        print(f"Error: {target} is not a valid file or directory")
        sys.exit(1)
        
    errors, warnings = validator.report()
    
    # Exit with error code if there are errors
    sys.exit(1 if errors > 0 else 0)


if __name__ == "__main__":
    main()
