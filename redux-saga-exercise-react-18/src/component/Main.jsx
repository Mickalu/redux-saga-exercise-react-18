import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import Header from './Header';
import Menu from './Navigation/Menu';
import TinderContainer from '../container/TinderContainer';

const Main = (props) => {

  const [menu, setMenu] = useState({ open: true });

  const toggleMenu = () => (setMenu({open: !menu.open}));

  return (
    <div id="page-wrap">
      <Menu
        pageWrapId="page-wrap"
        isOpen={menu.open}
        toggleMenu={toggleMenu}
      />

      <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
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
        <div className="container">
          <TinderContainer />
        </div>
      </section>
    </div>
  );
};

export default Main
