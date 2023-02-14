import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as api from "../../api/index";
import Home from "../Home";
import { initListBeers } from "../../utils/__testsTools__/initValues";
import { render } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";

const reactRedux = { useDispatch, useSelector };

const dispatchMock = (value) => {jest.fn()};

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
      beersLiked: { data: [] },
      session: { session : {} },
      currentBeer: { id: "82" },
    });
  });

  const { container } = render(<Home />);

  expect(container).toMatchSnapshot();
});
