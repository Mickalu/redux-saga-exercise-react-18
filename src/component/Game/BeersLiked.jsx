import React from 'react';

import { findBeerById } from '../../utils/findBeerById';

const BeersLiked = ({ beersInteracted, beers }) => (
  <>
    {beersInteracted.data.map((beer) => {
      const beerId = beer.beer;
      const beerInfo = findBeerById(beerId, beers.data);

      const returnBeerInteracted = (beerInfo) ?
        ( <div data-testid="beer-title" key={`div-beer-liked-${beerId}`}> {beerInfo.title} </div>) :
        null;

      return returnBeerInteracted;
    })}
  </>
);

export default BeersLiked;
