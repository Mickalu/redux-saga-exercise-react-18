import React from "react";

import { render, getByText } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { initBeerState } from "../../utils/__testsTools__/initValues";
import Beer from "../Beer";

it("should display all beer informations", () => {
  render(
    <Beer
      beer={initBeerState}
    />
  );

  expect(getByText(initBeerState.country)).toBeInTheDocument();
  expect(getByText(initBeerState.title)).toBeInTheDocument();
  expect(getByText(initBeerState.type_beer)).toBeInTheDocument();
  expect(getByText(initBeerState.colour)).toBeInTheDocument();
  expect(getByText(initBeerState.size.slice(0, 2))).toBeInTheDocument();
  expect(getByText(initBeerState.graduation)).toBeInTheDocument();
  expect(getByText(parseFloat(initBeerState.price).toFixed(2).toString().replace('.', ",")));
});
