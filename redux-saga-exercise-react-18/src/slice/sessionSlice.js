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
  },
});

export const { startSessionSaga } = sessionSlice.actions;

export default sessionSlice.reducer;
