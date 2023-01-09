import { beersNotLikedSelector } from "../beersNotLiked";
import { stateBeers } from "../../utils/__testsTools__/initValues/beersSliceInitValues";

it("beersNotLikedSelector should return only beers not liked", () => {
  const initState = {
    beers: stateBeers,
    beersInteracted: { data: ['1', '2'] },
  };

  const responseExpected = [
    { id: "3" },
    { id: "4" },
  ];

  expect(beersNotLikedSelector(initState)).toStrictEqual(responseExpected);
});
