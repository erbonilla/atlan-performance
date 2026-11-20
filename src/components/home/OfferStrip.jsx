import React from "react";
import { NavLink } from "react-router-dom";
import { MapPin, ArrowRight, Clock } from "@phosphor-icons/react";
import { useLanguage } from "@hooks/useLanguage";
import Button from "@components/ui/Button";

const OfferStrip = () => {
  const { t } = useLanguage();

  const plans = [
    {
      id: "dolphin",
      name: t("courses.dolphin.name"),
      price: t("courses.dolphin.price"),
      sessions: t("courses.dolphin.sessions"),
      cue: t("courses.dolphin.focus"),
      bestFor: t("courses.dolphin.best_for"),
      popular: false,
    },
    {
      id: "shark",
      name: t("courses.shark.name"),
      price: t("courses.shark.price"),
      sessions: t("courses.shark.sessions"),
      cue: t("courses.shark.training"),
      bestFor: t("courses.shark.best_for"),
      popular: false,
    },
    {
      id: "orca",
      name: t("courses.orca.name"),
      price: t("courses.orca.price"),
      sessions: t("courses.orca.sessions"),
      cue: t("courses.orca.preparation"),
      bestFor: t("courses.orca.best_for"),
      popular: true,
    },
  ];

  return (
    <section
      id="planes"
      className="section bg-abyss-navy dark:bg-abyss-navy light:bg-light-bg-primary relative scroll-mt-24"
    >
      <div className="container-atlan">
        <header className="mb-8 md:mb-10 max-w-prose">
          <h2 className="type-headline text-white dark:text-white light:text-light-text-primary mb-3">
            {t("home.offer.title")}
          </h2>
          <div className="mb-5 space-y-2">
            <p className="type-body text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary">
              {t("home.offer.description")}
            </p>
            <NavLink
              to="/programs"
              className="inline-flex min-h-12 items-center gap-1.5 type-meta text-sm font-heading font-semibold text-teal-bright dark:text-teal-bright light:text-teal-light-optimized underline-offset-4 hover:underline hover:text-foam dark:hover:text-foam light:hover:text-light-text-primary transition-colors"
            >
              {t("home.offer.programs_link")}
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </NavLink>
          </div>
          <div className="flex flex-col gap-2 type-meta text-foam-muted dark:text-foam-muted light:text-light-text-muted text-sm">
            <p className="inline-flex items-start gap-2">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-teal-bright dark:text-teal-bright light:text-teal-light-optimized"
                weight="fill"
                aria-hidden="true"
              />
              <span>{t("home.offer.location")}</span>
            </p>
            <p className="inline-flex items-start gap-2">
              <Clock
                size={18}
                className="mt-0.5 shrink-0 text-teal-bright dark:text-teal-bright light:text-teal-light-optimized"
                weight="fill"
                aria-hidden="true"
              />
              <span>{t("home.offer.session_times")}</span>
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {plans.map((plan) => (
            <NavLink
              key={plan.id}
              to="/courses"
              state={{ highlightPlan: plan.id }}
              className={`group relative flex flex-col rounded-lg border p-5 md:p-6 min-h-[10.5rem] transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-coral-spark light:focus-visible:outline-coral-light-optimized ${
                plan.popular
                  ? "border-tide-teal/50 bg-abyss-navy/80 dark:border-tide-teal/50 dark:bg-abyss-navy/80 light:border-teal-light-optimized/40 light:bg-light-bg-secondary"
                  : "border-white/10 bg-abyss-navy/60 dark:border-white/10 dark:bg-abyss-navy/60 light:border-light-border light:bg-light-bg-secondary hover:border-tide-teal/40"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-2.5 left-5 inline-flex items-center rounded-full bg-coral-spark px-3 py-1 type-label text-abyss-navy">
                  {t("courses.most_popular")}
                </span>
              )}
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="type-title text-white dark:text-white light:text-light-text-primary tracking-wide">
                  {plan.name}
                </h3>
                <p className="type-data text-teal-bright dark:text-teal-bright light:text-teal-light-optimized whitespace-nowrap text-right">
                  {plan.price}
                  <span className="block type-meta text-foam-muted dark:text-foam-muted light:text-light-text-muted font-body uppercase tracking-wide">
                    {t("courses.monthly_fee")}
                  </span>
                </p>
              </div>
              <p className="text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-sm mb-1">
                {plan.sessions}
              </p>
              <p className="text-foam-muted dark:text-foam-muted light:text-light-text-muted text-sm mb-4 leading-relaxed">
                {plan.cue}
              </p>
              <p className="mb-5 flex-grow text-sm leading-relaxed text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary">
                <span className="font-heading font-bold text-white dark:text-white light:text-light-text-primary">
                  {t("home.offer.best_for")}:
                </span>{" "}
                {plan.bestFor}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-coral-spark dark:text-coral-spark light:text-coral-light-optimized group-hover:gap-3 transition-all mt-auto">
                {t("home.offer.plan_cta", { plan: plan.name })}
                <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </span>
            </NavLink>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/15 pt-6 dark:border-white/15 light:border-light-border md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h3 className="font-heading text-lg font-bold text-white dark:text-white light:text-light-text-primary">
              {t("home.offer.guidance_title")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary md:text-base">
              {t("home.offer.guidance_description")}
            </p>
          </div>
          <Button
            as={NavLink}
            to="/contact"
            className="w-full shrink-0 md:w-auto"
          >
            {t("home.offer.guidance_cta")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferStrip;
