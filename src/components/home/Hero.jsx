import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "@hooks/useLanguage";
import Button from "@components/ui/Button";
import heroImage640 from "@assets/hero_home-640.webp";
import heroImage1024 from "@assets/hero_home-1024.webp";

const Hero = () => {
  const { t } = useLanguage();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative min-h-[72svh] md:min-h-[78vh] flex items-end sm:items-center overflow-hidden pb-12 pt-12 sm:pb-16 sm:pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage1024}
          srcSet={`${heroImage640} 640w, ${heroImage1024} 1024w`}
          sizes="100vw"
          alt={t("hero.image_alt")}
          className={`w-full h-full object-cover object-center ${reduceMotion ? "" : "animate-slow-zoom scale-105"}`}
          decoding="async"
          fetchpriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-abyss-navy via-abyss-navy/80 to-abyss-navy/40
                              dark:from-abyss-navy dark:via-abyss-navy/80 dark:to-abyss-navy/40
                              light:from-light-bg-primary/95 light:via-light-bg-primary/65 light:to-light-bg-primary/10"
          aria-hidden="true"
        />
      </div>

      <div className="container-atlan relative z-10 text-left">
        <div className="max-w-3xl">
          <h1 className="type-display text-white dark:text-white light:text-light-text-primary mb-5 drop-shadow-sm">
            {t("hero.title")}
          </h1>

          <p className="type-body type-prose text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-base md:text-lg mb-8 drop-shadow-sm">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
            <Button
              as={NavLink}
              to="/contact"
              size="lg"
              className="min-w-[200px] w-full sm:w-auto shadow-glow-coral"
            >
              {t("hero.cta")}
            </Button>
            <Button
              as="a"
              href="#planes"
              variant="ghost"
              size="lg"
              className="min-w-[200px] w-full sm:w-auto border border-foam/20 hover:border-foam/40"
            >
              {t("hero.secondary_cta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
