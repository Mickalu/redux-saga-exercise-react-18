import { getBeersNotLiked } from "../getBeerNotLiked";
import { stateBeers } from "../__testsTools__/initValues/beersSliceInitValues";

it("getBeersNotLiked should return beers not liked", () => {
  const listBeers = stateBeers.data;
  const listIdsBeersLiked = ['1', '2'];
  const resultExpected = [
    { id: '3' },
    { id: '4' },
  ];

  expect(getBeersNotLiked(listBeers, listIdsBeersLiked)).toEqual(resultExpected);
});
