import { call } from "redux-saga/effects";

import { registerUserApi } from "../api/authentificationApi";

export function* registerSaga(formsValues) {
  yield call(registerUserApi, formsValues.formRegisterValues);
};
