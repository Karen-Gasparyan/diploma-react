import React from "react";
import { Link } from 'react-router-dom';

import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <section className="not-found-page">
      <div className="not-found-page__content">
        <h2 className="not-found-page__title">404</h2>
        <p className="not-found-page__subtitle">Страница не найдена</p>
      </div>
      <Link to="/"
        className="not-found-page__return-link">&#8617; Назад
      </Link>
    </section>
  );
};

export default NotFoundPage;