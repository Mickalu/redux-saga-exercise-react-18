import React from "react";
import { render, screen,  } from "../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import renderer from "react-test-renderer";

import BeersLiked from "../../Game/BeersLiked";
import { initListBeers } from "../../../utils/__testsTools__/initValues";

it("Should as number of title as beer in likedBeer", () => {
  const beersInteracted = { data: [ { beer: initListBeers.data[0].id }] };

  render(
    <BeersLiked
      beersInteracted={beersInteracted}
      beers={initListBeers}
  />);

  expect(screen.getAllByTestId('beer-title').length).toBe(1);
});

it("Should not have any beer title if no liked beer", () => {
  const beersInteracted = { data: [] };

  render(
    <BeersLiked
    beersInteracted={beersInteracted}
      beers={initListBeers}
  />);

  expect(screen.queryAllByTestId('beer-title').length).toBe(0);
});

it("Should match with snapShot", () => {
  const beersInteracted = { data: [ { beer: initListBeers.data[0].id }] };

  const tree = renderer
    .create(<BeersLiked beersInteracted={beersInteracted} beers={initListBeers} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
