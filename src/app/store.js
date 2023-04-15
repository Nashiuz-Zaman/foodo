//redux
import { configureStore } from '@reduxjs/toolkit';

// features
import searchWindowReducer from '../features/searchWindow/searchWindowSlice';
import headerReducer from '../features/header/headerSlice';
import navigationReducer from '../features/navigation/navigationSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    searchWindow: searchWindowReducer,
    header: headerReducer,
    navigation: navigationReducer,
    search: searchReducer,
  },
});
