import React, { forwardRef } from 'react';
import { Textarea as HeroTextarea } from '@heroui/react';

const Textarea = forwardRef(({ label, error, className, ...props }, ref) => {
    return (
        <div className={`flex flex-col gap-1 w-full ${className || ''}`}>
            {label && (
                <label className="text-sm font-medium text-foam/80 dark:text-foam/80 light:text-light-text-secondary ml-1">
                    {label}
                </label>
            )}
            <HeroTextarea
                ref={ref}
                minRows={4}
                classNames={{
                    input: 'text-foam dark:text-foam light:text-light-text-primary placeholder:text-foam/30 dark:placeholder:text-foam/30 light:placeholder:text-light-text-muted',
                    inputWrapper: 'bg-abyss-light/50 border-white/10 hover:border-tide-teal/50 focus-within:border-tide-teal focus-within:ring-tide-teal/20 dark:bg-abyss-light/50 dark:border-white/10 dark:hover:border-tide-teal/50 dark:focus-within:border-tide-teal light:bg-light-bg-secondary light:border-light-border light:hover:border-teal-light-optimized/50 light:focus-within:border-teal-light-optimized transition-all duration-200',
                }}
                isInvalid={!!error}
                errorMessage={error}
                {...props}
            />
            {error && (
                <span className="text-xs text-coral-spark dark:text-coral-spark light:text-coral-light-optimized ml-1 animate-slide-up">
                    {error}
                </span>
            )}
        </div>
    );
});

Textarea.displayName = 'Textarea';

export default Textarea;
