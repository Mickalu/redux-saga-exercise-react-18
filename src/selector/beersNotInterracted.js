
export const returnBeginningBeers = (listBeers, listBeersLiked) => {
  // const listNoLikedBeer = getBeersNotLiked(listBeers, listBeersLiked);
  // return returnFirstBeerOrNull(listNoLikedBeer);
  console.log("find first beer no interracted");
};

const getListOfIds = (listInfoBeer) => {
  const _ = require("lodash");
  return _.map(listInfoBeer, ((beerInfo) => beerInfo.beer));
};

export const getNextBeerNotInteracted = (listBeers, listBeerInteracted, id, likedOrNot) => {
  const _ = require("lodash");
  const listIdsBeerInteracted = getListOfIds(listBeerInteracted);

  if (_.isNull(id)) {
    return returnBeginningBeers(listBeers, listBeerInteracted);
  }
  else {
    const indexCurrentBeer = _.findIndex(listBeers, ((beer) => { return beer.id === id}));

    if (likedOrNot) { listIdsBeerInteracted = [...listIdsBeerInteracted, id] };

    if (indexCurrentBeer + 1 < listBeers.length) {
       console.log("next");
    }
    else {
      return null
    }
  }
};
