import React from "react";
import { useSelector, useDispatch } from "react-redux";

import BeerContainer from "../BeerContainer";
import { render, queryBytestId, getByText } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { initListBeers  } from "../../utils/__testsTools__/initValues";
import { store } from "../../store";
import { addBeers } from "../../slice/beersSlice";

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
      currentIndex: { currentIndex: 0 },
    });
  });

  render(<BeerContainer />);

  expect(queryBytestId("beer-container")).not.toBeInTheDocument();
});

it("Should not display because beer not existe", () => {
  useSelectorMock.mockImplementation(callback => {
    return callback({
      beers: [],
      currentIndex: { currentIndex: 10000 },
    });
  });

  render(<BeerContainer />);

  expect(queryBytestId("beer-container")).not.toBeInTheDocument();
});

it("Should match with the snapshot", () => {
  useSelectorMock.mockImplementation(callback => {
    return callback({
      beers: initListBeers,
      currentIndex: { currentIndex: 1 },
    });
  });

  useDispatchMock.mockReturnValue(jest.fn());

  const wrapper = render(<BeerContainer />);

  expect(wrapper).toMatchSnapshot();
});
