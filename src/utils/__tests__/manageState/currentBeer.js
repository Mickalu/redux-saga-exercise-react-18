import { returnFirstBeerOrNull, returnBeginningBeers, getNextCurrentBeerNotLiked } from "../../manageState/currentBeer";
import { stateBeers } from "../../__testsTools__/initValues/beersSliceInitValues";

it("returnFirstBeerOrNull return id of first element", () => {
  const listBeerNotLiked = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];

  expect(returnFirstBeerOrNull(listBeerNotLiked)).toBe('1');
});

it("returnFirstBeerOrNull return null if listBee is empty", () => {
  const listBeerNotLiked = []

  expect(returnFirstBeerOrNull(listBeerNotLiked)).toBe(null);
});

it("returnBeginningBeers should return first id of beer not liked", () => {
  const listBeersLiked = ["1", "2"];
  const listBeers = stateBeers.data;

  expect(returnBeginningBeers(listBeers, listBeersLiked)).toBe("3");
});

it("returnBeginningBeers should return null if all beer liked", () => {
  const listBeersLiked = ["1", "2", "3", "4"];
  const listBeers = stateBeers.data;

  expect(returnBeginningBeers(listBeers, listBeersLiked)).toBe(null);
});

it("getNextCurrentBeerNotLiked if id null return first no liked beer", () => {
  const listBeers = stateBeers.data;
  const listBeersLiked = ['1', '3'];
  const id = null;
  const likedOrNot = false;

  expect(getNextCurrentBeerNotLiked(listBeers, listBeersLiked, id, likedOrNot)).toBe("2");
});

it("getNextCurrentBeerNotLiked no action like pass next beer not liked", () => {
  const listBeers = stateBeers.data;
  const listBeersLiked = ['2', '4'];
  const id = "1";
  const likedOrNot = false;

  expect(getNextCurrentBeerNotLiked(listBeers, listBeersLiked, id, likedOrNot)).toBe("3");
});

it("getNextCurrentBeerNotLiked no action like and be at last beer return no liked beer", () => {
  const listBeers = stateBeers.data;
  const id = "4";
  const listBeersLiked = ['1'];
  const likedOrNot = false;

  expect(getNextCurrentBeerNotLiked(listBeers, listBeersLiked, id, likedOrNot)).toBe("2");
});

it("getNextCurrentBeerNotLiked action like pass next beer no liked", () => {
  const listBeers = stateBeers.data;
  const id = "1";
  const listBeersLiked = ['1', '2'];
  const likedOrNot = true;

  expect(getNextCurrentBeerNotLiked(listBeers, listBeersLiked, id, likedOrNot)).toBe("3");
});

it("getNextCurrentBeerNotLiked action like if last beer return beginning and beer no liked", () => {
  const listBeers = stateBeers.data;
  const id = "4";
  const listBeersLiked = ['1', '2', '4'];
  const likedOrNot = true;

  expect(getNextCurrentBeerNotLiked(listBeers, listBeersLiked, id, likedOrNot)).toBe("3");
});

it("getNextCurrentBeerNotLiked action like and all beer are liked so return null", () => {
  const listBeers = stateBeers.data;
  const id = "4";
  const listBeersLiked = ['1', '2', '3', '4'];
  const likedOrNot = true;

  expect(getNextCurrentBeerNotLiked(listBeers, listBeersLiked, id, likedOrNot)).toBe(null);
});
