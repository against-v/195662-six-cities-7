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
      host: adaptUserToClient(offer.host),
    },
  );

  Object.values(Key).forEach((key) => {
    delete adaptedOffer[key];
  });

  return adaptedOffer;
};

export const adaptCommentToClient = (comment) => Object.assign(
  comment,
  {
    user: adaptUserToClient(comment.user),
  },
);

export const adaptUserToClient = (user) => {
  const Key = {
    AVATAR_URL: 'avatar_url',
    IS_PRO: 'is_pro',
  };
  const adaptedUser = Object.assign(
    user,
    {
      avatarUrl: user[Key.AVATAR_URL],
      isPro: user[Key.IS_PRO],
    },
  );
  Object.values(Key).forEach((key) => {
    delete adaptedUser[key];
  });

  return adaptedUser;
};
