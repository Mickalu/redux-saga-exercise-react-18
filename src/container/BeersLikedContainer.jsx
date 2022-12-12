import React from 'react';
import { useSelector } from 'react-redux';

import BeersLiked from '../component/Game/BeersLiked';

export const BeersLikedContainer = () => {
  const beerslikedState = useSelector((state) => state.beersLiked);
  const beersState = useSelector((state) => state.beers);

  return (
    <>
      <BeersLiked
        beersLiked={beerslikedState}
        beers={beersState}
      />
    </>
  );
};

export default BeersLikedContainer;
