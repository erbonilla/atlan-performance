import React from 'react';
import { Card as HeroCard, CardBody, CardFooter, CardHeader, cn } from '@heroui/react';

const Card = ({
    children,
    className,
    variant = 'default',
    hover = false,
    ...props
}) => {
    const variants = {
        default: 'glass border-white/10 dark:border-white/10 light:border-light-border',
        subtle: 'glass-subtle border-white/5 dark:border-white/5 light:border-light-border/60',
        accent: 'glass-accent border-tide-teal/30 dark:border-tide-teal/30 light:border-teal-light-optimized/30',
    };

    return (
        <HeroCard
            className={cn(
                'bg-abyss-navy/40 backdrop-blur-md overflow-hidden',
                'dark:bg-abyss-navy/40',
                'light:bg-white light:shadow-card-light',
                variants[variant],
                hover && 'hover:scale-[1.02] transition-all duration-300',
                hover && 'dark:hover:shadow-glow-teal',
                hover && 'light:hover:shadow-card-light-hover',
                className
            )}
            {...props}
        >
            {children}
        </HeroCard>
    );
};

// Re-export subcomponents for convenience
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
