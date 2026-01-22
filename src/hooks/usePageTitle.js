import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTitle = (title) => {
    const location = useLocation();

    useEffect(() => {
        document.title = title ? `${title} | Atlan Performance` : 'Atlan Performance | Swimming & Triathlon Coaching';
    }, [location, title]);
};
