import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobileHeaderHeight: null,
};

const mobileHeaderSlice = createSlice({
  name: 'mobileHeader',
  initialState: initialState,
  reducers: {
    setMobileHeaderHeight: (state, { payload }) => {
      state.mobileHeaderHeight = payload;
    },
  },
});

export default mobileHeaderSlice.reducer;
export const { setMobileHeaderHeight } = mobileHeaderSlice.actions;
