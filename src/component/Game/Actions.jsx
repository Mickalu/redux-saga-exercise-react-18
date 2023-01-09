import React from 'react';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';

import { currentIndexActions } from '../../action/currentIndexActions';

const Actions = () => {
  const dispach = useDispatch();

  return (
    <Container data-testid="actions-container" style={{ background: 'white', borderRadius: '0 0 25px 25px' }}>
      <ul  className="list-unstyled list-inline text-center game-actions">
        <li>
          <button
            type="button"
            className="btn btn-danger btn-circle btn-xl"
            name="dislikeBtn"
            onClick={() => dispach({type: currentIndexActions.REMOVE_BEER_LIKED_BEERS})}
            data-testid="dislike-button"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </li>
        <li />
        <li>
          <button
            type="button"
            className="btn btn-success btn-circle btn-xl"
            name="likeBtn"
            onClick={() => dispach({type: currentIndexActions.ADD_BEER_LIKED_BEERS})}
            data-testid="like-button"
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default Actions;
