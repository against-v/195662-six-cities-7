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

export const ActionCreator = {
  setCity: (payload) => ({
    type: ActionType.SET_CITY,
    payload,
  }),
  setSortType: (payload) => ({
    type: ActionType.SET_SORT_TYPE,
    payload,
  }),
  setActiveCardId: (payload) => ({
    type: ActionType.SET_ACTIVE_CARD_ID,
    payload,
  }),
  loadOffers: (payload) => ({
    type: ActionType.LOAD_OFFERS,
    payload,
  }),
  loadOffer: (payload) => ({
    type: ActionType.LOAD_OFFER,
    payload,
  }),
  loadComments: (payload) => ({
    type: ActionType.LOAD_COMMENTS,
    payload,
  }),
  resetOffer: () => ({
    type: ActionType.RESET_OFFER,
  }),
  requireAuthorization: (payload) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload,
  }),
  setUser: (payload) => ({
    type: ActionType.SET_USER,
    payload,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (payload) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload,
  }),
  setCommentFormIsLoading: (payload) => ({
    type: ActionType.SET_COMMENT_FORM_IS_LOADING,
    payload,
  }),
  setCommentFormError: (payload) => ({
    type: ActionType.SET_COMMENT_FORM_ERROR,
    payload,
  }),
};

