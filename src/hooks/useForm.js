import { useState, useCallback } from 'react';

export const useForm = (initialValues = {}, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    }, [errors]);

    const handleSubmit = async (submitFn) => {
        setIsSubmitting(true);
        setErrors({});
        setIsSuccess(false);

        try {
            // Run validation if provided
            if (validate) {
                const validationErrors = validate(values);
                if (Object.keys(validationErrors).length > 0) {
                    setErrors(validationErrors);
                    setIsSubmitting(false);
                    // Focus first error
                    const firstErrorField = document.querySelector(`[name="${Object.keys(validationErrors)[0]}"]`);
                    if (firstErrorField) firstErrorField.focus();
                    return false;
                }
            }

            await submitFn(values);
            setIsSuccess(true);
            setValues(initialValues); // Reset form on success
            return true;
        } catch (error) {
            console.error('Form submission error:', error);
            setErrors({ form: error.message || 'An unexpected error occurred. Please try again.' });
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
        setIsSuccess(false);
        setIsSubmitting(false);
    };

    return {
        values,
        errors,
        isSubmitting,
        isSuccess,
        handleChange,
        handleSubmit,
        resetForm,
        setValues, // Exposed for manual updates if needed
    };
};
