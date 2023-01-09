export const getBeersNotLiked = (listBeers, listIdsBeersLiked) => {
  const _ = require("lodash");
  const listBeersNotLiked = _.filter(listBeers, ((beer) => {return !listIdsBeersLiked.includes(beer.id)}));
  return listBeersNotLiked
};
