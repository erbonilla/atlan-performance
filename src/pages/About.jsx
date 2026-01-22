import React from 'react';
import { useLanguage } from '@hooks/useLanguage';
import { NavLink } from 'react-router-dom';
import Card from '@components/ui/Card';
import Button from '@components/ui/Button';
import { Certificate, Ruler, Medal, ClockCounterClockwise, Waves, SwimmingPool, TrendUp, Strategy, Graph, ChartLineUp } from '@phosphor-icons/react';
import { useAnalytics } from '@hooks/useAnalytics';
import { usePageTitle } from '@hooks/usePageTitle';

const About = () => {
    const { t } = useLanguage();
    useAnalytics();
    usePageTitle('About Us');

    return (
        <div className="container-atlan py-12 md:py-20">
            {/* Header Section - All in one horizontal line */}
            <div className="mb-20 animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
                    {/* Left Column: Name + Bio Text */}
                    <div className="animate-slide-in-left space-y-6 lg:order-first order-last">
                        {/* Eyebrow */}
                        <p className="text-sm uppercase tracking-wider text-tide-teal font-bold mb-2">
                            {t('about.eyebrow', 'Head Coach & Founder')}
                        </p>

                        {/* Name */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-heading font-bold mb-6">
                            {t('about.name', 'Edgar Bonilla')}
                        </h1>

                        {/* Bio Paragraphs */}
                        <p className="text-base md:text-lg text-foam/90 leading-relaxed">
                            {t('about.bio.paragraph1', 'My journey started in the water, but coaching became my obsession because of one question: ')}
                            <span className="text-tide-teal font-semibold"> {t('about.bio.why', 'why')}</span>
                            {t('about.bio.paragraph1_cont', ' do some athletes improve while others stall?')}
                        </p>

                        <p className="text-base md:text-lg text-foam/90 leading-relaxed">
                            {t('about.bio.paragraph2', 'At Atlan, we don\'t rely on "magic formulas." We rely on ')}
                            <span className="text-tide-teal font-semibold">{t('about.bio.smartConsistency', 'smart consistency')}</span>
                            {t('about.bio.paragraph2_cont', ', clear biomechanics, and habits you can actually sustain.')}
                        </p>

                        <p className="text-base md:text-lg text-foam/90 leading-relaxed">
                            {t('about.bio.paragraph3', 'My goal is to help you unlock your potential —as an athlete and as a person— with a plan built around your real life.')}
                        </p>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative animate-slide-in-right">
                        <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-2xl overflow-hidden shadow-glow-teal border border-white/10">
                            <img
                                src="/assets/images/about/profile_headshot_atlan.png"
                                alt="Coach Edgar Bonilla"
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-abyss-navy/80 via-transparent to-transparent"></div>
                        </div>

                        {/* Floating Quote */}
                        <Card className="absolute -bottom-6 left-1/2 -translate-x-1/2 max-w-sm p-6 hidden md:block border-l-4 border-l-coral-spark animate-fade-in-up delay-500">
                            <p className="italic text-foam/90 text-sm text-center">
                                "{t('about.quote', 'Train smart. Move with purpose. Progress follows.')}"
                            </p>
                        </Card>
                    </div>
                </div>

                {/* Credentials Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up delay-200">
                    <Card variant="subtle" className="p-4 flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                        <Certificate size={32} className="text-tide-teal flex-shrink-0" />
                        <span className="text-sm text-foam font-semibold leading-tight">
                            {t('about.credentials.swimming_coach', 'International Certified Swimming Coach')}
                        </span>
                    </Card>
                    <Card variant="subtle" className="p-4 flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                        <Certificate size={32} className="text-tide-teal flex-shrink-0" />
                        <span className="text-sm text-foam font-semibold leading-tight">
                            {t('about.credentials.ironman', 'International Ironman Certified Coach — Triathlon')}
                        </span>
                    </Card>
                    <Card variant="subtle" className="p-4 flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                        <Strategy size={32} className="text-tide-teal flex-shrink-0" />
                        <span className="text-sm text-foam font-semibold leading-tight">
                            {t('about.credentials.biomechanics', 'Swimming Biomechanics Specialist')}
                        </span>
                    </Card>
                    <Card variant="subtle" className="p-4 flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                        <Medal size={32} className="text-tide-teal flex-shrink-0" />
                        <span className="text-sm text-foam font-semibold leading-tight">
                            <span className="text-coral-spark font-bold">{t('about.credentials.years', '25+')}</span>
                            {' '}
                            {t('about.credentials.experience', 'Years Coaching Experience')}
                        </span>
                    </Card>
                </div>
            </div>

            {/* Highlight Cards Section - 3 cards in a row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up delay-200">
                {/* Philosophy Card */}
                <Card className="p-6 border-t-2 border-t-tide-teal/50 hover:shadow-glow-teal transition-all duration-500 flex flex-col min-h-[320px]">
                    <Waves size={32} className="text-tide-teal mb-4" />
                    <h3 className="text-xl md:text-2xl text-foam font-heading font-bold mb-3">
                        {t('about.highlights.philosophy.title', 'Philosophy — Liquid Precision')}
                    </h3>
                    <p className="text-sm md:text-base text-foam/85 leading-relaxed mb-4">
                        {t('about.highlights.philosophy.oneliner', 'Train smart, not more. Every session has a clear purpose.')}
                    </p>
                    <ul className="text-sm text-foam/75 leading-relaxed space-y-2">
                        <li>• {t('about.highlights.philosophy.bullet1', 'Biomechanics-first technique cues')}</li>
                        <li>• {t('about.highlights.philosophy.bullet2', 'Sustainable consistency (no burnout)')}</li>
                    </ul>
                </Card>

                {/* Experience Card */}
                <Card className="p-6 border-t-2 border-t-tide-teal/50 hover:shadow-glow-teal transition-all duration-500 flex flex-col min-h-[320px]">
                    <Graph size={32} className="text-tide-teal mb-4" />
                    <h3 className="text-xl md:text-2xl text-foam font-heading font-bold mb-3">
                        {t('about.highlights.experience.title', 'Experience — Built in the Water')}
                    </h3>
                    <p className="text-sm md:text-base text-foam/85 leading-relaxed mb-4">
                        {t('about.highlights.experience.oneliner', '15+ years coaching • 25+ years in the sport.')}
                    </p>
                    <ul className="text-sm text-foam/75 leading-relaxed space-y-2">
                        <li>• {t('about.highlights.experience.bullet1', 'Progression, recovery, and habits that stick')}</li>
                        <li>• {t('about.highlights.experience.bullet2', 'Race-ready planning across swim + triathlon')}</li>
                    </ul>
                </Card>

                {/* Mission Card */}
                <Card className="p-6 border-t-2 border-t-tide-teal/50 hover:shadow-glow-teal transition-all duration-500 flex flex-col min-h-[320px]">
                    <ChartLineUp size={32} className="text-tide-teal mb-4" />
                    <h3 className="text-xl md:text-2xl text-foam font-heading font-bold mb-3">
                        {t('about.highlights.mission.title', 'Mission — Unlock Your Potential')}
                    </h3>
                    <p className="text-sm md:text-base text-foam/85 leading-relaxed mb-4">
                        {t('about.highlights.mission.oneliner', 'Long-term development, built around real life.')}
                    </p>
                    <ul className="text-sm text-foam/75 leading-relaxed space-y-2">
                        <li>• {t('about.highlights.mission.bullet1', 'Longevity, clarity, and confidence')}</li>
                        <li>• {t('about.highlights.mission.bullet2', 'A plan aligned to your physiology + goals')}</li>
                    </ul>
                </Card>
            </div>

            {/* Contact CTA */}
            <div className="mt-20 text-center animate-fade-in-up delay-300">
                <Card className="max-w-3xl mx-auto p-10 border-tide-teal/30 bg-gradient-to-br from-abyss-navy/80 to-abyss-light/30">
                    <h2 className="text-3xl text-white font-bold mb-4">
                        {t('about.contact_cta.title', 'Ready to Start?')}
                    </h2>
                    <p className="text-foam/80 mb-8 max-w-xl mx-auto">
                        {t('about.contact_cta.subtitle', 'Have questions about our programs or coaching philosophy? Get in touch with us today.')}
                    </p>
                    <div className="flex justify-center gap-4">
                        <NavLink to="/contact" className="inline-block"> {/* Ensure NavLink is imported or use plain a tag if router context is missing, but Card is used inside Router typically */}
                            <Button size="lg" className="shadow-glow-teal">
                                {t('about.contact_cta.button', 'Contact Us')}
                            </Button>
                        </NavLink>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default About;
