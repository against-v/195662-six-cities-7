import {NameSpace} from '../root-reducer';

export const getOffersAreLoaded = (state) => state[NameSpace.OFFER].offersAreLoaded;
export const getOffers = (state) => state[NameSpace.OFFER].offers;
export const getOffersByCurrentCity = (state) => state[NameSpace.OFFER].offers.filter((item) => item.city === state[NameSpace.OTHER].city.name);
export const getNearbyOffers = (state) => state[NameSpace.OFFER].nearbyOffers;

export const getOffer = (state) => state[NameSpace.OFFER].offer;

export const getComments = (state) => state[NameSpace.OFFER].comments;

export const getCommentFormIsLoading = (state) => state[NameSpace.OFFER].commentFormIsLoading;
export const getCommentFormError = (state) => state[NameSpace.OFFER].commentFormError;
