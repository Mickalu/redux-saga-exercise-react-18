import { getBeersNotLiked } from "../../utils/getBeerNotLiked";

export const returnFirstBeerOrNull = (listBeerNotLiked) => {
  if (listBeerNotLiked.length > 0){
    return listBeerNotLiked[0].id;
  }
  else {
    return null;
  }
};

export const returnBeginningBeers = (listBeers, listBeersLiked) => {
  const listNoLikedBeer = getBeersNotLiked(listBeers, listBeersLiked);
  return returnFirstBeerOrNull(listNoLikedBeer);
};

export const getNextCurrentBeerNotLiked = (listBeers, listBeersLiked, id, likedOrNot) => {
  const _ = require("lodash");

  if (_.isNull(id)) {
    return returnBeginningBeers(listBeers, listBeersLiked);
  }
  else {
    const indexCurrentBeer = _.findIndex(listBeers, ((beer) => { return beer.id === id}));

    if (likedOrNot) { listBeersLiked = [...listBeersLiked, id] };

    if (indexCurrentBeer + 1 < listBeers.length) {
      const endList = listBeers.slice(indexCurrentBeer + 1);
      const restListBeerNotLiked = getBeersNotLiked(endList, listBeersLiked);

      if (restListBeerNotLiked.length > 0) {
        return restListBeerNotLiked[0].id
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
