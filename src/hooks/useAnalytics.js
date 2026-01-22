import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID;

export const useAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        if (GA_MEASUREMENT_ID) {
            ReactGA.initialize(GA_MEASUREMENT_ID);
        }
    }, []);

    useEffect(() => {
        if (GA_MEASUREMENT_ID) {
            ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
        }
    }, [location]);

    const trackEvent = (category, action, label) => {
        if (GA_MEASUREMENT_ID) {
            ReactGA.event({
                category,
                action,
                label,
            });
        } else {
            console.log('Analytics Event (Dev):', { category, action, label });
        }
    };

    return { trackEvent };
};
