//redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//axios
import axios from 'axios';

//api data
import { foodItemsApi } from '../../data/ApiInformation';

const initialState = {
  allFoodItems: [],
  isPending: false,
  errorMessage: '',
};

export const getAllFoodItems = createAsyncThunk(
  'foodItems/getAllFoodItems',
  () => {
    return axios
      .get(foodItemsApi)
      .then((response) => response.data)
      .catch((error) => error.message);
  }
);

const foodItemsSlice = createSlice({
  name: 'foodItems',
  initialState,
  reducers: {
    filterData: (state, { payload }) => {
      state.allFoodItems.filter((item) => {
        return (item.category = payload);
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllFoodItems.pending, (state) => {
      state.isPending = true;
    });

    builder.addCase(getAllFoodItems.fulfilled, (state, { payload }) => {
      state.isPending = false;
      state.allFoodItems = payload.data;
    });

    builder.addCase(getAllFoodItems.rejected, (state) => {
      state.isPending = false;
      state.errorMessage = 'Something went wrong. Please try again.';
    });
  },
});

export default foodItemsSlice.reducer;
