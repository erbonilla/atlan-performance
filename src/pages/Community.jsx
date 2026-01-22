import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@hooks/useLanguage';
import { usePageTitle } from '@hooks/usePageTitle';
import { Users, InstagramLogo, WhatsappLogo, Heart } from '@phosphor-icons/react';
import Button from '@components/ui/Button';

const Community = () => {
    const { t } = useLanguage();
    usePageTitle(t('nav.community'));

    const communityFeatures = [
        {
            icon: <Users size={48} weight="duotone" className="text-tide-teal" />,
            title: t('community.features.connect.title'),
            description: t('community.features.connect.desc'),
        },
        {
            icon: <Heart size={48} weight="duotone" className="text-coral-spark" />,
            title: t('community.features.support.title'),
            description: t('community.features.support.desc'),
        },
        {
            icon: <InstagramLogo size={48} weight="duotone" className="text-tide-teal" />,
            title: t('community.features.share.title'),
            description: t('community.features.share.desc'),
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="container-atlan relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 leading-tight">
                            {t('community.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-foam mb-8 leading-relaxed">
                            {t('community.subtitle')}
                        </p>
                    </motion.div>
                </div>

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-tide-teal/10 via-transparent to-transparent pointer-events-none" />
            </section>

            {/* Features Grid */}
            <section className="py-20">
                <div className="container-atlan">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {communityFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="glass-card p-8 rounded-2xl hover:shadow-glow-teal transition-all duration-300"
                            >
                                <div className="mb-6">{feature.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-foam leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Join Section */}
            <section className="py-20">
                <div className="container-atlan">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-12 rounded-3xl text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-6">
                            {t('community.join.title')}
                        </h2>
                        <p className="text-lg text-foam mb-8 leading-relaxed">
                            {t('community.join.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://instagram.com/atlan.performance"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="secondary" size="md" className="w-full sm:w-auto gap-2">
                                    <InstagramLogo size={24} weight="fill" />
                                    Instagram
                                </Button>
                            </a>
                            <a
                                href="https://wa.me/50683731111"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="primary" size="md" className="w-full sm:w-auto gap-2">
                                    <WhatsappLogo size={24} weight="fill" />
                                    WhatsApp
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Community;
