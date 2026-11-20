import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { useLanguage } from "@hooks/useLanguage";

const MethodologyBridge = () => {
  const { t } = useLanguage();

  const steps = [
    {
      title: t("home.method.steps.start.title"),
      description: t("home.method.steps.start.description"),
    },
    {
      title: t("home.method.steps.align.title"),
      description: t("home.method.steps.align.description"),
    },
    {
      title: t("home.method.steps.confirm.title"),
      description: t("home.method.steps.confirm.description"),
    },
  ];

  return (
    <section className="section bg-abyss-light/25 dark:bg-abyss-light/25 light:bg-light-bg-secondary relative">
      <div className="container-atlan grid items-start gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
        <div className="max-w-prose">
          <h2 className="type-headline text-white dark:text-white light:text-light-text-primary mb-4">
            {t("home.method.title")}
          </h2>
          <p className="type-body text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary mb-6">
            {t("home.method.description")}
          </p>
          <NavLink
            to="/about"
            className="inline-flex min-h-12 items-center gap-2 font-heading text-sm font-semibold text-coral-spark dark:text-coral-spark light:text-coral-light-optimized underline-offset-4 hover:underline hover:gap-3 transition-all"
          >
            {t("home.method.cta")}
            <ArrowRight size={16} weight="bold" aria-hidden="true" />
          </NavLink>

          <div className="mt-7 flex items-center gap-4 border-t border-white/15 pt-5 dark:border-white/15 light:border-light-border">
            <img
              src="/assets/images/about/profile_headshot_atlan.webp"
              alt=""
              className="h-16 w-16 shrink-0 rounded-lg border border-tide-teal/35 object-cover object-center dark:border-tide-teal/35 light:border-teal-light-optimized/35"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="font-heading text-base font-bold text-white dark:text-white light:text-light-text-primary">
                {t("about.name")}
              </p>
              <p className="text-sm leading-relaxed text-foam-muted dark:text-foam-muted light:text-light-text-muted">
                {t("about.credentials.biomechanics")}
                {" · "}
                {t("about.credentials.ironman")}
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-tide-teal/35 bg-abyss-navy p-6 shadow-glass dark:border-tide-teal/35 dark:bg-abyss-navy dark:shadow-glass light:border-teal-light-optimized/35 light:bg-light-bg-secondary light:shadow-lg md:p-8">
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coral-spark/80 to-transparent light:via-coral-light-optimized/70"
            aria-hidden="true"
          />
          <p className="max-w-xl font-heading text-lg font-semibold leading-snug text-foam dark:text-foam light:text-light-text-primary md:text-xl">
            {t("home.method.proof_note")}
          </p>

          <ol className="m-0 mt-6 list-none border-t border-white/15 p-0 dark:border-white/15 light:border-light-border">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-white/15 py-5 last:border-b-0 dark:border-white/15 light:border-light-border md:grid-cols-[4rem_minmax(0,1fr)] md:gap-6 md:py-6"
              >
                <span
                  className="type-data pt-1 text-teal-bright dark:text-teal-bright light:text-teal-light-optimized"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="type-title mb-2 text-white dark:text-white light:text-light-text-primary">
                    {step.title}
                  </h3>
                  <p className="type-body text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default MethodologyBridge;
