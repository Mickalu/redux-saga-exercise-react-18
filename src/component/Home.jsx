import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import Container from 'react-bootstrap/Container';

import Header from './Header';
import Menu from './Navigation/Menu';
import TinderContainer from '../container/TinderContainer';

const Home = () => {
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => (setMenu(!menu));

  return (
    <div id="page-wrap">
      <Menu
        pageWrapId={"page-wrap"}
        isOpen={menu}
        toggleMenu={toggleMenu}
      />

      <nav data-testid="navbar-home" className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="https://reactjs.academy" target="_blank" rel="noopener noreferrer">ReactJS Academy</a>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li>
              <button onClick={toggleMenu} className="btn btn-lg btn-outline">
                <FontAwesomeIcon icon={solid('heart')} />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <Header />

      <section id="beers">
        <Container>
          <TinderContainer />
        </Container>
      </section>

      <footer className="text-center">
          <div className="footer-above">
            <div className="container">
              <div className="row">
                <div className="footer-col col-md-4">
                  <h3>Main Location</h3>
                  <p>
                    <span>1 Fore Stree</span>
                    <br />
                    <span>London, EC2Y 5EJ</span>
                    <br />
                    <span className="fa fa-map-marker" />
                    <a target="_blank" href="https://reactjs.academy/react-redux-training" rel="noopener noreferrer"> Other Locations </a>
                  </p>
                </div>
                <div className="footer-col col-md-4">
                  <h3>Around the Web</h3>
                  <ul className="list-inline">
                    <li>
                      <a target="_blank" href="https://github.com/reactjs-academy" className="btn-social btn-outline" rel="noopener noreferrer"> <FontAwesomeIcon icon={solid('heart')} /></a>
                    </li>
                    <li>
                      <a target="_blank" href="https://twitter.com/reactjsacademy" className="btn-social btn-outline" rel="noopener noreferrer"> <FontAwesomeIcon icon={solid('hashtag')} /></a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.instagram.com/reactjsacademy/" className="btn-social btn-outline" rel="noopener noreferrer"> <FontAwesomeIcon icon={solid('hashtag')} /></a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col col-md-4">
                  <h3>About ReactJS Academy</h3>
                  <p>
                    <a href="https://reactjs.academy/" target="_blank" rel="noopener noreferrer">ReactJS Academy </a>
                    <span>
                      is devoted to teach ReactJS across Europe, providing free workshops and private trainings.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-below">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <span>Copyright &copy;</span> <a href="https://reactjs.academy/" target="_blank" rel="noopener noreferrer">ReactJS Academy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default Home;
