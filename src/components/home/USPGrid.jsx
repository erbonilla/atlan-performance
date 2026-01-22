import React, { useState } from 'react';
import { useLanguage } from '@hooks/useLanguage';
import { Atom, WebhooksLogo, Brain, UserFocus } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Card from '@components/ui/Card';

const USPGrid = () => {
    const { t } = useLanguage();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const pillars = [
        {
            icon: <Atom weight="duotone" className="text-coral-spark" size={48} />,
            titleKey: 'usp.science.title',
            descKey: 'usp.science.desc',
        },
        {
            icon: <WebhooksLogo weight="duotone" className="text-coral-spark" size={48} />,
            titleKey: 'usp.discipline.title',
            descKey: 'usp.discipline.desc',
        },
        {
            icon: <Brain weight="duotone" className="text-coral-spark" size={48} />,
            titleKey: 'usp.resilience.title',
            descKey: 'usp.resilience.desc',
        },
        {
            icon: <UserFocus weight="duotone" className="text-coral-spark" size={48} />,
            titleKey: 'usp.community.title',
            descKey: 'usp.community.desc',
        },
    ];

    const iconVariants = {
        initial: { 
            scale: 1, 
            rotate: 0,
        },
        hover: { 
            scale: 1.15,
            rotate: [0, -10, 10, -10, 0],
            transition: {
                duration: 0.6,
                ease: "easeInOut",
                rotate: {
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    duration: 0.8,
                }
            }
        }
    };

    return (
        <section className="section bg-abyss-navy relative">
            <div className="container-atlan">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl text-white font-heading font-bold mb-4">
                        Liquid Precision
                    </h2>
                    <p className="text-foam/70 max-w-2xl mx-auto">
                        Our methodology combines data-driven science with the fluid nature of water sports.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, index) => (
                        <Card
                            key={index}
                            hover
                            variant="subtle"
                            className="p-6 flex flex-col items-center text-center group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <motion.div 
                                className="mb-6 p-4 bg-abyss-light rounded-full group-hover:bg-abyss-light/80 transition-colors shadow-glow-teal/20"
                                variants={iconVariants}
                                initial="initial"
                                animate={hoveredIndex === index ? "hover" : "initial"}
                            >
                                {pillar.icon}
                            </motion.div>
                            <h3 className="text-xl text-white font-bold mb-3">
                                {t(pillar.titleKey, pillar.titleKey)}
                                {/* Fallback to key if trans missing temporarily */}
                            </h3>
                            <p className="text-foam/70 text-sm leading-relaxed">
                                {t(pillar.descKey, "Description pending...")}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default USPGrid;
