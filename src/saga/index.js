import { takeLeading } from "redux-saga/effects";

import { sessionActions } from "../action/sessionAction";
import { beersActions } from "../action/beersActions";
import { currentIndexActions } from "../action/currentIndexActions";
import { authentificationAction } from "../action/authentificationAction";
import * as sessionSaga from "./sessionSaga";
import * as beersSaga from "./beersSaga";
import * as currentIndexSaga from "./currentIndexSaga";
import * as authentificationSaga from "./authentificationSaga";

export default function* rootSaga(){
  yield takeLeading(sessionActions.SESSION_START, sessionSaga.startSession)
  yield takeLeading(beersActions.FETCH_BEERS, beersSaga.fetchBeersSaga)
  yield takeLeading(currentIndexActions.INCREMENT_CURRENT_INDEX, currentIndexSaga.incrementCurrentIndexBeers)
  yield takeLeading(currentIndexActions.ADD_BEER_LIKED_BEERS, currentIndexSaga.addBeerToLikedBeers)
  yield takeLeading(currentIndexActions.REMOVE_BEER_LIKED_BEERS, currentIndexSaga.removeBeerToLikedBeers)
  yield takeLeading(authentificationAction.REGISTER_USER, authentificationSaga.registerSaga)
  yield takeLeading("SUBMIT_USER_CONNEXION", authentificationSaga.userConnectionSaga)
};
