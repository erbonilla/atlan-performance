import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Layout from "@components/layout/Layout";
import { useLanguage } from "@hooks/useLanguage";
import Home from "@pages/Home";

const Programs = lazy(() => import("@pages/Programs"));
const ProgramDetail = lazy(() => import("@pages/ProgramDetail"));
const Courses = lazy(() => import("@pages/Courses"));
const Community = lazy(() => import("@pages/Community"));
const About = lazy(() => import("@pages/About"));
const Contact = lazy(() => import("@pages/Contact"));
const NotFound = lazy(() => import("@pages/NotFound"));
const LegalPolicy = lazy(() => import("@pages/LegalPolicy"));

const PageLoading = () => {
  const { t } = useLanguage();

  return (
    <div
      className="container-atlan flex min-h-[45vh] items-center justify-center pt-24"
      role="status"
      aria-live="polite"
    >
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-tide-teal/30 border-t-teal-bright motion-reduce:animate-none" />
      <span className="sr-only">{t("a11y.loading_page", "Loading page")}</span>
    </div>
  );
};

function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* Theme class lives only on <html>, set by ThemeProvider */}
      <div className="min-h-screen bg-background text-foreground">
        <Layout>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/:slug" element={<ProgramDetail />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/community" element={<Community />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* Canonical enroll path is /contact — keep /subscribe as alias */}
              <Route
                path="/subscribe"
                element={<Navigate to="/contact" replace />}
              />

              {/* Legal Routes */}
              <Route
                path="/privacy-policy"
                element={<LegalPolicy policyType="privacy" />}
              />
              <Route
                path="/terms-of-service"
                element={<LegalPolicy policyType="terms" />}
              />
              <Route
                path="/cookie-policy"
                element={<LegalPolicy policyType="cookies" />}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </div>
    </MotionConfig>
  );
}

export default App;
