import { createSlice } from '@reduxjs/toolkit';
import { resetAll } from '../search/searchSlice';

const initialState = {
  isOpen: false,
};

const searchWindowSlice = createSlice({
  name: 'searchWindow',
  initialState: initialState,
  reducers: {
    openSearchWindow: (state) => {
      state.isOpen = true;
    },
    closeSearchWindow: (state) => {
      resetAll();
      state.isOpen = false;
    },
  },
});

export default searchWindowSlice.reducer;
export const { openSearchWindow, closeSearchWindow } =
  searchWindowSlice.actions;
