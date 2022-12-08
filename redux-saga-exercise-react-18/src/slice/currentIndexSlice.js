import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentIndex: 0,
};

export const currentIndexSlice = createSlice({
  name: "currentIndex",
  initialState,
  reducers: {
    updateCurrentIndex: (state) => {
      state.currentIndex += 1;
    },
  },
});

export const { updateCurrentIndex } = currentIndexSlice.actions;

export default currentIndexSlice.reducer;
