import {createReducer} from '@reduxjs/toolkit';

import {loadComments, loadOffer, loadOffers, resetOffer, setCommentFormError, setCommentFormIsLoading} from '../action';
import {adaptCommentToClient, adaptOfferToClient} from '../../adapters';

const initialState = {
  offers: [],
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
    });
});

export {offer};
