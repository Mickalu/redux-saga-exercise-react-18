export const findBeerById = (beerId, beers) => {
  return beers.find(beer => beer.id === beerId);
};
