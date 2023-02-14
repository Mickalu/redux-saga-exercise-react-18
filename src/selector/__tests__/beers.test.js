import { beersSelector } from "../beers";
import { initBeersSliceWithBeers } from "../../utils/__testsTools__/initValues/beersSliceInitValues";

it("beersSelector should return beers state", () => {
  const initState = {
    beers: initBeersSliceWithBeers,
  };

  expect(beersSelector(initState)).toStrictEqual(initBeersSliceWithBeers);
});
