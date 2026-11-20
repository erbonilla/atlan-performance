import React from 'react';
import { NavLink } from 'react-router-dom';
import { InstagramLogo, WhatsappLogo, Envelope, MapPin } from '@phosphor-icons/react';
import { useLanguage } from '@hooks/useLanguage';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-abyss-navy dark:bg-abyss-navy light:bg-light-bg-secondary border-t border-white/5 dark:border-white/5 light:border-light-border pt-16 pb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-abyss-navy via-tide-teal to-abyss-navy 
                          dark:from-abyss-navy dark:via-tide-teal dark:to-abyss-navy
                          light:from-light-bg-primary light:via-teal-light-optimized light:to-light-bg-primary
                          opacity-30"></div>

            <div className="container-atlan">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-1">
                        <img
                            src="/assets/logo/atlan_logo_transparent.svg"
                            alt="Atlan Performance"
                            className="h-12 mb-4"
                            loading="lazy"
                            decoding="async"
                        />
                        <p className="type-body text-foam-muted dark:text-foam-muted light:text-light-text-secondary text-sm mb-6">
                            {t('hero.subtitle') || t('hero.description')}
                        </p>
                        <div className="flex gap-2">
                            <a
                                href="https://instagram.com/atlan.performance"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="min-h-12 min-w-12 inline-flex items-center justify-center text-foam-muted hover:text-coral-spark dark:text-foam-muted dark:hover:text-coral-spark light:text-light-text-tertiary light:hover:text-coral-light-optimized transition-colors"
                                aria-label="Instagram"
                            >
                                <InstagramLogo size={24} />
                            </a>
                            <a
                                href="https://wa.me/50683731111"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="min-h-12 min-w-12 inline-flex items-center justify-center text-foam-muted hover:text-teal-bright dark:text-foam-muted dark:hover:text-teal-bright light:text-light-text-tertiary light:hover:text-teal-light-optimized transition-colors"
                                aria-label="WhatsApp"
                            >
                                <WhatsappLogo size={24} />
                            </a>
                            <a
                                href="mailto:info@atlanperformance.com"
                                className="min-h-12 min-w-12 inline-flex items-center justify-center text-foam-muted hover:text-white dark:text-foam-muted dark:hover:text-white light:text-light-text-tertiary light:hover:text-light-text-primary transition-colors"
                                aria-label="Email"
                            >
                                <Envelope size={24} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="type-title text-base text-white dark:text-white light:text-light-text-primary mb-6">
                            {t('footer.navigation', 'Navigation')}
                        </h3>
                        <ul className="space-y-3 text-sm text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary">
                            <li><NavLink to="/" className="inline-flex min-h-12 items-center hover:text-teal-bright dark:hover:text-teal-bright light:hover:text-teal-light-optimized transition-colors">{t('nav.home')}</NavLink></li>
                            <li><NavLink to="/courses" className="inline-flex min-h-12 items-center hover:text-teal-bright dark:hover:text-teal-bright light:hover:text-teal-light-optimized transition-colors">{t('nav.courses')}</NavLink></li>
                            <li><NavLink to="/programs" className="inline-flex min-h-12 items-center hover:text-teal-bright dark:hover:text-teal-bright light:hover:text-teal-light-optimized transition-colors">{t('nav.programs')}</NavLink></li>
                            <li><NavLink to="/community" className="inline-flex min-h-12 items-center hover:text-teal-bright dark:hover:text-teal-bright light:hover:text-teal-light-optimized transition-colors">{t('nav.community')}</NavLink></li>
                            <li><NavLink to="/about" className="inline-flex min-h-12 items-center hover:text-teal-bright dark:hover:text-teal-bright light:hover:text-teal-light-optimized transition-colors">{t('nav.about')}</NavLink></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="type-title text-base text-white dark:text-white light:text-light-text-primary mb-6">
                            {t('footer.legal', 'Legal')}
                        </h3>
                        <ul className="space-y-3 text-sm text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary">
                            <li><NavLink to="/privacy-policy" className="inline-flex min-h-12 items-center hover:text-teal-bright dark:hover:text-teal-bright light:hover:text-teal-light-optimized transition-colors">{t('footer.privacy', 'Privacy Policy')}</NavLink></li>
                            <li><NavLink to="/terms-of-service" className="inline-flex min-h-12 items-center hover:text-teal-bright dark:hover:text-teal-bright light:hover:text-teal-light-optimized transition-colors">{t('footer.terms', 'Terms of Service')}</NavLink></li>
                            <li><NavLink to="/cookie-policy" className="inline-flex min-h-12 items-center hover:text-teal-bright dark:hover:text-teal-bright light:hover:text-teal-light-optimized transition-colors">{t('footer.cookies', 'Cookie Policy')}</NavLink></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="type-title text-base text-white dark:text-white light:text-light-text-primary mb-6">
                            {t('footer.contact', 'Contact')}
                        </h3>
                        <ul className="text-sm text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary">
                            <li>
                                <a
                                    href="mailto:info@atlanperformance.com"
                                    className="min-h-12 flex items-center gap-3 break-all hover:text-foam light:hover:text-light-text-primary transition-colors"
                                >
                                    <Envelope size={20} className="shrink-0 text-teal-bright dark:text-teal-bright light:text-teal-light-optimized" aria-hidden="true" />
                                    info@atlanperformance.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/50683731111"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="min-h-12 flex items-center gap-3 hover:text-foam light:hover:text-light-text-primary transition-colors"
                                >
                                    <WhatsappLogo size={20} className="shrink-0 text-teal-bright dark:text-teal-bright light:text-teal-light-optimized" aria-hidden="true" />
                                    +(506) 8373-1111
                                </a>
                            </li>
                            <li className="min-h-12 flex items-center gap-3">
                                <MapPin size={20} className="shrink-0 text-teal-bright dark:text-teal-bright light:text-teal-light-optimized" aria-hidden="true" />
                                <span>Zarcero, Costa Rica</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 dark:border-white/5 light:border-light-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 type-meta text-foam-muted dark:text-foam-muted light:text-light-text-muted">
                    <p>&copy; {currentYear} Atlan Performance. {t('footer.rights')}</p>
                    <p>{t('footer.tagline', 'Designed with Liquid Precision.')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
