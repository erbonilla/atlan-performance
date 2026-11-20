import React from 'react';
import { Button as HeroButton } from '@heroui/react';
import { cn } from '@heroui/react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    isLoading,
    isDisabled,
    ...props
}) => {
    // HeroUI stamps role="button" on any non-<button> element it renders. A CTA
    // rendered as a link still navigates, so it has to announce as a link.
    const isNavigation = Boolean(props.to || props.href);

    const variants = {
        // Coral Spark keeps its brand value in both themes; the label is navy ink,
        // so hover brightens instead of darkening.
        primary: `bg-coral-spark text-abyss-navy font-bold hover:bg-coral-glow shadow-glow-coral
                  dark:shadow-glow-coral light:shadow-lg`,
        secondary: `bg-teal-fill text-white font-bold hover:bg-teal-dark shadow-glow-teal
                    dark:bg-teal-fill dark:text-white dark:hover:bg-teal-dark dark:shadow-glow-teal
                    light:bg-teal-light-optimized light:text-white light:hover:bg-teal-dark light:shadow-lg`,
        ghost: `bg-transparent text-foam hover:bg-white/10 border border-white/20
                dark:bg-transparent dark:text-foam dark:hover:bg-white/10 dark:border-white/20
                light:bg-transparent light:text-light-text-primary light:hover:bg-light-bg-tertiary light:border-light-border`,
        outline: `bg-transparent border-2 border-coral-spark text-coral-spark hover:bg-coral-spark/10
                  dark:bg-transparent dark:border-coral-spark dark:text-coral-spark dark:hover:bg-coral-spark/10
                  light:bg-transparent light:border-coral-light-optimized light:text-coral-light-optimized light:hover:bg-coral-light-optimized/10`,
    };

    const sizes = {
        sm: 'px-4 py-3 text-sm min-h-12',
        md: 'px-6 py-3 text-base min-h-12',
        lg: 'px-8 py-4 text-lg min-h-14',
    };

    return (
        <HeroButton
            className={cn(
                'rounded-md transition-all duration-300 font-heading tracking-label active:scale-95',
                variants[variant],
                sizes[size],
                isLoading && 'opacity-80 cursor-wait',
                className
            )}
            isLoading={isLoading}
            isDisabled={Boolean(isLoading || isDisabled)}
            {...(isNavigation ? { role: 'link' } : null)}
            {...props}
        >
            {children}
        </HeroButton>
    );
};

export default Button;
