import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@hooks/useLanguage';
import Card from '@components/ui/Card';
import Button from '@components/ui/Button';
import { useAnalytics } from '@hooks/useAnalytics';
import { usePageTitle } from '@hooks/usePageTitle';
import { ChatCircleDots, Clock, ArrowRight } from '@phosphor-icons/react';

// Assets
import swimAdults from '@assets/program_swimming_adults.png';
import swimJuniors from '@assets/program_swimming_juniors.png';
import openWater from '@assets/program_open_water.png';
import running from '@assets/program_running.png';
import triathlon from '@assets/program_triathlon.png';

const Programs = () => {
    const { t } = useLanguage();
    usePageTitle('Programs');

    // Variantes de animación para el contenedor
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            }
        }
    };

    // Variantes de animación para el header
    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Variantes de animación para cada tarjeta
    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9 
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuad
            }
        }
    };

    const programs = [
        {
            id: 'swimming-adults',
            titleKey: 'programs.swimming_adults.title',
            descKey: 'programs.swimming_adults.desc',
            image: swimAdults,
            link: '/programs/swimming-adults',
        },
        {
            id: 'swimming-juniors',
            titleKey: 'programs.swimming_juniors.title',
            descKey: 'programs.swimming_juniors.desc',
            image: swimJuniors,
            link: '/programs/swimming-juniors',
        },
        {
            id: 'open-water',
            titleKey: 'programs.open_water.title',
            descKey: 'programs.open_water.desc',
            image: openWater,
            link: '/programs/open-water',
        },
        {
            id: 'running',
            titleKey: 'programs.running.title',
            descKey: 'programs.running.desc',
            image: running,
            link: '/programs/running',
        },
        {
            id: 'triathlon',
            titleKey: 'programs.triathlon.title',
            descKey: 'programs.triathlon.desc',
            image: triathlon,
            link: '/programs/triathlon',
        },
    ];

    return (
        <div className="container-atlan py-12 md:py-20">
            {/* Header con animación */}
            <motion.div 
                className="text-center mb-16"
                initial="hidden"
                animate="visible"
                variants={headerVariants}
            >
                <h1 className="text-4xl md:text-5xl text-white font-heading font-bold mb-6">
                    {t('programs.title', 'Our Programs')}
                </h1>
                <p className="text-foam/70 max-w-2xl mx-auto text-lg">
                    {t('programs.subtitle', 'Specialized coaching for every stage of your athlete journey.')}
                </p>
            </motion.div>

            {/* Grid con animación escalonada */}
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {programs.map((program) => (
                    <motion.div
                        key={program.id}
                        variants={cardVariants}
                        whileHover={{ 
                            y: -8,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <Card hover className="overflow-hidden group h-full flex flex-col">
                            {/* Image */}
                            <div className="h-64 overflow-hidden relative">
                                <motion.img
                                    src={program.image}
                                    alt={t(program.titleKey)}
                                    className={`w-full h-full object-cover ${
                                        program.id === 'triathlon' ? 'object-[center_35%]' : ''
                                    }`}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-abyss-navy/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl text-white font-bold mb-3 font-heading">
                                    {t(program.titleKey, program.id)}
                                </h3>
                                <p className="text-foam/70 mb-6 flex-grow">
                                    {t(program.descKey, "Program description placeholder...")}
                                </p>
                                <div className="flex flex-col gap-3">
                                    <NavLink to={program.link}>
                                        <Button variant="outline" className="w-full group-hover:bg-coral-spark group-hover:text-white group-hover:border-coral-spark">
                                            {t('programs.learn_more', 'Learn More')}
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}

                {/* Contact Us Card */}
                <motion.div
                    variants={cardVariants}
                    whileHover={{ 
                        y: -8,
                        transition: { duration: 0.3 }
                    }}
                >
                    <Card className="h-full flex flex-col bg-gradient-to-br from-tide-teal/10 to-coral-spark/10 border-tide-teal/30 hover:border-tide-teal/50 transition-colors">
                        <div className="p-6 flex flex-col flex-grow">
                            {/* Icon and Title */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-tide-teal/20 flex items-center justify-center">
                                    <ChatCircleDots size={24} className="text-tide-teal" weight="fill" />
                                </div>
                                <h3 className="text-2xl text-white font-bold font-heading">
                                    {t('courses.contact_card.title', 'Contact Us')}
                                </h3>
                            </div>

                            {/* Subtitle */}
                            <p className="text-foam/60 text-sm mb-4">
                                {t('courses.contact_card.subtitle', 'Questions or ready to start?')}
                            </p>

                            {/* Description */}
                            <p className="text-foam/80 text-sm leading-relaxed mb-6 flex-grow">
                                {t('courses.contact_card.description', 'Fill out our contact form and we\'ll get back to you soon to answer your questions and help you start your journey with Atlan.')}
                            </p>

                            {/* Response Time Info */}
                            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10 mb-6">
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
                            <NavLink to="/contact" className="mt-auto">
                                <motion.button
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-coral-spark hover:bg-coral-spark/90 text-white font-bold text-sm rounded-lg transition-all group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {t('courses.contact_card.button', 'Contact Us')}
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" weight="bold" />
                                </motion.button>
                            </NavLink>
                        </div>
                    </Card>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Programs;
