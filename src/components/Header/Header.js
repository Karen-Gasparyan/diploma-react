import React, { useState } from "react";

import './Header.css';
import Logo from '../Logo/Logo'
import NavigationAuth from "../NavigationAuth/NavigationAuth";
import MenuBurger from "../MenuBurger/MenuBurger";
import Navigation from "../Navigation/Navigation";
import DesctopNavigation from '../DesctopNavigation/DesctopNavigation';

const Header = ({ loggedIn }) => {
  const [menuBurgerOpened, setMenuBurgerOpened] = useState(false);

  const openMenuBurger = () => {
    setMenuBurgerOpened(!menuBurgerOpened)
  }

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