/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import Interactions from "../../Game/Interactions";
import { render, getByTestId, fireEvent } from "../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { initListBeers } from "../../../utils/__testsTools__/initValues";

const reactRedux = { useDispatch, useSelector };

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const likeOrDislikeBeer = jest.fn();

const dispatchMock = (value) => (
  jest.fn()
);

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

useSelectorMock.mockImplementation(callback => {
  return callback({
    beers: initListBeers,
    beersInteracted: [],
  });
});

useDispatchMock.mockReturnValue(jest.fn(value => dispatchMock(value)));

it("Should activate liked beers if click on like button", () => {
  render(<Interactions
    likeOrDislikeBeer={likeOrDislikeBeer}
  />);
  fireEvent.click(getByTestId("like-button"));

  expect(likeOrDislikeBeer).toHaveBeenCalledTimes(1);
});

it("Should activate disliked beers if click on dislike button", () => {
  render(<Interactions
    likeOrDislikeBeer={likeOrDislikeBeer}
  />);
  fireEvent.click(getByTestId("dislike-button"));

  expect(likeOrDislikeBeer).toHaveBeenCalledTimes(1);
});

it("Should match with snapShot", () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  useDispatchMock.mockReturnValue(jest.fn());

  const view = render(<Interactions />);

  expect(view).toMatchSnapshot();
});

