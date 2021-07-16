import {createReducer} from '@reduxjs/toolkit';

import {requireAuthorization, logout, setUser} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: null,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.user = null;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});

export {user};
