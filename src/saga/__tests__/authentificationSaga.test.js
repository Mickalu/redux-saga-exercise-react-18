import { call, put } from "redux-saga/effects";

import { registerSaga } from "../authentificationSaga";
import * as authentificationApiUser from "../../api/authentificationApi";
import { updateStatusRegisterUser, updateDataRegisterUser } from "../../slice/Authentification/registerSlice";
import { getErrorMessageApi } from "../../utils/apiFunction/errorsMessages";

jest.mock("../../api/authentificationApi", () => ({
  ...jest.requireActual("../../api/authentificationApi"),
  registerUserApi: jest.fn(),
}));

const registerUserApiMock = jest.spyOn(authentificationApiUser, "registerUserApi");

const formsValues = {
  formRegisterValues: {},
};

const returnApiRegisterStatusTrue = {
  status: true,
  data: {
    username: "Developper",
  },
};

const returnApiRegisterStatusFalse = {
  status: false,
  data: {
    username: "already exist",
  }
};

registerUserApiMock.mockReturnValue(jest.fn());

it("RegisterSaga should call api", () => {
  const registerSagaGenerator = registerSaga(formsValues);

  const callRegisterUserApi = registerSagaGenerator.next();
  expect(callRegisterUserApi.value).toStrictEqual(call(authentificationApiUser.registerUserApi, formsValues.formRegisterValues))
});

it("Should update api response status in state", () => {
  const registerSagaGenerator = registerSaga(formsValues);
  registerSagaGenerator.next();

  const putUpdateStatus = registerSagaGenerator.next(returnApiRegisterStatusTrue);
  expect(putUpdateStatus.value).toStrictEqual(put(updateStatusRegisterUser(true)));
});

it("If response status is false should call getErrorMessageApi", () => {
  const registerSagaGenerator = registerSaga(formsValues);
  registerSagaGenerator.next()
  registerSagaGenerator.next(returnApiRegisterStatusFalse);

  const callGetErrorMessageApi = registerSagaGenerator.next();
  expect(callGetErrorMessageApi.value).toStrictEqual(call(getErrorMessageApi, returnApiRegisterStatusFalse.data));
});

it("If response status if false should update register data in state", () => {
  const errorMessage = "username already exist";

  const registerSagaGenerator = registerSaga(formsValues);
  registerSagaGenerator.next();
  registerSagaGenerator.next(returnApiRegisterStatusFalse);
  registerSagaGenerator.next();

  const putUpdateDataRegisterState = registerSagaGenerator.next(errorMessage);
  expect(putUpdateDataRegisterState.value).toStrictEqual(put(updateDataRegisterUser(errorMessage)));
});

it("if response status is true should update data register in state", () => {
  const registerSagaGenerator = registerSaga(formsValues);
  registerSagaGenerator.next();
  registerSagaGenerator.next(returnApiRegisterStatusTrue);

  const putUpdateDataState = registerSagaGenerator.next();
  expect(putUpdateDataState.value).toStrictEqual(put(updateDataRegisterUser(returnApiRegisterStatusTrue.data)));
});
