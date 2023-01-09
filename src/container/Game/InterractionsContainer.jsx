import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Interractions from '../../component/Game/Interractions';
import { updateCurrentbeerId } from '../../slice/currentBeerSlice';
import { getNextCurrentBeerNotLiked } from "../../selector/currentBeer";

const InterractionsContainer = () => {
  const dispatch = useDispatch();
  const beers = useSelector((state) => state.beers);
  const currentBeer = useSelector((state) => state.currentBeer);
  const beersLiked = useSelector((state) => state.beersLiked);

  const passNextBeer = (likedOrNot) => {
    const nextBeerId = getNextCurrentBeerNotLiked(beers.data, beersLiked.data, currentBeer.id, likedOrNot);
    dispatch(updateCurrentbeerId(nextBeerId));
  };

  const likeBeer = () => {
    if(currentBeer.id) {
      dispatch({type: "ADD_LIKE_BEER"}, currentBeer.id);
      passNextBeer(true);
    }
  };

  return (
    <>
      <Interractions
        passNextBeer={passNextBeer}
        likeBeer={likeBeer}
      />
    </>
  );
};

export default InterractionsContainer;
