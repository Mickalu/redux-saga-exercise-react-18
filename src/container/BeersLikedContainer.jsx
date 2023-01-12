import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BeersLiked from '../component/Game/BeersLiked';

export const BeersLikedContainer = () => {
  const beersInterractedState = useSelector((state) => state.beersInteracted);
  const beersState = useSelector((state) => state.beers);
  const token = useSelector((state) => state.tokenAuthentification).token;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_LIKED_BEERS" });
  },
  [token]
  );

  return (
    <>
      <BeersLiked
        beersInteracted={beersInterractedState}
        beers={beersState}
      />
    </>
  );
};

export default BeersLikedContainer;
