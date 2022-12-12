import React from 'react';
import { useSelector } from 'react-redux';

import Beer from './Beer';

const BeerContainer = () => {
  const beers = useSelector((state) => state.beers);
  const currentIndex = useSelector((state) => state.currentIndex);
  let beer = beers.data[currentIndex.currentIndex];

  if (!beer){
    beer = {
      id: "",
      title: "",
      description: "",
      country: "",
      type_beer: "",
      company: "",
      colour: "",
      graduation: "",
      size: "",
      price: "",
      photo_link: "",
    };
  }

  return (
    <Beer beer={beer} />
  );
};

export default BeerContainer;
