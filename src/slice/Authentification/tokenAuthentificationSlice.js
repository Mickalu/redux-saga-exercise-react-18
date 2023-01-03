import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  error: "",
};

const updateTokenValueFunction = (state, action) => {
  state.token = action.payload;
};

const updateErrorValueFunction = (state, action) => {
  state.error = action.payload;
}

const resetErrorValueFunction = (state, action) => {
  state.error = "";
};

export const tokenAuthentificationSlice = createSlice({
  name: "tokenAuthentification",
  initialState: initialState,
  reducers: {
    updateTokenValue: updateTokenValueFunction,
    updateErrorValue: updateErrorValueFunction,
    resetErrorValue: resetErrorValueFunction,
  }
})

export const { updateTokenValue, updateErrorValue, resetErrorValue } = tokenAuthentificationSlice.actions;

export default tokenAuthentificationSlice.reducer;
