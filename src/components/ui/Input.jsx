import React, { forwardRef, useId } from 'react';
import { Input as HeroInput } from '@heroui/react';

const Input = forwardRef(({ label, error, className, id, maxLength, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
        <div className={`flex flex-col gap-1 w-full min-w-0 ${className || ''}`}>
            <HeroInput
                ref={ref}
                id={inputId}
                label={label}
                labelPlacement="outside"
                maxLength={maxLength}
                classNames={{
                    label: 'text-sm font-medium text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary ml-1 break-words',
                    input: 'text-foam dark:text-foam light:text-light-text-primary placeholder:text-foam-muted dark:placeholder:text-foam-muted light:placeholder:text-light-text-muted break-words',
                    inputWrapper: 'bg-abyss-light/50 border-white/10 hover:border-tide-teal/50 focus-within:border-tide-teal focus-within:ring-tide-teal/20 dark:bg-abyss-light/50 dark:border-white/10 dark:hover:border-tide-teal/50 dark:focus-within:border-tide-teal light:bg-light-bg-secondary light:border-light-border light:hover:border-teal-light-optimized/50 light:focus-within:border-teal-light-optimized transition-all duration-200 h-12 min-h-12 min-w-0',
                    errorMessage: 'text-coral-spark dark:text-coral-spark light:text-coral-light-optimized break-words',
                }}
                isInvalid={!!error}
                errorMessage={error}
                {...props}
            />
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
