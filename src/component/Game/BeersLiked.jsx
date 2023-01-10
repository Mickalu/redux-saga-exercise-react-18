import React from 'react'
import { v4 } from "uuid";

import { findBeerById } from "../../utils/findBeerById";

const BeersLiked = ({ beersLiked, beers }) => (
  <>
    {beersLiked.data.map((beerId) => {
        const beerTitle = findBeerById(beerId, beers.data).title;
        return (
          <div data-testid="beer-title" key={`div-beer-liked-${v4()}`}> {beerTitle} </div>
        );
    })}
  </>
);

export default BeersLiked;
