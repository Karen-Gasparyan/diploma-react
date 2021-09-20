import React from 'react';

import './AboutMeSocialItem.css';

const AboutMeSocialItem = ({ item: { link, title } }) => {
  return (
    <li className="about-me-social-item">
      <a className="about-me-social-item__link"
         href={ link }
         target="_blank"
         rel="noreferrer">
           { title }
      </a>
    </li>
  );
};

export default AboutMeSocialItem;