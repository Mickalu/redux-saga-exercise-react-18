import lodash from "lodash";

export const getBeersNotLiked = (listBeers, listIdsBeersLiked) => {
  const listBeersNotLiked = lodash.filter(listBeers, ((beer) => {return !listIdsBeersLiked.includes(beer.id)}));
  return listBeersNotLiked
};
