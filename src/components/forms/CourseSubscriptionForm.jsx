import React, { useRef } from 'react';
import { useForm } from '@hooks/useForm';
import { useLanguage } from '@hooks/useLanguage';
import Input from '@components/ui/Input';
import Select from '@components/ui/Select';
import Button from '@components/ui/Button';
import FormAlert from '@components/forms/FormAlert';
import { Note, IdentificationCard, Calendar, Phone, Envelope } from '@phosphor-icons/react';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';

const FIELD_LIMITS = {
    full_name: 120,
    identity_card: 40,
    email: 254,
    phone_number: 40,
};

const SCHEDULE_KEYS = [
    { id: 'morning', fallback: 'Morning (5:00 AM - 8:00 AM)' },
    { id: 'mid_morning', fallback: 'Mid-morning (8:00 AM - 11:00 AM)' },
    { id: 'afternoon', fallback: 'Afternoon (12:00 PM - 4:00 PM)' },
    { id: 'evening', fallback: 'Evening (5:00 PM - 8:00 PM)' },
    { id: 'weekend', fallback: 'Weekend' },
];

const CourseSubscriptionForm = () => {
    const { t } = useLanguage();
    const lastPayload = useRef(null);

    const scheduleOptions = SCHEDULE_KEYS.map(({ id, fallback }) => ({
        id,
        label: t(`form.schedules.${id}`, fallback),
    }));

    const validate = (values) => {
        const errors = {};
        const fullName = values.full_name?.trim() || '';
        const email = values.email?.trim() || '';

        if (!fullName) errors.full_name = t('form.required', 'This field is required');
        else if (fullName.length > FIELD_LIMITS.full_name) {
            errors.full_name = t('form.too_long', 'Please shorten this field');
        }

        if (!values.identity_card?.trim()) {
            errors.identity_card = t('form.required', 'This field is required');
        } else if (values.identity_card.length > FIELD_LIMITS.identity_card) {
            errors.identity_card = t('form.too_long', 'Please shorten this field');
        }

        if (!values.birthday) errors.birthday = t('form.required', 'This field is required');

        if (!email) {
            errors.email = t('form.required', 'This field is required');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = t('form.invalid_email', 'Please enter a valid email');
        }

        if (!values.phone_number?.trim()) {
            errors.phone_number = t('form.required', 'This field is required');
        } else if (values.phone_number.length > FIELD_LIMITS.phone_number) {
            errors.phone_number = t('form.too_long', 'Please shorten this field');
        }

        if (!values.course_level) errors.course_level = t('form.required', 'This field is required');
        if (!values.preferred_contact_method) {
            errors.preferred_contact_method = t('form.required', 'This field is required');
        }

        if (!values.preferred_schedules || values.preferred_schedules.length === 0) {
            errors.preferred_schedules = t('form.select_schedule', 'Select at least one schedule');
        }

        return errors;
    };

    const {
        values,
        errors,
        isSubmitting,
        isSuccess,
        handleChange,
        handleSubmit,
        setValues,
        setErrors,
        clearFormError,
        resetForm,
    } = useForm(
        {
            full_name: '',
            identity_card: '',
            birthday: '',
            email: '',
            phone_number: '',
            course_level: '',
            preferred_schedules: [],
            preferred_contact_method: '',
        },
        validate
    );

    const handleScheduleChange = (scheduleId) => {
        if (isSubmitting) return;
        setValues((prev) => {
            const current = prev.preferred_schedules || [];
            const next = current.includes(scheduleId)
                ? current.filter((s) => s !== scheduleId)
                : [...current, scheduleId];
            return { ...prev, preferred_schedules: next };
        });
        setErrors((prev) => {
            if (!prev.preferred_schedules && !prev.form) return prev;
            const next = { ...prev };
            delete next.preferred_schedules;
            delete next.form;
            return next;
        });
    };

    const resolveFormErrorMessage = (codeOrMessage) => {
        if (codeOrMessage === 'offline') {
            return t(
                'form.offline',
                'You appear to be offline. Check your connection and try again, or continue on WhatsApp.'
            );
        }
        if (codeOrMessage === 'unavailable') {
            return t(
                'form.unavailable',
                'Form submissions are temporarily unavailable. Please contact us on WhatsApp.'
            );
        }
        return t(
            'form.submit_error',
            'We could not save your request. Try again or continue on WhatsApp.'
        );
    };

    const onSubmit = async (data) => {
        if (!isSupabaseConfigured || !supabase) {
            throw new Error('unavailable');
        }

        if (typeof navigator !== 'undefined' && navigator.onLine === false) {
            throw new Error('offline');
        }

        const payload = {
            full_name: data.full_name.trim(),
            identity_card: data.identity_card.trim(),
            birthday: data.birthday,
            email: data.email.trim(),
            phone_number: data.phone_number.trim(),
            course_level: data.course_level,
            preferred_schedules: data.preferred_schedules,
            preferred_contact_method: data.preferred_contact_method,
        };
        lastPayload.current = payload;

        const { error } = await supabase.from('course_registrations').insert([payload]);
        if (error) {
            console.error('Subscription save error:', error);
            throw new Error('save_failed');
        }
    };

    const mapSubmitError = (error) => {
        if (error?.message === 'offline' || (typeof navigator !== 'undefined' && !navigator.onLine)) {
            return 'offline';
        }
        if (error?.message === 'unavailable') return 'unavailable';
        if (/failed to fetch|networkerror|network request failed|load failed/i.test(error?.message || '')) {
            return 'offline';
        }
        return 'unexpected';
    };

    const submitForm = () => handleSubmit(onSubmit, { mapSubmitError });

    const openWhatsAppFallback = () => {
        const data = lastPayload.current || values;
        const scheduleLabels = (data.preferred_schedules || [])
            .map((id) => scheduleOptions.find((s) => s.id === id)?.label || id)
            .join(', ');
        const text = [
            `*${t('subscription.request_title', 'Course registration')}*`,
            '',
            `*${t('form.full_name', 'Full Name')}:* ${data.full_name || ''}`,
            `*${t('form.email', 'Email')}:* ${data.email || ''}`,
            `*${t('form.phone', 'Phone Number')}:* ${data.phone_number || ''}`,
            `*${t('form.course_level', 'Course Level')}:* ${data.course_level || ''}`,
            `*${t('form.preferred_schedules', 'Preferred Schedules')}:* ${scheduleLabels}`,
        ].join('\n');
        window.open(`https://wa.me/50683731111?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    };

    if (isSuccess) {
        return (
            <div className="text-center py-10" role="status" aria-live="polite">
                <div className="w-20 h-20 bg-tide-teal/20 dark:bg-tide-teal/20 light:bg-teal-light-optimized/20 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-bright dark:text-teal-bright light:text-teal-light-optimized animate-success-pulse">
                    <Note size={40} weight="fill" aria-hidden="true" />
                </div>
                <h2 className="type-headline text-white dark:text-white light:text-light-text-primary mb-4">
                    {t('subscription.success_title', 'Registration Successful!')}
                </h2>
                <p className="type-body text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary max-w-prose mx-auto mb-8">
                    {t('subscription.success_msg', 'Your registration has been received. We will be in touch shortly.')}
                </p>
                <Button type="button" variant="ghost" onClick={resetForm}>
                    {t('contact.send_another', 'Send another request')}
                </Button>
            </div>
        );
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                submitForm();
            }}
            noValidate
            className="space-y-6"
        >
            {errors.form && (
                <FormAlert
                    message={resolveFormErrorMessage(errors.form)}
                    onRetry={() => {
                        clearFormError();
                        submitForm();
                    }}
                    retryLabel={t('form.try_again', 'Try again')}
                    secondaryAction={openWhatsAppFallback}
                    secondaryLabel={t('form.continue_whatsapp', 'Continue on WhatsApp')}
                />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                    label={t('form.full_name', 'Full Name')}
                    name="full_name"
                    value={values.full_name}
                    onChange={handleChange}
                    error={errors.full_name}
                    disabled={isSubmitting}
                    maxLength={FIELD_LIMITS.full_name}
                    autoComplete="name"
                    className="md:col-span-2"
                />

                <Input
                    label={t('form.identity', 'Identity Card / Passport')}
                    name="identity_card"
                    value={values.identity_card}
                    onChange={handleChange}
                    error={errors.identity_card}
                    disabled={isSubmitting}
                    maxLength={FIELD_LIMITS.identity_card}
                    icon={<IdentificationCard size={20} />}
                />

                <Input
                    label={t('form.birthday', 'Date of Birth')}
                    name="birthday"
                    type="date"
                    value={values.birthday}
                    onChange={handleChange}
                    error={errors.birthday}
                    disabled={isSubmitting}
                    icon={<Calendar size={20} />}
                />

                <Input
                    label={t('form.email', 'Email')}
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                    disabled={isSubmitting}
                    maxLength={FIELD_LIMITS.email}
                    autoComplete="email"
                    icon={<Envelope size={20} />}
                />

                <Input
                    label={t('form.phone', 'Phone Number')}
                    name="phone_number"
                    type="tel"
                    value={values.phone_number}
                    onChange={handleChange}
                    error={errors.phone_number}
                    disabled={isSubmitting}
                    maxLength={FIELD_LIMITS.phone_number}
                    autoComplete="tel"
                    icon={<Phone size={20} />}
                />

                <Select
                    label={t('form.course_level', 'Course Level')}
                    name="course_level"
                    value={values.course_level}
                    onChange={(e) => handleChange({ target: { name: 'course_level', value: e.target.value } })}
                    error={errors.course_level}
                    disabled={isSubmitting}
                    options={[
                        { value: 'Basic', label: t('form.levels.basic', 'Basic') },
                        { value: 'Intermediate', label: t('form.levels.intermediate', 'Intermediate') },
                        { value: 'Advanced', label: t('form.levels.advanced', 'Advanced') },
                        { value: 'Triathlon', label: t('form.levels.triathlon', 'Triathlon') },
                    ]}
                />

                <Select
                    label={t('form.contact_method', 'Preferred Contact Method')}
                    name="preferred_contact_method"
                    value={values.preferred_contact_method}
                    onChange={(e) => handleChange({ target: { name: 'preferred_contact_method', value: e.target.value } })}
                    error={errors.preferred_contact_method}
                    disabled={isSubmitting}
                    options={[
                        { value: 'Email', label: t('form.methods.email', 'Email') },
                        { value: 'WhatsApp', label: t('form.methods.whatsapp', 'WhatsApp') },
                        { value: 'Call', label: t('form.methods.call', 'Phone Call') },
                    ]}
                />
            </div>

            <fieldset className="space-y-3 min-w-0" disabled={isSubmitting}>
                <legend className="text-foam dark:text-foam light:text-light-text-primary text-sm font-medium">
                    {t('form.preferred_schedules', 'Preferred Schedules')}
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3" role="group" aria-invalid={!!errors.preferred_schedules}>
                    {scheduleOptions.map((schedule) => (
                        <label
                            key={schedule.id}
                            className="flex items-center gap-3 p-3 min-h-12 bg-ocean-depth rounded-lg border border-white/5 cursor-pointer hover:border-tide-teal/50 transition-colors dark:bg-ocean-depth light:bg-light-bg-secondary light:border-light-border min-w-0"
                        >
                            <input
                                type="checkbox"
                                name="preferred_schedules"
                                value={schedule.id}
                                checked={(values.preferred_schedules || []).includes(schedule.id)}
                                onChange={() => handleScheduleChange(schedule.id)}
                                disabled={isSubmitting}
                                className="w-5 h-5 shrink-0 rounded border-foam/30 bg-white/5 text-teal-bright focus:ring-tide-teal focus:ring-offset-0"
                            />
                            <span className="text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-sm break-words min-w-0">
                                {schedule.label}
                            </span>
                        </label>
                    ))}
                </div>
                {errors.preferred_schedules && (
                    <p className="text-coral-spark dark:text-coral-spark light:text-coral-light-optimized text-xs mt-1 break-words" role="alert">
                        {errors.preferred_schedules}
                    </p>
                )}
            </fieldset>

            <Button
                type="submit"
                size="lg"
                className="w-full shadow-glow-coral mt-8"
                isLoading={isSubmitting}
            >
                {t('subscription.submit', 'Complete Registration')}
            </Button>
        </form>
    );
};

export default CourseSubscriptionForm;
