import React from 'react';

import './Portfolio.css';
import { PORTFOLIO_ITEMS } from '../../utils/constants';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

const Portfolio = () => {
  return (
    <article className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__item-list">
        {
          PORTFOLIO_ITEMS.map(item => (<PortfolioItem key={item.id} item={item} />))
        }
      </ul>
    </article>
  );
};

export default Portfolio;