import beersInteractedReducer, { addInteractedBeers, removeInteractedBeers } from "../beersInteractedSlice";
import { INIT_BEERS_LIKED_STATE_VALUE, beersLikedStateWithIds } from "../../utils/__testsTools__/initValues/beersLikedInitValues";

it("addLikedBeers should add a beer into state liked beers", () => {
  const beerId = "82";
  const previousState = INIT_BEERS_LIKED_STATE_VALUE;
  const expectedState = beersLikedStateWithIds([beerId]);

  const action = [beerId];

  expect(beersInteractedReducer(previousState, addInteractedBeers(action))).toEqual(expectedState);
});

it("removeLikedBeers should remove beer id from beers liked", () => {
  const previousState = { data: ["82"] };
  const stateExpected = { data: [] };

  const action = { beerId: "82" };

  expect(beersInteractedReducer(previousState, removeInteractedBeers(action))).toEqual(stateExpected);
});
