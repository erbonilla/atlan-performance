import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "@hooks/useLanguage";
import Button from "@components/ui/Button";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react";

const WHATSAPP_URL = "https://wa.me/50683731111";

const ConversionClose = () => {
  const { t } = useLanguage();

  return (
    <section className="section bg-abyss-navy dark:bg-abyss-navy light:bg-light-bg-primary relative">
      <div className="container-atlan">
        <div className="max-w-prose">
          <h2 className="type-headline text-foam dark:text-foam light:text-light-text-primary mb-3">
            {t("home.close.title")}
          </h2>

          <p className="type-body text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary mb-2">
            {t("home.close.description")}
          </p>

          <p className="type-meta text-foam-muted dark:text-foam-muted light:text-light-text-muted mb-8 text-sm">
            {t("home.close.response_time")}
          </p>

          <div className="flex flex-col gap-3 md:flex-row md:gap-4">
            <Button
              as={NavLink}
              to="/contact"
              size="lg"
              className="w-full gap-2 shadow-glow-coral md:flex-1"
            >
              {t("home.close.form")}
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </Button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg border border-foam/25 px-6 py-3 text-center text-foam font-heading font-semibold tracking-label md:flex-1
                                      hover:border-tide-teal/60 hover:bg-tide-teal/10 transition-colors
                                      dark:border-foam/25 dark:text-foam
                                      light:border-light-border light:text-light-text-primary light:hover:border-teal-light-optimized light:hover:bg-teal-light-optimized/10"
            >
              <WhatsappLogo
                size={22}
                weight="fill"
                className="text-teal-bright dark:text-teal-bright light:text-teal-light-optimized"
                aria-hidden="true"
              />
              {t("home.close.whatsapp")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionClose;
