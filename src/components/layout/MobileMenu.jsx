import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '@hooks/useLanguage';
import { X, InstagramLogo, WhatsappLogo, Envelope } from '@phosphor-icons/react';
import Button from '@components/ui/Button';

const MobileMenu = ({ isOpen, onClose }) => {
    const { t } = useLanguage();

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const links = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.programs'), path: '/programs' },
        { name: t('nav.courses'), path: '/courses' },
        { name: t('nav.community'), path: '/community' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <div className="fixed inset-0 z-[100] bg-abyss-navy/95 backdrop-blur-xl animate-fade-in flex flex-col">
            <div className="p-4 flex justify-end">
                <button
                    onClick={onClose}
                    className="p-2 text-foam hover:text-coral-spark transition-colors"
                    aria-label="Close menu"
                >
                    <X size={32} weight="bold" />
                </button>
            </div>

            <nav className="flex-grow flex flex-col justify-center items-center gap-8 p-8">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={onClose}
                        className={({ isActive }) =>
                            `text-3xl font-heading font-bold transition-all duration-300 ${isActive ? 'text-tide-teal decoration-coral-spark underline underline-offset-8' : 'text-foam hover:text-tide-teal'
                            }`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}

                <div className="mt-8">
                    <NavLink to="/contact" onClick={onClose}>
                        <Button size="lg">{t('hero.cta')}</Button>
                    </NavLink>
                </div>
            </nav>

            <div className="p-8 flex justify-center gap-6 text-foam/60">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-coral-spark transition-colors">
                    <InstagramLogo size={32} />
                </a>
                <a href="https://wa.me/50683731111" target="_blank" rel="noopener noreferrer" className="hover:text-tide-teal transition-colors">
                    <WhatsappLogo size={32} />
                </a>
                <a href="mailto:info@atlanperformance.com" className="hover:text-white transition-colors">
                    <Envelope size={32} />
                </a>
            </div>
        </div>
    );
};

export default MobileMenu;
