import { call, put, select } from "redux-saga/effects";
import { getBeers } from "../api";

import { session } from "../selector/session";
import { updateIsFetching, addBeers } from "../slice/beersSlice";

export function* fetchBeersSaga(action) {
  try{
    const sessionInfo = yield select(session);
    yield put(updateIsFetching(true));
    const beers = yield call(getBeers, sessionInfo.session.id);
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
