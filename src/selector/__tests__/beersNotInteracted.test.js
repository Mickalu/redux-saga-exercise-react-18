import { getListBeersNoInteractedSelector } from '../beersNotInteracted';
import { stateBeers } from '../../utils/__testsTools__/initValues/beersSliceInitValues';

it("getListBeersNoInteractedSelector should return all beers aren't like or dislike by user", () => {
  const initState  = {
    beers: stateBeers,
    beersInteracted: {
      data: [
        { beer:'1' },
        { beer: '2' }
      ],
    }
  };

  const expectedReturn = [
    { id: '3' },
    { id: '4' }
  ];

  expect(getListBeersNoInteractedSelector(initState)).toStrictEqual(expectedReturn);
});
