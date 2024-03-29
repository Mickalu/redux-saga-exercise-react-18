import React from 'react';
import { useSelector } from 'react-redux';

import Beer from './Beer';
import { getBeerById } from "../selector/currentBeer";

const BeerContainer = () => {
  const beers = useSelector((state) => state.beers);
  const currentBeer = useSelector((state) => state.currentBeer);

  if (beers.data) {
    const beer = getBeerById(beers.data, currentBeer.id);

    if (beer) {
      return (
        <Beer beer={beer} />
      );
    }
  }

  return null;
};

export default BeerContainer;
