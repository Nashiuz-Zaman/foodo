//redux
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  desktopHeaderHeight: null,
};

const desktopHeaderSlice = createSlice({
  name: 'desktopHeaderSlice',
  initialState,
  reducers: {
    setDesktopHeaderHeight: (state, { payload }) => {
      state.desktopHeaderHeight = payload;
    },
  },
});

export default desktopHeaderSlice.reducer;
export const { setDesktopHeaderHeight } = desktopHeaderSlice.actions;
