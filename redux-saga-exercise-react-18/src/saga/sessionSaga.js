import { call } from "redux-saga/effects";

import { startSessionApi } from "../api";

export function* startSession(action) {
  console.log("in saga");
  try{
    const session = yield call(startSessionApi);
  }
  catch(error){
    console.log(error);
  }
};
