import React, { forwardRef } from 'react';
import { Select as HeroSelect, SelectItem } from '@heroui/react';

const Select = forwardRef(({ label, error, options = [], className, ...props }, ref) => {
    return (
        <div className={`flex flex-col gap-1 w-full ${className || ''}`}>
            {label && (
                <label className="text-sm font-medium text-foam/80 dark:text-foam/80 light:text-light-text-secondary ml-1">
                    {label}
                </label>
            )}
            <HeroSelect
                ref={ref}
                classNames={{
                    trigger: 'bg-abyss-light/50 border-white/10 hover:border-tide-teal/50 data-[open=true]:border-tide-teal dark:bg-abyss-light/50 dark:border-white/10 dark:hover:border-tide-teal/50 dark:data-[open=true]:border-tide-teal light:bg-light-bg-secondary light:border-light-border light:hover:border-teal-light-optimized/50 light:data-[open=true]:border-teal-light-optimized h-12',
                    value: 'text-foam dark:text-foam light:text-light-text-primary',
                    popoverContent: 'bg-abyss-navy/95 border-white/10 backdrop-blur-xl dark:bg-abyss-navy/95 dark:border-white/10 light:bg-white light:border-light-border',
                }}
                isInvalid={!!error}
                errorMessage={error}
                {...props}
            >
                {options.map((option) => (
                    <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-foam hover:bg-tide-teal/20 data-[selected=true]:bg-tide-teal data-[selected=true]:text-white dark:text-foam dark:hover:bg-tide-teal/20 dark:data-[selected=true]:bg-tide-teal light:text-light-text-primary light:hover:bg-teal-light-optimized/10 light:data-[selected=true]:bg-teal-light-optimized light:data-[selected=true]:text-white"
                    >
                        {option.label}
                    </SelectItem>
                ))}
            </HeroSelect>
            {error && (
                <span className="text-xs text-coral-spark dark:text-coral-spark light:text-coral-light-optimized ml-1 animate-slide-up">
                    {error}
                </span>
            )}
        </div>
    );
});

Select.displayName = 'Select';

export default Select;
