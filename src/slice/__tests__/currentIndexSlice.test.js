import currentIndexReducer, { incrementCurrentIndex, resetCurrentIndex } from "../currentIndexSlice";
import { INIT_CURRENT_INDEX_STATE, currentIndexIncrementedByOne } from "../../utils/__testsTools__/initValues/currentIndexSliceInitValue";

it("incrementCurrentIndex should add 1 currentIndex", () => {
  const previousState = INIT_CURRENT_INDEX_STATE;
  const expectedState = currentIndexIncrementedByOne;

  expect(currentIndexReducer(previousState, incrementCurrentIndex())).toEqual(expectedState);
});

it("resetCurrentIndex resete current index to 0", () => {
  const previousState = currentIndexIncrementedByOne;
  const expectedState = INIT_CURRENT_INDEX_STATE;

  expect(currentIndexReducer(previousState, resetCurrentIndex())).toEqual(expectedState);
});
