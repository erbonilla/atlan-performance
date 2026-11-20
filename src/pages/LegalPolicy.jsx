import React, { useState, useEffect, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@components/ui/Button";
import { ArrowClockwise } from "@phosphor-icons/react";
import { usePageTitle } from "@hooks/usePageTitle";

const LegalPolicy = ({ policyType }) => {
  const { i18n, t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reloadToken, setReloadToken] = useState(0);
  const titleKey =
    policyType === "privacy"
      ? "footer.privacy"
      : policyType === "terms"
        ? "footer.terms"
        : "footer.cookies";
  usePageTitle(t(titleKey));

  const fetchPolicy = useCallback(
    async (signal) => {
      setLoading(true);
      setError(false);
      try {
        const lang = i18n.language.split("-")[0];
        const fileName = `${policyType}.${lang}.md`;
        const response = await fetch(`/policies/${fileName}`, { signal });

        if (!response.ok) {
          throw new Error("Policy not found");
        }

        const text = await response.text();
        if (!text?.trim()) {
          throw new Error("Policy empty");
        }
        setContent(text);
      } catch (err) {
        if (err?.name === "AbortError") return;
        console.error("Failed to load policy:", err);
        setError(true);
        setContent("");
      } finally {
        if (!signal?.aborted) {
          setLoading(false);
        }
      }
    },
    [policyType, i18n.language],
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchPolicy(controller.signal);
    return () => controller.abort();
  }, [fetchPolicy, reloadToken]);

  if (loading) {
    return (
      <div
        className="min-h-[60vh] flex items-center justify-center"
        role="status"
        aria-live="polite"
      >
        <div
          className="h-12 w-12 rounded-full border-2 border-tide-teal/30 border-t-tide-teal light:border-teal-light-optimized/30 light:border-t-teal-light-optimized animate-spin"
          aria-hidden="true"
        />
        <span className="sr-only">{t("a11y.loading", "Loading")}</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 text-center px-4">
        <p
          role="alert"
          className="text-coral-spark dark:text-coral-spark light:text-coral-light-optimized max-w-md break-words"
        >
          {t(
            "legal.load_error",
            "Error loading policy content. Please try again later.",
          )}
        </p>
        <Button
          type="button"
          variant="outline"
          className="gap-2"
          onClick={() => setReloadToken((n) => n + 1)}
        >
          <ArrowClockwise size={18} weight="bold" aria-hidden="true" />
          {t("legal.retry", "Try again")}
        </Button>
      </div>
    );
  }

  const renderers = {
    h1: ({ node: _node, ...props }) => (
      <h1
        className="text-3xl md:text-4xl font-bold mb-8 text-white dark:text-white light:text-light-text-primary font-heading border-b border-white/10 light:border-light-border pb-4 break-words"
        {...props}
      />
    ),
    h2: ({ node: _node, ...props }) => (
      <h2
        className="text-2xl font-bold mb-4 mt-8 text-white dark:text-white light:text-light-text-primary font-heading break-words"
        {...props}
      />
    ),
    h3: ({ node: _node, ...props }) => (
      <h3
        className="text-xl font-bold mb-3 mt-6 text-white dark:text-white light:text-light-text-primary font-heading break-words"
        {...props}
      />
    ),
    h4: ({ node: _node, ...props }) => (
      <h4
        className="text-lg font-bold mb-2 mt-4 text-coral-spark dark:text-coral-spark light:text-coral-light-optimized font-heading break-words"
        {...props}
      />
    ),
    p: ({ node: _node, ...props }) => (
      <p
        className="mb-4 leading-relaxed text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary break-words"
        {...props}
      />
    ),
    ul: ({ node: _node, ...props }) => (
      <ul
        className="list-disc pl-6 mb-4 text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary space-y-1"
        {...props}
      />
    ),
    ol: ({ node: _node, ...props }) => (
      <ol
        className="list-decimal pl-6 mb-4 text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary space-y-1"
        {...props}
      />
    ),
    li: ({ node: _node, ...props }) => (
      <li className="mb-1 break-words" {...props} />
    ),
    a: ({ node: _node, ...props }) => (
      <a
        className="text-foam underline underline-offset-2 decoration-tide-teal/60 hover:decoration-coral-spark light:text-light-text-primary light:decoration-teal-light-optimized/70 light:hover:decoration-coral-light-optimized transition-colors break-all"
        {...props}
      />
    ),
    blockquote: ({ node: _node, ...props }) => (
      <blockquote
        className="border-t border-tide-teal/40 light:border-teal-light-optimized/40 pl-0 pt-4 italic my-4 text-foam-muted dark:text-foam-muted light:text-light-text-secondary bg-white/5 light:bg-light-bg-secondary p-4 rounded-lg break-words"
        {...props}
      />
    ),
    hr: ({ node: _node, ...props }) => (
      <hr
        className="border-white/10 light:border-light-border my-8"
        {...props}
      />
    ),
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-abyss-navy dark:bg-abyss-navy light:bg-light-bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-tide-teal/5 light:bg-teal-light-optimized/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral-spark/5 light:bg-coral-light-optimized/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container-atlan relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="prose prose-invert light:prose-neutral max-w-none min-w-0"
        >
          <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPolicy;
