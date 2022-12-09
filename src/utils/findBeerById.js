export const findBeerById = (beerId, beers) => {
  console.log(beerId)
  return beers.find(beer => beer.id === beerId);
};
