import React from "react";

import { render, getByText } from "../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { initBeerState } from "../../../utils/__testsTools__/initValues";
import BeerAttributes from "../../Game/BeerAttributes";

it("Should replace . to , in price", () => {
  initBeerState.price = "2.30";

  render(
    <BeerAttributes
      beer={initBeerState}
    />
  );

  expect(getByText(initBeerState.price.replace('.', ',')));
});

it("Shjould add 0 at the end if miss for price", () => {
  initBeerState.price = "2";

  render(
    <BeerAttributes
      beer={initBeerState}
    />
  );

  expect(getByText("2,00"));
});
