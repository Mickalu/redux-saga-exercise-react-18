/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import Actions from "../../Game/Actions";
import { render, getByTestId, fireEvent } from "../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { initListBeers } from "../../../utils/__testsTools__/initValues";

const reactRedux = { useDispatch, useSelector };

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const likeBeerFunction = jest.fn();
const passNextBeer = jest.fn();

const dispatchMock = (value) => (
  jest.fn()
);

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

useSelectorMock.mockImplementation(callback => {
  return callback({
    beers: initListBeers,
    beersLiked: [],
  });
});

useDispatchMock.mockReturnValue(jest.fn(value => dispatchMock(value)));

it("Should activate liked beers if click on like button", () => {
  render(<Actions
    likeBeer={likeBeerFunction}
    passNextBeer={passNextBeer}
  />);
  fireEvent.click(getByTestId("like-button"));

  expect(likeBeerFunction).toHaveBeenCalledTimes(1);
});

it("Should activate disliked beers if click on dislike button", () => {
  render(<Actions
    likeBeer={likeBeerFunction}
    passNextBeer={passNextBeer}
  />);
  fireEvent.click(getByTestId("dislike-button"));

  expect(passNextBeer).toHaveBeenCalledTimes(1);
});

it("Should match with snapShot", () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  useDispatchMock.mockReturnValue(jest.fn());

  const view = render(<Actions />);

  expect(view).toMatchSnapshot();
});

