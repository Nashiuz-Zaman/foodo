import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export default searchWindowSlice.reducer;
export const { toggleSearchWindow } = searchWindowSlice.actions;
