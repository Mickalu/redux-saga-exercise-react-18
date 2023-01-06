import "lodash";

export const beersNotLikedSelector = (state) => {
  const beers = state.beers;
  const beersLiked = state.beersLiked;
  const listBeersNotLiked = beers.data.filter((beer) => {return !beersLiked.data.includes(beer.id)});
  return listBeersNotLiked;
};
