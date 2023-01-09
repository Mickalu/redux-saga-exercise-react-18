import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { render } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import TinderContainer from "../TinderContainer";

const reactRedux = { useDispatch, useSelector };

jest.mock("react-redux", () => ({
  __esModule: true,
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

let fetchBeerMock = jest.fn(() => null);
let sessionStart = jest.fn(() => null);

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

const dispatchMock = (value) => {
  switch (value.type){
    case "SESSION_START":
      sessionStart();
      break;

    case "FETCH_BEERS":
      fetchBeerMock();
      break;

    default:
      jest.fn();
  };
};

it("Should use session start if no session id", () => {
  useSelectorMock.mockImplementation(callback => {
    return callback({
      session: { session: {} },
      beers: { data: [] },
      currentBeer: { id: "1" },
    });
  });

  useDispatchMock.mockReturnValue(jest.fn(value => dispatchMock(value)));

  render(<TinderContainer />);

  expect(sessionStart).toHaveBeenCalledTimes(1);
});

it("Should call feetch beer if got session id", () => {
  useSelectorMock.mockImplementation(callback => {
    return callback({
      session: { session: { id: 1 } },
      beers: { data: [] },
      currentBeer: { id: "1" },
    });
  });

  useDispatchMock.mockReturnValue(jest.fn(value => dispatchMock(value)));

  render(<TinderContainer />);

  expect(fetchBeerMock).toHaveBeenCalledTimes(1);
});
