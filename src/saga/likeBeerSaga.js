import { call, put, select } from "redux-saga/effects";

import { tokenAuthentificationSelector } from "../selector/tokenAuthentification";
import { getUserBeersLikedApi, likeBeerApi } from "../api/likeBeerApi";
import { addLikedBeers } from "../slice/beersLiked";
import { currentBeerSelector } from '../selector/currentBeer';

export function* getLikedBeer(token) {
  const responseLikedBeers = yield call(getUserBeersLikedApi, token);

  if (responseLikedBeers.status) {
    yield put(addLikedBeers(responseLikedBeers.data));
  }
};

export function* likeBeer() {
  const currentBeer = yield select(currentBeerSelector);

  const tokenInfo = yield select(tokenAuthentificationSelector);
  const token = tokenInfo['token'];

  const dataSend = { beer: currentBeer.id };
  const responseApi =  yield call(likeBeerApi, tokenInfo['token'], dataSend);

  if (responseApi.status) {
    yield call(getLikedBeer, token);
  }
};
