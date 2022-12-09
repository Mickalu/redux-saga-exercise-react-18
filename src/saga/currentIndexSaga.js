import { call, put, select } from "redux-saga/effects";

import { currentIndexSelector } from "../selector/currentIndex";
import { beersSelector } from "../selector/beers";
import { incrementCurrentIndex, resetCurrentIndex } from "../slice/currentIndexSlice";
import { addLikedBeers } from "../slice/beersLiked";

export function* incrementCurrentIndexBeers() {
  const beers = yield select(beersSelector);
  const currentIndex = yield select(currentIndexSelector);

  if(currentIndex.currentIndex + 1 > beers.data.length - 1){
    yield put(resetCurrentIndex());
  }
  else {
    yield put(incrementCurrentIndex());
  }
};

export function* addBeerToLikedBeers() {
  const beers = yield select(beersSelector);
  const currentIndex = yield select(currentIndexSelector);

  const beerId = beers.data[currentIndex.currentIndex].id;
  const action = { beerId: beerId };

  yield put(addLikedBeers(action));
  yield call(incrementCurrentIndexBeers);
};
