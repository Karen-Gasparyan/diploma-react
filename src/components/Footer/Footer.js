import React from 'react';

import './Footer.css';
import { STUDENT_SOCIAL_NETWORKS } from '../../utils/constants';

import AboutMeSocialItem from '../AboutMeSocialItem/AboutMeSocialItem';

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__content">
        <ul className="footer__list">
          {
            STUDENT_SOCIAL_NETWORKS.map(item => (<AboutMeSocialItem key={item.id} item={ item }/>))
          }
        </ul>
        <p className="footer__copyright">&copy;2021</p>
      </div>
    </footer>
  );
};

export default Footer;