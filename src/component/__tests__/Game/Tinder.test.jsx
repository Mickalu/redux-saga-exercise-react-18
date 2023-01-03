import React from "react";

import Tinder from "../../Game/Tinder";
import { getByTestId, render } from "../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { store } from "../../../store";
import { addBeers } from "../../../slice/beersSlice";
import { initListBeers } from "../../../utils/__testsTools__/initValues";

it("Should contain BeerContainer", () => {
  store.dispatch(addBeers(initListBeers.data));

  render(<Tinder />);

  expect(getByTestId("beer-container")).toBeInTheDocument();
});

it("Should contain Actions component", () => {
  render(<Tinder />);

  expect(getByTestId("actions-container")).toBeInTheDocument();
});
