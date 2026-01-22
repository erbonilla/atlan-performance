import React, { forwardRef } from 'react';
import { Select as HeroSelect, SelectItem } from '@heroui/react';

const Select = forwardRef(({ label, error, options = [], className, ...props }, ref) => {
    return (
        <div className={`flex flex-col gap-1 w-full ${className || ''}`}>
            {label && (
                <label className="text-sm font-medium text-foam/80 ml-1">
                    {label}
                </label>
            )}
            <HeroSelect
                ref={ref}
                classNames={{
                    trigger: 'bg-abyss-light/50 border-white/10 hover:border-tide-teal/50 data-[open=true]:border-tide-teal h-12',
                    value: 'text-foam',
                    popoverContent: 'bg-abyss-navy/95 border-white/10 backdrop-blur-xl',
                }}
                isInvalid={!!error}
                errorMessage={error}
                {...props}
            >
                {options.map((option) => (
                    <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-foam hover:bg-tide-teal/20 data-[selected=true]:bg-tide-teal data-[selected=true]:text-white"
                    >
                        {option.label}
                    </SelectItem>
                ))}
            </HeroSelect>
            {error && (
                <span className="text-xs text-coral-spark ml-1 animate-slide-up">
                    {error}
                </span>
            )}
        </div>
    );
});

Select.displayName = 'Select';

export default Select;
