import React from 'react';
import { useSelector } from 'react-redux';

import Beer from './Beer';

const BeerContainer = () => {
  const beers = useSelector((state) => state.beers);
  const currentIndex = useSelector((state) => state.currentIndex);

  if (beers.data){
    let beer = beers.data[currentIndex.currentIndex];

    if(beer) {
      return (
        <Beer beer={beer} />
      );
    }
    else {
      return null;
    }
  }
  else {
    return null;
  }
};

export default BeerContainer;
