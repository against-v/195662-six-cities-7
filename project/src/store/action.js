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

export const setCity = (payload) => ({
  type: ActionType.SET_CITY,
  payload,
});
export const setSortType = (payload) => ({
  type: ActionType.SET_SORT_TYPE,
  payload,
});
export const setActiveCardId = (payload) => ({
  type: ActionType.SET_ACTIVE_CARD_ID,
  payload,
});
export const loadOffers = (payload) => ({
  type: ActionType.LOAD_OFFERS,
  payload,
});
export const loadOffer = (payload) => ({
  type: ActionType.LOAD_OFFER,
  payload,
});
export const loadComments = (payload) => ({
  type: ActionType.LOAD_COMMENTS,
  payload,
});
export const resetOffer = () => ({
  type: ActionType.RESET_OFFER,
});
export const requireAuthorization = (payload) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload,
});
export const setUser = (payload) => ({
  type: ActionType.SET_USER,
  payload,
});
export const logout = () => ({
  type: ActionType.LOGOUT,
});
export const redirectToRoute = (payload) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload,
});
export const setCommentFormIsLoading = (payload) => ({
  type: ActionType.SET_COMMENT_FORM_IS_LOADING,
  payload,
});
export const setCommentFormError = (payload) => ({
  type: ActionType.SET_COMMENT_FORM_ERROR,
  payload,
});
