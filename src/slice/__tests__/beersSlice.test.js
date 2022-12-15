import beersSliceReducer, { addBeers, updateIsFetching } from "../beersSlice";
import { INIT_BEERS_SLICE_STATE, initBeersSliceWithBeers, stateIsFetchingTrue } from "../../utils/__testsTools__/initValues/beersSliceInitValues";

it("addBeers should add beers data to beers state", () => {
  const previousState = INIT_BEERS_SLICE_STATE;
  const expectedState = initBeersSliceWithBeers;
  const action = initBeersSliceWithBeers.data;

  expect(beersSliceReducer(previousState, addBeers(action))).toEqual(expectedState);
});

it("updateIsFetching should change isFetching value", () => {
  const previousState = INIT_BEERS_SLICE_STATE;
  const expectedState = stateIsFetchingTrue;

  const action = true;

  expect(beersSliceReducer(previousState, updateIsFetching(action))).toEqual(expectedState);
});
