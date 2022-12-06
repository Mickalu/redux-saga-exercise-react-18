import React from 'react';

import SideMenu from './Menus/SideMenu';

export const Menu = ({isOpen, toggleMenu}) => (
  <SideMenu
    isOpen={isOpen}
    toggleMenu={toggleMenu}
  >

    <h3 style={{ paddingTop: '50px' }}>Beers I like:</h3>

  </SideMenu>
);

export default Menu;
