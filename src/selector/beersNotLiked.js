import lodash from "lodash";

export const beersNotLikedSelector = (state) => {
  const beers = state.beers;
  const beersInteracted = state.beersInteracted;
  const listBeersNotLiked = beers.data.filter((beer) => {return !beersInteracted.data.includes(beer.id)});
  return listBeersNotLiked;
};

export const getListBeersNotLiked = (state) => {
  const listBeers = state.beers.data;
  const listBeersInteracted = state.beersInteracted.data;
  const listBeersNotLiked = lodash.filter(listBeers, ((beer) => {return !listBeersInteracted.includes(beer.id)}));
  return listBeersNotLiked
};


export const getBeersNotInteracted = (listBeers, listIdsBeersLiked) => {
  const listBeersNotLiked = lodash.filter(listBeers, ((beer) => {return !listIdsBeersLiked.includes(beer.id)}));
  return listBeersNotLiked
};
