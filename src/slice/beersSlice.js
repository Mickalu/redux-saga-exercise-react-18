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
    addBeers: handleAddBeers,
    updateIsFetching: handleUpdateIsFetching,
  },
});

export const { addBeers, updateIsFetching } = beersSlice.actions;

export default beersSlice.reducer;
