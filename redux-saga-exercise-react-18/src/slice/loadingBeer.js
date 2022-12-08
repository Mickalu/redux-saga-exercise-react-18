import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingBeer: false,
};

export const loadingBeerSlice = createSlice({
  name: "liadingBeer",
  initialState,
  reducers: {
    updateLoadingBeer: (state, action) => {
      state.loadingBeer = action.payload.loadingBeer;
    },
  },
});

export const { updateLoadingBeer } = loadingBeerSlice.actions;

export default loadingBeerSlice.reducer;
