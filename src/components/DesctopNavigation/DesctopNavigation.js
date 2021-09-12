import React from "react";

import './DesctopNavigation.css';
import { MOVIES_PAGE, FAVORITE_MOVIES_PAGE, ACCOUNT_PAGE } from '../../utils/constants';
import NavigationLink from "../NavigationLink/NavigationLink";
import AccountLink from "../AccountLink/AccountLink";

const DesctopNavigation = () => {
  return (
    <nav className="desctop-navigation">
      <ul className="desctop-navigation__list">
        <li className="desctop-navigation__item">
          <NavigationLink title={MOVIES_PAGE}/>
        </li>
        <li className="desctop-navigation__item">
          <NavigationLink title={FAVORITE_MOVIES_PAGE}/>
        </li>
      </ul>
      <AccountLink title={ACCOUNT_PAGE}/>
    </nav>
  );
};

export default DesctopNavigation;