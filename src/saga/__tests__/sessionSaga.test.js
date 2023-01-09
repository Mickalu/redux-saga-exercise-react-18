import { call, put } from "redux-saga/effects";

import { startSessionSaga } from "../../slice/sessionSlice";
import { startSessionApi } from "../../api";
import { startSession } from "../sessionSaga";

jest.mock('../../api', () => ({
  ...(jest.requireActual('../../api')),
  startSessionApi: jest.fn(),
}));

it("Should call start session Api", () => {
  startSessionApi.mockReturnValue({ id: "2" });

  const startSessionGenerator = startSession();

  const callStartSessionApi = startSessionGenerator.next();

  expect(callStartSessionApi.value).toStrictEqual(call(startSessionApi));
});

it("Should put id session into state", () => {
  startSessionApi.mockReturnValue({ id: "2" });
  const sessionValue = {session: "2"};

  const startSessionGenerator = startSession();
  startSessionGenerator.next();

  const putStartSessionSaga = startSessionGenerator.next(sessionValue);

  expect(putStartSessionSaga.value).toStrictEqual(put(startSessionSaga(sessionValue)));
});
