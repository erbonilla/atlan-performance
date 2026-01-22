import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from '../locales/es.json';
import en from '../locales/en.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            es: { translation: es },
            en: { translation: en },
        },
        lng: 'es', // Default language
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false, // React already safeguards against XSS
        },
        react: {
            useSuspense: false, // Avoid suspense for simple json loading
        },
    });

export default i18n;
