import {ActionType} from './action';
import {City, SortType, AuthorizationStatus} from '../const';
import {adaptCommentToClient, adaptOfferToClient} from '../adapters';

const initialState = {
  city: City.PARIS,
  offers: [],
  offersAreLoaded: false,
  sortType: SortType.POPULAR,
  activeCardId: null,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: null,
  offer: null,
  nearbyOffers: [],
  comments: [],
  commentFormIsLoading: false,
  commentFormError: null,
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
        offers: action.payload.map((item) => adaptOfferToClient(item)),
        offersAreLoaded: true,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: adaptOfferToClient(action.payload.offer),
        nearbyOffers: action.payload.nearbyOffers.map((item) => adaptOfferToClient(item)),
        comments: action.payload.comments.map((item) => adaptCommentToClient(item)),
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload.map((item) => adaptCommentToClient(item)),
      };
    case ActionType.RESET_OFFER:
      return {
        ...state,
        offer: null,
        nearbyOffers: [],
        comments: [],
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
        user: null,
      };
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.SET_COMMENT_FORM_IS_LOADING:
      return {
        ...state,
        commentFormIsLoading: action.payload,
      };
    case ActionType.SET_COMMENT_FORM_ERROR:
      return {
        ...state,
        commentFormError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
