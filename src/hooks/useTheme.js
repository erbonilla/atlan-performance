import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const useTheme = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // Check cookie first, then system preference, default to dark
        const savedTheme = Cookies.get('atlan_theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        // Apply theme to document
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);

        // Save to cookie
        Cookies.set('atlan_theme', theme, { expires: 365, sameSite: 'strict', secure: true });
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return { theme, toggleTheme };
};
