/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { render, getByText, queryBytestId, getByTestId } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { initBeerState, initListBeers } from "../../utils/__testsTools__/initValues";
import Beer from "../Beer";
import * as ApiLikedBeer from "../../api/likeBeerApi";

const reactRedux = { useDispatch, useSelector };
const reactHooks = { useEffect };

jest.mock("react-redux", () => ({
  __esModule: true,
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock("../../api/likeBeerApi", () => ({
  ...jest.requireActual("../../api/likeBeerApi"),
  getUserBeersInteractedApi: jest.fn((value) => { return { data: [] }}),
}));

const getUserBeersInteractedApiMock = jest.spyOn(ApiLikedBeer, "getUserBeersInteractedApi");
getUserBeersInteractedApiMock.mockReturnValue((value) => { return { data: [] }});

it("should display all beer informations", () => {
  render(<Beer beer={initBeerState} /> );

  expect(getByText(initBeerState.country)).toBeInTheDocument();
  expect(getByText(initBeerState.title)).toBeInTheDocument();
  expect(getByText(initBeerState.type_beer)).toBeInTheDocument();
  expect(getByText(initBeerState.colour)).toBeInTheDocument();
  expect(getByText(initBeerState.size.slice(0, 2))).toBeInTheDocument();
  expect(getByText(initBeerState.graduation)).toBeInTheDocument();
  expect(getByText(parseFloat(initBeerState.price).toFixed(2).toString().replace('.', ",")));
});

it("should display circle spin if don't have photo_link", () => {
  const initBeerStateWithoutPhotoLink = {...initBeerState};
  delete initBeerStateWithoutPhotoLink.photo_link;

  render(<Beer beer={initBeerStateWithoutPhotoLink} /> );

  expect(queryBytestId("circle-spin")).toBeInTheDocument();
});

it("image beer should have same height than its parent div", () => {
  render(<Beer beer={initBeerState} /> );

  expect(getByTestId("div-image-beer")).toBeInTheDocument();
  expect(getByTestId("beer-image")).toBeInTheDocument();

  const parentDiv = getByTestId("div-image-beer");
  expect(getByTestId("beer-image")).toHaveStyle("heigth: "+ parentDiv.style.height);
});

it("image beer should match snapshot", () => {
  const currentIndexValue = 2;
  const beerDictionnary = initListBeers.data[currentIndexValue];

  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useEffectMock = jest.spyOn(reactHooks, "useEffect");

  useDispatchMock.mockReturnValue(jest.fn());
  useEffectMock.mockReturnValue(jest.fn());

  useSelectorMock.mockImplementation(callback => {
    return callback({
      currentIndex: currentIndexValue,
    });
  });
  const { container } = render(<Beer beer={beerDictionnary} />);

  expect(container).toMatchSnapshot();
});
