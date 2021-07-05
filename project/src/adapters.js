export const adaptOffersToClient = (offers) => {
  const Key = {
    IS_FAVORITE: "is_favorite",
    IS_PREMIUM: "is_premium",
    BEDROOMS: "bedrooms",
    MAX_ADULTS: "max_adults",
  }
  return offers.map((item) => {
    Object.assign(
      item,
      {
        isFavorite: item[Key.IS_FAVORITE],
        isPremium: item[Key.IS_PREMIUM],
        bedroomCount: item[Key.BEDROOMS],
        adultMaxCount: item[Key.MAX_ADULTS],
        city: item.city.name,
      }
    );
    Object.values(Key).forEach((key) => {
      delete item[key];
    });
    return item;
  })
};
