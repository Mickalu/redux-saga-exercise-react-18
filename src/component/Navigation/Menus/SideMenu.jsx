import React from 'react';
import * as BurgerMenu from 'react-burger-menu';

const SideMenu = ({ isOpen, toggleMenu, children, pageWrapId }) => (
    // eslint-disable-next-line react/jsx-pascal-case
    <BurgerMenu.slide
      isOpen={isOpen}
      pageWrapId={pageWrapId || 'page-wrap'}
      onClose={toggleMenu}
    >
      { children }
    </BurgerMenu.slide>
);

export default SideMenu;
