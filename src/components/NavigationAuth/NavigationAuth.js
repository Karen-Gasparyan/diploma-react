import React from "react";
import { Link } from 'react-router-dom';

import './NavigationAuth.css';

const NavigationAuth = () => {
  return (
    <ul className="navigation-auth">
      <li className="navigation-auth__item">
        <Link to="/"
          className="navigation-auth__link">Регистрация
        </Link>
      </li>
      <li className="navigation-auth__item">
        <Link to="/"
          className="navigation-auth__link background-colored">Войти
        </Link>
      </li>
  </ul>
  );
};

export default NavigationAuth;