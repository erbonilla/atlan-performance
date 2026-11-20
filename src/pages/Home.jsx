import React, { useEffect } from "react";
import Hero from "@components/home/Hero";
import USPGrid from "@components/home/USPGrid";
import MethodologyBridge from "@components/home/MethodologyBridge";
import OfferStrip from "@components/home/OfferStrip";
import TestimonialCarousel from "@components/home/TestimonialCarousel";
import ConversionClose from "@components/home/ConversionClose";
import { useAnalytics } from "@hooks/useAnalytics";
import { usePageTitle } from "@hooks/usePageTitle";
import { useLanguage } from "@hooks/useLanguage";

const Home = () => {
  const { t } = useLanguage();
  const { trackEvent } = useAnalytics();
  usePageTitle(t("nav.home"));

  useEffect(() => {
    trackEvent("page_view", { page: "home" });
  }, [trackEvent]);

  return (
    <>
      <Hero />
      <USPGrid />
      <MethodologyBridge />
      <OfferStrip />
      <TestimonialCarousel />
      <ConversionClose />
    </>
  );
};

export default Home;
