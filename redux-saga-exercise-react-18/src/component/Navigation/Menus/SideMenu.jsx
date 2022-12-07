import React from 'react';
import * as BurgerMenu from 'react-burger-menu';

const SideMenu = ({ isOpen, toggleMenu, children, pageWrapId }) => (
  <div>
    <BurgerMenu.slide
      isOpen={isOpen}
      pageWrapId={pageWrapId || 'page-wrap'}
      onClose={toggleMenu}
    >
      { children }
    </BurgerMenu.slide>
  </div>
);

export default SideMenu;
