import { put, call, select } from "redux-saga/effects";

import { addInteractedBeers } from "../../slice/beersInteractedSlice";
import { updateCurrentbeerId } from '../../slice/currentBeerSlice';
import { currentBeerSelector } from "../../selector/currentBeer";
import { tokenAuthentificationSelector } from "../../selector/tokenAuthentification";
import { getListBeersNoInteractedSelector } from '../../selector/beersNotInteracted';
import { getInteractedBeer, interactionLikeBeerSaga } from "../interactedBeerSaga";
import { initFirstBeerNotInteractedSaga } from '../interactedBeerSaga';
import * as apisLikedBeer from "../../api/likeBeerApi";
import { paraminteractionLikeBeerTrue } from '../../utils/__testsTools__/initValues/interactedBeerSagaInitValues';

jest.mock("../../api/likeBeerApi", () => ({
  ...jest.requireActual("../../api/authentificationApi.js"),
  getUserBeersInteractedApi: jest.fn(),
  likeBeerApi: jest.fn(),
}));

const getUserBeersInteractedApiMock = jest.spyOn(apisLikedBeer, "getUserBeersInteractedApi");
const likeBeerApiMock = jest.spyOn(apisLikedBeer, "likeBeerApi");

getUserBeersInteractedApiMock.mockReturnValue(jest.fn((value) => { return { data: { token: "1234" } }}));
likeBeerApiMock.mockReturnValue(jest.fn());

it("getInteractedBeer should call getUserBeersInteractedApi", () => {
  const data = { token: "1234" };
  const getInteractedBeerGenerator = getInteractedBeer(data);

  const callGetUserBeersLikeApi = getInteractedBeerGenerator.next();

  expect(callGetUserBeersLikeApi.value).toStrictEqual(call(apisLikedBeer.getUserBeersInteractedApi, data.token));
});

it("If status true getInteractedBeer update liked beers in state", () => {
  const responseApi = {
    status: true,
    data: { token: "1234" },
  };

  const data = { token: "1234" };

  const getInteractedBeerGenerator = getInteractedBeer(data);
  getInteractedBeerGenerator.next();

  const putAddLikedBeers = getInteractedBeerGenerator.next(responseApi);

  expect(putAddLikedBeers.value).toStrictEqual(put(addInteractedBeers(responseApi.data)));
});

it("interactionLikeBeerSaga call getCurrentSelector", () => {
  const interactionLikeBeerSagaGenerator = interactionLikeBeerSaga(paraminteractionLikeBeerTrue);

  const selectCurrentBeerSelector = interactionLikeBeerSagaGenerator.next();

  expect(selectCurrentBeerSelector.value).toStrictEqual(select(currentBeerSelector));
});

it("interactionLike should select all token information", () => {
  const interactionLikeBeerSagaGenerator = interactionLikeBeerSaga(paraminteractionLikeBeerTrue);
  interactionLikeBeerSagaGenerator.next();

  const selectToken = interactionLikeBeerSagaGenerator.next();

  expect(selectToken.value).toStrictEqual(select(tokenAuthentificationSelector));
});

it("likeBeerApi should call api likeBeerApi", () => {
  const currentBeer = { id: "2" };
  const tokenInfo = { token: "1234"};
  const dataSend = { beer: currentBeer.id, is_liked: true };
  const interactionLikeBeerSagaGenerator = interactionLikeBeerSaga(paraminteractionLikeBeerTrue);

  interactionLikeBeerSagaGenerator.next();
  interactionLikeBeerSagaGenerator.next(currentBeer);

  const callLikeBeerApi = interactionLikeBeerSagaGenerator.next(tokenInfo);

  expect(callLikeBeerApi.value).toStrictEqual(call(apisLikedBeer.likeBeerApi, tokenInfo['token'], dataSend));
});

it("likeBeer should call getLikeBeer saga because user like beer have changed", () => {
  const currentBeer = { id: "2" };
  const tokenInfo = { token: "1234" };
  const responseApi = { status: true, data: {} };
  const interactionLikeBeerSagaGenerator = interactionLikeBeerSaga(paraminteractionLikeBeerTrue);

  interactionLikeBeerSagaGenerator.next();
  interactionLikeBeerSagaGenerator.next(currentBeer);
  interactionLikeBeerSagaGenerator.next(tokenInfo);

  const callgetInteractedBeer = interactionLikeBeerSagaGenerator.next(responseApi);

  expect(callgetInteractedBeer.value).toStrictEqual(call(getInteractedBeer, tokenInfo));
});

it("initFirstBeerNotInteractedSaga should return list of all beers aren't interacted", () => {
  const initFirstBeerNotInteractedSagaGenerator = initFirstBeerNotInteractedSaga();

  const selectListBeerNoInteracted = initFirstBeerNotInteractedSagaGenerator.next();

  expect(selectListBeerNoInteracted.value).toStrictEqual(select(getListBeersNoInteractedSelector));
});

it("initFirstBeerNotInteractedSaga if list of beer no interacted is not empty put first beer id as current beer", () => {
  const listBeerNotLiked = [
    { id: '1' },
    { id: '2' },
  ];

  const initFirstBeerNotInteractedSagaGenerator = initFirstBeerNotInteractedSaga();
  initFirstBeerNotInteractedSagaGenerator.next();

  const putUpdateCurrentBeerId = initFirstBeerNotInteractedSagaGenerator.next(listBeerNotLiked);

  expect(putUpdateCurrentBeerId.value).toStrictEqual(put(updateCurrentbeerId('1')));
});

it("initFirstBeerNotInteractedSaga return null if list beer no interacted is empty", () => {
  const listBeerNotLiked = [];

  const initFirstBeerNotInteractedSagaGenerator = initFirstBeerNotInteractedSaga();
  initFirstBeerNotInteractedSagaGenerator.next();

  const putUpdateCurrentBeerId = initFirstBeerNotInteractedSagaGenerator.next(listBeerNotLiked);

  expect(putUpdateCurrentBeerId.value).toStrictEqual(put(updateCurrentbeerId(null)));
});
