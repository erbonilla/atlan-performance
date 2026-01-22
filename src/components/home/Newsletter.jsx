import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@hooks/useLanguage';
import { ChatCircleDots, Clock, ArrowRight } from '@phosphor-icons/react';

const Newsletter = () => {
    const { t } = useLanguage();

    return (
        <section className="section bg-abyss-navy relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-abyss-navy via-abyss-light/30 to-abyss-navy pointer-events-none"></div>

            <div className="container-atlan relative z-10">
                <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-2xl flex flex-col">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-tide-teal/20 flex items-center justify-center shrink-0">
                            <ChatCircleDots size={32} className="text-tide-teal" weight="fill" />
                        </div>
                        <h2 className="text-3xl md:text-4xl text-white font-bold font-heading">
                            {t('courses.contact_card.title', 'Contact Us')}
                        </h2>
                    </div>

                    {/* Subtitle */}
                    <p className="text-foam/60 text-left mb-6">
                        {t('courses.contact_card.subtitle', 'Questions or ready to start?')}
                    </p>

                    {/* Description */}
                    <p className="text-foam/80 text-left leading-relaxed mb-8">
                        {t('courses.contact_card.description', 'Fill out our contact form and we\'ll get back to you soon to answer your questions and help you start your journey with Atlan.')}
                    </p>

                    {/* Response Time Info */}
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10 mb-8">
                        <Clock size={20} className="text-tide-teal mt-0.5 shrink-0" />
                        <div>
                            <p className="text-white font-semibold text-sm mb-1">
                                {t('courses.contact_card.response_time', 'Response time: 24-48 hours')}
                            </p>
                            <p className="text-foam/60 text-xs">
                                {t('courses.contact_card.support_hours', 'Support hours')}
                            </p>
                        </div>
                    </div>

                    {/* Contact Button */}
                    <div className="flex justify-center">
                        <NavLink to="/contact" className="w-full max-w-sm">
                            <motion.button
                                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-coral-spark hover:bg-coral-spark/90 text-white font-bold text-base rounded-lg transition-all group"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {t('courses.contact_card.button', 'Contact Us')}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" weight="bold" />
                            </motion.button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
