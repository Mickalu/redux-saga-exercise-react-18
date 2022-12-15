import React from 'react';

import SideMenu from './Menus/SideMenu';
import BeersLikedContainer from '../../container/BeersLikedContainer';

export const Menu = ({ isOpen, toggleMenu }) => (
  <SideMenu
    isOpen={isOpen}
    toggleMenu={toggleMenu}
    data-testid="sideMenu"
  >

    <h3 data-testid="side-menu-title" style={{ paddingTop: '50px' }}>Beers I like:</h3>
    <BeersLikedContainer />

  </SideMenu>
);

export default Menu;
