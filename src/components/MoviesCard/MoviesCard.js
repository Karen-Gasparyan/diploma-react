import React from 'react';

import './MoviesCard.css';

const MoviesCard = ({ nameRU, duration, trailerLink, image: { url } }) => {
  return (
    <article className="movies-card">
      <header className="movies-card__header">
        <div className="movies-card__title-wrapper">
          <h2 className="movies-card__title">{ nameRU }</h2>
          <p className="movies-card__subtitle">{ duration }</p>
        </div>
        <button className="movies-card__favorite-button"></button>
      </header>

      <a className="movies-card__video-link"
         target="_blank" rel="noreferrer"
         href={ trailerLink }>
        <img className="movies-card__poster"
             src={ `https://api.nomoreparties.co${ url }` }
             alt={ `Постер к фильму ${ nameRU }` }/>
        <div className="movies-card__play-icon"></div>
      </a>
    </article>
  );
};

export default MoviesCard;