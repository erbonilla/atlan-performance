import React, { useEffect } from 'react';
import Hero from '@components/home/Hero';
import USPGrid from '@components/home/USPGrid';
import TestimonialCarousel from '@components/home/TestimonialCarousel';
import Newsletter from '@components/home/Newsletter';
import { useAnalytics } from '@hooks/useAnalytics';
import { usePageTitle } from '@hooks/usePageTitle';

const Home = () => {
    const { trackEvent } = useAnalytics();
    usePageTitle('Home');

    useEffect(() => {
        trackEvent('page_view', { page: 'home' });
    }, []);

    return (
        <>
            <Hero />
            <USPGrid />
            <TestimonialCarousel />
            <Newsletter />
        </>
    );
};

export default Home;
