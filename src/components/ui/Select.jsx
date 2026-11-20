import React, { forwardRef, useId } from 'react';
import { Select as HeroSelect, SelectItem } from '@heroui/react';

const Select = forwardRef(({ label, error, options = [], className, id, placeholder, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id || generatedId;

    return (
        <div className={`flex flex-col gap-1 w-full min-w-0 ${className || ''}`}>
            <HeroSelect
                ref={ref}
                id={selectId}
                label={label}
                labelPlacement="outside"
                // An "outside" label sits inside the trigger until a value is
                // picked, so a placeholder alongside it renders on top of it.
                placeholder={label ? undefined : placeholder}
                classNames={{
                    label: 'text-sm font-medium text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary ml-1 break-words',
                    trigger: 'bg-abyss-light/50 border-white/10 hover:border-tide-teal/50 data-[open=true]:border-tide-teal dark:bg-abyss-light/50 dark:border-white/10 dark:hover:border-tide-teal/50 dark:data-[open=true]:border-tide-teal light:bg-light-bg-secondary light:border-light-border light:hover:border-teal-light-optimized/50 light:data-[open=true]:border-teal-light-optimized h-12 min-h-12 min-w-0',
                    value: 'text-foam dark:text-foam light:text-light-text-primary truncate',
                    placeholder: 'text-foam-muted dark:text-foam-muted light:text-light-text-muted',
                    popoverContent: 'bg-abyss-navy/95 border-white/10 backdrop-blur-xl dark:bg-abyss-navy/95 dark:border-white/10 light:bg-white light:border-light-border',
                    errorMessage: 'text-coral-spark dark:text-coral-spark light:text-coral-light-optimized break-words',
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
        </div>
    );
});

Select.displayName = 'Select';

export default Select;
