import { takeLeading } from "redux-saga/effects";

import * as sessionSaga from "./sessionSaga";
import * as beersSaga from "./beersSaga";
import * as authentificationSaga from "./authentificationSaga";
import * as likedBeerSaga from "./likeBeerSaga";

export default function* rootSaga(){
  yield takeLeading("SESSION_START", sessionSaga.startSession)
  yield takeLeading("FETCH_BEERS", beersSaga.fetchBeersSaga)
  yield takeLeading("REGISTER_USER", authentificationSaga.registerSaga)
  yield takeLeading("SUBMIT_USER_CONNEXION", authentificationSaga.userConnectionSaga)
  yield takeLeading("GET_LIKED_BEERS", likedBeerSaga.getLikedBeer)
  yield takeLeading("ADD_LIKE_BEER", likedBeerSaga.likeBeer)
};
