import React from "react";

import './NavTab.css';
import NavigationLink from "../NavigationLink/NavigationLink";

const NavTab = ({ title }) => {
  return (
    <ul className="navtab-list">
      {
        title.map((item, index) => {
          return (<li className="navtab-item" key={index}>
                    <NavigationLink title={item}/>
                 </li>);
        })
      }
    </ul>
  );
};

export default NavTab;