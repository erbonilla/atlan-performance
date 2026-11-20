import React from "react";
import { useLanguage } from "@hooks/useLanguage";
import { useAnalytics } from "@hooks/useAnalytics";
import { usePageTitle } from "@hooks/usePageTitle";
import Button from "@components/ui/Button";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  const { t } = useLanguage();
  useAnalytics();
  usePageTitle(`404 - ${t("common.not_found_title", "Page Not Found")}`);

  return (
    <div className="container-atlan py-32 text-center animate-fade-in px-4">
      <p
        className="type-data text-coral-spark dark:text-coral-spark light:text-coral-light-optimized text-6xl md:text-8xl font-heading font-bold mb-4"
        aria-hidden="true"
      >
        404
      </p>
      <h1 className="type-headline text-white dark:text-white light:text-light-text-primary mb-4">
        {t("common.not_found_title", "Page Not Found")}
      </h1>
      <p className="type-body text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary mb-12 max-w-prose mx-auto break-words">
        {t(
          "common.not_found_desc",
          "The page you are looking for doesn't exist or has been moved.",
        )}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
        <Button
          as={NavLink}
          to="/"
          variant="primary"
          className="w-full sm:w-auto"
        >
          {t("common.back_home", "Back to Home")}
        </Button>
        <Button
          as={NavLink}
          to="/contact"
          variant="ghost"
          className="w-full sm:w-auto"
        >
          {t("nav.contact", "Contact")}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
