import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { debug } from "jest-preview";

import * as api from "../../api/index";
import Home from "../Home";
import { initListBeers } from "../../utils/__testsTools__/initValues";
import { currentIndexActions } from "../../action/currentIndexActions";
import { render } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";

const reactRedux = { useDispatch, useSelector };

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

jest.mock("../../api/index", () => ({
  ...jest.requireActual("../../api/index"),
  startSessionApi: jest.fn(),
  getBeers: jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

it("Home should matchsnapshot", () => {
  const startSessionApiMock = jest.spyOn(api, "startSessionApi");
  const getBeersMock = jest.spyOn(api, "getBeers");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  startSessionApiMock.mockReturnValue(jest.fn(() => {}));
  getBeersMock.mockReturnValue(jest.fn(() => {}));
  useDispatchMock.mockReturnValue(jest.fn(value => dispatchMock(value)));
  useSelectorMock.mockImplementation(callback => {
    return callback({
      beers: initListBeers,
      currentIndex: { currentIndex: 0 },
      beersLiked: { data: [] },
      session: { session : {}}
    });
  });

  const { container } = render(<Home />);

  debug();
  expect(container).toMatchSnapshot();
});
