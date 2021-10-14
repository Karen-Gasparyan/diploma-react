import React from 'react';

import './MenuBurger.css';

const MenuBurger = ({ menuBurgerOpened, openMenuBurger }) => {
  return (
    <div className={`menu-burger ${menuBurgerOpened ? "opened" : ''}`} onClick={ openMenuBurger }>
      <div className="menu-burger__item"></div>
    </div>
  );
};

export default MenuBurger;