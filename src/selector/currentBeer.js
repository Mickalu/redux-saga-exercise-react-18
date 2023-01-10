import lodash from "lodash";

import { getBeersNotInteracted } from "./beersNotLiked";

export const currentBeerSelector = (state) => (
  state.currentBeer
);

export const getBeerById = (beers, beerId) => {
  return beers.find(beer => beer.id === beerId);
};

export const returnFirstBeerOrNull = (listBeerNotLiked) => {
  if (listBeerNotLiked.length > 0) {
    return listBeerNotLiked[0].id;
  }
  else {
    return null;
  }
};

export const returnBeginningBeers = (listBeers, listBeersLiked) => {
  const listNoLikedBeer = getBeersNotInteracted(listBeers, listBeersLiked);
  return returnFirstBeerOrNull(listNoLikedBeer);
};

export const getNextCurrentBeerNotLiked = (listBeers, listBeersLiked, id, likedOrNot) => {
  if (lodash.isNull(id)) {
    return returnBeginningBeers(listBeers, listBeersLiked);
  }
  else {
    const indexCurrentBeer = lodash.findIndex(listBeers, ((beer) => { return beer.id === id}));

    if (likedOrNot) { listBeersLiked = [...listBeersLiked, id] };

    if (indexCurrentBeer + 1 < listBeers.length) {
      const endList = listBeers.slice(indexCurrentBeer + 1);
      const restListBeerNotLiked = getBeersNotInteracted(endList, listBeersLiked);

      if (restListBeerNotLiked.length > 0) {
        return restListBeerNotLiked[0].id;
      }
      else {
        return returnBeginningBeers(listBeers, listBeersLiked);
      }
    }
    else {
      return returnBeginningBeers(listBeers, listBeersLiked);
    }
  }
};
