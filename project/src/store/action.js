import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SET_CITY: 'setCity',
  SET_SORT_TYPE: 'setSortType',
  SET_ACTIVE_CARD_ID: 'setActiveCard',
  LOAD_OFFERS: 'loadOffers',
  LOAD_OFFER: 'loadOffer',
  RESET_OFFER: 'resetOffer',
  REQUIRE_AUTHORIZATION: 'requireAuthorization',
  LOGOUT: 'logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
  SET_USER: 'setUser',
  LOAD_COMMENTS: 'loadComments',
  SET_COMMENT_FORM_IS_LOADING: 'setCommentFormIsLoading',
  SET_COMMENT_FORM_ERROR: 'setCommentFormError',
};

export const setCity = createAction(ActionType.SET_CITY, (payload) => ({
  payload,
}));
export const setSortType = createAction(ActionType.SET_SORT_TYPE, (payload) => ({
  payload,
}));
export const setActiveCardId = createAction(ActionType.SET_ACTIVE_CARD_ID, (payload) => ({
  payload,
}));
export const loadOffers = createAction(ActionType.LOAD_OFFERS, (payload) => ({
  payload,
}));
export const loadOffer = createAction(ActionType.LOAD_OFFER, (payload) => ({
  payload,
}));
export const loadComments = createAction(ActionType.LOAD_COMMENTS, (payload) => ({
  payload,
}));
export const resetOffer = createAction(ActionType.RESET_OFFER, (payload) => ({
  payload,
}));
export const requireAuthorization = createAction(ActionType.REQUIRE_AUTHORIZATION, (payload) => ({
  payload,
}));
export const setUser = createAction(ActionType.SET_USER, (payload) => ({
  payload,
}));
export const logout = createAction(ActionType.LOGOUT, (payload) => ({
  payload,
}));
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (payload) => ({
  payload,
}));
export const setCommentFormIsLoading = createAction(ActionType.SET_COMMENT_FORM_IS_LOADING, (payload) => ({
  payload,
}));
export const setCommentFormError = createAction(ActionType.SET_COMMENT_FORM_ERROR, (payload) => ({
  payload,
}));
