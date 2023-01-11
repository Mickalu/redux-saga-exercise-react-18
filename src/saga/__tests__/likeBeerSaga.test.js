import { put, call, select } from "redux-saga/effects";

import { getInteractedBeer, interactionLikeBeer } from "../interactedBeerSaga";
import * as apisLikedBeer from "../../api/likeBeerApi";
import { addInteractedBeers } from "../../slice/beersInteractedSlice";
import { currentBeerSelector } from "../../selector/currentBeer";
import { tokenAuthentificationSelector } from "../../selector/tokenAuthentification";

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

it("interactionLikeBeer call getCurrentSelector", () => {
  const interactionLikeBeerGenerator = interactionLikeBeer();

  const selectCurrentBeerSelector = interactionLikeBeerGenerator.next();

  expect(selectCurrentBeerSelector.value).toStrictEqual(select(currentBeerSelector));
});

it("interactionLike should select all token information", () => {
  const interactionLikeBeerGenerator = interactionLikeBeer();
  interactionLikeBeerGenerator.next();

  const selectToken = interactionLikeBeerGenerator.next();

  expect(selectToken.value).toStrictEqual(select(tokenAuthentificationSelector));
});

it("likeBeerApi should call api likeBeerApi", () => {
  const currentBeer = { id: "2" };
  const tokenInfo = { token: "1234"};
  const dataSend = { beer: currentBeer.id, is_liked: undefined };
  const interactionLikeBeerGenerator = interactionLikeBeer();

  interactionLikeBeerGenerator.next();
  interactionLikeBeerGenerator.next(currentBeer);

  const callLikeBeerApi = interactionLikeBeerGenerator.next(tokenInfo);

  expect(callLikeBeerApi.value).toStrictEqual(call(apisLikedBeer.likeBeerApi, tokenInfo['token'], dataSend));
});

it("likeBeer should call getLikeBeer saga because user like beer have changed", () => {
  const currentBeer = { id: "2" };
  const tokenInfo = { token: "1234" };
  const responseApi = { status: true, data: {} };
  const interactionLikeBeerGenerator = interactionLikeBeer();

  interactionLikeBeerGenerator.next();
  interactionLikeBeerGenerator.next(currentBeer);
  interactionLikeBeerGenerator.next(tokenInfo);

  const callgetInteractedBeer = interactionLikeBeerGenerator.next(responseApi);

  expect(callgetInteractedBeer.value).toStrictEqual(call(getInteractedBeer, tokenInfo));
});
