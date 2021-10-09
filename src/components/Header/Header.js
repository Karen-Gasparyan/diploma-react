import React from 'react';

import './Header.css';
import LoggedInContext from '../../contexts/LoggedInContext';
import MenuBurgerNavigationContext from '../../contexts/MenuBurgerNavigationContext';

import Logo from '../Logo/Logo'
import NavigationAuth from "../NavigationAuth/NavigationAuth";
import MenuBurger from "../MenuBurger/MenuBurger";
import Navigation from "../Navigation/Navigation";
import DesctopNavigation from '../DesctopNavigation/DesctopNavigation';

const Header = () => {
  const loggedIn = React.useContext(LoggedInContext);
  const { menuBurgerOpened, handleOpenMenuBurger } = React.useContext(MenuBurgerNavigationContext);

  return (
    <header className={ menuBurgerOpened ? 'header _navigation-opened' : 'header'}>
      <div className="header__container">
        <Logo/>
        {
          loggedIn ? <MenuBurger
                        menuBurgerOpened={ menuBurgerOpened }
                        openMenuBurger={ handleOpenMenuBurger }/>
                      : <NavigationAuth/>
        }
        <Navigation menuBurgerOpened={ menuBurgerOpened }/>
        {
          loggedIn ? <DesctopNavigation/> : ''
        }
      </div>
    </header>
  );
};

export default Header;