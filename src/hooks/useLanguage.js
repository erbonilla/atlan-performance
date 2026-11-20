import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { useAnalytics } from './useAnalytics';

const normalizeLang = (lang) => (lang || 'es').split('-')[0];

const syncDocumentLang = (lang) => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = normalizeLang(lang);
};

export const useLanguage = () => {
    const { i18n } = useTranslation();
    const { trackEvent } = useAnalytics();

    useEffect(() => {
        const savedLang = Cookies.get('atlan_lang');
        if (savedLang) {
            i18n.changeLanguage(savedLang);
            syncDocumentLang(savedLang);
        } else {
            syncDocumentLang(i18n.language);
        }
    }, [i18n]);

    useEffect(() => {
        syncDocumentLang(i18n.language);
    }, [i18n.language]);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        Cookies.set('atlan_lang', lang, { expires: 365, sameSite: 'strict', secure: true });
        syncDocumentLang(lang);

        trackEvent('language_change', {
            language: lang,
        });
    };

    const toggleLanguage = () => {
        const current = normalizeLang(i18n.language);
        const newLang = current === 'es' ? 'en' : 'es';
        changeLanguage(newLang);
    };

    return {
        language: normalizeLang(i18n.language),
        changeLanguage,
        toggleLanguage,
        t: i18n.t
    };
};
