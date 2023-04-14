import { createSlice } from '@reduxjs/toolkit';

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
      state.isOpen = false;
    },
  },
});

export default searchWindowSlice.reducer;
export const { openSearchWindow, closeSearchWindow } =
  searchWindowSlice.actions;
