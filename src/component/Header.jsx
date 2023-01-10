import React from 'react';

import "../assets/css/main.css";
import "../assets/css/Header.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const Header = () => (
  <header>
    <Container>
      <Row>
        <div className="col-lg-12">
          <Image className="img-responsive logo-academy" alt="beer" role="presentation" src={"/img/logo.png"} />
          <div className="intro-text">
            <span className="name">Beer Game</span>
            <hr className="star-light hr-title" />
          </div>
        </div>
      </Row>
    </Container>
  </header>
);

export default Header;
