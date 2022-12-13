import { call, put } from "redux-saga/effects";
import { getBeers } from "../api";

import { updateIsFetching, addBeers } from "../slice/beersSlice";

export function* fetchBeersSaga() {
  try{
    yield put(updateIsFetching(true));
    const beers = yield call(getBeers);
    try {
      yield put(updateIsFetching(false));
      yield put(addBeers(beers));
    }
    catch(error){
      yield put(updateIsFetching(false));
    }
  }
  catch(error){
    yield put(updateIsFetching(false));
    console.log(error);
  }
};
