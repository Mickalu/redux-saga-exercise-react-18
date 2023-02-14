import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { render, queryBytestId } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { initListBeers } from "../../utils/__testsTools__/initValues";
import BeersLikedContainer from "../BeersLikedContainer";
import * as ApiLikedBeer from "../../api/likeBeerApi";

const reactRedux = { useDispatch, useSelector };

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

jest.mock("../../api/likeBeerApi.js", () => ({
  ...jest.requireActual("../../api/likeBeerApi.js"),
  getUserBeersInteractedApi: jest.fn((value) => { return { data: [] }}),
}));

const getUserBeersInteractedApiMock = jest.spyOn(ApiLikedBeer, "getUserBeersInteractedApi");
getUserBeersInteractedApiMock.mockReturnValue((value) => { return { data: [] }});

it("Should not have beer title at the beginning", () => {
  useSelector.mockImplementation(callback => {
    return callback({
      beersInteracted: { data: [] },
      beers: initListBeers,
      tokenAuthentification: { token: "1234" },
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
      beersInteracted: { data: [{ beer: "126" }] },
      beers: initListBeers,
      tokenAuthentification: { token: "1234" },
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
      beersInteracted: { data: [{ beer: "126" }, { beer: "82" }] },
      beers: initListBeers,
      tokenAuthentification: { token: "1234" },
    });
  });

  const { container } = render(<BeersLikedContainer />);
  expect(container).toMatchSnapshot();
});
