import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  data: "",
};

const updateStatus = (state, action) => {
  state.status = action.payload;
};

const updateData = (state, action) => {
  state.data = action.payload;
};

const resetRegister = () => (
  initialState
);

export const registerUserSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    updateStatusRegisterUser: updateStatus,
    updateDataRegisterUser: updateData,
    resetRegisterUser: resetRegister,
  },
});

export const { updateStatusRegisterUser, updateDataRegisterUser, resetRegisterUser } = registerUserSlice.actions;

export default registerUserSlice.reducer;
