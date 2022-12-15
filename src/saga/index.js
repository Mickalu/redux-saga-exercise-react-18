import { takeLeading } from "redux-saga/effects";

import { sessionActions } from "../action/sessionAction";
import { beersActions } from "../action/beersActions";
import { currentIndexActions } from "../action/currentIndexActions";
import * as sessionSaga from "./sessionSaga";
import * as beersSaga from "./beersSaga";
import * as currentIndexSaga from "./currentIndexSaga";

export default function* rootSaga(){
  yield takeLeading(sessionActions.SESSION_START, sessionSaga.startSession)
  yield takeLeading(beersActions.FETCH_BEERS, beersSaga.fetchBeersSaga)
  yield takeLeading(currentIndexActions.INCREMENT_CURRENT_INDEX, currentIndexSaga.incrementCurrentIndexBeers)
  yield takeLeading(currentIndexActions.ADD_BEER_LIKED_BEERS, currentIndexSaga.addBeerToLikedBeers)
  yield takeLeading(currentIndexActions.REMOVE_BEER_LIKED_BEERS, currentIndexSaga.removeBeerToLikedBeers)
};
