import { createSelector } from 'reselect';
import {NameSpace} from '../root-reducer';
import {getCity, getSortType} from '../other/selectors';
import {sortOffers} from '../../utils';
import {City} from '../../const';

export const getOffersAreLoaded = (state) => state[NameSpace.OFFER].offersAreLoaded;
export const getOffers = (state) => state[NameSpace.OFFER].offers;
export const getFavoriteOffers = (state) => state[NameSpace.OFFER].favoriteOffers;
export const getFavoriteOffersByCity = createSelector(
  [getFavoriteOffers],
  (offers) => {
    const offersByCity = Object.values(City).map((item) => ({
      city: item.name,
      offers: offers.filter((offer) => offer.city === item.name),
    }));
    return offersByCity.filter((item) => item.offers.length > 0);
  },
);

export const getOffersByCurrentCity = createSelector(
  [getOffers, getCity],
  (offers, city) => offers.filter((item) => item.city === city.name),
);

export const getSortedOffers = createSelector(
  [getSortType, getOffersByCurrentCity],
  (sortType, offers) => sortOffers(sortType, offers));

export const getNearbyOffers = (state) => state[NameSpace.OFFER].nearbyOffers;

export const getOffer = (state) => state[NameSpace.OFFER].offer;

export const getComments = (state) => state[NameSpace.OFFER].comments;

export const getCommentFormIsLoading = (state) => state[NameSpace.OFFER].commentFormIsLoading;
export const getCommentFormError = (state) => state[NameSpace.OFFER].commentFormError;
