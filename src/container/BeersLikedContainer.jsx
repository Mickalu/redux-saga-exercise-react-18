import React from 'react';
import { useSelector } from 'react-redux';

import beersLiked from '../slice/beersLiked';
import { findBeerById } from '../utils/findBeerById';

export const BeersLikedContainer = () => {
  const beerslikedState = useSelector((state) => state.beersLiked);
  const beersState = useSelector((state) => state.beers);

  console.log(beerslikedState);

  return (
    <>
      {beerslikedState.data.map((beerId) => {
        if (beerId !== "undefined"){
          const beerTitle = findBeerById(beerId, beersState.data).title;
          return (<h3>{beerTitle}</h3>);
        }
      })}
    </>
  );
};

export default BeersLikedContainer;
