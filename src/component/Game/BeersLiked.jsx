import React from 'react';

import { findBeerById } from "../../utils/findBeerById";

const BeersLiked = ({ beersInteracted, beers }) => {
  return (
    <>
      {beersInteracted.data.map((beer) => {
        const beerId = beer.beer;
          const beerTitle = findBeerById(beerId, beers.data).title;
          return (
            <div data-testid="beer-title" key={`div-beer-liked-${beerId}`}> {beerTitle} </div>
          );
      })}
    </>
  );
};

export default BeersLiked;
