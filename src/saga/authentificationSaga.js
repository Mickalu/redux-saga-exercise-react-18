import { call, put } from "redux-saga/effects";

import { registerUserApi } from "../api/authentificationApi";
import { updateStatusRegisterUser, updateDataRegisterUser } from "../slice/Authentification/registerSlice";
import { getErrorMessageApi } from "../utils/apiFunction/errorsMessages";

export function* registerSaga(formsValues) {
  const response = yield call(registerUserApi, formsValues.formRegisterValues);
  yield put(updateStatusRegisterUser(response.status));

  if (response.status === false) {
    const dataRegisterUpdated = yield call(getErrorMessageApi, response.data);
    yield put(updateDataRegisterUser(dataRegisterUpdated));
  }
  else {
    yield put(updateDataRegisterUser(response.data));
  }
};
