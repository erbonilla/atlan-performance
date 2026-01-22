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
        primary: 'bg-coral-spark text-white font-bold hover:bg-coral-dark shadow-glow-coral',
        secondary: 'bg-tide-teal text-white font-bold hover:bg-teal-dark shadow-glow-teal',
        ghost: 'bg-transparent text-foam hover:bg-white/10 border border-white/20',
        outline: 'bg-transparent border-2 border-coral-spark text-coral-spark hover:bg-coral-spark/10',
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
