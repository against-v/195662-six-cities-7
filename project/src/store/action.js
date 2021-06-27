export const ActionType = {
  SET_CITY: 'setCity',
  SET_SORT_TYPE: 'setSortType',
  SET_ACTIVE_CARD_ID: 'setActiveCard',
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
};

