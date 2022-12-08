import React from 'react';
import { useSelector } from 'react-redux';

import Beer from '../component/Game/Beer';

const BeerContainer = () => {
  const beers = useSelector((state) => state.beers);
  const currentIndex = useSelector((state) => state.currentIndex);
  let beer = beers.data[currentIndex.currentIndex];

  if (typeof(beer) === "undefined"){
    beer = {
      "id": "",
      "title": "",
      "description": "",
      "country": "",
      "type_beer": "",
      "company": "",
      "colour": "",
      "graduation": "",
      "size": "",
      "price": "",
      "photo_link": "",
    };
  }

  return (
    <Beer beer={beer} />
  );
};

export default BeerContainer;
