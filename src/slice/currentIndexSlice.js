import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentIndex: 0,
};

const handleUpdateCurrentIndex = (state) => {
  state.currentIndex += 1;
};

export const currentIndexSlice = createSlice({
  name: "currentIndex",
  initialState,
  reducers: {
    updateCurrentIndex: (state) => {
      handleUpdateCurrentIndex(state);
    },
  },
});

export const { updateCurrentIndex } = currentIndexSlice.actions;

export default currentIndexSlice.reducer;
