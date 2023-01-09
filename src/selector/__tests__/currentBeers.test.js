import React, { useEffect } from "react";
import { getNextBeerById } from "../currentBeer";
import { initBeersSliceWithBeers } from "../../utils/__testsTools__/initValues/beersSliceInitValues";

const reactUseEffect = { useEffect };

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn(),
}));

const useEffectMock = jest.spyOn(reactUseEffect, "useEffect");
useEffectMock.mockReturnValue(jest.fn());

it("getNextBeerById return next beer", () => {
  const beers = initBeersSliceWithBeers.data;
  const beerId = "1";
  const responseExpected = '2';

  expect(getNextBeerById(beers, beerId)).toStrictEqual(responseExpected);
});
