import React from 'react';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { currentIndexActions } from '../../action/currentIndexActions';

const Actions = (props) => {
  const dispach = useDispatch();

  return (
    <Container style={{ background: 'white', borderRadius: '0 0 25px 25px' }}>
      <ul className="list-unstyled list-inline text-center game-actions">
        <li>
          <button
            type="button"
            className="btn btn-danger btn-circle btn-xl"
            name="dislikeBtn"
            onClick={() => dispach({type: currentIndexActions.INCREMENT_CURRENT_INDEX})}
          >
            <FontAwesomeIcon icon={solid("xmark")} />
          </button>
        </li>
        <li />
        <li>
          <button
            type="button"
            className="btn btn-success btn-circle btn-xl"
            name="likeBtn"
            onClick={() => dispach({type: currentIndexActions.ADD_BEER_LIKED_BEERS})}
          >
            <FontAwesomeIcon icon={solid('heart')} />
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default Actions;
