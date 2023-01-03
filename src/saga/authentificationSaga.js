import { call, put } from "redux-saga/effects";

import { registerUserApi, getTokenConnexion } from "../api/authentificationApi";
import { updateStatusRegisterUser, updateDataRegisterUser } from "../slice/Authentification/registerSlice";
import { getErrorMessageApi } from "../utils/apiFunction/errorsMessages";
import { updateTokenValue, resetErrorValue, updateErrorValue } from "../slice/Authentification/tokenAuthentificationSlice";

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

export function* userConnectionSaga(formValues) {
  const response = yield call(getTokenConnexion, formValues.connexionFormValues);

  if (response.token) {
    yield put(updateTokenValue(response.token));
    yield put(resetErrorValue());
  }
  else {
    yield put(updateErrorValue(getErrorMessageApi(response)));
  }
};
