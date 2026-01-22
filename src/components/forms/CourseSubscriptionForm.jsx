import React from 'react';
import { useForm } from '@hooks/useForm';
import { useLanguage } from '@hooks/useLanguage';
import Input from '@components/ui/Input';
import Select from '@components/ui/Select';
import Button from '@components/ui/Button';
import { Note, IdentificationCard, Calendar, Phone, Envelope } from '@phosphor-icons/react';
import { supabase } from '@/lib/supabaseClient';

const CourseSubscriptionForm = () => {
    const { t } = useLanguage();

    const validate = (values) => {
        const errors = {};
        if (!values.full_name) errors.full_name = t('form.required', 'Required');
        if (!values.identity_card) errors.identity_card = t('form.required', 'Required');
        if (!values.birthday) errors.birthday = t('form.required', 'Required');
        if (!values.email) {
            errors.email = t('form.required', 'Required');
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = t('form.invalid_email', 'Invalid email');
        }
        if (!values.phone_number) errors.phone_number = t('form.required', 'Required');
        if (!values.course_level) errors.course_level = t('form.required', 'Required');
        if (!values.preferred_contact_method) errors.preferred_contact_method = t('form.required', 'Required');

        // preferred_schedules is an array, check if it has at least one item
        if (!values.preferred_schedules || values.preferred_schedules.length === 0) {
            errors.preferred_schedules = t('form.required', 'Select at least one schedule');
        }

        return errors;
    };

    const { values, errors, isSubmitting, isSuccess, handleChange, handleSubmit, setValues } = useForm(
        {
            full_name: '',
            identity_card: '',
            birthday: '',
            email: '',
            phone_number: '',
            course_level: '',
            preferred_schedules: [], // Array for multi-select equivalent (using checkboxes logic below)
            preferred_contact_method: ''
        },
        validate
    );

    const handleScheduleChange = (schedule) => {
        const currentSchedules = values.preferred_schedules || [];
        if (currentSchedules.includes(schedule)) {
            setValues({ ...values, preferred_schedules: currentSchedules.filter(s => s !== schedule) });
        } else {
            setValues({ ...values, preferred_schedules: [...currentSchedules, schedule] });
        }
    };

    const onSubmit = async (data) => {
        try {
            const { error } = await supabase.from('course_registrations').insert([{
                full_name: data.full_name,
                identity_card: data.identity_card,
                birthday: data.birthday,
                email: data.email,
                phone_number: data.phone_number,
                course_level: data.course_level,
                preferred_schedules: data.preferred_schedules,
                preferred_contact_method: data.preferred_contact_method
            }]);

            if (error) throw error;
        } catch (error) {
            console.error('Subscription error:', error);
            throw error;
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-10">
                <div className="w-20 h-20 bg-tide-teal/20 rounded-full flex items-center justify-center mx-auto mb-6 text-tide-teal animate-bounce">
                    <Note size={40} weight="fill" />
                </div>
                <h2 className="text-3xl text-white font-bold mb-4">{t('subscription.success_title', 'Registration Successful!')}</h2>
                <p className="text-foam/80 max-w-md mx-auto">
                    {t('subscription.success_msg', 'Your registration has been received. We will be in touch shortly.')}
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(onSubmit); }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                    label={t('form.full_name', 'Full Name')}
                    name="full_name"
                    value={values.full_name}
                    onChange={handleChange}
                    error={errors.full_name}
                    disabled={isSubmitting}
                    className="md:col-span-2"
                />

                <Input
                    label={t('form.identity', 'Identity Card / Passport')}
                    name="identity_card"
                    value={values.identity_card}
                    onChange={handleChange}
                    error={errors.identity_card}
                    disabled={isSubmitting}
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
                        { value: 'Basic', label: 'Basic' },
                        { value: 'Intermediate', label: 'Intermediate' },
                        { value: 'Advanced', label: 'Advanced' },
                        { value: 'Triathlon', label: 'Triathlon' },
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
                        { value: 'Email', label: 'Email' },
                        { value: 'WhatsApp', label: 'WhatsApp' },
                        { value: 'Call', label: 'Phone Call' },
                    ]}
                />
            </div>

            <div className="space-y-3">
                <label className="text-foam text-sm font-medium">{t('form.preferred_schedules', 'Preferred Schedules')}</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Morning (5:00 AM - 8:00 AM)', 'Mid-morning (8:00 AM - 11:00 AM)', 'Afternoon (12:00 PM - 4:00 PM)', 'Evening (5:00 PM - 8:00 PM)', 'Weekend'].map((schedule) => (
                        <label key={schedule} className="flex items-center space-x-3 p-3 bg-ocean-depth rounded-lg border border-white/5 cursor-pointer hover:border-tide-teal/50 transition-colors">
                            <input
                                type="checkbox"
                                value={schedule}
                                checked={(values.preferred_schedules || []).includes(schedule)}
                                onChange={() => handleScheduleChange(schedule)}
                                className="w-5 h-5 rounded border-foam/30 bg-white/5 text-tide-teal focus:ring-tide-teal focus:ring-offset-0"
                            />
                            <span className="text-foam/90 text-sm">{schedule}</span>
                        </label>
                    ))}
                </div>
                {errors.preferred_schedules && <p className="text-coral-spark text-xs mt-1">{errors.preferred_schedules}</p>}
            </div>

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
