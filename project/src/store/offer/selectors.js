import { createSelector } from 'reselect';
import {NameSpace} from '../root-reducer';
import {getCity, getSortType} from '../other/selectors';
import {sortOffers} from '../../utils';

export const getOffersAreLoaded = (state) => state[NameSpace.OFFER].offersAreLoaded;
export const getOffers = (state) => state[NameSpace.OFFER].offers;

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
