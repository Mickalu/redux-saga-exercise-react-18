import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentIndex: 0,
};

export const currentIndexSlice = createSlice({
  name: "currentIndex",
  initialState,
  reducers: {
    incrementCurrentIndex: (state) => {
      state.currentIndex += 1;
    },
    resetCurrentIndex: (state) => {
      state.currentIndex = 0;
    }
  },
});

export const { incrementCurrentIndex, resetCurrentIndex } = currentIndexSlice.actions;

export default currentIndexSlice.reducer;
