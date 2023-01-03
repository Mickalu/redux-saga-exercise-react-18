import React from "react";
import renderer from "react-test-renderer";

import { render, getByText } from "../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { initBeerState, initListBeers } from "../../../utils/__testsTools__/initValues";
import BeerAttributes from "../../Game/BeerAttributes";

it("Should display the country", () => {
  render(<BeerAttributes beer={initBeerState} />);

  expect(getByText(initBeerState.country));
});

it("Should display the beer type", () => {
  render(<BeerAttributes beer={initBeerState} />);

  expect(getByText(initBeerState.type_beer));
});

it("Should display the beer color", () => {
  render(<BeerAttributes beer={initBeerState} />);

  expect(getByText(initBeerState.colour));
});

it("Should display the beer size", () => {
  render(<BeerAttributes beer={initBeerState} />);

  expect(getByText(initBeerState.size.toLowerCase().replace('cl', '').replace(' ', '')));
});

it("Should display the beer graduation", () => {
  render(<BeerAttributes beer={initBeerState} />);

  expect(getByText(initBeerState.graduation));
});

it("Should replace . to , in price", () => {
  initBeerState.price = "2.30";

  render(<BeerAttributes beer={initBeerState} />);

  expect(getByText(initBeerState.price.replace('.', ',')));
});

it("Should add 0 at the end if miss for price", () => {
  initBeerState.price = "2";

  render(<BeerAttributes beer={initBeerState} />);

  expect(getByText("2,00"));
});

it("Should change all information when beer change", () => {
  const firstBeer = initListBeers.data[0];
  const secondBeer = initListBeers.data[1];

  const {rerender} = render(<BeerAttributes beer={firstBeer} />);

  rerender(<BeerAttributes beer={secondBeer} />);

  expect(getByText(secondBeer.country)).toBeInTheDocument();
  expect(getByText(secondBeer.type_beer)).toBeInTheDocument();
  expect(getByText(secondBeer.colour)).toBeInTheDocument();
  expect(getByText(secondBeer.size.slice(0, 2))).toBeInTheDocument();
  expect(getByText(secondBeer.graduation)).toBeInTheDocument();
  expect(getByText(parseFloat(secondBeer.price).toFixed(2).toString().replace('.', ",")));
});

it("Should match with snapShot", () => {
  const tree = renderer
    .create(<BeerAttributes beer={initBeerState} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
