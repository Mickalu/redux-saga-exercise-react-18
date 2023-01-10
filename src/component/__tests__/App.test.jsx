import React from "react";

import App from "../App";
import { render } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";

it("App return Home when user is connected", () => {
  const { container } = render(<App isUserConnected={true} />);
  expect(container).toMatchSnapshot();
});

it("App should return login page if user not connected", () => {
  const { container } = render(<App isUserConnected={false} />);
  expect(container).toMatchSnapshot();
});

