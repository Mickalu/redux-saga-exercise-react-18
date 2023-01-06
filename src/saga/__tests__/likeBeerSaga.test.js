import { put, call, select } from "redux-saga/effects";

import { getLikedBeer, likeBeer } from "../likeBeerSaga";
import * as apisLikedBeer from "../../api/likeBeerApi";
import { addLikedBeers } from "../../slice/beersLiked";
import { currentBeerSelector } from "../../selector/currentBeer";
import { tokenAuthentificationSelector } from "../../selector/tokenAuthentification";

jest.mock("../../api/likeBeerApi", () => ({
  ...jest.requireActual("../../api/authentificationApi.js"),
  getUserBeersLikedApi: jest.fn(),
  likeBeerApi: jest.fn(),
}));

const getUserBeersLikedApiMock = jest.spyOn(apisLikedBeer, "getUserBeersLikedApi");
const likeBeerApiMock = jest.spyOn(apisLikedBeer, "likeBeerApi");

getUserBeersLikedApiMock.mockReturnValue(jest.fn((value) => { return { data: { token: "1234" } }}));
likeBeerApiMock.mockReturnValue(jest.fn());

it("getLikedBeer should call getUserBeersLikedApi", () => {
  const data = { token: "1234" };
  const getLikedBeerGenerator = getLikedBeer(data);

  const callGetUserBeersLikeApi = getLikedBeerGenerator.next();

  expect(callGetUserBeersLikeApi.value).toStrictEqual(call(apisLikedBeer.getUserBeersLikedApi, data.token));
});

it("If status true getLikedBeer update liked beers in state", () => {
  const responseApi = {
    status: true,
    data: { token: "1234" },
  };

  const data = { token: "1234" };

  const getLikedBeerGenerator = getLikedBeer(data);
  getLikedBeerGenerator.next();

  const putAddLikedBeers = getLikedBeerGenerator.next(responseApi);

  expect(putAddLikedBeers.value).toStrictEqual(put(addLikedBeers(responseApi.data)));
});

it("likeBeer call getCurrentSelector", () => {
  const likeBeerGenerator = likeBeer();

  const selectCurrentBeerSelector = likeBeerGenerator.next();

  expect(selectCurrentBeerSelector.value).toStrictEqual(select(currentBeerSelector));
});

it("likeBeer should select all token information", () => {
  const likeBeerGenerator = likeBeer();
  likeBeerGenerator.next();

  const selectToken = likeBeerGenerator.next();

  expect(selectToken.value).toStrictEqual(select(tokenAuthentificationSelector));
});

it("likeBeerApi should call api likeBeerApi", () => {
  const currentBeer = { id: "2" };
  const tokenInfo = { token: "1234"};
  const dataSend = { beer: currentBeer.id };
  const likeBeerGenerator = likeBeer();

  likeBeerGenerator.next();
  likeBeerGenerator.next(currentBeer);

  const callLikeBeerApi = likeBeerGenerator.next(tokenInfo);

  expect(callLikeBeerApi.value).toStrictEqual(call(apisLikedBeer.likeBeerApi, tokenInfo['token'], dataSend));
});

it("likeBeer should call getLikeBeer saga because user like beer have changed", () => {
  const currentBeer = { id: "2" };
  const tokenInfo = { token: "1234" };
  const responseApi = { status: true, data: {} };
  const likeBeerGenerator = likeBeer();

  likeBeerGenerator.next();
  likeBeerGenerator.next(currentBeer);
  likeBeerGenerator.next(tokenInfo);

  const callGetLikedBeer = likeBeerGenerator.next(responseApi);

  expect(callGetLikedBeer.value).toStrictEqual(call(getLikedBeer, tokenInfo));
});
