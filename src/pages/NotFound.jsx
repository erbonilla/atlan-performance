import React from 'react';
import { useLanguage } from '@hooks/useLanguage';
import { useAnalytics } from '@hooks/useAnalytics';
import { usePageTitle } from '@hooks/usePageTitle';
import Button from '@components/ui/Button';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    const { t } = useLanguage();
    useAnalytics();
    usePageTitle('404 - Not Found');

    return (
        <div className="container-atlan py-32 text-center animate-fade-in">
            <h1 className="text-8xl font-heading font-bold text-coral-spark mb-4">404</h1>
            <h2 className="text-2xl text-white font-bold mb-8">
                {t('common.not_found_title', 'Page Not Found')}
            </h2>
            <p className="text-foam/70 mb-12 max-w-md mx-auto">
                {t('common.not_found_desc', "The page you are looking for doesn't exist or has been moved.")}
            </p>
            <NavLink to="/">
                <Button variant="primary">
                    {t('common.back_home', 'Back to Home')}
                </Button>
            </NavLink>
        </div>
    );
};

export default NotFound;
