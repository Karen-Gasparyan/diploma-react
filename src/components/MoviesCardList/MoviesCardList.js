import React from 'react';

import './MoviesCardList.css';
import AllMoviesContext from '../../contexts/AllMoviesContext';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  const { allMovies, getTimeFromMins, changeMoviesValue } = React.useContext(AllMoviesContext);
  return (
    <ul className="movies-card-list">
        {
          changeMoviesValue(allMovies).map(movie => {
            return (
              <li className="movies-card-list__item"
                  key={ movie.id }>
                <MoviesCard
                  nameRU={ movie.nameRU }
                  duration={ movie.duration }
                  trailerLink={ movie.trailerLink }
                  image={ movie.image }
                  getTimeFromMins={ getTimeFromMins } />
              </li>
            );
          })
        }
    </ul>
  );
};

export default MoviesCardList;