
export const returnBeginningBeers = (listBeers, listBeersLiked) => {
  // const listNoLikedBeer = getBeersNotLiked(listBeers, listBeersLiked);
  // return returnFirstBeerOrNull(listNoLikedBeer);
  console.log("find first beer no interracted");
};

const getListBeerNoInteracted = (listBeers, listBeerInteracted) => {
  const _ = require("lodash");
  const listBeerNoInteracted = _.filter(listBeers, ((beer) => { return !listBeerInteracted.includes(beer.id) }));
  return listBeerNoInteracted;
};

const getListOfIds = (listInfoBeer) => {
  const _ = require("lodash");
  return _.map(listInfoBeer, ((beerInfo) => beerInfo.beer));
};

export const getNextBeerNotInteracted = (listBeers, listBeerInteracted, id) => {
  const _ = require("lodash");
  let listIdsBeerInteracted = getListOfIds(listBeerInteracted);

  if (_.isNull(id)) {
    return returnBeginningBeers(listBeers, listBeerInteracted);
  }
  else {
    const indexCurrentBeer = _.findIndex(listBeers, ((beer) => { return beer.id === id}));

    if (indexCurrentBeer + 1 < listBeers.length) {
      const listBeerNoInteracted = getListBeerNoInteracted(listBeers, listIdsBeerInteracted);
      return listBeerNoInteracted[0].id
    }
    else {
      return null
    }
  }
};
