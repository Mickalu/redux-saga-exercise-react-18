import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tinder from '../component/Game/Tinder';
import { getNextBeerNotInteracted } from "../selector/beersNotInteracted";

const TinderContainer = () => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session).session;

  // ! here get info beer
  // TODO need currentBeer listBeer likedBeer

  useEffect(() => {
    if(session.id) {
      dispatch({type: "FETCH_BEERS"});
    }
    else {
      dispatch({type: "SESSION_START"});
    }
  },
    [session],
  );

  const actionButtonTinder = (isLiked) => {
    dispatch({ type: "INTERACTION_LIKE_BEER" });
    // pass next
    getNextBeerNotInteracted()
  };

  return (
    <Tinder />
  );
};

export default TinderContainer;
