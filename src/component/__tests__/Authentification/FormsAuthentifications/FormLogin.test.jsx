import React from "react";

import { render } from "../../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import FormLogin from "../../../Authentification/FormsAutentifications/FormLogin";

it("FormLogin should match snapshot", () => {
  const { container } = render(<FormLogin error_message={jest.fn()} />);
  expect(container).toMatchSnapshot();
});
