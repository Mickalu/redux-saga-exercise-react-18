import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingBeer: false,
};

const handleUpdateLoadingBeer = (state, action) => {
  state.loadingBeer = action.payload.loadingBeer;
};

export const loadingBeerSlice = createSlice({
  name: "loadingBeer",
  initialState,
  reducers: {
    updateLoadingBeer: handleUpdateLoadingBeer,
  },
});

export const { updateLoadingBeer } = loadingBeerSlice.actions;

export default loadingBeerSlice.reducer;
