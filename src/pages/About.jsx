import React from "react";
import { useLanguage } from "@hooks/useLanguage";
import { NavLink } from "react-router-dom";
import Card from "@components/ui/Card";
import Button from "@components/ui/Button";
import {
  Certificate,
  Medal,
  Waves,
  Strategy,
  Graph,
  ChartLineUp,
} from "@phosphor-icons/react";
import { useAnalytics } from "@hooks/useAnalytics";
import { usePageTitle } from "@hooks/usePageTitle";

const About = () => {
  const { t } = useLanguage();
  useAnalytics();
  usePageTitle(t("nav.about"));

  return (
    <div className="container-atlan py-12 md:py-20">
      {/* Header Section - All in one horizontal line */}
      <div className="mb-20 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          {/* Left Column: Name + Bio Text */}
          <div className="animate-slide-in-left space-y-6 lg:order-first order-last">
            {/* Eyebrow */}
            <p className="text-sm uppercase tracking-wider text-teal-bright dark:text-teal-bright light:text-teal-light-optimized font-bold mb-2">
              {t("about.eyebrow", "Head Coach & Founder")}
            </p>

            {/* Name */}
            <h1 className="type-display text-white dark:text-white light:text-light-text-primary mb-6">
              {t("about.name", "Edgar Bonilla")}
            </h1>

            {/* Bio Paragraphs */}
            <p className="text-base md:text-lg text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary leading-relaxed">
              {t(
                "about.bio.paragraph1",
                "My journey started in the water, but coaching became my obsession because of one question: ",
              )}
              <span className="text-teal-bright dark:text-teal-bright light:text-teal-light-optimized font-semibold">
                {" "}
                {t("about.bio.why", "why")}
              </span>
              {t(
                "about.bio.paragraph1_cont",
                " do some athletes improve while others stall?",
              )}
            </p>

            <p className="text-base md:text-lg text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary leading-relaxed">
              {t(
                "about.bio.paragraph2",
                'At Atlan, we don\'t rely on "magic formulas." We rely on ',
              )}
              <span className="text-teal-bright dark:text-teal-bright light:text-teal-light-optimized font-semibold">
                {t("about.bio.smartConsistency", "smart consistency")}
              </span>
              {t(
                "about.bio.paragraph2_cont",
                ", clear biomechanics, and habits you can actually sustain.",
              )}
            </p>

            <p className="text-base md:text-lg text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary leading-relaxed">
              {t(
                "about.bio.paragraph3",
                "My goal is to help you unlock your potential —as an athlete and as a person— with a plan built around your real life.",
              )}
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative animate-slide-in-right">
            <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-2xl overflow-hidden shadow-glow-teal dark:shadow-glow-teal light:shadow-lg border border-white/10 dark:border-white/10 light:border-light-border">
              <img
                src="/assets/images/about/profile_headshot_atlan.webp"
                alt="Coach Edgar Bonilla"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-abyss-navy/80 via-transparent to-transparent dark:from-abyss-navy/80 light:from-white/60"></div>
            </div>

            {/* Floating Quote */}
            <Card className="absolute -bottom-6 left-1/2 -translate-x-1/2 max-w-sm p-6 hidden md:block border-t border-t-coral-spark/40 dark:border-t-coral-spark/40 light:border-t-coral-light-optimized/50 animate-fade-in-up delay-500">
              <p className="italic text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-sm text-center">
                &ldquo;
                {t(
                  "about.quote",
                  "Train smart. Move with purpose. Progress follows.",
                )}
                &rdquo;
              </p>
            </Card>
          </div>
        </div>

        {/* Credentials Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up delay-200">
          <Card
            variant="subtle"
            className="p-4 flex items-center gap-3 hover:scale-105 transition-transform duration-300"
          >
            <Certificate
              size={32}
              className="text-teal-bright dark:text-teal-bright light:text-teal-light-optimized flex-shrink-0"
            />
            <span className="text-sm text-foam dark:text-foam light:text-light-text-secondary font-semibold leading-tight">
              {t(
                "about.credentials.swimming_coach",
                "International Certified Swimming Coach",
              )}
            </span>
          </Card>
          <Card
            variant="subtle"
            className="p-4 flex items-center gap-3 hover:scale-105 transition-transform duration-300"
          >
            <Certificate
              size={32}
              className="text-teal-bright dark:text-teal-bright light:text-teal-light-optimized flex-shrink-0"
            />
            <span className="text-sm text-foam dark:text-foam light:text-light-text-secondary font-semibold leading-tight">
              {t(
                "about.credentials.ironman",
                "International Ironman Certified Coach — Triathlon",
              )}
            </span>
          </Card>
          <Card
            variant="subtle"
            className="p-4 flex items-center gap-3 hover:scale-105 transition-transform duration-300"
          >
            <Strategy
              size={32}
              className="text-teal-bright dark:text-teal-bright light:text-teal-light-optimized flex-shrink-0"
            />
            <span className="text-sm text-foam dark:text-foam light:text-light-text-secondary font-semibold leading-tight">
              {t(
                "about.credentials.biomechanics",
                "Swimming Biomechanics Specialist",
              )}
            </span>
          </Card>
          <Card
            variant="subtle"
            className="p-4 flex items-center gap-3 hover:scale-105 transition-transform duration-300"
          >
            <Medal
              size={32}
              className="text-teal-bright dark:text-teal-bright light:text-teal-light-optimized flex-shrink-0"
            />
            <span className="text-sm text-foam dark:text-foam light:text-light-text-secondary font-semibold leading-tight">
              <span className="text-coral-spark dark:text-coral-spark light:text-coral-light-optimized font-bold">
                {t("about.credentials.years", "25+")}
              </span>{" "}
              {t("about.credentials.experience", "Years Coaching Experience")}
            </span>
          </Card>
        </div>
      </div>

      {/* Highlight Cards Section - 3 cards in a row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up delay-200">
        {/* Philosophy Card */}
        <Card className="p-6 border-t-2 border-t-tide-teal/50 dark:border-t-tide-teal/50 light:border-t-teal-light-optimized/50 hover:shadow-glow-teal dark:hover:shadow-glow-teal light:hover:shadow-lg transition-all duration-500 flex flex-col min-h-[320px]">
          <Waves
            size={32}
            className="text-teal-bright dark:text-teal-bright light:text-teal-light-optimized mb-4"
          />
          <h3 className="text-xl md:text-2xl text-foam dark:text-foam light:text-light-text-primary font-heading font-bold mb-3">
            {t(
              "about.highlights.philosophy.title",
              "Philosophy — Liquid Precision",
            )}
          </h3>
          <p className="text-sm md:text-base text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary leading-relaxed mb-4">
            {t(
              "about.highlights.philosophy.oneliner",
              "Train smart, not more. Every session has a clear purpose.",
            )}
          </p>
          <ul className="text-sm text-foam-muted dark:text-foam-muted light:text-light-text-tertiary leading-relaxed space-y-2">
            <li>
              •{" "}
              {t(
                "about.highlights.philosophy.bullet1",
                "Biomechanics-first technique cues",
              )}
            </li>
            <li>
              •{" "}
              {t(
                "about.highlights.philosophy.bullet2",
                "Sustainable consistency (no burnout)",
              )}
            </li>
          </ul>
        </Card>

        {/* Experience Card */}
        <Card className="p-6 border-t-2 border-t-tide-teal/50 dark:border-t-tide-teal/50 light:border-t-teal-light-optimized/50 hover:shadow-glow-teal dark:hover:shadow-glow-teal light:hover:shadow-lg transition-all duration-500 flex flex-col min-h-[320px]">
          <Graph
            size={32}
            className="text-teal-bright dark:text-teal-bright light:text-teal-light-optimized mb-4"
          />
          <h3 className="text-xl md:text-2xl text-foam dark:text-foam light:text-light-text-primary font-heading font-bold mb-3">
            {t(
              "about.highlights.experience.title",
              "Experience — Built in the Water",
            )}
          </h3>
          <p className="text-sm md:text-base text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary leading-relaxed mb-4">
            {t(
              "about.highlights.experience.oneliner",
              "15+ years coaching • 25+ years in the sport.",
            )}
          </p>
          <ul className="text-sm text-foam-muted dark:text-foam-muted light:text-light-text-tertiary leading-relaxed space-y-2">
            <li>
              •{" "}
              {t(
                "about.highlights.experience.bullet1",
                "Progression, recovery, and habits that stick",
              )}
            </li>
            <li>
              •{" "}
              {t(
                "about.highlights.experience.bullet2",
                "Race-ready planning across swim + triathlon",
              )}
            </li>
          </ul>
        </Card>

        {/* Mission Card */}
        <Card className="p-6 border-t-2 border-t-tide-teal/50 dark:border-t-tide-teal/50 light:border-t-teal-light-optimized/50 hover:shadow-glow-teal dark:hover:shadow-glow-teal light:hover:shadow-lg transition-all duration-500 flex flex-col min-h-[320px]">
          <ChartLineUp
            size={32}
            className="text-teal-bright dark:text-teal-bright light:text-teal-light-optimized mb-4"
          />
          <h3 className="text-xl md:text-2xl text-foam dark:text-foam light:text-light-text-primary font-heading font-bold mb-3">
            {t(
              "about.highlights.mission.title",
              "Mission — Unlock Your Potential",
            )}
          </h3>
          <p className="text-sm md:text-base text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary leading-relaxed mb-4">
            {t(
              "about.highlights.mission.oneliner",
              "Long-term development, built around real life.",
            )}
          </p>
          <ul className="text-sm text-foam-muted dark:text-foam-muted light:text-light-text-tertiary leading-relaxed space-y-2">
            <li>
              •{" "}
              {t(
                "about.highlights.mission.bullet1",
                "Longevity, clarity, and confidence",
              )}
            </li>
            <li>
              •{" "}
              {t(
                "about.highlights.mission.bullet2",
                "A plan aligned to your physiology + goals",
              )}
            </li>
          </ul>
        </Card>
      </div>

      {/* Contact CTA */}
      <div className="mt-20 text-center animate-fade-in-up delay-300">
        <Card className="max-w-3xl mx-auto p-10 border-tide-teal/30 dark:border-tide-teal/30 light:border-teal-light-optimized/30 bg-gradient-to-br from-abyss-navy/80 to-abyss-light/30 dark:from-abyss-navy/80 dark:to-abyss-light/30 light:from-teal-light-optimized/5 light:to-coral-light-optimized/5">
          <h2 className="text-3xl text-white dark:text-white light:text-light-text-primary font-bold mb-4">
            {t("about.contact_cta.title", "Ready to Start?")}
          </h2>
          <p className="text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary mb-8 max-w-xl mx-auto">
            {t(
              "about.contact_cta.subtitle",
              "Have questions about our programs or coaching philosophy? Get in touch with us today.",
            )}
          </p>
          <div className="flex justify-center gap-4">
            <Button
              as={NavLink}
              to="/contact"
              size="lg"
              className="shadow-glow-teal dark:shadow-glow-teal light:shadow-lg"
            >
              {t("about.contact_cta.button", "Contact Us")}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
