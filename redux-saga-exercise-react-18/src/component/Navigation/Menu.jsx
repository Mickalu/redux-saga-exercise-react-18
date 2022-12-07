import React from 'react';

import SideMenu from './Menus/SideMenu';

export const Menu = ({ isOpen, toggleMenu }) => (
  <SideMenu
    isOpen={isOpen}
    toggleMenu={toggleMenu}
  />
);

export default Menu;
