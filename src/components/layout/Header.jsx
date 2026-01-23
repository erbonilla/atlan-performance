import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { List, Sun, Moon } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useTheme } from '@hooks/useTheme';
import { useLanguage } from '@hooks/useLanguage';
import MobileMenu from './MobileMenu';
import Button from '@components/ui/Button';
import Logo from '@components/ui/Logo';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();
    const location = useLocation();

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.courses'), path: '/courses' },
        { name: t('nav.programs'), path: '/programs' },
        // { name: t('nav.community'), path: '/community' },
        { name: t('nav.about'), path: '/about' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                           border-b border-white/10 dark:border-white/10 light:border-light-border
                           ${isScrolled
                        ? 'bg-abyss-navy/95 backdrop-blur-lg dark:bg-abyss-navy/95 light:bg-white/95 py-3 shadow-glass dark:shadow-glass light:shadow-lg'
                        : 'bg-abyss-navy/80 backdrop-blur-md dark:bg-abyss-navy/80 light:bg-white/80 py-4'
                }`}
            >
                <div className="container-atlan flex justify-between items-center">
                    {/* Logo */}
                    <NavLink to="/" className="z-50">
                        <Logo />
                    </NavLink>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className="relative group"
                            >
                                {({ isActive }) => (
                                    <>
                                        <div className={`relative px-5 py-2 rounded-md transition-all duration-300 ${
                                            isActive ? 'bg-white/5 dark:bg-white/5 light:bg-light-bg-tertiary' : ''
                                        }`}>
                                            <motion.span
                                                className={`text-sm font-extrabold tracking-wider uppercase transition-colors ${
                                                    isActive 
                                                        ? 'text-white dark:text-white light:text-light-text-primary' 
                                                        : 'text-foam dark:text-foam light:text-light-text-secondary'
                                                }`}
                                                whileHover={{ y: -1 }}
                                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                            >
                                                {link.name}
                                            </motion.span>
                                        </div>
                                        {isActive && (
                                            <motion.div
                                                className="absolute bottom-0 left-0 right-0 flex justify-center"
                                                layoutId="navbar-underline"
                                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                            >
                                                <div className="w-3/5 h-[3px] bg-coral-spark dark:bg-coral-spark light:bg-coral-light-optimized rounded-t-sm" />
                                            </motion.div>
                                        )}
                                        {!isActive && (
                                            <div className="absolute bottom-0 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <motion.div
                                                    className="w-3/5 h-[2px] bg-white/50 dark:bg-white/50 light:bg-light-text-tertiary rounded-t-sm"
                                                    initial={{ scaleX: 0 }}
                                                    whileHover={{ scaleX: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </div>
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}

                        {/* Controls */}
                        <div className="flex items-center gap-3 ml-8">
                            {/* Language Toggle */}
                            <div className="flex items-center gap-1.5 text-sm font-bold border border-white/20 dark:border-white/20 light:border-light-border rounded-md px-3 py-1.5">
                                <button
                                    onClick={() => language !== 'es' && toggleLanguage()}
                                    className={`transition-colors ${
                                        language === 'es' 
                                            ? 'text-white dark:text-white light:text-light-text-primary' 
                                            : 'text-tide-teal hover:text-white dark:text-tide-teal dark:hover:text-white light:text-teal-light-optimized light:hover:text-light-text-primary'
                                    }`}
                                >
                                    ES
                                </button>
                                <span className="text-foam/50 dark:text-foam/50 light:text-light-text-muted">|</span>
                                <button
                                    onClick={() => language !== 'en' && toggleLanguage()}
                                    className={`transition-colors ${
                                        language === 'en' 
                                            ? 'text-white dark:text-white light:text-light-text-primary' 
                                            : 'text-tide-teal hover:text-white dark:text-tide-teal dark:hover:text-white light:text-teal-light-optimized light:hover:text-light-text-primary'
                                    }`}
                                >
                                    EN
                                </button>
                            </div>

                            {/* Theme Toggle */}
                            <motion.button
                                onClick={toggleTheme}
                                className="text-foam hover:text-white transition-colors p-2 border border-white/20 rounded-md
                                         dark:text-foam dark:hover:text-white dark:border-white/20
                                         light:text-light-text-secondary light:hover:text-light-text-primary light:border-light-border"
                                aria-label="Toggle theme"
                                whileHover={{ rotate: 180, scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {theme === 'dark' ? <Sun size={20} weight="regular" /> : <Moon size={20} weight="regular" />}
                            </motion.button>

                            {/* Get Started Button */}
                            <NavLink to="/subscribe" className="ml-1">
                                <Button size="sm" variant="primary" className="hidden lg:flex uppercase font-bold">
                                    {t('nav.getStarted')}
                                </Button>
                            </NavLink>
                        </div>
                    </nav>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        {/* Mobile Lang Toggle */}
                        <button onClick={toggleLanguage} className="text-foam dark:text-foam light:text-light-text-secondary text-xs font-bold hover:text-white dark:hover:text-white light:hover:text-light-text-primary">
                            {language.toUpperCase()}
                        </button>

                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="text-white dark:text-white light:text-light-text-primary p-2"
                            aria-label="Open menu"
                        >
                            <List size={32} weight="bold" />
                        </button>
                    </div>
                </div>
            </header>

            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </>
    );
};

export default Header;
