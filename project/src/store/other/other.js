import {ActionType} from '../action';
import {City, SortType} from '../../const';

const initialState = {
  city: City.PARIS,
  sortType: SortType.POPULAR,
  activeCardId: null,
};

const other = (state = initialState, action) => {
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

export {other};
