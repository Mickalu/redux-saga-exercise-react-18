import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
};

const updateCurrentBeerIdFunction = (state, action) => {
  state.id = action.payload;
};

export const currentBeerSlice = createSlice({
  name: "currentBeer",
  initialState,
  reducers: {
    updateCurrentbeerId: updateCurrentBeerIdFunction,
  },
});

export const { updateCurrentbeerId } = currentBeerSlice.actions;

export default currentBeerSlice.reducer;
