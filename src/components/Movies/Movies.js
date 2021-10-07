import React from 'react';

import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  return (
    <>
      <Header/>
      <section className="movies">
        <SearchForm/>
        <MoviesCardList/>
      </section>
    </>
  );
};

export default Movies;