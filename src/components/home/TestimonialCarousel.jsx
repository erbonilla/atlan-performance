import React, { useState, useEffect } from 'react';
import { useLanguage } from '@hooks/useLanguage';
import Card from '@components/ui/Card';
import { Quotes, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import amandaBarquero from '@assets/amanda_barquero.png';
import joaquinRodriguez from '@assets/joaquin_rodriguez.jpeg';
import steisyCerdas from '@assets/steici_cerdas.png';
import agustinFrancesa from '@assets/agustin_francesa.jpeg';
import rodrigoRojas from '@assets/rodrigo_rojas.jpeg';

const TestimonialCarousel = () => {
    const { t } = useLanguage();

    // Testimonial data with translations
    const testimonials = [
        {
            id: 1,
            image: amandaBarquero,
            nameKey: 'amanda.name',
            roleKey: 'amanda.role',
            contentKey: 'amanda.content',
        },
        {
            id: 2,
            image: joaquinRodriguez,
            nameKey: 'joaquin.name',
            roleKey: 'joaquin.role',
            contentKey: 'joaquin.content',
        },
        {
            id: 3,
            image: steisyCerdas,
            nameKey: 'steisy.name',
            roleKey: 'steisy.role',
            contentKey: 'steisy.content',
        },
        {
            id: 4,
            image: agustinFrancesa,
            nameKey: 'agustin.name',
            roleKey: 'agustin.role',
            contentKey: 'agustin.content',
        },
        {
            id: 5,
            image: rodrigoRojas,
            nameKey: 'rodrigo.name',
            roleKey: 'rodrigo.role',
            contentKey: 'rodrigo.content',
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const cardsPerView = 3; // Show 3 cards at once
    const maxIndex = testimonials.length - cardsPerView;

    // Auto-scroll functionality
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex, isPaused]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <section className="section bg-abyss-light/30 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tide-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-coral-spark/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container-atlan">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl text-white font-heading font-bold mb-4">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-foam/70 max-w-2xl mx-auto">
                        {t('testimonials.subtitle')}
                    </p>
                </div>

                <div 
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-coral-spark/30 hover:bg-coral-spark hover:shadow-glow-coral text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                        aria-label="Previous testimonials"
                    >
                        <CaretLeft size={24} weight="bold" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-coral-spark/30 hover:bg-coral-spark hover:shadow-glow-coral text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                        aria-label="Next testimonials"
                    >
                        <CaretRight size={24} weight="bold" />
                    </button>

                    {/* Carousel Container */}
                    <div className="overflow-hidden">
                        <motion.div
                            animate={{ 
                                x: `calc(-${currentIndex * (100 / cardsPerView)}% - ${currentIndex * 16}px)` 
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 30,
                            }}
                            className="flex gap-6"
                        >
                            {testimonials.map((testimonial) => (
                                <motion.div
                                    key={testimonial.id}
                                    className="w-[calc(33.333%-16px)] flex-shrink-0"
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="p-8 relative h-full flex flex-col min-h-[300px]">
                                        <Quotes size={48} weight="fill" className="text-tide-teal/20 absolute top-4 right-4" />

                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-tide-teal/50 shadow-glow-teal">
                                                <img
                                                    src={testimonial.image}
                                                    alt={t(`testimonials.${testimonial.nameKey}`)}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold">{t(`testimonials.${testimonial.nameKey}`)}</h4>
                                                <span className="text-coral-spark text-xs font-bold uppercase tracking-wider">
                                                    {t(`testimonials.${testimonial.roleKey}`)}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-foam/80 italic leading-relaxed flex-grow">
                                            "{t(`testimonials.${testimonial.contentKey}`)}"
                                        </p>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'w-8 bg-coral-spark'
                                        : 'w-2 bg-foam/30 hover:bg-foam/50'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
