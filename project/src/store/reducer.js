import {ActionType} from './action';
import {City, SortType} from '../const';
import offers from '../mocks/offers';

const initialState = {
  city: City.PARIS,
  offers: offers,
  sortType: SortType.POPULAR,
  activeCardId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    case ActionType.SET_ACTIVE_CARD_ID:
      return {
        ...state,
        activeCardId: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
