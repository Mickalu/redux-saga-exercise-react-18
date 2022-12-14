import React from "react";

import BeerContainer from "../BeerContainer";
import { render, queryBytestId } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";

it("Should not display Beer.jsx if no state.beers", () => {
  render(<BeerContainer />);

  expect(queryBytestId("beer-container")).not.toBeInTheDocument();
});


