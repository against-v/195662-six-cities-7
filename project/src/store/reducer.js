import {ActionType} from './action';
import {City} from '../const';
import offers from '../mocks/offers';

const initialState = {
  city: City.PARIS,
  offers: offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
