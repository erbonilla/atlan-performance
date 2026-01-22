import React from 'react';
import { NavLink } from 'react-router-dom';
import { InstagramLogo, WhatsappLogo, Envelope, MapPin, FacebookLogo } from '@phosphor-icons/react';
import { useLanguage } from '@hooks/useLanguage';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-abyss-navy border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-abyss-navy via-tide-teal to-abyss-navy opacity-30"></div>

            <div className="container-atlan">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <img
                            src="/assets/logo/atlan_logo_transparent.svg"
                            alt="Atlan Performance"
                            className="h-12 mb-4"
                        />
                        <p className="text-foam/60 text-sm leading-relaxed mb-6">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-foam/60 hover:text-coral-spark transition-colors">
                                <InstagramLogo size={24} />
                            </a>
                            <a href="#" className="text-foam/60 hover:text-tide-teal transition-colors">
                                <FacebookLogo size={24} />
                            </a>
                            <a href="#" className="text-foam/60 hover:text-white transition-colors">
                                <WhatsappLogo size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-heading">Navigation</h4>
                        <ul className="space-y-3 text-sm text-foam/70">
                            <li><NavLink to="/" className="hover:text-tide-teal transition-colors">{t('nav.home')}</NavLink></li>
                            <li><NavLink to="/programs" className="hover:text-tide-teal transition-colors">{t('nav.programs')}</NavLink></li>
                            <li><NavLink to="/courses" className="hover:text-tide-teal transition-colors">{t('nav.courses')}</NavLink></li>
                            <li><NavLink to="/about" className="hover:text-tide-teal transition-colors">{t('nav.about')}</NavLink></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-heading">Legal</h4>
                        <ul className="space-y-3 text-sm text-foam/70">
                            <li><NavLink to="/privacy-policy" className="hover:text-tide-teal transition-colors">Privacy Policy</NavLink></li>
                            <li><NavLink to="/terms-of-service" className="hover:text-tide-teal transition-colors">Terms of Service</NavLink></li>
                            <li><NavLink to="/cookie-policy" className="hover:text-tide-teal transition-colors">Cookie Policy</NavLink></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-heading">Contact</h4>
                        <ul className="space-y-4 text-sm text-foam/70">
                            <li className="flex items-start gap-3">
                                <Envelope size={20} className="text-tide-teal mt-0.5" />
                                <span>info@atlanperformance.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <WhatsappLogo size={20} className="text-tide-teal mt-0.5" />
                                <span>+(506) 8373-1111</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-tide-teal mt-0.5" />
                                <span>San José, Costa Rica</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foam/40">
                    <p>&copy; {currentYear} Atlan Performance. {t('footer.rights')}</p>
                    <p>Designed with Liquid Precision.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
