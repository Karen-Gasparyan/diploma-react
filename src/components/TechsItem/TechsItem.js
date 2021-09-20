import React from 'react';

import './TechsItem.css';

const TechsItem = ({ item: { link, title } }) => {
  return (
    <li className="techs-item">
      <a className="techs-item__link"
          href={ link }
          target="_blank"
          rel="noreferrer">
            { title }
      </a>
    </li>
  );
};

export default TechsItem;