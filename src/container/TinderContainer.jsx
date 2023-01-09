import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tinder from '../component/Game/Tinder';

const TinderContainer = () => {
  const dispach = useDispatch();
  const session = useSelector((state) => state.session).session;

  // ! here get info beer
  // TODO need currentBeer listBeer likedBeer

  useEffect(() => {
    if(session.id) {
        dispach({type: "FETCH_BEERS"});
    }
    else {
      dispach({type: "SESSION_START"});
    }
  },
    [session],
  );

  const actionButtonTinder = (isLiked) => {
    // send like or dislike
    // pass next
  };

  return (
    <Tinder />
  );
};

export default TinderContainer;
