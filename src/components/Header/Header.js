import React, { useState } from "react";

import './Header.css';
import Logo from '../Logo/Logo'
import NavigationAuth from "../NavigationAuth/NavigationAuth";
import MenuBurger from "../MenuBurger/MenuBurger";
import Navigation from "../Navigation/Navigation";
import DesctopNavigation from '../DesctopNavigation/DesctopNavigation';
import LoggedInContext from '../../contexts/LoggedInContext';

const Header = () => {
  const [menuBurgerOpened, setMenuBurgerOpened] = useState(false);

  const loggedIn = React.useContext(LoggedInContext)

  const openMenuBurger = () => {
    setMenuBurgerOpened(!menuBurgerOpened)
  };

  return (
    <div>
      <header className="header">
        <Logo/>
        {
          loggedIn ? <MenuBurger
                        menuBurgerOpened={menuBurgerOpened}
                        openMenuBurger={openMenuBurger}/> :
                     <NavigationAuth/>
        }
        <Navigation menuBurgerOpened={menuBurgerOpened}/>
        {
          loggedIn ? <DesctopNavigation/> : ''
        }
      </header>
    </div>
    
  );
};

export default Header;