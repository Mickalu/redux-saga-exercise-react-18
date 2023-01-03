import React from "react";

import { render } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import Header from "../Header";

it("Header should match snapshot", () => {
  const { container }  = render(<Header />);

  expect(container).toMatchSnapshot();
});
