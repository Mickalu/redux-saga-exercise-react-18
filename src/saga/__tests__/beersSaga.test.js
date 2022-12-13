import { call, put, select } from "redux-saga/effects";

import { getBeers } from "../../api";
import { session } from "../../selector/session";
import { updateIsFetching, addBeers } from "../../slice/beersSlice";
import { fetchBeersSaga } from "../beersSaga";
import { initSessionState, initBeersState } from "../../utils/__testsTools__/initValues";

it("fetchBeersSaga first function should be selsect session", () => {
  const beersSagaGenerator = fetchBeersSaga();

  const selectSession = beersSagaGenerator.next();

  expect(selectSession.value).toStrictEqual(select(session));
});

it("fetchBeersSaga second function be put updateIsFetching", () => {
  const beersSagaGenerator = fetchBeersSaga();
  beersSagaGenerator.next();

  const putUpdateIsFetching = beersSagaGenerator.next(initSessionState);

  expect(putUpdateIsFetching.value).toStrictEqual(put(updateIsFetching(true)));
});

it("fetchBeersSaga third function be call getBeers", () => {
  const beersSagaGenerator = fetchBeersSaga();
  beersSagaGenerator.next();
  beersSagaGenerator.next(initSessionState);

  const callGettBeers = beersSagaGenerator.next();

  expect(callGettBeers.value).toStrictEqual(call(getBeers, "1"));
});

it("fetchBeersSaga fourth function is updating isFetching", () => {
  const beersSagaGenerator = fetchBeersSaga();
  beersSagaGenerator.next();
  beersSagaGenerator.next(initSessionState);
  beersSagaGenerator.next();

  const putUpdateIsFetching = beersSagaGenerator.next(initBeersState);

  expect(putUpdateIsFetching.value).toStrictEqual(put(updateIsFetching(false)));
});

it("fetchBeersSaga fifth function is put addBeers", () => {
  const beersSagaGenerator = fetchBeersSaga();
  beersSagaGenerator.next();
  beersSagaGenerator.next(initSessionState);
  beersSagaGenerator.next();
  beersSagaGenerator.next(initBeersState);

  const putAddBeers = beersSagaGenerator.next();

  expect(putAddBeers.value).toStrictEqual(put(addBeers(initBeersState)));
});
