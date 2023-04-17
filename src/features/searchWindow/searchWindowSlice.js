import { createSlice } from '@reduxjs/toolkit';
import { resetAll } from '../search/searchSlice';

const initialState = {
  isOpen: false,
};

const searchWindowSlice = createSlice({
  name: 'searchWindow',
  initialState: initialState,
  reducers: {
    toggleSearchWindow: (state) => {
      state.isOpen = !state.isOpen;
    },

    closeSearchWindow: (state) => {
      resetAll();
      state.isOpen = false;
    },
  },
});

export default searchWindowSlice.reducer;
export const { toggleSearchWindow, closeSearchWindow } =
  searchWindowSlice.actions;
