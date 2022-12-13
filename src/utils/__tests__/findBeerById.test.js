import { findBeerById } from "../findBeerById";
import { initListBeers} from "../__testsTools__/initValues";

it("Should find all beer informations by its id", () => {
  expect(findBeerById(initListBeers.data[0].id, initListBeers.data)).toBe(initListBeers.data[0]);
});
