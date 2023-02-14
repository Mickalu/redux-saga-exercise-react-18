import lodash from "lodash";

const getListBeerNoInteracted = (listBeers, listBeerInteracted) => (
  listBeers.filter((beer) => !listBeerInteracted.includes(beer.id))
);

const getListOfBeersIds = (listInfoBeer) => (
  lodash.map(listInfoBeer, ((beerInfo) => beerInfo.beer))
);

export const getNextBeerNotInteracted = (listBeers, listBeerInteracted, id) => {
  if (lodash.isNull(id)) {
    return null;
  }

  let listIdsBeerInteracted = getListOfBeersIds(listBeerInteracted);
  listIdsBeerInteracted = [...listIdsBeerInteracted, id];

  const listBeersNoInteracted = getListBeerNoInteracted(listBeers, listIdsBeerInteracted);

  if (listBeersNoInteracted.length !== 0) {
    return listBeersNoInteracted[0].id;
  }

  return null;
};

export const getListBeersNoInteractedSelector = (state) => {
  const listBeers = state.beers.data;
  const listIdsBeersInteracted = state.beersInteracted.data.map(beer => beer.beer);

  const listBeersNoInteracted = getListBeerNoInteracted(listBeers, listIdsBeersInteracted);

  return listBeersNoInteracted;
};
