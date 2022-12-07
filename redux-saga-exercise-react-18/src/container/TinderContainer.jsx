import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tinder from '../component/Game/Tinder';
import { sessionActions } from '../action/sessionAction';

const TinderContainer = () => {
  const session = useSelector((state) => state.session);
  const dispach = useDispatch();

  useEffect(() => {
    if (session.id){
      console.log("connected");
    }
    else {
      dispach({type: sessionActions.SESSION_START});
    }
  });

  return (
    <Tinder />
  );
};

export default TinderContainer;
