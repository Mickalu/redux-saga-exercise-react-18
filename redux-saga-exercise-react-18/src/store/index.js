import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../saga";
import beersReducer from "../slice/beersSlice";
import sessionReducer from "../slice/sessionSlice";
import currentIndexReducer from "../slice/currentIndexSlice";
import loadingBeerReducer from "../slice/loadingBeer";
import beersLikedReducer from "../slice/beersLiked";

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    beers: beersReducer,
    session: sessionReducer,
    currentIndex: currentIndexReducer,
    loadingBeer: loadingBeerReducer,
    beersLiked: beersLikedReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleWare);
  }
});

sagaMiddleWare.run(rootSaga);