import React from 'react';
import { motion } from 'framer-motion';
import { Check } from '@phosphor-icons/react';
import Button from './Button';

const CourseCard = ({ 
    course, 
    icon, 
    isPopular = false, 
    onSelect,
    delay = 0 
}) => {
    return (
        <div className="relative h-full">
            {isPopular && (
                <motion.div 
                    initial={{ scale: 0, y: -20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ delay: delay + 0.3, type: "spring", stiffness: 200 }}
                    className="absolute -top-4 left-0 right-0 z-20 flex justify-center"
                >
                    <div className="bg-coral-spark text-abyss-navy type-label px-5 py-2 md:px-6 md:py-2.5 rounded-full shadow-lg whitespace-nowrap">
                        {course.popularBadge}
                    </div>
                </motion.div>
            )}

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.6, 
                    delay,
                    ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                }}
                className={`
                    h-full flex flex-col
                    rounded-2xl overflow-hidden
                    ${isPopular 
                        ? 'bg-gradient-to-br from-tide-teal/20 to-abyss-navy/40 border-2 border-tide-teal shadow-glow-teal dark:from-tide-teal/20 dark:to-abyss-navy/40 dark:border-tide-teal light:from-teal-light-optimized/15 light:to-light-bg-secondary light:border-teal-light-optimized light:shadow-lg' 
                        : 'bg-abyss-navy/40 border border-white/10 dark:bg-abyss-navy/40 dark:border-white/10 light:bg-light-bg-primary light:border-light-border'
                    }
                    backdrop-blur-md
                    transition-all duration-300
                `}
            >

            <div className={`flex flex-col flex-grow min-w-0 ${isPopular ? 'p-8 pt-14' : 'p-8'}`}>
                <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                        delay: delay + 0.2, 
                        type: "spring", 
                        stiffness: 150,
                        damping: 12
                    }}
                    className="mb-6 flex justify-center"
                >
                    <img 
                        src={icon} 
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className={`
                            object-contain
                            ${isPopular 
                                ? 'w-36 h-36 md:w-40 md:h-40 filter drop-shadow-[0_0_16px_rgba(79,209,197,0.7)]' 
                                : 'w-28 h-28 md:w-32 md:h-32 opacity-90 drop-shadow-[0_0_8px_rgba(255,106,61,0.4)]'
                            }
                        `}
                    />
                </motion.div>

                <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 0.3 }}
                    className="type-title text-2xl md:text-3xl text-white dark:text-white light:text-light-text-primary text-center mb-3 tracking-wide"
                >
                    {course.name}
                </motion.h3>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 0.35 }}
                    className="type-meta text-foam-muted dark:text-foam-muted light:text-light-text-muted text-center uppercase tracking-wider mb-1"
                >
                    {course.feeLabel}
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: delay + 0.4 }}
                    className="mb-5 text-center"
                >
                    <span className={`
                        type-data text-4xl md:text-5xl font-bold
                        ${isPopular
                            ? 'text-teal-bright dark:text-teal-bright light:text-teal-light-optimized drop-shadow-[0_0_8px_rgba(79,209,197,0.5)]'
                            : 'text-teal-bright/80 dark:text-teal-bright/80 light:text-teal-light-optimized'}
                    `}>
                        {course.price}
                    </span>
                </motion.div>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 0.45 }}
                    className="type-body text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-center mb-8 text-sm md:text-base leading-relaxed break-words"
                >
                    {course.description}
                </motion.p>

                <div className="w-full h-px bg-white/10 dark:bg-white/10 light:bg-light-border mb-6" aria-hidden="true" />

                <motion.ul 
                    className="space-y-4 mb-8 flex-grow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 0.5 }}
                >
                    {course.features.map((feature, idx) => (
                        <motion.li 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                                delay: delay + 0.5 + (idx * 0.1),
                                duration: 0.4
                            }}
                            className="flex items-start gap-3 text-sm md:text-base text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary min-w-0"
                        >
                            <Check 
                                className={`shrink-0 mt-0.5 ${isPopular ? 'text-teal-bright dark:text-teal-bright light:text-teal-light-optimized' : 'text-teal-bright/70 dark:text-teal-bright/70 light:text-teal-light-optimized/80'}`}
                                weight="bold" 
                                size={20}
                                aria-hidden="true"
                            />
                            <span className="break-words min-w-0">{feature}</span>
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto"
                >
                    <Button
                        variant={isPopular ? 'primary' : 'outline'}
                        className="w-full font-heading tracking-label text-center whitespace-normal leading-snug px-4"
                        onClick={onSelect}
                    >
                        {course.buttonText}
                    </Button>
                </motion.div>
            </div>
            </motion.div>
        </div>
    );
};

export default CourseCard;
