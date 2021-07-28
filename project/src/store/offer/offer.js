import {createReducer} from '@reduxjs/toolkit';

import {
  loadComments,
  loadOffer,
  loadOffers,
  loadFavoriteOffers,
  resetOffer,
  setCommentFormError,
  setCommentFormIsLoading,
  updateOffer
} from '../action';
import {adaptCommentToClient, adaptOfferToClient} from '../../adapters';

const initialState = {
  offers: [],
  favoriteOffers: [],
  offersAreLoaded: false,
  offer: null,
  nearbyOffers: [],
  comments: [],
  commentFormIsLoading: false,
  commentFormError: null,
};

const offer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.map((item) => adaptOfferToClient(item));
      state.offersAreLoaded = true;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload.map((item) => adaptOfferToClient(item));
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = adaptOfferToClient(action.payload.offer);
      state.nearbyOffers = action.payload.nearbyOffers.map((item) => adaptOfferToClient(item));
      state.comments = action.payload.comments.map((item) => adaptCommentToClient(item));
    })
    .addCase(resetOffer, (state) => {
      state.offer = null;
      state.nearbyOffers = [];
      state.comments = [];
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload.map((item) => adaptCommentToClient(item));
    })
    .addCase(setCommentFormIsLoading, (state, action) => {
      state.commentFormIsLoading = action.payload;
    })
    .addCase(setCommentFormError, (state, action) => {
      state.commentFormError = action.payload;
    })
    .addCase(updateOffer, (state, action) => {
      const updatedOffer = adaptOfferToClient(action.payload);

      const indexInOffers = state.offers.findIndex((item) => item.id === updatedOffer.id);
      state.offers[indexInOffers] = updatedOffer;

      const indexInNearbyOffers = state.nearbyOffers.findIndex((item) => item.id === updatedOffer.id);
      if (indexInNearbyOffers > -1) {
        state.nearbyOffers[indexInNearbyOffers] = updatedOffer;
      }

      const indexInFavoriteOffers = state.favoriteOffers.findIndex((item) => item.id === updatedOffer.id);
      if (indexInFavoriteOffers > -1) {
        state.favoriteOffers.splice(indexInFavoriteOffers, 1);
      }

      if (state.offer?.id === updatedOffer.id) {
        state.offer = updatedOffer;
      }
    });
});

export {offer};
