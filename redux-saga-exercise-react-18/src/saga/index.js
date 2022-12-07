import { takeLeading } from "redux-saga/effects";

import { sessionActions } from "../action/sessionAction";
import * as sessionSaga from "./sessionSaga";


export default function* rootSaga(){
  yield takeLeading(sessionActions.SESSION_START, sessionSaga.startSession)
};
