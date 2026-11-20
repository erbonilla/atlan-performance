import { useState, useCallback, useRef } from 'react';

/**
 * Map thrown errors to a stable form-level message key / text.
 * Callers can pass `mapSubmitError` to localize.
 */
export const getDefaultSubmitError = (error) => {
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
        return 'offline';
    }
    const message = error?.message || '';
    if (/failed to fetch|networkerror|network request failed|load failed/i.test(message)) {
        return 'offline';
    }
    if (/temporarily unavailable|not configured/i.test(message)) {
        return message;
    }
    return message || 'unexpected';
};

export const useForm = (initialValues = {}, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const submittingRef = useRef(false);

    const clearFieldError = useCallback((name) => {
        setErrors((prev) => {
            if (!prev[name] && !prev.form) return prev;
            const next = { ...prev };
            delete next[name];
            delete next.form;
            return next;
        });
    }, []);

    const handleChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        clearFieldError(name);
    }, [clearFieldError]);

    const handleSubmit = async (submitFn, { mapSubmitError } = {}) => {
        if (submittingRef.current) return false;
        submittingRef.current = true;
        setIsSubmitting(true);
        setErrors({});
        setIsSuccess(false);

        try {
            if (validate) {
                const validationErrors = validate(values);
                if (Object.keys(validationErrors).length > 0) {
                    setErrors(validationErrors);
                    const firstKey = Object.keys(validationErrors)[0];
                    requestAnimationFrame(() => {
                        const firstErrorField = document.querySelector(`[name="${firstKey}"]`);
                        if (firstErrorField) {
                            firstErrorField.focus();
                            firstErrorField.scrollIntoView?.({ block: 'center', behavior: 'smooth' });
                        }
                    });
                    return false;
                }
            }

            await submitFn(values);
            setIsSuccess(true);
            setValues(initialValues);
            return true;
        } catch (error) {
            console.error('Form submission error:', error);
            const mapped = mapSubmitError
                ? mapSubmitError(error)
                : getDefaultSubmitError(error);
            setErrors({
                form: typeof mapped === 'string' ? mapped : (mapped?.message || 'unexpected'),
            });
            return false;
        } finally {
            submittingRef.current = false;
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
        setIsSuccess(false);
        setIsSubmitting(false);
        submittingRef.current = false;
    };

    const clearFormError = useCallback(() => {
        setErrors((prev) => {
            if (!prev.form) return prev;
            const next = { ...prev };
            delete next.form;
            return next;
        });
    }, []);

    return {
        values,
        errors,
        isSubmitting,
        isSuccess,
        handleChange,
        handleSubmit,
        resetForm,
        setValues,
        setErrors,
        clearFormError,
    };
};
