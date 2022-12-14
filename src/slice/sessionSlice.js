import { createSlice } from "@reduxjs/toolkit";

const initialState = {session: {}};

const startSessionFunction = (state, action) => {
  state.session = action.payload;
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    startSessionSaga: startSessionFunction,
  },
});

export const { startSessionSaga } = sessionSlice.actions;

export default sessionSlice.reducer;
