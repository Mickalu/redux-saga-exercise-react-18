export const findBeerById = (beerId, beers) => (
  beers.find(beer => beer.id === beerId)
);
