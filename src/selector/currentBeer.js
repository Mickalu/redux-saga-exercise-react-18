export const currentBeerSelector = (state) => (
  state.currentBeer
);

export const getBeerById = (beers, beerId) => (
  beers.find(beer => beer.id === beerId)
);
