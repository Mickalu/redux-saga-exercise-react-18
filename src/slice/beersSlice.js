import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isFetching: false,
};

const handleAddBeers = (state, action) => {
  state.data = action.payload;
};

const handleUpdateIsFetching = (state, action) => {
  state.isFetching = action.payload;
};

export const beersSlice = createSlice({
  name: "beers",
  initialState,
  reducers: {
    addBeers: (state, action) => {
      handleAddBeers(state, action);
    },
    updateIsFetching: (state, action) => {
      handleUpdateIsFetching(state, action);
    },
  },
});

export const { addBeers, updateIsFetching } = beersSlice.actions;

export default beersSlice.reducer;
