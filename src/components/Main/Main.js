import React from "react";

import './Main.css';
import { MAIN_TITLE } from '../../utils/constants';
import Promo from "../Promo/Promo";

const Main = () => {
  return (
    <>
      <Promo title={ MAIN_TITLE }/>
    </>
  );
};

export default Main;