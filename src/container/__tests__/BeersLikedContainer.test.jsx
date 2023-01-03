import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { render, queryBytestId } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { initListBeers } from "../../utils/__testsTools__/initValues";
import BeersLikedContainer from "../BeersLikedContainer";


const reactRedux = { useDispatch, useSelector };

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn()
}));

it("Should not have beer title at the beginning", () => {
  useSelector.mockImplementation(callback => {
    return callback({
      beersLiked: { data: [] },
      beers: initListBeers,
    });
  });

  render(<BeersLikedContainer />);

  expect(queryBytestId("beer-title")).not.toBeInTheDocument();
});

it("beersLikedContainer Should match snapshot", () => {
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  useDispatchMock.mockReturnValue(jest.fn());
  useSelectorMock.mockImplementation(callback => {
    return callback({
      beersLiked: { data: ["126"] },
      beers: initListBeers,
    });
  });

  const { container } = render(<BeersLikedContainer />);

  expect(container).toMatchSnapshot();
});

it("beersLikedContainer with multiple liked beer should display all title", () => {
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  useDispatchMock.mockReturnValue(jest.fn());
  useSelectorMock.mockImplementation(callback => {
    return callback({
      beersLiked: { data: ["126", "82"] },
      beers: initListBeers,
    });
  });

  const { container } = render(<BeersLikedContainer />);
  expect(container).toMatchSnapshot();
});
