/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { useSelector } from "react-redux";

import Tinder from "../../Game/Tinder";
import { getByTestId, render } from "../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { initListBeers } from "../../../utils/__testsTools__/initValues";

const reactRedux = { useSelector };

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

it("Should contain BeerContainer", () => {
  useSelectorMock.mockImplementation(callback => {
    return callback({
      beers: initListBeers,
      currentBeer: { id: "82" },
    });
  });

  render(<Tinder />);
  expect(getByTestId("beer-container")).toBeInTheDocument();
});

it("Should contain Interractions component", () => {
  useSelectorMock.mockImplementation(callback => {
    return callback({
      beers: initListBeers,
      currentBeer: { id: "82" },
    });
  });

  render(<Tinder />);

  expect(getByTestId("actions-container")).toBeInTheDocument();
});
