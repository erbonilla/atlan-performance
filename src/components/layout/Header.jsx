import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { List, Sun, Moon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useTheme } from "@hooks/useTheme";
import { useLanguage } from "@hooks/useLanguage";
import MobileMenu from "./MobileMenu";
import Button from "@components/ui/Button";
import Logo from "@components/ui/Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, changeLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: t("nav.courses"), path: "/courses" },
    { name: t("nav.programs"), path: "/programs" },
    { name: t("nav.about"), path: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                           border-b border-white/10 dark:border-white/10 light:border-light-border
                           ${
                             isScrolled
                               ? "header-safe-scrolled bg-abyss-navy/95 backdrop-blur-lg dark:bg-abyss-navy/95 light:bg-white/95 shadow-glass dark:shadow-glass light:shadow-lg"
                               : "header-safe-default bg-abyss-navy/80 backdrop-blur-md dark:bg-abyss-navy/80 light:bg-white/80"
                           }`}
      >
        <div className="container-atlan flex justify-between items-center">
          <NavLink to="/" className="z-50 min-h-12 inline-flex items-center">
            <Logo />
          </NavLink>

          <nav
            className="hidden xl:flex items-center gap-2"
            aria-label={t("a11y.primary_nav", "Primary")}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="relative group min-h-12 inline-flex items-center max-w-[13rem]"
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`relative px-4 py-3 rounded-md transition-all duration-300 ${
                        isActive
                          ? "bg-white/5 dark:bg-white/5 light:bg-light-bg-tertiary"
                          : ""
                      }`}
                    >
                      <motion.span
                        className={`block text-center text-sm font-extrabold tracking-wider uppercase leading-snug transition-colors ${
                          isActive
                            ? "text-white dark:text-white light:text-light-text-primary"
                            : "text-foam dark:text-foam light:text-light-text-secondary"
                        }`}
                        whileHover={{ y: -1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        {link.name}
                      </motion.span>
                    </div>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 flex justify-center"
                        layoutId="navbar-underline"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
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

            <div className="flex items-center gap-3 ml-5">
              <div
                className="flex items-center gap-1 text-sm font-bold border border-white/20 dark:border-white/20 light:border-light-border rounded-md p-1 min-h-12"
                role="group"
                aria-label={t("a11y.language", "Language")}
              >
                <button
                  type="button"
                  onClick={() => language !== "es" && changeLanguage("es")}
                  aria-pressed={language === "es"}
                  aria-label={t("a11y.language_es", "Switch to Spanish")}
                  className={`min-h-12 min-w-12 px-3 rounded transition-colors ${
                    language === "es"
                      ? "text-white dark:text-white light:text-light-text-primary bg-white/10 light:bg-light-bg-tertiary"
                      : "text-teal-bright hover:text-white dark:text-teal-bright dark:hover:text-white light:text-teal-light-optimized light:hover:text-light-text-primary"
                  }`}
                >
                  ES
                </button>
                <span
                  className="text-foam-muted dark:text-foam-muted light:text-light-text-muted"
                  aria-hidden="true"
                >
                  |
                </span>
                <button
                  type="button"
                  onClick={() => language !== "en" && changeLanguage("en")}
                  aria-pressed={language === "en"}
                  aria-label={t("a11y.language_en", "Switch to English")}
                  className={`min-h-12 min-w-12 px-3 rounded transition-colors ${
                    language === "en"
                      ? "text-white dark:text-white light:text-light-text-primary bg-white/10 light:bg-light-bg-tertiary"
                      : "text-teal-bright hover:text-white dark:text-teal-bright dark:hover:text-white light:text-teal-light-optimized light:hover:text-light-text-primary"
                  }`}
                >
                  EN
                </button>
              </div>

              <motion.button
                type="button"
                onClick={toggleTheme}
                className="text-foam hover:text-white transition-colors min-h-12 min-w-12 inline-flex items-center justify-center border border-white/20 rounded-md
                                         dark:text-foam dark:hover:text-white dark:border-white/20
                                         light:text-light-text-secondary light:hover:text-light-text-primary light:border-light-border"
                aria-label={t("a11y.toggle_theme", "Toggle theme")}
                whileHover={{ rotate: 180, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? (
                  <Sun size={20} weight="regular" />
                ) : (
                  <Moon size={20} weight="regular" />
                )}
              </motion.button>

              <Button
                as={NavLink}
                to="/contact"
                size="sm"
                variant="ghost"
                className="ml-1 hidden xl:inline-flex font-semibold"
              >
                {t("nav.headerCta")}
              </Button>
            </div>
          </nav>

          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={toggleLanguage}
              className="text-foam dark:text-foam light:text-light-text-secondary text-xs font-bold hover:text-white dark:hover:text-white light:hover:text-light-text-primary min-h-12 min-w-12 inline-flex items-center justify-center"
              aria-label={
                language === "es"
                  ? t("a11y.language_en", "Switch to English")
                  : t("a11y.language_es", "Switch to Spanish")
              }
            >
              {language === "es" ? "EN" : "ES"}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="text-white dark:text-white light:text-light-text-primary min-h-12 min-w-12 inline-flex items-center justify-center"
              aria-label={t("a11y.open_menu", "Open menu")}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <List size={32} weight="bold" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
