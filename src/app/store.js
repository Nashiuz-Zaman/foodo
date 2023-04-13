import { configureStore } from '@reduxjs/toolkit';

// features
import searchWindowReducer from '../features/searchWindow/searchWindowSlice';
import headerReducer from '../features/header/headerSlice';
import navigationReducer from '../features/navigation/navigationSlice';

export const store = configureStore({
  reducer: {
    searchWindow: searchWindowReducer,
    header: headerReducer,
    navigation: navigationReducer,
  },
});
