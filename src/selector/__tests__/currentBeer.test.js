import { getBeerById } from '../currentBeer';
import { initBeersSliceWithBeers } from '../../utils/__testsTools__/initValues/beersSliceInitValues';

it("getBeerById should return beer information thank its id", () => {
  const beers = initBeersSliceWithBeers.data;
  const beerId = '1';
  const returnExpected = beers[0];

  expect(getBeerById(beers, beerId)).toStrictEqual(returnExpected);
});
