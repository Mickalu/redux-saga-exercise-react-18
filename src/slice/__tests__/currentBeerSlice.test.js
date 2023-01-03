import currentBeerReducer, { updateCurrentbeerId } from "../currentBeerSlice";

import { INIT_CURRENT_BEER_STATE } from "../../utils/__testsTools__/initValues/currentBeerInitValues";

it("updateCurrentBeerId should change id value of currentBeer", () => {
  const previousState = INIT_CURRENT_BEER_STATE;
  const expectedState = { id: "1" };

  expect(currentBeerReducer(previousState, updateCurrentbeerId("1"))).toEqual(expectedState);
});
