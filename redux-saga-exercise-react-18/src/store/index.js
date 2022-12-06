import { configureStore } from "@reduxjs/toolkit";
import beersReducer from "../slice/beersSlice";


export const store = configureStore({
  reducer: {
    beers: beersReducer,
  },
});
