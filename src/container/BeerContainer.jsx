import React from 'react';
import { useSelector } from 'react-redux';

import Beer from './Beer';
import { getBeerById } from "../selector/currentBeer";

const BeerContainer = () => {
  const beers = useSelector((state) => state.beers);
  const currentBeer = useSelector((state) => state.currentBeer);

  if (beers.data) {
    let beer = getBeerById(beers.data, currentBeer.id);
    if (beer) {
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
