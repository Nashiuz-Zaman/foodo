import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerHeight: null,
};

const headerSlice = createSlice({
  name: 'header',
  initialState: initialState,
  reducers: {
    setHeaderHeight: (state, { payload }) => {
      state.headerHeight = payload;
    },
  },
});

export default headerSlice.reducer;
export const { setHeaderHeight } = headerSlice.actions;
