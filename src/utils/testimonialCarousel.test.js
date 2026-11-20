import { describe, expect, it } from "vitest";
import { getCardsPerView, getCarouselWindow } from "./testimonialCarousel";

describe("testimonial carousel responsiveness", () => {
  it.each([
    [390, 1],
    [767, 1],
    [768, 2],
    [1023, 2],
    [1024, 3],
    [1440, 3],
  ])("shows the right number of cards at %ipx", (width, expected) => {
    expect(getCardsPerView(width)).toBe(expected);
  });

  it("renders only the visible window", () => {
    const result = getCarouselWindow(["a", "b", "c", "d", "e"], 1, 3);

    expect(result).toEqual({
      cardsPerView: 3,
      currentIndex: 1,
      maxIndex: 2,
      visibleItems: ["b", "c", "d"],
    });
  });

  it("clamps the index after a responsive layout change", () => {
    const result = getCarouselWindow(["a", "b", "c", "d", "e"], 4, 3);

    expect(result.currentIndex).toBe(2);
    expect(result.visibleItems).toEqual(["c", "d", "e"]);
  });

  it("handles empty testimonial data without invalid indexes", () => {
    const result = getCarouselWindow([], 7, 3);

    expect(result.currentIndex).toBe(0);
    expect(result.maxIndex).toBe(0);
    expect(result.visibleItems).toEqual([]);
  });
});
