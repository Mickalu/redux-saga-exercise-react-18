import lodash from "lodash";

export const returnBeginningBeers = (listBeers, listBeersLiked) => {
  // const listNoLikedBeer = getBeersNotLiked(listBeers, listBeersLiked);
  // return returnFirstBeerOrNull(listNoLikedBeer);
  console.log("find first beer no interracted");
};

const getListBeerNoInteracted = (listBeers, listBeerInteracted) => {
  const listBeerNoInteracted = lodash.filter(listBeers, ((beer) => { return !listBeerInteracted.includes(beer.id) }));
  return listBeerNoInteracted;
};

const getListOfIds = (listInfoBeer) => {
  return lodash.map(listInfoBeer, ((beerInfo) => beerInfo.beer));
};

export const getNextBeerNotInteracted = (listBeers, listBeerInteracted, id) => {
  let listIdsBeerInteracted = getListOfIds(listBeerInteracted);

  if (lodash.isNull(id)) {
    return returnBeginningBeers(listBeers, listBeerInteracted);
  }
  else {
    const indexCurrentBeer = lodash.findIndex(listBeers, ((beer) => { return beer.id === id}));

    if (indexCurrentBeer + 1 < listBeers.length) {
      const listBeerNoInteracted = getListBeerNoInteracted(listBeers, listIdsBeerInteracted);
      return listBeerNoInteracted[0].id
    }
    else {
      return null
    }
  }
};
