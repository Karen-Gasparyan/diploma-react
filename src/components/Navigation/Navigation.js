import React from "react";

import './Navigation.css';
import { HOME_PAGE, MOVIES_PAGE, FAVORITE_MOVIES_PAGE, ACCOUNT_PAGE } from '../../utils/constants';
import AccountLink from "../AccountLink/AccountLink";
import NavigationLink from "../NavigationLink/NavigationLink";

const Navigation = ({ menuBurgerOpened }) => {
  return (
    <nav className={`navigation ${menuBurgerOpened ? "navigation-visible" : ''}`}>
      <div className="navigation__content">
        <ul className="navigation__items">
          <li className="navigation__item">
            <NavigationLink title={HOME_PAGE}/>
          </li>
          <li className="navigation__item">
            <NavigationLink title={MOVIES_PAGE}/>
          </li>
          <li className="navigation__item">
            <NavigationLink title={FAVORITE_MOVIES_PAGE}/>
          </li>
        </ul>
        <AccountLink title={ACCOUNT_PAGE}/>
      </div>
    </nav>
  );
};

export default Navigation;