import {ActionType} from './action';
import {City, SortType, AuthorizationStatus} from '../const';
import {adaptOffersToClient} from '../adapters';

const initialState = {
  city: City.PARIS,
  offers: [],
  offersAreLoaded: false,
  sortType: SortType.POPULAR,
  activeCardId: null,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: null,
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
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: adaptOffersToClient(action.payload),
        offersAreLoaded: true,
      };
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        // user: null,
      };
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
