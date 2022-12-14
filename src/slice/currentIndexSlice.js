import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentIndex: 0,
};

const handleUpdateCurrentIndex = (state) => {
  state.currentIndex += 1
};

const resetCurrentIndexFunction = (state) => {
  state.currentIndex = 0
};

export const currentIndexSlice = createSlice({
  name: "currentIndex",
  initialState,
  reducers: {
    incrementCurrentIndex: handleUpdateCurrentIndex,
    resetCurrentIndex: resetCurrentIndexFunction,
  },
});

export const { incrementCurrentIndex, resetCurrentIndex } = currentIndexSlice.actions;

export default currentIndexSlice.reducer;
