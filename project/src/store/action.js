export const ActionType = {
  SET_CITY: 'setCity',
  SET_SORT_TYPE: 'setSortType',
  SET_ACTIVE_CARD_ID: 'setActiveCard',
  LOAD_OFFERS: 'loadOffers',
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
};

