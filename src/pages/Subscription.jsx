import React from 'react';
import { useLanguage } from '@hooks/useLanguage';
import { usePageTitle } from '@hooks/usePageTitle';
import CourseSubscriptionForm from '@components/forms/CourseSubscriptionForm';
import Card from '@components/ui/Card';

const Subscription = () => {
    const { t } = useLanguage();
    usePageTitle('Subscription');

    return (
        <div className="container-atlan py-12 md:py-20 animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl text-white font-heading font-bold mb-6">
                    {t('subscription.title', 'Join the Team')}
                </h1>
                <p className="text-foam/70 max-w-2xl mx-auto text-lg">
                    {t('subscription.subtitle', 'Start your journey with Atlan Performance today.')}
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                <Card className="p-8 md:p-10 border-tide-teal/30 relative overflow-hidden">
                    {/* Decorator */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-tide-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <CourseSubscriptionForm />
                </Card>
            </div>
        </div>
    );
};

export default Subscription;
