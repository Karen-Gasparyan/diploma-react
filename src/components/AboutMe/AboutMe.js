import React from 'react';

import './AboutMe.css';
import STUDENT_PHOTO from '../../image/student-photo.jpg';
import { 
  STUDENT_NAME,
  STUDENT_ABOUT,
  STUDENT_BIOGRAPHY,
  STUDENT_SOCIAL_NETWORKS
} from '../../utils/constants';

import SectionTitle from '../SectionTitle/SectionTitle';
import AboutMeSocialItem from '../AboutMeSocialItem/AboutMeSocialItem';
import Portfolio from '../Portfolio/Portfolio';

const AboutMe = () => {
  return (
    <section className="about-me">
      <SectionTitle title={'Студент'}/>
      <div className="about-me__content">
        <img
          className="about-me__photo"
          src={ STUDENT_PHOTO }
          alt="Фото студента" />
        <div className="about-me__texts">
          <h2 className="about-me__name">{ STUDENT_NAME }</h2>
          <p className="about-me__info">{ STUDENT_ABOUT }</p>
          <p className="about-me__biography">{ STUDENT_BIOGRAPHY }</p>
          <ul className="about-me__social-list">
            {
              STUDENT_SOCIAL_NETWORKS.slice(1).map(item => (<AboutMeSocialItem key={ item.id } item={ item }/>))
            }
          </ul>
        </div>
      </div>
      <Portfolio/>
    </section>
  );
};

export default AboutMe;