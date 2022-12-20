import { call, put } from "redux-saga/effects";

import { getBeers } from "../../api";
import { updateIsFetching, addBeers } from "../../slice/beersSlice";
import { fetchBeersSaga } from "../beersSaga";
import { initBeersState } from "../../utils/__testsTools__/initValues";

it("fetchBeersSaga second function be put updateIsFetching", () => {
  const beersSagaGenerator = fetchBeersSaga();

  const putUpdateIsFetching = beersSagaGenerator.next();

  expect(putUpdateIsFetching.value).toStrictEqual(put(updateIsFetching(true)));
});

it("fetchBeersSaga third function be call getBeers", () => {
  const beersSagaGenerator = fetchBeersSaga();
  beersSagaGenerator.next();

  const callGettBeers = beersSagaGenerator.next();

  expect(callGettBeers.value).toStrictEqual(call(getBeers));
});

it("fetchBeersSaga fourth function is updating isFetching", () => {
  const beersSagaGenerator = fetchBeersSaga();
  beersSagaGenerator.next();
  beersSagaGenerator.next();

  const putUpdateIsFetching = beersSagaGenerator.next(initBeersState);

  expect(putUpdateIsFetching.value).toStrictEqual(put(updateIsFetching(false)));
});

it("fetchBeersSaga fifth function is put addBeers", () => {
  const beersSagaGenerator = fetchBeersSaga();
  beersSagaGenerator.next();
  beersSagaGenerator.next();
  beersSagaGenerator.next(initBeersState);

  const putAddBeers = beersSagaGenerator.next();

  expect(putAddBeers.value).toStrictEqual(put(addBeers(initBeersState)));
});
