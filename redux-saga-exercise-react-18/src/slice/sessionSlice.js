import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const handleStartSession = (state, action) => {
  state = action.session;
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    updateSession: (state, action) => {
      state = action.payload.session;
    },
    startSessionSaga: (state, action) => {
      handleStartSession(state, action);
    },
  },
});

export const { updateSession, startSessionSaga } = sessionSlice.actions;

export default sessionSlice.reducer;
