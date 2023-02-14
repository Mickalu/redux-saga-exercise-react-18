import { call, put, select } from "redux-saga/effects";

import * as api from "../../api";
import { updateIsFetching, addBeers } from "../../slice/beersSlice";
import { fetchBeersSaga } from "../beersSaga";
import { initBeersState } from "../../utils/__testsTools__/initValues";

import { tokenAuthentificationSelector } from "../../selector/tokenAuthentification";

jest.mock("../../api", () => ({
  ...jest.requireActual("../../api"),
  getBeers: jest.fn(),
}));

const getBeersMock = jest.spyOn(api, "getBeers");
getBeersMock.mockReturnValue(jest.fn());

it("fetchBeersSaga first function be put updateIsFetching", () => {
  const beersSagaGenerator = fetchBeersSaga();

  const putUpdateIsFetching = beersSagaGenerator.next();

  expect(putUpdateIsFetching.value).toStrictEqual(put(updateIsFetching(true)));
});

it("fetchBeersSaga should select authentification token", () => {
  const beersSagaGenerator = fetchBeersSaga();
  beersSagaGenerator.next();

  const selectTokenAuthentification = beersSagaGenerator.next();

  expect(selectTokenAuthentification.value).toStrictEqual(select(tokenAuthentificationSelector));
});

it("fetchBeersSaga third function be call getBeers", () => {
  const tokenDictionnary = {token: "12345"}
  const beersSagaGenerator = fetchBeersSaga();
  beersSagaGenerator.next();
  beersSagaGenerator.next();

  const callGettBeers = beersSagaGenerator.next(tokenDictionnary);

  expect(callGettBeers.value).toStrictEqual(call(api.getBeers, "12345"));
});

it("fetchBeersSaga fourth function is updating isFetching", () => {
  const tokenDictionnary = {token: "12345"}
  const beersSagaGenerator = fetchBeersSaga();
  beersSagaGenerator.next();
  beersSagaGenerator.next();
  beersSagaGenerator.next(tokenDictionnary);

  const putUpdateIsFetching = beersSagaGenerator.next();

  expect(putUpdateIsFetching.value).toStrictEqual(put(updateIsFetching(false)));
});

it("fetchBeersSaga fifth function is put addBeers", () => {
  const tokenDictionnary = {token: "12345"}
  const beersSagaGenerator = fetchBeersSaga();
  beersSagaGenerator.next();
  beersSagaGenerator.next();
  beersSagaGenerator.next(tokenDictionnary);
  beersSagaGenerator.next(initBeersState);

  const putAddBeers = beersSagaGenerator.next();

  expect(putAddBeers.value).toStrictEqual(put(addBeers(initBeersState)));
});
