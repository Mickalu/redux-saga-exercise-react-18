import { takeLeading } from "redux-saga/effects";

import { sessionActions } from "../action/sessionAction";
import { beersActions } from "../action/beersActions";
import { authentificationAction } from "../action/authentificationAction";
import * as sessionSaga from "./sessionSaga";
import * as beersSaga from "./beersSaga";
import * as authentificationSaga from "./authentificationSaga";

export default function* rootSaga(){
  yield takeLeading(sessionActions.SESSION_START, sessionSaga.startSession)
  yield takeLeading(beersActions.FETCH_BEERS, beersSaga.fetchBeersSaga)
  yield takeLeading(authentificationAction.REGISTER_USER, authentificationSaga.registerSaga)
  yield takeLeading("SUBMIT_USER_CONNEXION", authentificationSaga.userConnectionSaga)
};
