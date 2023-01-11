import { call, put, select } from "redux-saga/effects";

import { getBeers } from "../api";
import { tokenAuthentificationSelector } from "../selector/tokenAuthentification";
import { updateIsFetching, addBeers } from "../slice/beersSlice";
import { initFirstBeerNotInteractedSaga } from "./interactedBeerSaga";

export function* fetchBeersSaga() {
  try{
    yield put(updateIsFetching(true));
    const tokenInfo = yield select(tokenAuthentificationSelector);
    const beers = yield call(getBeers, tokenInfo.token);

    try {
      yield put(updateIsFetching(false));
      yield put(addBeers(beers));
      yield call(initFirstBeerNotInteractedSaga);
    }
    catch(error){
      console.log(error);
      yield put(updateIsFetching(false));
    }
  }
  catch(error){
    console.log(error);
    yield put(updateIsFetching(false));
  }
};
