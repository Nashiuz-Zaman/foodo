//redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// axios
import axios from 'axios';

//data
import { searchFoodItemsAPI } from '../../data/ApiInformation';

const initialState = {
  searchTerm: '',
  searchResults: [],
  isLoading: false,
  errorMessage: '',
};

export const searchForFoodItems = createAsyncThunk(
  'search/searchForFoodItems',
  (_, thunkAPI) => {
    const searchTerm = thunkAPI.getState().search.searchTerm;
    return axios
      .post(searchFoodItemsAPI, { searchTerm: searchTerm })
      .then((response) => response.data)
      .catch((error) => error.response);
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
    resetAll: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchForFoodItems.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(searchForFoodItems.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.searchResults = payload.data;
      console.log(state.searchResults);
    });

    builder.addCase(searchForFoodItems.rejected, (state) => {
      state.isLoading = false;
      state.errorMessage = 'Something went wrong. Please try again.';
    });
  },
});

export default searchSlice.reducer;
export const { setSearchTerm, resetAll } = searchSlice.actions;
