import React from 'react';

import './MoviesCardList.css';
import AllMoviesContext from '../../contexts/AllMoviesContext';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  const ALL_MOVIES_DATA = React.useContext(AllMoviesContext);
  return (
    <ul className="movies-card-list">
        {
          ALL_MOVIES_DATA.map(movie => {
            return (
              <li className="movies-card-list__item"
                  key={ movie.id }>
                <MoviesCard
                  nameRU={ movie.nameRU }
                  duration={ movie.duration }
                  trailerLink={ movie.trailerLink }
                  image={ movie.image } />
              </li>
            );
          })
        }
    </ul>
  );
};

export default MoviesCardList;