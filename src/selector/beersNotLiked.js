import "lodash";

export const beersNotLikedSelector = (state) => {
  const beers = state.beers;
  const beersLiked = state.beersLiked;
  const listBeersNotLiked = beers.data.filter((beer) => {return !beersLiked.data.includes(beer.id)});
  return listBeersNotLiked;
};

export const getListBeersNotLiked = (state) => {
  const _ = require("lodash");
  const listBeers = state.beers.data;
  const listLikedBeer = state.beersLiked.data;
  const listBeersNotLiked = _.filter(listBeers, ((beer) => {return !listLikedBeer.includes(beer.id)}));
  return listBeersNotLiked
};


export const getBeersNotLiked = (listBeers, listIdsBeersLiked) => {
  const _ = require("lodash");
  const listBeersNotLiked = _.filter(listBeers, ((beer) => {return !listIdsBeersLiked.includes(beer.id)}));
  return listBeersNotLiked
};
