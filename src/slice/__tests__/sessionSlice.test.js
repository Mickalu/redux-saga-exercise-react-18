import sessionReducer, { startSessionSaga } from "../sessionSlice";
import { INIT_SESSION_SLICE_STATE, sessionWithId } from "../../utils/__testsTools__/initValues/sessionSliceInitValue";

it("startSession Saga should change session value", () => {
  const sessionId = "12";
  const previousState = INIT_SESSION_SLICE_STATE;
  const expectedState = sessionWithId(sessionId);

  const action = { id: sessionId };

  expect(sessionReducer(previousState, startSessionSaga(action))).toEqual(expectedState);
});
