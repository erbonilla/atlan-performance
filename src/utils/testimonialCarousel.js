export const getCardsPerView = (viewportWidth) => {
  if (viewportWidth < 768) return 1;
  if (viewportWidth < 1024) return 2;
  return 3;
};

export const getCarouselWindow = (items, requestedIndex, requestedCards) => {
  const cardsPerView = Math.max(1, Math.floor(requestedCards));
  const maxIndex = Math.max(items.length - cardsPerView, 0);
  const currentIndex = Math.min(
    Math.max(Math.floor(requestedIndex), 0),
    maxIndex,
  );

  return {
    cardsPerView,
    currentIndex,
    maxIndex,
    visibleItems: items.slice(currentIndex, currentIndex + cardsPerView),
  };
};
