import React from "react";

import FormRegister from "../../../Authentification/FormsAutentifications/FormRegister";
import { render, getByTestId, fireEventChange } from "../../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";

const initFormValue = {
  username: "",
  password: "",
  password2: "",
  first_name: "",
  last_name: "",
  email: "",
};

const apiResponse = {
  status: true,
  data: {}
};

it("formRegister should matchsnapshot", () => {
  const { container } = render(
    <FormRegister
      formRegisterValues={initFormValue}
      apiResponse={apiResponse}
    />);

  expect(container).toMatchSnapshot();
});

it("If input password and password2 not same value, button submit disabled", () => {
  const formValueNotSamePassword = {
    username: "",
    password: "password",
    password2: "password2",
    first_name: "",
    last_name: "",
    email: "",
  };

  render(
    <FormRegister
      formRegisterValues={formValueNotSamePassword}
      apiResponse={apiResponse}
    />
  );

  expect(getByTestId("password")).toBeInTheDocument();
  expect(getByTestId("password2")).toBeInTheDocument();
  expect(getByTestId("submit-form-button")).toBeInTheDocument();

  expect(getByTestId("submit-form-button")).toHaveAttribute('disabled')
});

it("Should not dispable submit button if same password value", () => {
  const formValueSamePassword = {
    username: "",
    password: "password",
    password2: "password",
    first_name: "",
    last_name: "",
    email: "",
  };

  render(
    <FormRegister
      formRegisterValues={formValueSamePassword}
      apiResponse={apiResponse}
    />
  );

  expect(getByTestId("submit-form-button")).not.toHaveAttribute('disabled')
});
