import React, { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';
import Cookies from 'js-cookie';

const THEME_COOKIE = 'atlan_theme';
const ThemeContext = createContext(null);

// Resolved during the first render so the apply-effect never writes a default
// over a stored preference.
const readStoredTheme = () => {
    if (typeof window === 'undefined') return 'dark';

    const saved = Cookies.get(THEME_COOKIE);
    if (saved === 'light' || saved === 'dark') return saved;

    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(readStoredTheme);

    useLayoutEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        root.style.colorScheme = theme;

        Cookies.set(THEME_COOKIE, theme, {
            expires: 365,
            sameSite: 'strict',
            secure: window.location.protocol === 'https:',
        });
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }, []);

    const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used inside <ThemeProvider>');
    }
    return context;
};
