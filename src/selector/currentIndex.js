export const currentIndexSelector = (state) => (
  state.currentIndex
);

export const findBeerById = (state, beerId) => {
  return state.beers.data.find(beer => beer.id === beerId)
};
