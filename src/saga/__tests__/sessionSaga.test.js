import { call, put } from "redux-saga/effects";

import { startSessionSaga } from "../../slice/sessionSlice";
import { startSessionApi } from "../../api";
import { startSession } from "../sessionSaga";

it("Should call start session Api", () => {
  const startSessionGenerator = startSession();

  const callStartSessionApi = startSessionGenerator.next();

  expect(callStartSessionApi.value).toStrictEqual(call(startSessionApi));
});

it("Should put id session into state", () => {
  const sessionValue = {session: "2"};

  const startSessionGenerator = startSession();
  startSessionGenerator.next();

  const putStartSessionSaga = startSessionGenerator.next(sessionValue);

  expect(putStartSessionSaga.value).toStrictEqual(put(startSessionSaga(sessionValue)));
});
