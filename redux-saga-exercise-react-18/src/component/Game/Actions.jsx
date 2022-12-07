import React from 'react';

import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Actions = (props) => {
  return (
    <Container style={{ background: 'white', borderRadius: '0 0 25px 25px' }}>
      <ul className="list-unstyled list-inline text-center game-actions">
        <li>
          <button
            type="button"
            className="btn btn-danger btn-circle btn-xl"
            name="dislikeBtn"
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
          >
            <FontAwesomeIcon icon={solid('heart')} />
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default Actions;
