import React from "react";
import { useSelector, useDispatch } from "react-redux";

import BeerContainer from "../BeerContainer";
import { render, queryBytestId } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { initListBeers  } from "../../utils/__testsTools__/initValues";

const reactRedux = { useSelector, useDispatch };

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

it("Should not display Beer.jsx if no state.beers", () => {
  useSelectorMock.mockImplementation(callback => {
    return callback({
      beers: [],
      currentBeer: { currentBeer: null },
    });
  });

  render(<BeerContainer />);

  expect(queryBytestId("beer-container")).not.toBeInTheDocument();
});

it("Should not display because beer not existe", () => {
  useSelectorMock.mockImplementation(callback => {
    return callback({
      beers: [],
      currentBeer: { currentBeer: "46287254982" },
    });
  });

  render(<BeerContainer />);

  expect(queryBytestId("beer-container")).not.toBeInTheDocument();
});

it("Should match with the snapshot", () => {
  useSelectorMock.mockImplementation(callback => {
    return callback({
      beers: initListBeers,
      currentBeer: { id: "126" },
    });
  });

  useDispatchMock.mockReturnValue(jest.fn());

  const view = render(<BeerContainer />);

  expect(view).toMatchSnapshot();
});
