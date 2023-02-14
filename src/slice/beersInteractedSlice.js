import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const addInteractedBeersFunction = (state, action) => {
  state.data = action.payload;
};

const removeInteractedBeersFunction = (state, action) => {
  state.data = state.data.filter(item => item !== action.payload.beerId);
};

export const beersInteractedSlice = createSlice({
  name: "beersInteracted",
  initialState,
  reducers: {
    addInteractedBeers: addInteractedBeersFunction,
    removeInteractedBeers: removeInteractedBeersFunction,
  },
});

export const { addInteractedBeers, removeInteractedBeers } = beersInteractedSlice.actions;

export default beersInteractedSlice.reducer;
