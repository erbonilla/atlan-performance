import React from 'react';
import { Button as HeroButton } from '@heroui/react';
import { cn } from '@heroui/react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    isLoading,
    ...props
}) => {
    const variants = {
        primary: `bg-coral-spark text-white font-bold hover:bg-coral-dark shadow-glow-coral
                  dark:bg-coral-spark dark:text-white dark:hover:bg-coral-dark dark:shadow-glow-coral
                  light:bg-coral-light-optimized light:text-white light:hover:bg-coral-dark light:shadow-lg`,
        secondary: `bg-tide-teal text-white font-bold hover:bg-teal-dark shadow-glow-teal
                    dark:bg-tide-teal dark:text-white dark:hover:bg-teal-dark dark:shadow-glow-teal
                    light:bg-teal-light-optimized light:text-white light:hover:bg-teal-dark light:shadow-lg`,
        ghost: `bg-transparent text-foam hover:bg-white/10 border border-white/20
                dark:bg-transparent dark:text-foam dark:hover:bg-white/10 dark:border-white/20
                light:bg-transparent light:text-light-text-primary light:hover:bg-light-bg-tertiary light:border-light-border`,
        outline: `bg-transparent border-2 border-coral-spark text-coral-spark hover:bg-coral-spark/10
                  dark:bg-transparent dark:border-coral-spark dark:text-coral-spark dark:hover:bg-coral-spark/10
                  light:bg-transparent light:border-coral-light-optimized light:text-coral-light-optimized light:hover:bg-coral-light-optimized/10`,
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <HeroButton
            className={cn(
                'rounded-md transition-all duration-300 font-heading tracking-wide active:scale-95',
                variants[variant],
                sizes[size],
                isLoading && 'opacity-80 cursor-wait',
                className
            )}
            isLoading={isLoading}
            {...props}
        >
            {children}
        </HeroButton>
    );
};

export default Button;
