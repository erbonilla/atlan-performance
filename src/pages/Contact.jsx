import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "@hooks/useForm";
import { useLanguage } from "@hooks/useLanguage";
import Input from "@components/ui/Input";
import Select from "@components/ui/Select";
import Textarea from "@components/ui/Textarea";
import Button from "@components/ui/Button";
import Card from "@components/ui/Card";
import FormAlert from "@components/forms/FormAlert";
import { Envelope, WhatsappLogo, MapPin } from "@phosphor-icons/react";
import { supabase } from "@/lib/supabaseClient";

import { usePageTitle } from "@hooks/usePageTitle";

const WHATSAPP_NUMBER = "50683731111";
const FIELD_LIMITS = {
  fullName: 120,
  email: 254,
  phone: 40,
  message: 2000,
};

const buildWhatsAppUrl = ({
  fullName,
  email,
  phone,
  planDisplay,
  message,
  labels,
}) => {
  const lines = [
    `*${labels.requestTitle}*`,
    "",
    labels.defaultMsg,
    "",
    `*${labels.contactDataLabel}:*`,
    `*${labels.nameLabel}:* ${fullName}`,
  ];

  if (email) lines.push(`*${labels.emailLabel}:* ${email}`);
  if (phone) lines.push(`*${labels.phoneLabel}:* ${phone}`);
  if (planDisplay) lines.push(`*${labels.planLabel}:* ${planDisplay}`);
  if (message) {
    lines.push("", `*${labels.messageLabel}:*`, message);
  }

  const text = lines.join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

const Contact = () => {
  const { t } = useLanguage();
  const location = useLocation();
  usePageTitle(t("nav.contact"));
  const pendingWhatsAppUrl = useRef(null);

  const validate = (values) => {
    const errors = {};
    const fullName = values.fullName?.trim() || "";
    const email = values.email?.trim() || "";

    if (!fullName) {
      errors.fullName = t("form.required", "This field is required");
    } else if (fullName.length > FIELD_LIMITS.fullName) {
      errors.fullName = t("form.too_long", "Please shorten this field");
    }

    if (!email) {
      errors.email = t("form.required", "This field is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = t("form.invalid_email", "Please enter a valid email");
    } else if (email.length > FIELD_LIMITS.email) {
      errors.email = t("form.too_long", "Please shorten this field");
    }

    if (values.phone?.length > FIELD_LIMITS.phone) {
      errors.phone = t("form.too_long", "Please shorten this field");
    }

    if (!values.selectedPlan) {
      errors.selectedPlan = t("form.required", "This field is required");
    }

    if (values.message?.length > FIELD_LIMITS.message) {
      errors.message = t("form.too_long", "Please shorten this field");
    }

    return errors;
  };

  const preselectedPlan =
    typeof location.state?.selectedPlan === "string"
      ? location.state.selectedPlan
      : "";

  const {
    values,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
    setValues,
    clearFormError,
    resetForm,
  } = useForm(
    {
      fullName: "",
      email: "",
      phone: "",
      selectedPlan: preselectedPlan,
      message: "",
    },
    validate,
  );

  useEffect(() => {
    if (preselectedPlan) {
      setValues((prev) => ({ ...prev, selectedPlan: preselectedPlan }));
    }
  }, [preselectedPlan, setValues]);

  const planOptions = [
    { value: "dolphin", label: t("courses.dolphin.name") },
    { value: "shark", label: t("courses.shark.name") },
    { value: "orca", label: t("courses.orca.name") },
  ];

  const resolveFormErrorMessage = (codeOrMessage) => {
    if (codeOrMessage === "offline") {
      return t(
        "form.offline",
        "You appear to be offline. Check your connection and try again, or continue on WhatsApp.",
      );
    }
    if (codeOrMessage === "unexpected" || !codeOrMessage) {
      return t(
        "form.submit_error",
        "We could not save your request. Try again or continue on WhatsApp.",
      );
    }
    if (codeOrMessage === "save_failed") {
      return t(
        "form.submit_error",
        "We could not save your request. Try again or continue on WhatsApp.",
      );
    }
    return codeOrMessage;
  };

  const openPendingWhatsApp = () => {
    if (pendingWhatsAppUrl.current) {
      window.open(pendingWhatsAppUrl.current, "_blank", "noopener,noreferrer");
    }
  };

  const onSubmit = async (data) => {
    const trimmed = {
      fullName: data.fullName.trim(),
      email: data.email.trim(),
      phone: (data.phone || "").trim(),
      selectedPlan: data.selectedPlan,
      message: (data.message || "").trim(),
    };

    const selectedPlanOption = planOptions.find(
      (p) => p.value === trimmed.selectedPlan,
    );
    const planDisplay = selectedPlanOption
      ? selectedPlanOption.label
      : trimmed.selectedPlan;

    const labels = {
      requestTitle: t("contact.request_title", "New Contact Request"),
      defaultMsg: t(
        "contact.default_message",
        "Hello, I am interested in your services.",
      ),
      contactDataLabel: t("contact.my_contact_data", "Contact Details"),
      nameLabel: t("form.full_name", "Full Name"),
      emailLabel: t("form.email", "Email"),
      phoneLabel: t("form.phone", "Phone"),
      planLabel: t("form.plan", "Interested Plan"),
      messageLabel: t("form.message", "Message"),
    };

    const whatsappUrl = buildWhatsAppUrl({
      ...trimmed,
      planDisplay,
      labels,
    });
    pendingWhatsAppUrl.current = whatsappUrl;

    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      const err = new Error("offline");
      throw err;
    }

    if (supabase) {
      const { error } = await supabase.from("contact_messages").insert([
        {
          full_name: trimmed.fullName,
          email: trimmed.email,
          phone: trimmed.phone,
          plan_interest: trimmed.selectedPlan,
          message: trimmed.message,
        },
      ]);

      if (error) {
        console.error("Contact save error:", error);
        throw new Error("save_failed");
      }
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const mapSubmitError = (error) => {
    if (
      error?.message === "offline" ||
      (typeof navigator !== "undefined" && !navigator.onLine)
    ) {
      return "offline";
    }
    if (error?.message === "save_failed") return "save_failed";
    if (
      /failed to fetch|networkerror|network request failed|load failed/i.test(
        error?.message || "",
      )
    ) {
      return "offline";
    }
    return "unexpected";
  };

  const submitForm = () => handleSubmit(onSubmit, { mapSubmitError });

  return (
    <div className="container-atlan py-12 md:py-20 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="type-display text-white dark:text-white light:text-light-text-primary mb-6">
          {t("contact.title", "Start Your Journey")}
        </h1>
        <p className="type-body text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary max-w-prose mx-auto text-lg">
          {t(
            "contact.subtitle",
            "Ready to train with Liquid Precision? Fill out the form below.",
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-6 flex items-start gap-4 min-w-0">
            <div
              className="bg-foam/10 p-3 rounded-full text-foam shrink-0
                                      dark:bg-foam/10 dark:text-foam
                                      light:bg-teal-light-optimized/10 light:text-teal-light-optimized"
            >
              <Envelope size={24} weight="duotone" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3 className="type-title text-base text-white dark:text-white light:text-light-text-primary mb-1">
                {t("contact.info_email", "Email")}
              </h3>
              <a
                href="mailto:info@atlanperformance.com"
                className="text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-sm break-all hover:text-teal-bright dark:hover:text-teal-bright light:hover:text-teal-light-optimized transition-colors"
              >
                info@atlanperformance.com
              </a>
            </div>
          </Card>

          <Card className="p-6 flex items-start gap-4 min-w-0">
            <div
              className="bg-foam/10 p-3 rounded-full text-foam shrink-0
                                      dark:bg-foam/10 dark:text-foam
                                      light:bg-teal-light-optimized/10 light:text-teal-light-optimized"
            >
              <WhatsappLogo size={24} weight="duotone" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3 className="type-title text-base text-white dark:text-white light:text-light-text-primary mb-1">
                WhatsApp
              </h3>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-sm break-words hover:text-teal-bright dark:hover:text-teal-bright light:hover:text-teal-light-optimized transition-colors"
              >
                +(506) 8373-1111
              </a>
            </div>
          </Card>

          <Card className="p-6 flex items-start gap-4 min-w-0">
            <div
              className="bg-foam/10 p-3 rounded-full text-foam shrink-0
                                      dark:bg-foam/10 dark:text-foam
                                      light:bg-teal-light-optimized/10 light:text-teal-light-optimized"
            >
              <MapPin size={24} weight="duotone" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3 className="type-title text-base text-white dark:text-white light:text-light-text-primary mb-1">
                {t("contact.info_location", "Location")}
              </h3>
              <p className="text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-sm break-words">
                Piscina APAMAR, Zarcero, Costa Rica
              </p>
            </div>
          </Card>
        </div>

        <Card className="lg:col-span-2 p-8 md:p-10 border-tide-teal/30 dark:border-tide-teal/30 light:border-teal-light-optimized/30 min-w-0 bg-abyss-light/40 dark:bg-abyss-light/40 light:bg-white backdrop-blur-none">
          {isSuccess ? (
            <div className="text-center py-16" role="status" aria-live="polite">
              <div
                className="w-20 h-20 bg-tide-teal/20 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-bright
                                          dark:bg-tide-teal/20 dark:text-teal-bright
                                          light:bg-teal-light-optimized/20 light:text-teal-light-optimized
                                          animate-success-pulse"
              >
                <WhatsappLogo size={40} weight="fill" aria-hidden="true" />
              </div>
              <h2 className="type-headline text-white dark:text-white light:text-light-text-primary mb-4">
                {t("contact.success_title", "Request Received!")}
              </h2>
              <p className="type-body text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary max-w-prose mx-auto mb-8">
                {t(
                  "contact.success_msg",
                  "We will contact you shortly to confirm your trial session.",
                )}
              </p>
              <Button type="button" variant="ghost" onClick={resetForm}>
                {t("contact.send_another", "Send another request")}
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitForm();
              }}
              noValidate
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {errors.form && (
                <FormAlert
                  message={resolveFormErrorMessage(errors.form)}
                  onRetry={() => {
                    clearFormError();
                    submitForm();
                  }}
                  retryLabel={t("form.try_again", "Try again")}
                  secondaryAction={
                    pendingWhatsAppUrl.current ? openPendingWhatsApp : undefined
                  }
                  secondaryLabel={t(
                    "form.continue_whatsapp",
                    "Continue on WhatsApp",
                  )}
                />
              )}

              <Input
                label={t("form.full_name", "Full Name")}
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                error={errors.fullName}
                disabled={isSubmitting}
                maxLength={FIELD_LIMITS.fullName}
                autoComplete="name"
                className="md:col-span-2"
              />

              <Input
                label={t("form.email", "Email")}
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
                disabled={isSubmitting}
                maxLength={FIELD_LIMITS.email}
                autoComplete="email"
                inputMode="email"
              />

              <Input
                label={t("form.phone", "Phone (WhatsApp)")}
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                error={errors.phone}
                disabled={isSubmitting}
                maxLength={FIELD_LIMITS.phone}
                autoComplete="tel"
                inputMode="tel"
              />

              <Select
                label={t("form.plan", "Interested Plan")}
                name="selectedPlan"
                value={values.selectedPlan}
                onChange={(e) =>
                  handleChange({
                    target: { name: "selectedPlan", value: e.target.value },
                  })
                }
                error={errors.selectedPlan}
                disabled={isSubmitting}
                className="md:col-span-2"
                options={planOptions}
                placeholder={t("form.select_plan", "Select a plan")}
              />

              <Textarea
                label={t("form.message", "Message (Optional)")}
                name="message"
                value={values.message}
                onChange={handleChange}
                error={errors.message}
                disabled={isSubmitting}
                maxLength={FIELD_LIMITS.message}
                className="md:col-span-2"
              />

              <div className="md:col-span-2 mt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full shadow-glow-coral"
                  isLoading={isSubmitting}
                >
                  {t("contact.submit", "Send Request")}
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Contact;
