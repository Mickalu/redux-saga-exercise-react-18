import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Actions from '../../component/Game/Actions';
import { updateCurrentbeerId } from '../../slice/currentBeerSlice';
import { currentIndexActions } from '../../action/currentIndexActions';
import { getNextBeerById } from "../../selector/currentBeer";

const ActionsContainer = () => {
  const dispatch = useDispatch();
  const beers = useSelector((state) => state.beers);
  const currentBeer = useSelector((state) => state.currentBeer);

  const passNextBeer = () => {
    const nextBeerId = getNextBeerById(beers.data, currentBeer.id);
    dispatch(updateCurrentbeerId(nextBeerId));
   };

  const likeBeer = () => {
    dispatch({type: currentIndexActions.ADD_BEER_LIKED_BEERS});
    passNextBeer();
   }

  return (
    <>
      <Actions
        passNextBeer={passNextBeer}
        likeBeer={likeBeer}
      />
    </>
  );
};

export default ActionsContainer;
