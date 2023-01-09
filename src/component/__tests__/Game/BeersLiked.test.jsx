import React from "react";
import { render, screen,  } from "../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import renderer from "react-test-renderer";

import BeersLiked from "../../Game/BeersLiked";
import { initListBeers } from "../../../utils/__testsTools__/initValues";

it("Should as number of title as beer in likedBeer", () => {
  const beersLiked = {data: [initListBeers.data[0].id]};

  render(
    <BeersLiked
      beersLiked={beersLiked}
      beers={initListBeers}
  />);

  expect(screen.getAllByTestId('beer-title').length).toBe(1);
});

it("Should not have any beer title if no liked beer", () => {
  const beersLiked = { data: [] };

  render(
    <BeersLiked
      beersLiked={beersLiked}
      beers={initListBeers}
  />);

  expect(screen.queryAllByTestId('beer-title').length).toBe(0);
});

it("Should match with snapShot", () => {
  const beersLiked = {data: [initListBeers.data[0].id]};

  const tree = renderer
    .create(<BeersLiked beersLiked={beersLiked} beers={initListBeers} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
