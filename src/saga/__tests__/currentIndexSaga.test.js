import { call, put, select } from "redux-saga/effects";

import { incrementCurrentIndexBeers, removeBeerToLikedBeers, addBeerToLikedBeers } from "../currentIndexSaga";
import { currentIndexSelector } from "../../selector/currentIndex";
import { beersSelector } from "../../selector/beers";
import { incrementCurrentIndex, resetCurrentIndex } from "../../slice/currentIndexSlice";
import { addLikedBeers, removeLikedBeers } from "../../slice/beersLiked";
import { initBeersState, initCurrentIndexState, initCurrentIndexLastindex, initListBeers } from "../../utils/__testsTools__/initValues";


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

it("removeBeerToLikedBeers should select beers", () => {
  const removeBeerToLikedBeersGenerator = removeBeerToLikedBeers();

  const selectBeers = removeBeerToLikedBeersGenerator.next();

  expect(selectBeers.value).toStrictEqual(select(beersSelector));
});

it("removeBeerToLikedBeers should select currentIndex", () => {
  const removeBeerToLikedBeersGenerator = removeBeerToLikedBeers();
  removeBeerToLikedBeersGenerator.next();

  const selectCurrentIndex = removeBeerToLikedBeersGenerator.next(initListBeers);

  expect(selectCurrentIndex.value).toStrictEqual(select(currentIndexSelector));
});

it("removeBeerToLikedBeers should put remove Liked Beers", () => {
  const removeBeerToLikedBeersGenerator = removeBeerToLikedBeers();
  removeBeerToLikedBeersGenerator.next();
  removeBeerToLikedBeersGenerator.next(initListBeers);

  const putRemoveLikedBeer = removeBeerToLikedBeersGenerator.next(initCurrentIndexState);

  expect(putRemoveLikedBeer.value).toStrictEqual(put(removeLikedBeers({beerId: initListBeers.data[0].id})));
});

it("removeBeerToLikedBeers should call increment current index", () => {
  const removeBeerToLikedBeersGenerator = removeBeerToLikedBeers();
  removeBeerToLikedBeersGenerator.next();
  removeBeerToLikedBeersGenerator.next(initListBeers);
  removeBeerToLikedBeersGenerator.next(initCurrentIndexState);

  const callIncrementCurrentIndex = removeBeerToLikedBeersGenerator.next();

  expect(callIncrementCurrentIndex.value).toStrictEqual(call(incrementCurrentIndexBeers));
});

it("addBeerToLikedBeers should select beers", () => {
  const addBeerToLikedBeersGenerator = addBeerToLikedBeers();

  const selectBeers = addBeerToLikedBeersGenerator.next();

  expect(selectBeers.value).toStrictEqual(select(beersSelector));
});

it("addBeerToLikedBeers should select currentIndex", () => {
  const addBeerToLikedBeersGenerator = addBeerToLikedBeers();
  addBeerToLikedBeersGenerator.next();

  const selectCurrentIndex = addBeerToLikedBeersGenerator.next(initListBeers);

  expect(selectCurrentIndex.value).toStrictEqual(select(currentIndexSelector));
});

it("addBeerToLikedBeers should put addLikedBeers", () => {
  const addBeerToLikedBeersGenerator = addBeerToLikedBeers();
  addBeerToLikedBeersGenerator.next();
  addBeerToLikedBeersGenerator.next(initListBeers);

  const putAddLikedBeers = addBeerToLikedBeersGenerator.next(initCurrentIndexState);

  expect(putAddLikedBeers.value).toStrictEqual(put(addLikedBeers({beerId: initListBeers.data[0].id})));
});

it("addBeerToLikedBeers should call incrementCurrentIndexBeers", () => {
  const addBeerToLikedBeersGenerator = addBeerToLikedBeers();
  addBeerToLikedBeersGenerator.next();
  addBeerToLikedBeersGenerator.next(initListBeers);
  addBeerToLikedBeersGenerator.next(initCurrentIndexState);

  const callIncrementCurrentIndexBeers = addBeerToLikedBeersGenerator.next();

  expect(callIncrementCurrentIndexBeers.value).toStrictEqual(call(incrementCurrentIndexBeers));
});
