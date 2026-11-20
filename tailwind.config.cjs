const { heroui } = require('@heroui/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // Atlan Performance Brand Colors
                'abyss-navy': '#0B2A3C',
                'abyss-light': '#0F3A50',
                'tide-teal': '#0E8A9A',
                'teal-dark': '#0A6B78',
                // AA-safe roles split out of Tide Teal: solid fill vs. text on dark
                'teal-fill': '#0B7382',
                'teal-bright': '#3BAFC0',
                'coral-spark': '#FF6A3D',
                'coral-dark': '#E0552D',
                // Primary CTA hover brightens, because the label is navy ink
                'coral-glow': '#FF8358',
                'foam': '#ECF7F8',
                'foam-secondary': '#C5D9DC',
                'foam-muted': '#9BB5BA',

                // Light Mode — ocean-tinted neutrals (WCAG AA+)
                'light-bg-primary': '#F4F9FA',
                'light-bg-secondary': '#E8F1F3',
                'light-bg-tertiary': '#D5E4E8',
                'light-text-primary': '#0B2A3C',
                'light-text-secondary': '#1A4558',
                'light-text-tertiary': '#2F5F72',
                'light-text-muted': '#3D6373',
                'light-border': '#B7D0D6',
                'light-border-strong': '#7FA3AE',

                // Coral / teal optimized for light mode
                'coral-light-optimized': '#C2410C',
                'teal-light-optimized': '#0F766E',
            },
            fontFamily: {
                logo: ['Outfit', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
                body: ['Lato', 'sans-serif'],
                data: ['Roboto Mono', 'monospace'],
            },
            fontSize: {
                display: ['clamp(2.25rem, 5.5vw, 3.5rem)', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '800' }],
                h1: ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '700' }],
                h2: ['clamp(1.5rem, 4vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
                h3: ['clamp(1.25rem, 3vw, 1.5rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
                label: ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.06em', fontWeight: '600' }],
                meta: ['0.75rem', { lineHeight: '1.45', letterSpacing: '0.02em' }],
            },
            maxWidth: {
                prose: '65ch',
            },
            letterSpacing: {
                display: '-0.02em',
                heading: '-0.015em',
                label: '0.06em',
            },
            backdropBlur: {
                'glass': '16px',
                'glass-subtle': '12px',
                'glass-strong': '24px',
            },
            transitionTimingFunction: {
                'liquid': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                'snap': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
            transitionDuration: {
                'liquid': '600ms',
                'snap': '200ms',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-in-left': {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'slide-in-right': {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
            animation: {
                'fade-in': 'fade-in 0.6s ease-out forwards',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
                'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
            },
            animationDelay: {
                '200': '200ms',
                '400': '400ms',
                '500': '500ms',
                '600': '600ms',
            },
            boxShadow: {
                glass: '0 8px 32px rgba(0, 0, 0, 0.3)',
                'glow-teal': '0 8px 30px rgba(14, 138, 154, 0.35), 0 0 48px rgba(14, 138, 154, 0.18)',
                'glow-coral': '0 8px 30px rgba(255, 106, 61, 0.35), 0 0 48px rgba(255, 106, 61, 0.18)',
                'glow-white': '0 8px 30px rgba(236, 247, 248, 0.25), 0 0 48px rgba(236, 247, 248, 0.12)',
            },
        },
    },
    darkMode: 'class',
    plugins: [
        heroui({
            themes: {
                dark: {
                    colors: {
                        background: '#0B2A3C',
                        foreground: '#ECF7F8',
                        primary: {
                            DEFAULT: '#FF6A3D',
                            foreground: '#0B2A3C',
                        },
                        secondary: {
                            DEFAULT: '#0B7382',
                            foreground: '#FFFFFF',
                        },
                    },
                },
                light: {
                    colors: {
                        background: '#F4F9FA',
                        foreground: '#0B2A3C',
                        primary: {
                            DEFAULT: '#C2410C',
                            foreground: '#FFFFFF',
                        },
                        secondary: {
                            DEFAULT: '#0F766E',
                            foreground: '#FFFFFF',
                        },
                    },
                },
            },
        }),
        // Must be registered AFTER heroui(): HeroUI defines its own `light` and
        // `dark` variants as self-selectors (&.light), which silently overwrite
        // these. The theme class lives on <html>, so both must match an ancestor.
        function ({ addVariant }) {
            addVariant('light', '.light &');
            addVariant('dark', '.dark &');
        },
    ],
};
