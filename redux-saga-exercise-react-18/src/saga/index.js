import { takeLeading } from "redux-saga/effects";

import { sessionActions } from "../action/sessionAction";
import { beersActions } from "../action/beersActions";
import * as sessionSaga from "./sessionSaga";
import * as beersSaga from "./beersSaga";

export default function* rootSaga(){
  yield takeLeading(sessionActions.SESSION_START, sessionSaga.startSession)
  yield takeLeading(beersActions.FETCH_BERRS, beersSaga.fetchBeersSaga)
};
