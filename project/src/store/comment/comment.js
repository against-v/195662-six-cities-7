import {ActionType} from '../action';
import {adaptCommentToClient} from '../../adapters';

const initialState = {
  comments: [],
  commentFormIsLoading: false,
  commentFormError: null,
};

const comment = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload.map((item) => adaptCommentToClient(item)),
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

export {comment};
