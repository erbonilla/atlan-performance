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
                'coral-spark': '#FF6A3D',
                'coral-dark': '#E0552D',
                'foam': '#ECF7F8',
                
                // Light Mode Optimized Colors (WCAG AA+)
                'light-bg-primary': '#FAFAFA',
                'light-bg-secondary': '#F3F4F6',
                'light-bg-tertiary': '#E5E7EB',
                'light-text-primary': '#111827',
                'light-text-secondary': '#374151',
                'light-text-tertiary': '#4B5563',
                'light-text-muted': '#6B7280',
                'light-border': '#D1D5DB',
                'light-border-strong': '#9CA3AF',
                
                // Coral optimizado para modo claro (mayor contraste)
                'coral-light-optimized': '#EA580C',
                // Teal optimizado para modo claro
                'teal-light-optimized': '#0F766E',
            },
            fontFamily: {
                logo: ['Outfit', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
                body: ['Lato', 'sans-serif'],
                data: ['Roboto Mono', 'monospace'],
            },
            fontSize: {
                'h1': 'clamp(2rem, 5vw, 3rem)',
                'h2': 'clamp(1.5rem, 4vw, 2rem)',
                'h3': 'clamp(1.25rem, 3vw, 1.5rem)',
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
                'glow-teal': '0 0 30px rgba(14, 138, 154, 0.4), 0 0 60px rgba(14, 138, 154, 0.2)',
                'glow-coral': '0 0 30px rgba(255, 106, 61, 0.4), 0 0 60px rgba(255, 106, 61, 0.2)',
                'glow-white': '0 0 30px rgba(236, 247, 248, 0.3), 0 0 60px rgba(236, 247, 248, 0.15)',
            },
        },
    },
    darkMode: 'class',
    plugins: [
        // Plugin para habilitar la variante light:
        function({ addVariant }) {
            addVariant('light', '.light &')
        },
        heroui({
            themes: {
                dark: {
                    colors: {
                        background: '#0B2A3C',
                        foreground: '#ECF7F8',
                        primary: {
                            DEFAULT: '#FF6A3D',
                            foreground: '#ECF7F8',
                        },
                        secondary: {
                            DEFAULT: '#0E8A9A',
                            foreground: '#ECF7F8',
                        },
                    },
                },
                light: {
                    colors: {
                        background: '#FAFAFA',
                        foreground: '#111827',
                        primary: {
                            DEFAULT: '#EA580C',
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
    ],
};
