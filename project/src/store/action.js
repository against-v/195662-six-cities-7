import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SET_CITY: 'setCity',
  SET_SORT_TYPE: 'setSortType',
  SET_ACTIVE_CARD_ID: 'setActiveCard',
  LOAD_OFFERS: 'loadOffers',
  LOAD_FAVORITE_OFFERS: 'loadFavoriteOffers',
  RESET_FAVORITE_OFFERS: 'resetFavoriteOffers',
  LOAD_OFFER: 'loadOffer',
  RESET_OFFER: 'resetOffer',
  REQUIRE_AUTHORIZATION: 'requireAuthorization',
  LOGOUT: 'logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
  SET_USER: 'setUser',
  LOAD_COMMENTS: 'loadComments',
  SET_COMMENT_FORM_IS_LOADING: 'setCommentFormIsLoading',
  SET_COMMENT_FORM_ERROR: 'setCommentFormError',
  UPDATE_OFFER: 'updateOffer',
  UPDATE_FAVORITE_LIST: 'updateFavoriteList',
  SHOW_NOTIFICATION_MODAL: 'showNotificationModal',
  HIDE_NOTIFICATION_MODAL: 'hideNotificationModal',
};

export const setCity = createAction(ActionType.SET_CITY);
export const setSortType = createAction(ActionType.SET_SORT_TYPE);
export const setActiveCardId = createAction(ActionType.SET_ACTIVE_CARD_ID);
export const loadOffers = createAction(ActionType.LOAD_OFFERS);
export const loadFavoriteOffers = createAction(ActionType.LOAD_FAVORITE_OFFERS);
export const resetFavoriteOffers = createAction(ActionType.RESET_FAVORITE_OFFERS);
export const loadOffer = createAction(ActionType.LOAD_OFFER);
export const loadComments = createAction(ActionType.LOAD_COMMENTS);
export const resetOffer = createAction(ActionType.RESET_OFFER);
export const requireAuthorization = createAction(ActionType.REQUIRE_AUTHORIZATION);
export const setUser = createAction(ActionType.SET_USER);
export const logout = createAction(ActionType.LOGOUT);
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE);
export const setCommentFormIsLoading = createAction(ActionType.SET_COMMENT_FORM_IS_LOADING);
export const setCommentFormError = createAction(ActionType.SET_COMMENT_FORM_ERROR);
export const updateOffer = createAction(ActionType.UPDATE_OFFER);
export const updateFavoriteList = createAction(ActionType.UPDATE_FAVORITE_LIST);
export const showNotificationModal = createAction(ActionType.SHOW_NOTIFICATION_MODAL);
export const hideNotificationModal = createAction(ActionType.HIDE_NOTIFICATION_MODAL);
