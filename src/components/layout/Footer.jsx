import React from 'react';
import { NavLink } from 'react-router-dom';
import { InstagramLogo, WhatsappLogo, Envelope, MapPin, FacebookLogo } from '@phosphor-icons/react';
import { useLanguage } from '@hooks/useLanguage';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-abyss-navy dark:bg-abyss-navy light:bg-light-bg-secondary border-t border-white/5 dark:border-white/5 light:border-light-border pt-16 pb-8 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-abyss-navy via-tide-teal to-abyss-navy 
                          dark:from-abyss-navy dark:via-tide-teal dark:to-abyss-navy
                          light:from-light-bg-primary light:via-teal-light-optimized light:to-light-bg-primary
                          opacity-30"></div>

            <div className="container-atlan">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <img
                            src="/assets/logo/atlan_logo_transparent.svg"
                            alt="Atlan Performance"
                            className="h-12 mb-4"
                        />
                        <p className="text-foam/60 dark:text-foam/60 light:text-light-text-secondary text-sm leading-relaxed mb-6">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-foam/60 hover:text-coral-spark dark:text-foam/60 dark:hover:text-coral-spark light:text-light-text-tertiary light:hover:text-coral-light-optimized transition-colors">
                                <InstagramLogo size={24} />
                            </a>
                            <a href="#" className="text-foam/60 hover:text-tide-teal dark:text-foam/60 dark:hover:text-tide-teal light:text-light-text-tertiary light:hover:text-teal-light-optimized transition-colors">
                                <FacebookLogo size={24} />
                            </a>
                            <a href="#" className="text-foam/60 hover:text-white dark:text-foam/60 dark:hover:text-white light:text-light-text-tertiary light:hover:text-light-text-primary transition-colors">
                                <WhatsappLogo size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white dark:text-white light:text-light-text-primary font-bold mb-6 font-heading">Navigation</h4>
                        <ul className="space-y-3 text-sm text-foam/70 dark:text-foam/70 light:text-light-text-secondary">
                            <li><NavLink to="/" className="hover:text-tide-teal dark:hover:text-tide-teal light:hover:text-teal-light-optimized transition-colors">{t('nav.home')}</NavLink></li>
                            <li><NavLink to="/programs" className="hover:text-tide-teal dark:hover:text-tide-teal light:hover:text-teal-light-optimized transition-colors">{t('nav.programs')}</NavLink></li>
                            <li><NavLink to="/courses" className="hover:text-tide-teal dark:hover:text-tide-teal light:hover:text-teal-light-optimized transition-colors">{t('nav.courses')}</NavLink></li>
                            <li><NavLink to="/about" className="hover:text-tide-teal dark:hover:text-tide-teal light:hover:text-teal-light-optimized transition-colors">{t('nav.about')}</NavLink></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white dark:text-white light:text-light-text-primary font-bold mb-6 font-heading">Legal</h4>
                        <ul className="space-y-3 text-sm text-foam/70 dark:text-foam/70 light:text-light-text-secondary">
                            <li><NavLink to="/privacy-policy" className="hover:text-tide-teal dark:hover:text-tide-teal light:hover:text-teal-light-optimized transition-colors">Privacy Policy</NavLink></li>
                            <li><NavLink to="/terms-of-service" className="hover:text-tide-teal dark:hover:text-tide-teal light:hover:text-teal-light-optimized transition-colors">Terms of Service</NavLink></li>
                            <li><NavLink to="/cookie-policy" className="hover:text-tide-teal dark:hover:text-tide-teal light:hover:text-teal-light-optimized transition-colors">Cookie Policy</NavLink></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white dark:text-white light:text-light-text-primary font-bold mb-6 font-heading">Contact</h4>
                        <ul className="space-y-4 text-sm text-foam/70 dark:text-foam/70 light:text-light-text-secondary">
                            <li className="flex items-start gap-3">
                                <Envelope size={20} className="text-tide-teal dark:text-tide-teal light:text-teal-light-optimized mt-0.5" />
                                <span>info@atlanperformance.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <WhatsappLogo size={20} className="text-tide-teal dark:text-tide-teal light:text-teal-light-optimized mt-0.5" />
                                <span>+(506) 8373-1111</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-tide-teal dark:text-tide-teal light:text-teal-light-optimized mt-0.5" />
                                <span>San José, Costa Rica</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 dark:border-white/5 light:border-light-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foam/40 dark:text-foam/40 light:text-light-text-muted">
                    <p>&copy; {currentYear} Atlan Performance. {t('footer.rights')}</p>
                    <p>Designed with Liquid Precision.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
