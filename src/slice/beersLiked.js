import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const addLikedBeersFunction = (state, action) => {
  state.data = action.payload;
};

const removeLikedBeersFunction = (state, action) => {
  state.data = state.data.filter(item => item !== action.payload.beerId);
};

export const beersLikedSlice = createSlice({
  name: "beersLiked",
  initialState,
  reducers: {
    addLikedBeers: addLikedBeersFunction,
    removeLikedBeers: removeLikedBeersFunction,
  },
});

export const { addLikedBeers, removeLikedBeers } = beersLikedSlice.actions;

export default beersLikedSlice.reducer;
