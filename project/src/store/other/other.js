import {createReducer} from '@reduxjs/toolkit';

import {setActiveCardId, setCity, setSortType, showNotificationModal, hideNotificationModal} from '../action';
import {City, SortType} from '../../const';

const initialState = {
  city: City.PARIS,
  sortType: SortType.POPULAR,
  activeCardId: null,
  showNotificationModal: false,
  notificationText: '',
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
    })
    .addCase(showNotificationModal, (state, action) => {
      state.showNotificationModal = true;
      state.notificationText = action.payload;
    })
    .addCase(hideNotificationModal, (state) => {
      state.showNotificationModal = false;
      state.notificationText = '';
    });
});

export {other};
