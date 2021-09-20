import React from 'react';

import './PortfolioItem.css';
import ARROW_ICON from '../../image/portfolio-arrow-icon.svg';

const PortfolioItem = ({ item: { title, link } }) => {
  return (
    <li className="portfolio-item">
      <a className="portfolio-item__link"
         target="_blank"
         rel="noreferrer"
         href={ link }>
           { title }
         <img className="portfolio-item__icon"
              src={ ARROW_ICON } alt="стрелка"/>
      </a>
    </li>
  );
};

export default PortfolioItem;