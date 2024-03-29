import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';

const Interactions = ({ likeOrDislikeBeer }) => {

  return (
    <Container data-testid="actions-container" style={{ background: "white", borderRadius: "0 0 25px 25px" }}>
      <ul  className="list-unstyled list-inline text-center game-actions">
        <li>
          <button
            type="button"
            className="btn btn-danger btn-circle btn-xl"
            name="dislikeBtn"
            onClick={() => likeOrDislikeBeer(false)}
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
            onClick={() => likeOrDislikeBeer(true)}
            data-testid="like-button"
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default Interactions;
