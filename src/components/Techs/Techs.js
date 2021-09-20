import React from 'react';

import './Techs.css';
import { TECHS_ITEM_DATA } from '../../utils/constants';
import SectionTitle from '../SectionTitle/SectionTitle';
import TechsItem from '../TechsItem/TechsItem';

const Techs = () => {
  return (
    <section className="techs">
      <SectionTitle title={'Технологии'}/>
      <article className="techs__content">
        <h2  className="techs__title">7 технологий</h2>
        <p className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии,
          которые применили в дипломном проекте.
        </p>
        <ul className="techs__list">
          {
            TECHS_ITEM_DATA.map(item => (<TechsItem key={ item.id } item={ item }/>))
          }
        </ul>
      </article>
    </section>
  );
};

export default Techs;