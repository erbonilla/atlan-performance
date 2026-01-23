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
    const [cardsPerView, setCardsPerView] = useState(3);

    // Responsive cards per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCardsPerView(1); // Mobile: 1 card
            } else if (window.innerWidth < 1024) {
                setCardsPerView(2); // Tablet: 2 cards
            } else {
                setCardsPerView(3); // Desktop: 3 cards
            }
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    // Reset to first slide when cardsPerView changes
    useEffect(() => {
        setCurrentIndex(0);
    }, [cardsPerView]);

    return (
        <section className="section bg-abyss-light/30 dark:bg-abyss-light/30 light:bg-light-bg-secondary relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tide-teal/5 dark:bg-tide-teal/5 light:bg-teal-light-optimized/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-coral-spark/5 dark:bg-coral-spark/5 light:bg-coral-light-optimized/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container-atlan">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl text-white dark:text-white light:text-light-text-primary font-heading font-bold mb-4">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-foam/70 dark:text-foam/70 light:text-light-text-secondary max-w-2xl mx-auto px-4">
                        {t('testimonials.subtitle')}
                    </p>
                </div>

                <div 
                    className="relative px-4 md:px-0"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-4 z-10 
                                   bg-coral-spark/30 hover:bg-coral-spark hover:shadow-glow-coral text-white 
                                   dark:bg-coral-spark/30 dark:hover:bg-coral-spark dark:text-white
                                   light:bg-coral-light-optimized light:hover:bg-coral-dark light:text-white light:shadow-md
                                   p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                        aria-label="Previous testimonials"
                    >
                        <CaretLeft size={20} weight="bold" className="md:w-6 md:h-6" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-4 z-10 
                                   bg-coral-spark/30 hover:bg-coral-spark hover:shadow-glow-coral text-white 
                                   dark:bg-coral-spark/30 dark:hover:bg-coral-spark dark:text-white
                                   light:bg-coral-light-optimized light:hover:bg-coral-dark light:text-white light:shadow-md
                                   p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                        aria-label="Next testimonials"
                    >
                        <CaretRight size={20} weight="bold" className="md:w-6 md:h-6" />
                    </button>

                    {/* Carousel Container */}
                    <div className="overflow-hidden mx-8 md:mx-0">
                        <motion.div
                            animate={{ 
                                x: `calc(-${currentIndex * (100 / cardsPerView)}% - ${currentIndex * (cardsPerView === 1 ? 16 : 24)}px)` 
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 30,
                            }}
                            className="flex gap-4 md:gap-6"
                        >
                            {testimonials.map((testimonial) => (
                                <motion.div
                                    key={testimonial.id}
                                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0"
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="p-6 md:p-8 relative h-full flex flex-col min-h-[320px] md:min-h-[300px]">
                                        <Quotes size={36} weight="fill" className="md:w-12 md:h-12 text-tide-teal/20 dark:text-tide-teal/20 light:text-teal-light-optimized/15 absolute top-3 right-3 md:top-4 md:right-4" />

                                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden 
                                                          border-2 border-tide-teal/50 shadow-glow-teal
                                                          dark:border-tide-teal/50 dark:shadow-glow-teal
                                                          light:border-teal-light-optimized/40 light:shadow-md flex-shrink-0">
                                                <img
                                                    src={testimonial.image}
                                                    alt={t(`testimonials.${testimonial.nameKey}`)}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-white dark:text-white light:text-light-text-primary font-bold text-base md:text-lg truncate">
                                                    {t(`testimonials.${testimonial.nameKey}`)}
                                                </h4>
                                                <span className="text-coral-spark dark:text-coral-spark light:text-coral-light-optimized text-xs font-bold uppercase tracking-wider block truncate">
                                                    {t(`testimonials.${testimonial.roleKey}`)}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-foam/80 dark:text-foam/80 light:text-light-text-secondary italic leading-relaxed flex-grow text-sm md:text-base">
                                            "{t(`testimonials.${testimonial.contentKey}`)}"
                                        </p>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6 md:mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'w-8 bg-coral-spark dark:bg-coral-spark light:bg-coral-light-optimized'
                                        : 'w-2 bg-foam/30 hover:bg-foam/50 dark:bg-foam/30 dark:hover:bg-foam/50 light:bg-light-border-strong light:hover:bg-light-text-tertiary'
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
