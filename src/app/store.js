//redux
import { configureStore } from '@reduxjs/toolkit';

// features
import searchWindowReducer from '../features/searchWindow/searchWindowSlice';
import mobileHeaderReducer from '../features/mobileHeader/mobileHeaderSlice';
import navigationReducer from '../features/navigation/navigationSlice';
import searchReducer from '../features/search/searchSlice';
import cartReducer from '../features/cart/cartSlice';
import foodItemsReducer from '../features/foodItems/foodItemsSlice';
import mediaQueryReducer from '../features/mediaQuery/mediaQuerySlice';
import desktopHeaderReducer from '../features/desktopHeader/desktopHeaderSlice';

export const store = configureStore({
  reducer: {
    searchWindow: searchWindowReducer,
    mobileHeader: mobileHeaderReducer,
    navigation: navigationReducer,
    search: searchReducer,
    cart: cartReducer,
    foodItems: foodItemsReducer,
    mediaQuery: mediaQueryReducer,
    desktopHeader: desktopHeaderReducer,
  },
});
