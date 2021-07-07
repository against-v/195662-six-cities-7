export const adaptOfferToClient = (offer) => {
  const Key = {
    IS_FAVORITE: 'is_favorite',
    IS_PREMIUM: 'is_premium',
    BEDROOMS: 'bedrooms',
    MAX_ADULTS: 'max_adults',
    PREVIEW_IMAGE: 'preview_image',
  };
  const adaptedOffer = Object.assign(
    offer,
    {
      isFavorite: offer[Key.IS_FAVORITE],
      isPremium: offer[Key.IS_PREMIUM],
      bedroomCount: offer[Key.BEDROOMS],
      adultMaxCount: offer[Key.MAX_ADULTS],
      city: offer.city.name,
      cityLocation: offer.city.location,
      image: offer[Key.PREVIEW_IMAGE],
      host: {
        avatarUrl: offer.host.avatar_url,
        id: offer.host.id,
        isPro: offer.host.is_pro,
        name: offer.host.name,
      },
    },
  );

  Object.values(Key).forEach((key) => {
    delete adaptedOffer[key];
  });

  return adaptedOffer;
};
