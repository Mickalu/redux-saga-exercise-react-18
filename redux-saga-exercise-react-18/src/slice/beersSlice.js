import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isFetchinh: false,
};

export const beersSlice = createSlice({
  name: "beers",
  initialState,
  reducers: {
    addBeers: (state, action) => {
      state.data = [...state.data, action.payload.beers];
    },
  },
});

export const { addBeers } = beersSlice.actions;

export default beersSlice.reducer;
