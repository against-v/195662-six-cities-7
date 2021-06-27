export const ActionType = {
  SET_CITY: 'setCity',
};

export const ActionCreator = {
  setCity: (payload) => ({
    type: ActionType.SET_CITY,
    payload,
  }),
};

