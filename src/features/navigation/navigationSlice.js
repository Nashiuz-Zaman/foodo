//redux
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: initialState,
  reducers: {
    toggleNavigation: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeNavigation: (state) => {
      state.isOpen = false;
    },
  },
});

export default navigationSlice.reducer;
export const { toggleNavigation, closeNavigation } = navigationSlice.actions;
