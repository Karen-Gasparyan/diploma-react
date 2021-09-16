import React from 'react';

import './Main.css';
import { MAIN_TITLE, PROMO_ABOUT, PROMO_TECHNOLOGIES, PROMO_STUDENT } from '../../utils/constants';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';

const Main = () => {
  return (
    <>
      {/* <Promo title={ MAIN_TITLE }/>
      <NavTab title={[PROMO_ABOUT, PROMO_TECHNOLOGIES, PROMO_STUDENT]}/> */}
      <AboutProject/>
    </>
  );
};

export default Main;