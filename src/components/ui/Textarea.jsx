import React, { forwardRef } from 'react';
import { Textarea as HeroTextarea } from '@heroui/react';

const Textarea = forwardRef(({ label, error, className, ...props }, ref) => {
    return (
        <div className={`flex flex-col gap-1 w-full ${className || ''}`}>
            {label && (
                <label className="text-sm font-medium text-foam/80 ml-1">
                    {label}
                </label>
            )}
            <HeroTextarea
                ref={ref}
                minRows={4}
                classNames={{
                    input: 'text-foam placeholder:text-foam/30',
                    inputWrapper: 'bg-abyss-light/50 border-white/10 hover:border-tide-teal/50 focus-within:border-tide-teal focus-within:ring-tide-teal/20 transition-all duration-200',
                }}
                isInvalid={!!error}
                errorMessage={error}
                {...props}
            />
            {error && (
                <span className="text-xs text-coral-spark ml-1 animate-slide-up">
                    {error}
                </span>
            )}
        </div>
    );
});

Textarea.displayName = 'Textarea';

export default Textarea;
