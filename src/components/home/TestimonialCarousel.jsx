import React, { useState, useEffect } from "react";
import { useLanguage } from "@hooks/useLanguage";
import { CaretLeft, CaretRight, Pause, Play } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";
import amandaBarquero from "@assets/amanda_barquero.webp";
import joaquinRodriguez from "@assets/joaquin_rodriguez.webp";
import steisyCerdas from "@assets/steici_cerdas.webp";
import agustinFrancesa from "@assets/agustin_francesa.webp";
import rodrigoRojas from "@assets/rodrigo_rojas.webp";
import { getCardsPerView, getCarouselWindow } from "@utils/testimonialCarousel";

const TestimonialCarousel = () => {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const testimonials = [
    {
      id: 1,
      image: amandaBarquero,
      nameKey: "amanda.name",
      roleKey: "amanda.role",
      outcomeKey: "amanda.outcome",
      excerptKey: "amanda.excerpt",
      contentKey: "amanda.content",
    },
    {
      id: 2,
      image: joaquinRodriguez,
      nameKey: "joaquin.name",
      roleKey: "joaquin.role",
      outcomeKey: "joaquin.outcome",
      excerptKey: "joaquin.excerpt",
      contentKey: "joaquin.content",
    },
    {
      id: 3,
      image: steisyCerdas,
      nameKey: "steisy.name",
      roleKey: "steisy.role",
      outcomeKey: "steisy.outcome",
      excerptKey: "steisy.excerpt",
      contentKey: "steisy.content",
    },
    {
      id: 4,
      image: agustinFrancesa,
      nameKey: "agustin.name",
      roleKey: "agustin.role",
      outcomeKey: "agustin.outcome",
      excerptKey: "agustin.excerpt",
      contentKey: "agustin.content",
    },
    {
      id: 5,
      image: rodrigoRojas,
      nameKey: "rodrigo.name",
      roleKey: "rodrigo.role",
      outcomeKey: "rodrigo.outcome",
      excerptKey: "rodrigo.excerpt",
      contentKey: "rodrigo.content",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView(window.innerWidth));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    currentIndex: safeIndex,
    maxIndex,
    visibleItems: visibleTestimonials,
  } = getCarouselWindow(testimonials, currentIndex, cardsPerView);

  useEffect(() => {
    if (isPaused || reduceMotion || cardsPerView === 1) return undefined;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [cardsPerView, currentIndex, isPaused, maxIndex, reduceMotion]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [cardsPerView]);

  return (
    <section className="section bg-abyss-light/30 dark:bg-abyss-light/30 light:bg-light-bg-secondary relative">
      <div className="container-atlan">
        <header className="max-w-prose mb-8 md:mb-10">
          <h2 className="type-headline text-white dark:text-white light:text-light-text-primary mb-3">
            {t("testimonials.title")}
          </h2>
          <p className="type-body text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary">
            {t("testimonials.subtitle")}
          </p>
        </header>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2
                                       bg-abyss-navy/80 hover:bg-tide-teal/40 border border-white/20 text-foam hover:text-white
                                       dark:bg-abyss-navy/80 dark:hover:bg-tide-teal/40 dark:border-white/20 dark:text-foam
                                       light:bg-white light:hover:bg-teal-light-optimized/15 light:border-light-border light:text-light-text-secondary light:hover:text-light-text-primary
                                       min-h-12 min-w-12 inline-flex items-center justify-center rounded-full transition-colors"
              aria-label={t("a11y.prev_testimonials", "Previous testimonials")}
            >
              <CaretLeft size={20} weight="bold" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2
                                       bg-abyss-navy/80 hover:bg-tide-teal/40 border border-white/20 text-foam hover:text-white
                                       dark:bg-abyss-navy/80 dark:hover:bg-tide-teal/40 dark:border-white/20 dark:text-foam
                                       light:bg-white light:hover:bg-teal-light-optimized/15 light:border-light-border light:text-light-text-secondary light:hover:text-light-text-primary
                                       min-h-12 min-w-12 inline-flex items-center justify-center rounded-full transition-colors"
              aria-label={t("a11y.next_testimonials", "Next testimonials")}
            >
              <CaretRight size={20} weight="bold" />
            </button>

            <div
              className="mx-12 md:mx-14"
              aria-live="polite"
              aria-atomic="true"
            >
              <motion.div
                key={`${cardsPerView}-${safeIndex}`}
                initial={reduceMotion ? false : { opacity: 0.35, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.24, ease: "easeOut" }
                }
                className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3"
              >
                {visibleTestimonials.map((testimonial) => {
                  const athleteName = t(`testimonials.${testimonial.nameKey}`);

                  return (
                    <div key={testimonial.id}>
                      <article className="h-full flex flex-col min-h-[16rem] border-t border-white/15 dark:border-white/15 light:border-light-border pt-5 pr-2">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-tide-teal/40 bg-abyss-light font-heading font-bold text-foam dark:border-tide-teal/40 dark:bg-abyss-light dark:text-foam light:border-teal-light-optimized/40 light:bg-light-bg-tertiary light:text-light-text-primary">
                            <span aria-hidden="true">
                              {athleteName.charAt(0)}
                            </span>
                            <img
                              src={testimonial.image}
                              alt=""
                              className="absolute inset-0 h-full w-full object-cover"
                              loading="lazy"
                              decoding="async"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="type-title text-base text-white dark:text-white light:text-light-text-primary truncate">
                              {athleteName}
                            </h3>
                            <p className="font-heading text-xs font-semibold tracking-wide text-foam-muted dark:text-foam-muted light:text-light-text-muted leading-snug">
                              {t(`testimonials.${testimonial.roleKey}`)}
                            </p>
                          </div>
                        </div>

                        <p className="mb-2 font-heading text-sm font-semibold tracking-wide text-teal-bright dark:text-teal-bright light:text-teal-light-optimized">
                          {t(`testimonials.${testimonial.outcomeKey}`)}
                        </p>

                        <p className="type-body text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-sm md:text-base break-words min-w-0">
                          “{t(`testimonials.${testimonial.excerptKey}`)}”
                        </p>

                        <details className="group mt-4 border-t border-white/10 pt-3 dark:border-white/10 light:border-light-border">
                          <summary className="min-h-12 cursor-pointer list-none inline-flex items-center font-heading text-sm font-semibold text-coral-spark dark:text-coral-spark light:text-coral-light-optimized underline-offset-4 hover:underline focus-visible:rounded-sm">
                            {t("testimonials.read_full")}
                          </summary>
                          <p className="type-body text-foam-muted dark:text-foam-muted light:text-light-text-secondary pb-2 text-sm break-words">
                            “{t(`testimonials.${testimonial.contentKey}`)}”
                          </p>
                        </details>
                      </article>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          <div className="flex justify-start items-center gap-3 mt-6 md:mt-8 mx-12 md:mx-14">
            <span className="type-data text-foam-muted dark:text-foam-muted light:text-light-text-muted md:hidden">
              {t("testimonials.position", {
                current: safeIndex + 1,
                total: testimonials.length,
              })}
            </span>
            <div
              className="hidden gap-1 md:flex"
              role="group"
              aria-label={t("a11y.testimonial_slides", "Testimonial slides")}
            >
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`min-h-12 min-w-12 inline-flex items-center justify-center rounded-full transition-colors ${
                    index === safeIndex
                      ? "text-teal-bright dark:text-teal-bright light:text-teal-light-optimized"
                      : "text-foam-muted hover:text-foam-secondary dark:text-foam-muted dark:hover:text-foam-secondary light:text-light-border-strong light:hover:text-light-text-tertiary"
                  }`}
                  aria-label={t("a11y.go_to_slide", "Go to slide {{n}}", {
                    n: index + 1,
                  })}
                  aria-current={index === safeIndex ? "true" : undefined}
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all ${
                      index === safeIndex
                        ? "w-6 bg-current"
                        : "w-1.5 bg-current"
                    }`}
                  />
                </button>
              ))}
            </div>

            {!reduceMotion && cardsPerView > 1 && (
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="min-h-12 min-w-12 inline-flex items-center justify-center rounded-full border border-white/20 light:border-light-border text-foam light:text-light-text-secondary hover:text-white light:hover:text-light-text-primary transition-colors"
                aria-label={
                  isPaused
                    ? t("a11y.play_carousel", "Play testimonials")
                    : t("a11y.pause_carousel", "Pause testimonials")
                }
                aria-pressed={isPaused}
              >
                {isPaused ? (
                  <Play size={18} weight="fill" />
                ) : (
                  <Pause size={18} weight="fill" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
