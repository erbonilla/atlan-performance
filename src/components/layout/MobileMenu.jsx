import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "@hooks/useLanguage";
import { useTheme } from "@hooks/useTheme";
import { X, WhatsappLogo, Sun, Moon } from "@phosphor-icons/react";
import Button from "@components/ui/Button";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const MobileMenu = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      previouslyFocused.current = document.activeElement;
      requestAnimationFrame(() => closeRef.current?.focus());
    } else {
      document.body.style.overflow = "unset";
      previouslyFocused.current?.focus?.();
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll(FOCUSABLE),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.courses"), path: "/courses" },
    { name: t("nav.programs"), path: "/programs" },
    { name: t("nav.about"), path: "/about" },
  ];

  return (
    <div
      id="mobile-menu"
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={t("a11y.mobile_menu", "Mobile navigation")}
      className="fixed inset-0 z-[100] bg-abyss-navy dark:bg-abyss-navy light:bg-light-bg-primary flex flex-col"
    >
      <div className="mobile-menu-safe-top flex justify-between items-center gap-3">
        <button
          type="button"
          onClick={toggleTheme}
          className="min-h-12 min-w-12 inline-flex items-center justify-center rounded-md border border-white/20 text-foam hover:text-white transition-colors
                               dark:border-white/20 dark:text-foam
                               light:border-light-border light:text-light-text-secondary light:hover:text-light-text-primary"
          aria-label={t("a11y.toggle_theme", "Toggle theme")}
        >
          {theme === "dark" ? (
            <Sun size={22} weight="regular" />
          ) : (
            <Moon size={22} weight="regular" />
          )}
        </button>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="min-h-12 min-w-12 inline-flex items-center justify-center text-foam hover:text-coral-spark transition-colors
                               dark:text-foam light:text-light-text-primary light:hover:text-coral-light-optimized"
          aria-label={t("a11y.close_menu", "Close menu")}
        >
          <X size={32} weight="bold" />
        </button>
      </div>

      <nav
        className="mobile-menu-safe-content flex-grow flex flex-col justify-center items-center gap-6 p-8"
        aria-label={t("a11y.primary_nav", "Primary")}
      >
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={({ isActive }) =>
              `min-h-12 inline-flex items-center justify-center text-center px-4 text-2xl sm:text-3xl font-heading font-bold transition-all duration-300 max-w-[20rem] break-words ${
                isActive
                  ? "text-teal-bright dark:text-teal-bright light:text-teal-light-optimized decoration-coral-spark light:decoration-coral-light-optimized underline underline-offset-8"
                  : "text-foam dark:text-foam light:text-light-text-primary hover:text-teal-bright dark:hover:text-teal-bright light:hover:text-teal-light-optimized"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}

        <div className="mt-6 flex w-full max-w-xs flex-col items-stretch gap-2 border-t border-white/15 pt-6 dark:border-white/15 light:border-light-border">
          <Button
            as={NavLink}
            to="/contact"
            onClick={onClose}
            size="lg"
            className="w-full"
          >
            {t("nav.headerCta")}
          </Button>
          <a
            href="https://wa.me/50683731111"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="min-h-12 inline-flex items-center justify-center gap-2 text-sm font-heading font-semibold text-teal-bright dark:text-teal-bright light:text-teal-light-optimized hover:text-foam dark:hover:text-foam light:hover:text-light-text-primary transition-colors"
          >
            <WhatsappLogo size={20} weight="fill" aria-hidden="true" />
            {t("home.close.whatsapp")}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
