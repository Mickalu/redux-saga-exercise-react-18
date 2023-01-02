import React from 'react'

import { findBeerById } from "../../utils/findBeerById";

const BeersLiked = ({ beersLiked, beers }) => {
  return (
    <>
      {beersLiked.data.map((beerId) => {
          const beerTitle = findBeerById(beerId, beers.data).title;
          return (
            <div data-testid="beer-title" key={`div-beer-liked-${beerId}`}> {beerTitle} </div>
          );
      })}
    </>
  );
};

export default BeersLiked;
