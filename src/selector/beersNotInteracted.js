import lodash from "lodash";

const getListBeerNoInteracted = (listBeers, listBeerInteracted) => {
  const listBeerNoInteracted = listBeers.filter((beer) => { return !listBeerInteracted.includes(beer.id) });
  return listBeerNoInteracted;
};

const getListOfIds = (listInfoBeer) => {
  return lodash.map(listInfoBeer, ((beerInfo) => beerInfo.beer));
};

export const getNextBeerNotInteracted = (listBeers, listBeerInteracted, id) => {
  if (lodash.isNull(id)) {
    return null;
  }

  let listIdsBeerInteracted = getListOfIds(listBeerInteracted);
  listIdsBeerInteracted = [...listIdsBeerInteracted, id];

  const listBeersNoInteracted = getListBeerNoInteracted(listBeers, listIdsBeerInteracted);

  if (listBeersNoInteracted.length !== 0) {
    return listBeersNoInteracted[0].id;
  }
  else {
    return null;
  }
};

export const getListBeersNoInteractedSelector = (state) => {
  const listBeers = state.beers.data;
  const listIdsBeersInteracted = state.beersInteracted.data.map(beer => beer.beer);

  const listBeersNoInteracted = getListBeerNoInteracted(listBeers, listIdsBeersInteracted);
  return listBeersNoInteracted;
};