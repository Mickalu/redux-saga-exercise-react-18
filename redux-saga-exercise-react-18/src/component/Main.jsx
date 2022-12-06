import React, { useState } from 'react';

import Header from './Header';
import Menu from './Navigation/Menu'

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
                <i className="fa fa-heart" />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <Header />

    </div>
  );
};

export default Main
