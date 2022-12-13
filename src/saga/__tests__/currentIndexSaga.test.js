import { call, put, select } from "redux-saga/effects";

import { incrementCurrentIndexBeers } from "../currentIndexSaga";
import { currentIndexSelector } from "../../selector/currentIndex";
import { beersSelector } from "../../selector/beers";
import { incrementCurrentIndex, resetCurrentIndex } from "../../slice/currentIndexSlice";
import { addLikedBeers } from "../../slice/beersLiked";
import { initBeersState, initCurrentIndexState, initCurrentIndexLastindex } from "../../utils/__testsTools__/initValues";


it("increment current index beer Saga should select beers", () => {
  const incrementCurrentIndexBeersGenerator = incrementCurrentIndexBeers();

  const selectBeersSelector = incrementCurrentIndexBeersGenerator.next(initBeersState);

  expect(selectBeersSelector.value).toStrictEqual(select(beersSelector));
});

it("increment current index beer saga should select current index selector", () => {
  const incrementCurrentIndexBeersGenerator = incrementCurrentIndexBeers();
  incrementCurrentIndexBeersGenerator.next();

  const selectCurrentIndexSelector = incrementCurrentIndexBeersGenerator.next(initBeersState);

  expect(selectCurrentIndexSelector.value).toStrictEqual(select(currentIndexSelector));
});

it("increment current index beer saga should reset current index if next beer doesn't exist", () => {
  const incrementCurrentIndexBeersGenerator = incrementCurrentIndexBeers();
  incrementCurrentIndexBeersGenerator.next();
  incrementCurrentIndexBeersGenerator.next(initBeersState.beers);

  const putResetCurrentIndex = incrementCurrentIndexBeersGenerator.next(initCurrentIndexLastindex(initBeersState.beers.data));

  expect(putResetCurrentIndex.value).toStrictEqual(put(resetCurrentIndex()));
});

it("Should increment current index if next elem exist", () => {
  const incrementCurrentIndexBeersGenerator = incrementCurrentIndexBeers();
  incrementCurrentIndexBeersGenerator.next();
  incrementCurrentIndexBeersGenerator.next(initBeersState.beers);

  const putIncrementCurrentIndex = incrementCurrentIndexBeersGenerator.next(initCurrentIndexState);
  expect(putIncrementCurrentIndex.value).toStrictEqual(put(incrementCurrentIndex()));
});
