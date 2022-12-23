import registerUserReducer, {
  updateStatusRegisterUser,
  updateDataRegisterUser,
  resetRegisterUser
} from "../../Authentification/registerSlice";
import {
  INIT_VALUE_REGISTER_STATE,
  STATE_REGISTER_TRUE_STATUS,
  STATE_REGISTER_GOOD_RESPONSE
} from "../../../utils/__testsTools__/initValues/registerSliceInitValues";

it("updateStatusRegisterUser should update status state value", () => {
  const previousState = INIT_VALUE_REGISTER_STATE;
  const stateExpected = STATE_REGISTER_TRUE_STATUS;
  const action = true;

  expect(registerUserReducer(previousState, updateStatusRegisterUser(action))).toEqual(stateExpected);
});

it("updateDataRegisterUser should update data in state", () => {
  const previousState = STATE_REGISTER_TRUE_STATUS;
  const expectedState = STATE_REGISTER_GOOD_RESPONSE;
  const action = STATE_REGISTER_GOOD_RESPONSE.data;

  expect(registerUserReducer(previousState, updateDataRegisterUser(action))).toEqual(expectedState);
});

it("resetRegisterUser should resete all register state values", () => {
  const previousState = STATE_REGISTER_GOOD_RESPONSE;
  const expectedState = INIT_VALUE_REGISTER_STATE;

  expect(registerUserReducer(previousState, resetRegisterUser())).toStrictEqual(expectedState);
});
