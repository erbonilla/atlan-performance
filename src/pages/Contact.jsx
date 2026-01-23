import React from 'react';
import { useForm } from '@hooks/useForm';
import { useLanguage } from '@hooks/useLanguage';
import Input from '@components/ui/Input';
import Select from '@components/ui/Select';
import Textarea from '@components/ui/Textarea';
import Button from '@components/ui/Button';
import Card from '@components/ui/Card';
import { Envelope, WhatsappLogo, MapPin } from '@phosphor-icons/react';
import { supabase } from '@/lib/supabaseClient';

import { usePageTitle } from '@hooks/usePageTitle';

const Contact = () => {
    const { t } = useLanguage();
    usePageTitle('Contact');

    const validate = (values) => {
        const errors = {};
        if (!values.fullName) errors.fullName = t('form.required', 'Required');
        if (!values.email) {
            errors.email = t('form.required', 'Required');
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = t('form.invalid_email', 'Invalid email');
        }
        if (!values.selectedPlan) errors.selectedPlan = t('form.required', 'Required');
        return errors;
    };

    const { values, errors, isSubmitting, isSuccess, handleChange, handleSubmit } = useForm(
        { fullName: '', email: '', phone: '', selectedPlan: '', message: '' },
        validate
    );

    const onSubmit = async (data) => {
        try {
            const { error } = await supabase.from('contact_messages').insert([{
                full_name: data.fullName,
                email: data.email,
                phone: data.phone,
                plan_interest: data.selectedPlan,
                message: data.message
            }]);

            if (error) throw error;
        } catch (error) {
            console.error('Contact error:', error);
            throw error;
        }
    };

    return (
        <div className="container-atlan py-12 md:py-20 animate-fade-in">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl text-white dark:text-white light:text-light-text-primary font-heading font-bold mb-6">
                    {t('contact.title', 'Start Your Journey')}
                </h1>
                <p className="text-foam/70 dark:text-foam/70 light:text-light-text-secondary max-w-2xl mx-auto text-lg">
                    {t('contact.subtitle', 'Ready to train with Liquid Precision? Fill out the form below.')}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="p-6 flex items-start gap-4">
                        <div className="bg-foam/10 p-3 rounded-full text-foam
                                      dark:bg-foam/10 dark:text-foam
                                      light:bg-teal-light-optimized/10 light:text-teal-light-optimized">
                            <Envelope size={24} weight="duotone" />
                        </div>
                        <div>
                            <h3 className="text-white dark:text-white light:text-light-text-primary font-bold mb-1">Email</h3>
                            <p className="text-foam/70 dark:text-foam/70 light:text-light-text-secondary text-sm">info@atlanperformance.com</p>
                        </div>
                    </Card>

                    <Card className="p-6 flex items-start gap-4">
                        <div className="bg-foam/10 p-3 rounded-full text-foam
                                      dark:bg-foam/10 dark:text-foam
                                      light:bg-teal-light-optimized/10 light:text-teal-light-optimized">
                            <WhatsappLogo size={24} weight="duotone" />
                        </div>
                        <div>
                            <h3 className="text-white dark:text-white light:text-light-text-primary font-bold mb-1">WhatsApp</h3>
                            <p className="text-foam/70 dark:text-foam/70 light:text-light-text-secondary text-sm">+(506) 8373-1111</p>
                        </div>
                    </Card>

                    <Card className="p-6 flex items-start gap-4">
                        <div className="bg-foam/10 p-3 rounded-full text-foam
                                      dark:bg-foam/10 dark:text-foam
                                      light:bg-teal-light-optimized/10 light:text-teal-light-optimized">
                            <MapPin size={24} weight="duotone" />
                        </div>
                        <div>
                            <h3 className="text-white dark:text-white light:text-light-text-primary font-bold mb-1">Location</h3>
                            <p className="text-foam/70 dark:text-foam/70 light:text-light-text-secondary text-sm">Piscina, Instalaciones APAMAR, Zarcero, CR</p>
                        </div>
                    </Card>
                </div>

                {/* Form */}
                <Card className="lg:col-span-2 p-8 md:p-10 border-tide-teal/30 dark:border-tide-teal/30 light:border-teal-light-optimized/30">
                    {isSuccess ? (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-tide-teal/20 rounded-full flex items-center justify-center mx-auto mb-6 text-tide-teal 
                                          dark:bg-tide-teal/20 dark:text-tide-teal
                                          light:bg-teal-light-optimized/20 light:text-teal-light-optimized
                                          animate-bounce">
                                <WhatsappLogo size={40} weight="fill" />
                            </div>
                            <h2 className="text-3xl text-white dark:text-white light:text-light-text-primary font-bold mb-4">
                                {t('contact.success_title', 'Request Received!')}
                            </h2>
                            <p className="text-foam/80 dark:text-foam/80 light:text-light-text-secondary max-w-md mx-auto">
                                {t('contact.success_msg', 'We will contact you shortly to confirm your trial session.')}
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(onSubmit); }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label={t('form.full_name', 'Full Name')}
                                name="fullName"
                                value={values.fullName}
                                onChange={handleChange}
                                error={errors.fullName}
                                disabled={isSubmitting}
                                className="md:col-span-2"
                            />

                            <Input
                                label={t('form.email', 'Email')}
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                error={errors.email}
                                disabled={isSubmitting}
                            />

                            <Input
                                label={t('form.phone', 'Phone (WhatsApp)')}
                                name="phone"
                                type="tel"
                                value={values.phone}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />

                            <Select
                                label={t('form.plan', 'Interested Plan')}
                                name="selectedPlan"
                                value={values.selectedPlan}
                                onChange={(e) => handleChange({ target: { name: 'selectedPlan', value: e.target.value } })}
                                error={errors.selectedPlan}
                                disabled={isSubmitting}
                                className="md:col-span-2"
                                options={[
                                    { value: 'dolphin', label: 'Dolphin Plan' },
                                    { value: 'shark', label: 'Shark Plan' },
                                    { value: 'orca', label: 'Orca Plan' },
                                ]}
                            />

                            <Textarea
                                label={t('form.message', 'Message (Optional)')}
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className="md:col-span-2"
                            />

                            <div className="md:col-span-2 mt-4">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full shadow-glow-coral"
                                    isLoading={isSubmitting}
                                >
                                    {t('contact.submit', 'Send Request')}
                                </Button>
                            </div>
                        </form>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default Contact;
