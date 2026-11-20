import { describe, expect, it } from "vitest";
import en from "./en.json";
import es from "./es.json";

const locales = { en, es };

describe.each(Object.entries(locales))(
  "%s acquisition copy",
  (_language, locale) => {
    it("keeps pool plans distinct from discipline coaching", () => {
      expect(locale.nav.courses).toBeTruthy();
      expect(locale.nav.programs).toBeTruthy();
      expect(locale.nav.courses).not.toBe(locale.nav.programs);
      expect(locale.home.offer.programs_link.toLocaleLowerCase()).toContain(
        locale.nav.programs.toLocaleLowerCase(),
      );
    });

    it("offers both guidance and direct plan comparison in the hero", () => {
      expect(locale.hero.cta).toMatch(/guidance|orientación/i);
      expect(locale.hero.secondary_cta).toMatch(/pool plans|planes.*piscina/i);
    });

    it("keeps the coach-guidance fallback available near plans", () => {
      expect(locale.home.offer.guidance_title).toBeTruthy();
      expect(locale.home.offer.guidance_description).toBeTruthy();
      expect(locale.home.offer.guidance_cta).toMatch(/guidance|orientación/i);
    });
  },
);
