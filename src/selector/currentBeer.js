export const currentBeerSelector = (state) => (
  state.currentBeer
);

export const getBeerById = (beers, beerId) => {
  return beers.find(beer => beer.id === beerId);
};

export const getNextBeerById = (beers, beerId) => {
  const beer = getBeerById(beers, beerId);
  const indexOfCurrentBeer = beers.indexOf(beer);
  let nextBeerId;

  if(!(indexOfCurrentBeer + 1 in beers)) {
    nextBeerId = beers[0].id;
  }
  else {
    nextBeerId = beers[indexOfCurrentBeer + 1].id;
  }

  return nextBeerId;
};
