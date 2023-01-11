export const currentBeerSelector = (state) => (
  state.currentBeer
);

export const getBeerById = (beers, beerId) => {
  return beers.find(beer => beer.id === beerId);
};
