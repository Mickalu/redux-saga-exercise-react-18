import { call, put } from "redux-saga/effects";

import { startSessionSaga } from "../slice/sessionSlice";
import { startSessionApi } from "../api";

export function* startSession() {
  try {
    const session = yield call(startSessionApi);
    yield put(startSessionSaga(session));
  }
  catch (error) {
    yield put(startSessionSaga(null));
    console.log(error);
  }
};
