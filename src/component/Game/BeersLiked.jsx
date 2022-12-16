import React from 'react'
import { v4 } from "uuid";

import { findBeerById } from "../../utils/findBeerById";

const BeersLiked = ({ beersLiked, beers }) => {
  return (
    <>
      {beersLiked.data.map((beerId) => {
          const beerTitle = findBeerById(beerId, beers.data).title;
          console.log(beerId);
          return (
            <div data-testid="beer-title" key={`div-beer-liked-${v4()}`}> {beerTitle} </div>
          );
      })}
    </>
  );
};

export default BeersLiked;
