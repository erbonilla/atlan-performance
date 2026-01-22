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
        default: 'glass border-white/10',
        subtle: 'glass-subtle border-white/5',
        accent: 'glass-accent border-tide-teal/30',
    };

    return (
        <HeroCard
            className={cn(
                'bg-abyss-navy/40 backdrop-blur-md overflow-hidden',
                variants[variant],
                hover && 'hover:scale-[1.02] hover:shadow-glow-teal transition-all duration-300',
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
