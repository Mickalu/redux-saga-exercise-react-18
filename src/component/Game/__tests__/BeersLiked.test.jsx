import React from "react";
import { render, screen,  } from "../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";

import BeersLiked from "../BeersLiked";
import { initListBeers } from "../../../utils/__testsTools__/initValues";

it("Should as number of title as beer in likedBeer ", () => {
  const beersLiked = {data: [initListBeers.data[0].id]};

  render(
    <BeersLiked
      beersLiked={beersLiked}
      beers={initListBeers}
  />);

  expect(screen.getAllByTestId('beer-title').length).toBe(1);
});

it("Should not have any beer title if no liked beer", () => {
  const beersLiked = {data: []};

  render(
    <BeersLiked
      beersLiked={beersLiked}
      beers={initListBeers}
  />);

  expect(screen.queryAllByTestId('beer-title').length).toBe(0);
});
