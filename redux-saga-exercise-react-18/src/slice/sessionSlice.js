import { createSlice } from "@reduxjs/toolkit";

const initialState = {session: {}};

const handleStartSession = (state, action) => {
  state.session = action.payload;
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    startSessionSaga: (state, action) => {
      handleStartSession(state, action);
    },
    getSession: (state) => {
      return state.session;
    }
  },
});

export const { startSessionSaga, getSession } = sessionSlice.actions;

export default sessionSlice.reducer;
