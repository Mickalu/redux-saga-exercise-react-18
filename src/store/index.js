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
import loadingBeerReducer from "../slice/loadingBeer";
import beersInteractedReducer from "../slice/beersInteractedSlice";
import registerUserReducer from "../slice/Authentification/registerSlice";
import tokenAuthentificationReducer from "../slice/Authentification/tokenAuthentificationSlice";
import currentBeerReducer from "../slice/currentBeerSlice";

const persistConfig = {
  key: 'root',
  storage: storage,
};

const sagaMiddleWare = createSagaMiddleware();

const rootReducers = combineReducers({
  beers: beersReducer,
  session: sessionReducer,
  loadingBeer: loadingBeerReducer,
  beersInteracted: beersInteractedReducer,
  registerUser: registerUserReducer,
  tokenAuthentification: tokenAuthentificationReducer,
  currentBeer: currentBeerReducer,
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
