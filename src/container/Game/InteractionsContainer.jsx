import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Interactions from '../../component/Game/Interactions';
import { updateCurrentbeerId } from '../../slice/currentBeerSlice';
import { getNextCurrentBeerNotLiked } from "../../selector/currentBeer";

const InteractionsContainer = () => {
  const dispatch = useDispatch();
  const beers = useSelector((state) => state.beers);
  const currentBeer = useSelector((state) => state.currentBeer);
  const beersInteracted = useSelector((state) => state.beersInteracted);

  const passNextBeer = (likedOrNot) => {
    const nextBeerId = getNextCurrentBeerNotLiked(beers.data, beersInteracted.data, currentBeer.id, likedOrNot);
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
      <Interactions
        passNextBeer={passNextBeer}
        likeBeer={likeBeer}
      />
    </>
  );
};

export default InteractionsContainer;
