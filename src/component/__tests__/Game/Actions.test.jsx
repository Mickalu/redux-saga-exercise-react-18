import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import Actions from "../../Game/Actions";
import { render, getByTestId, fireEvent } from "../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { currentIndexActions } from "../../../action/currentIndexActions";
import { initListBeers } from "../../../utils/__testsTools__/initValues";

const reactRedux = { useDispatch, useSelector };

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const likeBeerFunction = jest.fn();
const dislikeBeerFunction = jest.fn();

const dispatchMock = (value) => {
  switch (value.type){
    case currentIndexActions.ADD_BEER_LIKED_BEERS:
      likeBeerFunction();
      break;

    case currentIndexActions.REMOVE_BEER_LIKED_BEERS:
      dislikeBeerFunction();
      break;

    default:
      jest.fn();
  };
};

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

useSelectorMock.mockImplementation(callback => {
  return callback({
    beers: initListBeers,
    currentIndex: { currentIndex: 0 },
    beersLiked: [],
  });
});

useDispatchMock.mockReturnValue(jest.fn(value => dispatchMock(value)));

it("Should have a button like", () => {
  render(<Actions />);

  expect(getByTestId("like-button")).toBeInTheDocument();
});

it("Should have a dislike button", () => {
  render(<Actions />);

  expect(getByTestId("dislike-button")).toBeInTheDocument();
});

it("Should activate liked beers if click on like button", () => {
  render(<Actions />);
  fireEvent.click(getByTestId("like-button"));

  expect(likeBeerFunction).toHaveBeenCalledTimes(1);
});

it("Should activate disliked beers if click on dislike button", () => {
  render(<Actions />);
  fireEvent.click(getByTestId("dislike-button"));

  expect(dislikeBeerFunction).toHaveBeenCalledTimes(1);
});

it("Should match with snapShot", () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  useDispatchMock.mockReturnValue(jest.fn());

  const wrapper = render(<Actions />);

  expect(wrapper).toMatchSnapshot();
});
