import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const addLikedBeersFunction = (state, action) => (
  state.data = [...state.data, action.payload.beerId]
 );

export const beersLikedSlice = createSlice({
  name:"beersLiked",
  initialState,
  reducers: {
    addLikedBeers: (state, action) => {
      addLikedBeersFunction(state, action);
    },
  },
});

export const { addLikedBeers } = beersLikedSlice.actions;

export default beersLikedSlice.reducer;
