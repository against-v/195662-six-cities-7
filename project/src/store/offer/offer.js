import {ActionType} from '../action';
import {adaptCommentToClient, adaptOfferToClient} from '../../adapters';

const initialState = {
  offers: [],
  offersAreLoaded: false,
  offer: null,
  nearbyOffers: [],
};

const offer = (state = initialState, action) => {
  switch (action.type) {
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
    case ActionType.RESET_OFFER:
      return {
        ...state,
        offer: null,
        nearbyOffers: [],
        comments: [],
      };
    default:
      return state;
  }
};

export {offer};
