import React from "react";

import FormRegister from "../../../Authentification/FormsAutentifications/FormRegister";
import { render } from "../../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";

it("formRegister should matchsnapshot", () => {
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

  const { container } = render(
    <FormRegister
      formRegisterValues={initFormValue}
      apiResponse={apiResponse}
    />);

  expect(container).toMatchSnapshot();
});
