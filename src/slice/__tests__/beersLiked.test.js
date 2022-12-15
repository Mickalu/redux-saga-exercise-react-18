import beersLikedReducer, { addLikedBeers, removeLikedBeers } from "../beersLiked";
import { INIT_BEERS_LIKED_STATE_VALUE, beersLikedStateWithIds } from "../../utils/__testsTools__/initValues/beersLikedInitValues";

it("addLikedBeers should add a beer into state liked beers", () => {
  const beerId = "82";
  const previousState = INIT_BEERS_LIKED_STATE_VALUE;
  const stateExpected = beersLikedStateWithIds([beerId]);

  const action = { beerId: beerId };

  expect(beersLikedReducer(previousState, addLikedBeers(action))).toEqual(stateExpected);
});

it("removeLikedBeers should remove beer id from beers liked", () => {
  const previousState = { data: ["82"] };
  const stateExpected = { data: [] };

  const action = { beerId: "82" };

  expect(beersLikedReducer(previousState, removeLikedBeers(action))).toEqual(stateExpected);
});
