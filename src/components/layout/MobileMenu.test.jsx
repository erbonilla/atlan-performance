// @vitest-environment jsdom

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import MobileMenu from "./MobileMenu";

vi.mock("@hooks/useLanguage", () => ({
  useLanguage: () => ({
    t: (key, fallback) =>
      ({
        "nav.home": "Home",
        "nav.courses": "Pool plans",
        "nav.programs": "Coaching by discipline",
        "nav.about": "About",
        "nav.headerCta": "Ask the coach",
        "home.close.whatsapp": "Message on WhatsApp",
      })[key] ??
      fallback ??
      key,
  }),
}));

vi.mock("@hooks/useTheme", () => ({
  useTheme: () => ({ theme: "dark", toggleTheme: vi.fn() }),
}));

const renderMenu = (onClose = vi.fn()) => {
  render(
    <MemoryRouter>
      <MobileMenu isOpen onClose={onClose} />
    </MemoryRouter>,
  );
  return onClose;
};

describe("mobile navigation", () => {
  it("exposes the simplified service paths and both contact options", () => {
    renderMenu();

    expect(
      screen.getByRole("dialog", { name: "Mobile navigation" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Pool plans" })).toHaveAttribute(
      "href",
      "/courses",
    );
    expect(
      screen.getByRole("link", { name: "Coaching by discipline" }),
    ).toHaveAttribute("href", "/programs");
    expect(screen.getByRole("link", { name: "Ask the coach" })).toHaveAttribute(
      "href",
      "/contact",
    );
    expect(
      screen.getByRole("link", { name: "Message on WhatsApp" }),
    ).toHaveAttribute("href", "https://wa.me/50683731111");
  });

  it("closes with Escape", () => {
    const onClose = renderMenu();

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
