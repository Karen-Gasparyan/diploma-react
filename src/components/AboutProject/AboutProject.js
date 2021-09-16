import React from 'react';

import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const AboutProject = () => {
  return (
    <section className="about-project">
      <SectionTitle title={'О проекте'}/>
      <div className="about-project__container">
        <div className="about-project__content">
          <h3 className="about-project__content-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__content-subtitle">
            Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__content">
          <h3 className="about-project__content-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__content-subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <ul className="about-project__table">
        <li>
          <ul className="about-project__table-title">
            <li className="about-project__table-item background-color-green">1 неделя</li>
            <li className="about-project__table-item background-color-gray">4 недели</li>
          </ul>
        </li>

        <li>
          <ul className="about-project__table-subtitle">
            <li className="about-project__table-item font-colored">Back-end</li>
            <li className="about-project__table-item font-colored">Front-end</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default AboutProject;