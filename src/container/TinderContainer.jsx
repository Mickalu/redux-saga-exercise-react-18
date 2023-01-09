import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tinder from '../component/Game/Tinder';

const TinderContainer = () => {
  const dispach = useDispatch();
  const session = useSelector((state) => state.session).session;

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

  return (
    <Tinder />
  );
};

export default TinderContainer;
