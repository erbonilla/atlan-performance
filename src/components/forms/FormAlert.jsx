import React from 'react';
import { WarningCircle, ArrowClockwise } from '@phosphor-icons/react';
import Button from '@components/ui/Button';

/**
 * Form-level status banner for submit failures / recovery actions.
 */
const FormAlert = ({
    message,
    onRetry,
    retryLabel = 'Try again',
    secondaryAction,
    secondaryLabel,
}) => {
    if (!message) return null;

    return (
        <div
            role="alert"
            aria-live="assertive"
            className="md:col-span-2 rounded-lg border border-coral-spark/35 bg-abyss-light/80 px-4 py-4
                       dark:border-coral-spark/35 dark:bg-abyss-light/80
                       light:border-coral-light-optimized/40 light:bg-light-bg-secondary"
        >
            <div className="flex gap-3 items-start">
                <WarningCircle
                    size={22}
                    weight="fill"
                    className="shrink-0 mt-0.5 text-coral-spark dark:text-coral-spark light:text-coral-light-optimized"
                    aria-hidden="true"
                />
                <div className="min-w-0 flex-1 space-y-3">
                    <p className="type-body text-sm text-foam dark:text-foam light:text-light-text-primary break-words leading-relaxed">
                        {message}
                    </p>
                    {(onRetry || secondaryAction) && (
                        <div className="flex flex-col sm:flex-row flex-wrap gap-2 pt-0.5">
                            {onRetry && (
                                <Button
                                    type="button"
                                    size="sm"
                                    variant="outline"
                                    onClick={onRetry}
                                    className="gap-2 w-full sm:w-auto shadow-none"
                                >
                                    <ArrowClockwise size={16} weight="bold" aria-hidden="true" />
                                    {retryLabel}
                                </Button>
                            )}
                            {secondaryAction && secondaryLabel && (
                                <Button
                                    type="button"
                                    size="sm"
                                    variant="ghost"
                                    onClick={secondaryAction}
                                    className="w-full sm:w-auto"
                                >
                                    {secondaryLabel}
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FormAlert;
