import loadingBeerReducer, { updateLoadingBeer } from "../loadingBeer";
import { LOADING_BEER_INIT_STATE, loadingBeerStateTrue } from "../../utils/__testsTools__/initValues/loadingBeerInitValue";

it("updateLoadingBeer should change loadingBeer value", () => {
  const previousState = LOADING_BEER_INIT_STATE;
  const expectedState = loadingBeerStateTrue;
  const action = { loadingBeer: true };

  expect(loadingBeerReducer(previousState, updateLoadingBeer(action))).toEqual(expectedState);
});
