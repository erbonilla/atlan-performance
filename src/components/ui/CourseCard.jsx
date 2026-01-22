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
            {/* Popular Badge - Outside overflow-hidden */}
            {isPopular && (
                <motion.div 
                    initial={{ scale: 0, y: -20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ delay: delay + 0.3, type: "spring", stiffness: 200 }}
                    className="absolute -top-4 left-0 right-0 z-20 flex justify-center"
                >
                    <div className="bg-coral-spark text-white text-sm md:text-base font-bold px-6 py-2 md:px-8 md:py-2.5 rounded-full uppercase tracking-wider shadow-xl whitespace-nowrap">
                        {course.popularBadge}
                    </div>
                </motion.div>
            )}

            {/* Card Content */}
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
                        ? 'bg-gradient-to-br from-tide-teal/20 to-abyss-navy/40 border-2 border-tide-teal shadow-glow-teal' 
                        : 'bg-abyss-navy/40 border border-white/10'
                    }
                    backdrop-blur-md
                    transition-all duration-300
                `}
            >

            <div className={`flex flex-col flex-grow ${isPopular ? 'p-8 pt-14' : 'p-8'}`}>
                {/* Icon */}
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
                        alt={course.name} 
                        className={`
                            object-contain
                            ${isPopular 
                                ? 'w-36 h-36 md:w-40 md:h-40 filter drop-shadow-[0_0_16px_rgba(79,209,197,0.7)]' 
                                : 'w-28 h-28 md:w-32 md:h-32 opacity-90 drop-shadow-[0_0_8px_rgba(255,106,61,0.4)]'
                            }
                        `}
                    />
                </motion.div>

                {/* Title */}
                <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 0.3 }}
                    className="text-2xl md:text-3xl font-heading font-bold text-white text-center mb-3 tracking-wide"
                >
                    {course.name}
                </motion.h3>

                {/* Fee Label */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 0.35 }}
                    className="text-xs text-foam/60 text-center uppercase tracking-wider mb-1"
                >
                    {course.feeLabel}
                </motion.p>

                {/* Price */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: delay + 0.4 }}
                    className="mb-5 text-center"
                >
                    <span className={`
                        text-4xl md:text-5xl font-bold
                        ${isPopular ? 'text-tide-teal drop-shadow-[0_0_8px_rgba(79,209,197,0.5)]' : 'text-tide-teal/80'}
                    `}>
                        {course.price}
                    </span>
                </motion.div>

                {/* Description */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 0.45 }}
                    className="text-foam/80 text-center mb-8 italic text-sm md:text-base leading-relaxed"
                >
                    {course.description}
                </motion.p>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-6"></div>

                {/* Features */}
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
                            className="flex items-start gap-3 text-sm md:text-base text-foam/90"
                        >
                            <Check 
                                className={`shrink-0 mt-0.5 ${isPopular ? 'text-tide-teal' : 'text-tide-teal/70'}`}
                                weight="bold" 
                                size={20}
                            />
                            <span>{feature}</span>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Button
                        variant={isPopular ? 'primary' : 'outline'}
                        className="w-full font-bold tracking-wider"
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
