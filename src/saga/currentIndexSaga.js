import { put, select } from "redux-saga/effects";

import { currentIndexSelector } from "../selector/currentIndex";
import { beersSelector } from "../selector/beers";
import { incrementCurrentIndex, resetCurrentIndex } from "../slice/currentIndexSlice";

export function* incrementCurrentIndexBeers() {
  const beers = yield select(beersSelector);
  const currentIndex = yield select(currentIndexSelector);

  if(currentIndex.currentIndex + 1 > beers.data.length - 1) {
    yield put(resetCurrentIndex());
  }
  else {
    yield put(incrementCurrentIndex());
  }
};
