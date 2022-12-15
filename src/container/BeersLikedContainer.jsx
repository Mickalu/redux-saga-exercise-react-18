import React from 'react';
import { useSelector } from 'react-redux';

import { findBeerById } from '../utils/findBeerById';

export const BeersLikedContainer = () => {
  const beerslikedState = useSelector((state) => state.beersLiked);
  const beersState = useSelector((state) => state.beers);

  return (
    <>
      {beerslikedState.data.map((beerId) => {
        const beerTitle = findBeerById(beerId, beersState.data).title;
        return (
          <div data-testid="beer-title" key={`div-beer-liked-${beerId}`}> {beerTitle} </div>
        );
      })}
    </>
  );
};

export default BeersLikedContainer;
