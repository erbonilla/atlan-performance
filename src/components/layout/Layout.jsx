import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLanguage } from "@hooks/useLanguage";

const Layout = ({ children }) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-abyss-navy dark:bg-abyss-navy light:bg-light-bg-primary selection:bg-tide-teal selection:text-white dark:selection:bg-tide-teal dark:selection:text-white light:selection:bg-teal-light-optimized light:selection:text-white">
      <a href="#main-content" className="skip-link">
        {t("a11y.skip_to_content", "Skip to main content")}
      </a>
      <Header />
      <main id="main-content" className="main-safe-top flex-grow" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
