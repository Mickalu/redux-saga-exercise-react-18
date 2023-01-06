import { call, put, select } from "redux-saga/effects";

import { tokenAuthentificationSelector } from "../selector/tokenAuthentification";
import { getUserBeersLikedApi, likeBeerApi } from "../api/likeBeerApi";
import { addLikedBeers } from "../slice/beersLiked";
import { currentBeerSelector } from '../selector/currentBeer';
import { updateCurrentbeerId } from "../slice/currentBeerSlice";
import { beersNotLikedSelector } from "../selector/beersNotLiked";

export function* getLikedBeer(data) {
  const responseLikedBeers = yield call(getUserBeersLikedApi, data.token);

  if (responseLikedBeers.status) {
    yield put(addLikedBeers(responseLikedBeers.data));
  }
};

export function* likeBeer() {
  const currentBeer = yield select(currentBeerSelector);

  const tokenInfo = yield select(tokenAuthentificationSelector);

  const dataSend = { beer: currentBeer.id };
  const responseApi =  yield call(likeBeerApi, tokenInfo['token'], dataSend);

  if (responseApi.status) {
    yield call(getLikedBeer, tokenInfo);
  }
};

export function* initFirstBeerNotLiked() {
  const listBeerNotLiked = yield select(beersNotLikedSelector);

  if (listBeerNotLiked.length !== 0){
    const idFirstBeerNotLikded = listBeerNotLiked[0].id;
    yield put(updateCurrentbeerId(idFirstBeerNotLikded));
  }
  else {
    yield put(updateCurrentbeerId(null));
  }
};
