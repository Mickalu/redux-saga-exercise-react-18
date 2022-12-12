import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tinder from '../component/Game/Tinder';
import { sessionActions } from '../action/sessionAction';
import { beersActions } from "../action/beersActions";

const TinderContainer = () => {
  const dispach = useDispatch();
  const session = useSelector((state) => state.session).session;

  useEffect(() => {
    if (session.id){
        dispach({type: beersActions.FETCH_BERRS});
      }
      else {
        dispach({type: sessionActions.SESSION_START});
      }
    },
    [session],
  );

  return (
    <Tinder />
  );
};

export default TinderContainer;