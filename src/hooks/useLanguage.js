import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { useAnalytics } from './useAnalytics';

export const useLanguage = () => {
    const { i18n } = useTranslation();
    const { trackEvent } = useAnalytics();

    useEffect(() => {
        // Initialize from cookie or browser language
        const savedLang = Cookies.get('atlan_lang');
        if (savedLang) {
            i18n.changeLanguage(savedLang);
        }
    }, [i18n]);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        Cookies.set('atlan_lang', lang, { expires: 365, sameSite: 'strict', secure: true });

        // Track language change
        trackEvent('language_change', {
            language: lang,
        });
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        changeLanguage(newLang);
    };

    return {
        language: i18n.language,
        changeLanguage,
        toggleLanguage,
        t: i18n.t
    };
};
