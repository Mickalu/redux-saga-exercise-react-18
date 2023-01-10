export const beersNotLikedSelector = (state) => {
  const beers = state.beers;
  const beersInteracted = state.beersInteracted;
  const listBeersNotLiked = beers.data.filter((beer) => {return !beersInteracted.data.includes(beer.id)});
  return listBeersNotLiked;
};

export const getListBeersNotLiked = (state) => {
  const listBeers = state.beers.data;
  const listBeersInteracted = state.beersInteracted.data;
  const listBeersNotLiked = listBeers.filter((beer) => {return !listBeersInteracted.includes(beer.id)});
  return listBeersNotLiked
};


export const getBeersNotInteracted = (listBeers, listIdsBeersLiked) => {
  const listBeersNotLiked = listBeers.filter((beer) => {return !listIdsBeersLiked.includes(beer.id)});
  return listBeersNotLiked
};
