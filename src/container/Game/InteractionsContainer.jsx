import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Interactions from '../../component/Game/Interactions';
import { updateCurrentbeerId } from '../../slice/currentBeerSlice';
import { getNextBeerNotInteracted } from '../../selector/beersNotInteracted';

const InteractionsContainer = () => {
  const dispatch = useDispatch();
  const beers = useSelector((state) => state.beers);
  const currentBeer = useSelector((state) => state.currentBeer);
  const beersInteracted = useSelector((state) => state.beersInteracted);

  const passNextBeer = () => {
    const nextBeerId = getNextBeerNotInteracted(beers.data, beersInteracted.data, currentBeer.id);
    dispatch(updateCurrentbeerId(nextBeerId));
  };

  const likeOrDislikeBeer = (isLike) => {
    if(currentBeer.id) {
      dispatch({type: "INTERACTION_LIKE_BEER", payload: { isLiked: isLike }});
      passNextBeer();
    }
  };

  return (
    <>
      <Interactions
        likeOrDislikeBeer={likeOrDislikeBeer}
      />
    </>
  );
};

export default InteractionsContainer;
