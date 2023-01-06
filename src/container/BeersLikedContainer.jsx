import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BeersLiked from '../component/Game/BeersLiked';

export const BeersLikedContainer = () => {
  const beerslikedState = useSelector((state) => state.beersLiked);
  const beersState = useSelector((state) => state.beers);
  const token = useSelector((state) => state.tokenAuthentification).token;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_LIKED_BEERS", token });
  }, [token]);

  return (
    <>
      <BeersLiked
        beersLiked={beerslikedState}
        beers={beersState}
      />
    </>
  );
};

export default BeersLikedContainer;
