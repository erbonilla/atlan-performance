import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@hooks/useLanguage";
import { motion } from "framer-motion";
import Card from "@components/ui/Card";
import CourseCard from "@components/ui/CourseCard";
import Button from "@components/ui/Button";
import {
  MapPin,
  CalendarBlank,
  Clock,
  Info,
  User,
  Users,
  Thermometer,
  CaretRight,
  DownloadSimple,
  MapTrifold,
  ChatCircleDots,
} from "@phosphor-icons/react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAnalytics } from "@hooks/useAnalytics";
import { usePageTitle } from "@hooks/usePageTitle";

const Courses = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const plansRef = useRef(null);
  useAnalytics();
  usePageTitle(t("nav.courses"));

  const highlightPlan =
    typeof location.state?.highlightPlan === "string"
      ? location.state.highlightPlan
      : "";

  useEffect(() => {
    if (!highlightPlan || !plansRef.current) return undefined;
    const node = plansRef.current.querySelector(
      `[data-plan-id="${highlightPlan}"]`,
    );
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return undefined;
  }, [highlightPlan]);

  const courses = [
    {
      id: "dolphin",
      name: t("courses.dolphin.name"),
      price: t("courses.dolphin.price"),
      feeLabel: t("courses.monthly_fee"),
      description: t("courses.dolphin.description"),
      features: [
        t("courses.dolphin.sessions"),
        t("courses.dolphin.focus"),
        t("courses.dolphin.progression"),
      ],
      buttonText: t("courses.dolphin.button"),
      icon: "/icons/dolphin.svg",
      isPopular: false,
    },
    {
      id: "shark",
      name: t("courses.shark.name"),
      price: t("courses.shark.price"),
      feeLabel: t("courses.monthly_fee"),
      description: t("courses.shark.description"),
      features: [
        t("courses.shark.sessions"),
        t("courses.shark.levels"),
        t("courses.shark.training"),
      ],
      buttonText: t("courses.shark.button"),
      icon: "/icons/shark.svg",
      isPopular: false,
    },
    {
      id: "orca",
      name: t("courses.orca.name"),
      price: t("courses.orca.price"),
      feeLabel: t("courses.monthly_fee"),
      description: t("courses.orca.description"),
      features: [
        t("courses.orca.sessions"),
        t("courses.orca.levels"),
        t("courses.orca.preparation"),
      ],
      buttonText: t("courses.orca.button"),
      icon: "/icons/orca.svg",
      isPopular: true,
      popularBadge: t("courses.most_popular"),
    },
  ];

  const handleCourseSelect = (courseId) => {
    navigate("/contact", { state: { selectedPlan: courseId } });
  };

  const [copiedSchedule, setCopiedSchedule] = useState(false);

  const weeklySchedule = [
    {
      id: "monday",
      day: t("courses.days.monday", "LUNES"),
      color: "teal",
      slots: ["4:00 p.m.", "5:00 p.m.", "6:00 p.m."],
    },
    {
      id: "tuesday",
      day: t("courses.days.tuesday", "MARTES"),
      color: "muted",
      slots: [],
      noClasses: t("courses.days.no_classes", "Sin clases"),
    },
    {
      id: "wednesday",
      day: t("courses.days.wednesday", "MIÉRCOLES"),
      color: "teal",
      slots: ["4:00 p.m.", "5:00 p.m.", "6:00 p.m."],
    },
    {
      id: "thursday",
      day: t("courses.days.thursday", "JUEVES"),
      color: "coral",
      slots: ["7:00 p.m."],
    },
    {
      id: "friday",
      day: t("courses.days.friday", "VIERNES"),
      color: "coral",
      slots: ["4:00 p.m.", "5:00 p.m."],
    },
    {
      id: "saturday",
      day: t("courses.days.saturday", "SÁBADO"),
      color: "coral",
      slots: ["8:30 a.m."],
    },
  ];

  const handleSaveSchedule = () => {
    const text =
      `🏊 ${t("courses.schedule_title", "Horarios de clases")} - Atlan Performance\n` +
      `• ${t("courses.days.monday", "Lunes")}: 4:00 p.m., 5:00 p.m., 6:00 p.m.\n` +
      `• ${t("courses.days.tuesday", "Martes")}: ${t("courses.days.no_classes", "Sin clases")}\n` +
      `• ${t("courses.days.wednesday", "Miércoles")}: 4:00 p.m., 5:00 p.m., 6:00 p.m.\n` +
      `• ${t("courses.days.thursday", "Jueves")}: 7:00 p.m.\n` +
      `• ${t("courses.days.friday", "Viernes")}: 4:00 p.m., 5:00 p.m.\n` +
      `• ${t("courses.days.saturday", "Sábado")}: 8:30 a.m.\n` +
      `⏰ ${t("courses.schedule_arrive_early", "Llega 10 minutos antes")}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedSchedule(true);
      setTimeout(() => setCopiedSchedule(false), 2500);
    }
  };

  return (
    <div className="container-atlan py-12 md:py-20">
      {/* Header with Animation */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="type-display text-white dark:text-white light:text-light-text-primary mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("courses.title", "Courses & Schedules")}
        </motion.h1>
        <motion.p
          className="type-body text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary max-w-prose mx-auto text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {t(
            "courses.subtitle",
            "Choose the plan that fits your goals and train with us.",
          )}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center"
        >
          <NavLink
            to="/programs"
            className="inline-flex min-h-12 items-center gap-1.5 type-meta text-sm font-heading font-semibold text-teal-bright dark:text-teal-bright light:text-teal-light-optimized underline-offset-4 hover:underline hover:text-foam dark:hover:text-foam light:hover:text-light-text-primary transition-colors"
          >
            {t("courses.programs_link")}
            <CaretRight size={16} weight="bold" aria-hidden="true" />
          </NavLink>
        </motion.div>
      </motion.div>

      {/* Pricing Cards Grid */}
      <div
        ref={plansRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
      >
        {courses.map((course, index) => (
          <div
            key={course.id}
            data-plan-id={course.id}
            className={`rounded-2xl transition-shadow ${
              highlightPlan === course.id
                ? "ring-2 ring-tide-teal dark:ring-tide-teal light:ring-teal-light-optimized shadow-glow-teal/40"
                : ""
            }`}
          >
            <CourseCard
              course={course}
              icon={course.icon}
              isPopular={course.isPopular}
              onSelect={() => handleCourseSelect(course.id)}
              delay={index * 0.15}
            />
          </div>
        ))}
      </div>

      {/* Schedule & Location Grid with Animation */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {/* Schedule Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Card className="h-full p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <CalendarBlank
                  size={28}
                  className="text-coral-spark dark:text-coral-spark light:text-coral-light-optimized"
                  weight="regular"
                />
                <div>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-coral-spark dark:text-coral-spark light:text-coral-light-optimized block">
                    {t("courses.schedule_tagline", "Natación · Horario semanal")}
                  </span>
                  <h2 className="text-xl md:text-2xl text-white dark:text-white light:text-light-text-primary font-heading font-bold tracking-wide">
                    {t("courses.schedule_title", "Horarios de clases")}
                  </h2>
                </div>
              </div>
              <p className="text-foam-muted dark:text-foam-muted light:text-light-text-tertiary text-sm mb-5">
                {t("courses.schedule_subtitle", "Encuentra tu hora. Entrena con constancia.")}
              </p>

              {/* Weekly Grid (3 columns, 2 rows like the image) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                {weeklySchedule.map((col, index) => {
                  const isMuted = col.color === "muted";
                  const isTeal = col.color === "teal";
                  const isCoral = col.color === "coral";

                  return (
                    <motion.div
                      key={col.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 + index * 0.05, duration: 0.4 }}
                      className={`flex flex-col rounded-xl p-2.5 sm:p-3 border transition-colors ${
                        isMuted
                          ? "bg-white/[0.03] dark:bg-white/[0.03] light:bg-light-bg-secondary/60 border-white/5 dark:border-white/5 light:border-light-border/60"
                          : "bg-white/5 dark:bg-white/5 light:bg-light-bg-tertiary border-white/10 dark:border-white/10 light:border-light-border hover:border-white/20"
                      }`}
                    >
                      <span
                        className={`text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider text-center mb-2.5 ${
                          isTeal
                            ? "text-teal-bright dark:text-teal-bright light:text-teal-light-optimized"
                            : isCoral
                            ? "text-coral-spark dark:text-coral-spark light:text-coral-light-optimized"
                            : "text-foam-muted dark:text-foam-muted light:text-light-text-tertiary"
                        }`}
                      >
                        {col.day}
                      </span>

                      {col.slots.length > 0 ? (
                        <div className="space-y-1.5 flex-grow flex flex-col justify-center">
                          {col.slots.map((time, idx) => (
                            <div
                              key={idx}
                              className="px-1.5 py-1 text-center font-mono text-[11px] sm:text-xs font-semibold rounded-md bg-abyss-navy/70 dark:bg-abyss-navy/70 light:bg-white text-white dark:text-white light:text-light-text-primary border border-white/10 dark:border-white/10 light:border-light-border shadow-sm tracking-tight"
                            >
                              {time}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex-grow flex items-center justify-center py-4">
                          <span className="italic text-xs text-foam-muted dark:text-foam-muted light:text-light-text-tertiary text-center">
                            {col.noClasses}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Schedule Footer */}
            <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-light-border flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-white dark:text-white light:text-light-text-primary">
                <Clock
                  size={18}
                  className="text-coral-spark dark:text-coral-spark light:text-coral-light-optimized shrink-0"
                  weight="bold"
                />
                <span>
                  {t("courses.schedule_arrive_early", "Llega 10 minutos antes")}
                </span>
              </div>
              <button
                type="button"
                onClick={handleSaveSchedule}
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-coral-spark text-abyss-navy hover:bg-coral-spark/90 font-heading font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                {copiedSchedule
                  ? t("courses.schedule_saved", "¡Horario copiado!")
                  : t("courses.schedule_save", "Guarda este horario")}
              </button>
            </div>
          </Card>
        </motion.div>

        {/* Location Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Card className="h-full p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white dark:bg-white light:bg-light-bg-tertiary flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/logo/apamar_logo.jpg"
                  alt="Apamar"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl text-white dark:text-white light:text-light-text-primary font-heading font-bold tracking-wide">
                {t("courses.location_title")}
              </h2>
            </div>

            <div className="mb-4">
              <div className="flex items-start gap-2 mb-2">
                <MapPin
                  size={18}
                  className="text-white dark:text-white light:text-light-text-primary mt-1 shrink-0"
                />
                <div>
                  <p className="text-white dark:text-white light:text-light-text-primary font-semibold text-sm">
                    {t("courses.location_address")}
                  </p>
                  <p className="text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-sm">
                    {t("courses.location_address_full")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-foam-muted dark:text-foam-muted light:text-light-text-muted text-xs mb-3">
                {t("courses.location_from")}
              </p>
              <div className="flex gap-2 text-xs flex-wrap">
                <div className="flex items-center gap-1 px-3 py-2 bg-white/5 dark:bg-white/5 light:bg-light-bg-tertiary rounded-lg border border-white/10 dark:border-white/10 light:border-light-border text-white dark:text-white light:text-light-text-primary">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                  </svg>
                  <span className="text-white dark:text-white light:text-light-text-primary">
                    2 min
                  </span>
                </div>
                <div className="flex items-center gap-1 px-3 py-2 bg-white/5 dark:bg-white/5 light:bg-light-bg-tertiary rounded-lg border border-white/10 dark:border-white/10 light:border-light-border text-white dark:text-white light:text-light-text-primary">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 16H9v-2h2v2zm0-4H9V7h2v7z" />
                  </svg>
                  <span className="text-white dark:text-white light:text-light-text-primary">
                    12 min
                  </span>
                </div>
                <div className="flex items-center gap-1 px-3 py-2 bg-white/5 dark:bg-white/5 light:bg-light-bg-tertiary rounded-lg border border-white/10 dark:border-white/10 light:border-light-border text-white dark:text-white light:text-light-text-primary">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" />
                  </svg>
                  <span className="text-white dark:text-white light:text-light-text-primary">
                    12 min
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mb-4 flex-wrap">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=400+m+West+of+the+Park,+21101+Zarcero,+Costa+Rica"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px]"
              >
                <Button size="sm" className="w-full gap-2 shadow-glow-coral">
                  <MapTrifold size={18} aria-hidden="true" />
                  {t("courses.location_get_directions")}
                </Button>
              </a>
              <a
                href="https://www.google.com/maps/place/400+m+West+of+the+Park,+21101+Zarcero,+Costa+Rica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("courses.location_download")}
                title={t("courses.location_download")}
              >
                <Button size="sm" variant="ghost" className="min-w-12 px-4">
                  <DownloadSimple size={18} aria-hidden="true" />
                  <span className="sr-only">
                    {t("courses.location_download")}
                  </span>
                </Button>
              </a>
            </div>

            <div className="relative rounded-lg overflow-hidden h-48 border border-white/10">
              <iframe
                title="Atlan Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1388371353147!2d-84.09575492415844!3d9.922378990176885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3441865952f%3A0xe54495574578161f!2sPiscina%20Hatillo!5e0!3m2!1sen!2scr!4v1705608240000!5m2!1sen!2scr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a
              href="https://www.google.com/maps/place/400+m+West+of+the+Park,+21101+Zarcero,+Costa+Rica"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-white dark:text-white light:text-teal-light-optimized hover:text-foam-secondary dark:hover:text-foam-secondary light:hover:text-teal-dark text-sm font-semibold transition-colors"
            >
              {t("courses.location_open_maps")}
            </a>
          </Card>
        </motion.div>
      </motion.div>

      {/* Important Course Information Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Important Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Card className="p-6 md:p-8 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Info
                size={28}
                className="text-coral-spark dark:text-coral-spark light:text-coral-light-optimized"
                weight="fill"
              />
              <h2 className="text-xl text-white dark:text-white light:text-light-text-primary font-heading font-bold tracking-wide">
                {t("courses.important_info")}
              </h2>
            </div>
            <p className="text-foam-muted dark:text-foam-muted light:text-light-text-tertiary text-sm mb-6">
              {t("courses.important_applies")}
            </p>

            <div className="space-y-4">
              {/* Age Requirement */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.4 }}
              >
                <User
                  size={20}
                  className="text-white dark:text-white light:text-light-text-primary mt-0.5 shrink-0"
                />
                <p className="text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-sm">
                  {t("courses.info_age")}
                </p>
              </motion.div>

              {/* Duration */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.35, duration: 0.4 }}
              >
                <Clock
                  size={20}
                  className="text-white dark:text-white light:text-light-text-primary mt-0.5 shrink-0"
                />
                <p className="text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-sm">
                  {t("courses.info_duration")}
                </p>
              </motion.div>

              {/* Group Sessions */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.4 }}
              >
                <Users
                  size={20}
                  className="text-white dark:text-white light:text-light-text-primary mt-0.5 shrink-0"
                />
                <div>
                  <p className="text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-sm mb-2">
                    {t("courses.info_group")}
                  </p>
                  <ul className="ml-6 space-y-1">
                    <li className="text-foam-muted dark:text-foam-muted light:text-light-text-tertiary text-sm flex items-center gap-2">
                      <CaretRight
                        size={14}
                        className="text-white dark:text-white light:text-light-text-primary"
                      />
                      {t("courses.info_beginner")}
                    </li>
                    <li className="text-foam-muted dark:text-foam-muted light:text-light-text-tertiary text-sm flex items-center gap-2">
                      <CaretRight
                        size={14}
                        className="text-white dark:text-white light:text-light-text-primary"
                      />
                      {t("courses.info_intermediate")}
                    </li>
                    <li className="text-foam-muted dark:text-foam-muted light:text-light-text-tertiary text-sm flex items-center gap-2">
                      <CaretRight
                        size={14}
                        className="text-white dark:text-white light:text-light-text-primary"
                      />
                      {t("courses.info_advanced")}
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Rules */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.45, duration: 0.4 }}
              >
                <Info
                  size={20}
                  className="text-white dark:text-white light:text-light-text-primary mt-0.5 shrink-0"
                />
                <p className="text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-sm">
                  {t("courses.info_rules")}
                </p>
              </motion.div>

              {/* Pool Temperature */}
              <motion.div
                className="flex items-center justify-between p-4 bg-white/5 dark:bg-white/5 light:bg-light-bg-tertiary rounded-lg border border-white/10 dark:border-white/10 light:border-light-border mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <Thermometer
                    size={24}
                    className="text-white dark:text-white light:text-light-text-primary"
                  />
                  <span className="text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-sm">
                    {t("courses.pool_temp")}
                  </span>
                </div>
                <span className="text-white dark:text-white light:text-light-text-primary text-2xl font-bold">
                  28°C
                </span>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Contact Us Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <Card className="p-6 md:p-8 h-full bg-gradient-to-br from-tide-teal/10 to-coral-spark/10 border-tide-teal/20 dark:from-tide-teal/10 dark:to-coral-spark/10 dark:border-tide-teal/20 light:from-teal-light-optimized/10 light:to-coral-light-optimized/10 light:border-teal-light-optimized/25">
            <div className="flex items-center gap-3 mb-4">
              <ChatCircleDots
                size={28}
                className="text-teal-bright dark:text-teal-bright light:text-teal-light-optimized"
                weight="fill"
                aria-hidden="true"
              />
              <h2 className="type-title text-white dark:text-white light:text-light-text-primary tracking-wide">
                {t("courses.contact_card.title")}
              </h2>
            </div>
            <p className="text-foam-muted dark:text-foam-muted light:text-light-text-muted text-sm mb-6">
              {t("courses.contact_card.subtitle")}
            </p>

            <div className="space-y-6">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.4 }}
              >
                <p className="text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-sm leading-relaxed">
                  {t("courses.contact_card.description")}
                </p>
              </motion.div>

              {/* Response Time Info */}
              <motion.div
                className="flex items-start gap-3 p-4 bg-white/5 dark:bg-white/5 light:bg-light-bg-tertiary rounded-lg border border-white/10 dark:border-white/10 light:border-light-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.4 }}
              >
                <Clock
                  size={20}
                  className="text-teal-bright dark:text-teal-bright light:text-teal-light-optimized mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-white dark:text-white light:text-light-text-primary font-semibold text-sm mb-1">
                    {t("courses.contact_card.response_time")}
                  </p>
                  <p className="text-foam-muted dark:text-foam-muted light:text-light-text-muted text-xs">
                    {t("courses.contact_card.support_hours")}
                  </p>
                </div>
              </motion.div>

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.4 }}
              >
                <Button
                  as={NavLink}
                  to="/contact"
                  size="sm"
                  className="w-full shadow-glow-coral"
                >
                  {t("courses.contact_card.button")}
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
