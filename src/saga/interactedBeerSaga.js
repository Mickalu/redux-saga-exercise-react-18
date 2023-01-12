import { call, put, select } from "redux-saga/effects";

import { tokenAuthentificationSelector } from "../selector/tokenAuthentification";
import { getUserBeersInteractedApi, likeBeerApi } from "../api/likeBeerApi";
import { addInteractedBeers } from "../slice/beersInteractedSlice";
import { currentBeerSelector } from '../selector/currentBeer';
import { updateCurrentbeerId } from "../slice/currentBeerSlice";
import { getListBeersNoInteractedSelector } from "../selector/beersNotInteracted";


export function* getInteractedBeer() {
  const tokenInfo = yield select(tokenAuthentificationSelector);
  const responseInteractedBeers = yield call(getUserBeersInteractedApi, tokenInfo.token);

  if (responseInteractedBeers.status) {
    yield put(addInteractedBeers(responseInteractedBeers.data));
  }
};

export function* interactionLikeBeerSaga(request) {
  const currentBeer = yield select(currentBeerSelector);
  const tokenInfo = yield select(tokenAuthentificationSelector);

  const dataSend = { beer: currentBeer.id, is_liked: request.payload.isLiked };
  const responseApi =  yield call(likeBeerApi, tokenInfo['token'], dataSend);

  if (responseApi.status) {
    yield call(getInteractedBeer);
  }
};

export function* initFirstBeerNotInteractedSaga() {
  const listBeerNotLiked = yield select(getListBeersNoInteractedSelector);

  if (listBeerNotLiked.length !== 0){
    const idFirstBeerNotLikded = listBeerNotLiked[0].id;
    yield put(updateCurrentbeerId(idFirstBeerNotLikded));
  }
  else {
    yield put(updateCurrentbeerId(null));
  }
};
