import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistStore } from "redux-persist";

import rootSaga from "../saga";
import beersReducer from "../slice/beersSlice";
import sessionReducer from "../slice/sessionSlice";
import currentIndexReducer from "../slice/currentIndexSlice";
import loadingBeerReducer from "../slice/loadingBeer";
import beersLikedReducer from "../slice/beersLiked";
import registerUserReducer from "../slice/Authentification/registerSlice";
import tokenAuthentificationReducer from "../slice/Authentification/tokenAuthentificationSlice";

const persistConfig = {
  key: 'root',
  storage: storage,
};


const sagaMiddleWare = createSagaMiddleware();

const rootReducers = combineReducers({
  beers: beersReducer,
  session: sessionReducer,
  currentIndex: currentIndexReducer,
  loadingBeer: loadingBeerReducer,
  beersLiked: beersLikedReducer,
  registerUser: registerUserReducer,
  tokenAuthentification: tokenAuthentificationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleWare);
  }
});

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);
