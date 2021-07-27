import {createReducer} from '@reduxjs/toolkit';

import {setActiveCardId, setCity, setSortType} from '../action';
import {City, SortType} from '../../const';

const initialState = {
  city: City.PARIS,
  sortType: SortType.POPULAR,
  activeCardId: null,
};

const other = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setActiveCardId, (state, action) => {
      state.activeCardId = action.payload;
    });
});

export {other};
