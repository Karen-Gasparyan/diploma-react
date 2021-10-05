import React from 'react';

import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

const Movies = () => {
  return (
    <>
      <Header/>
      <section className="movies">
        <SearchForm/>
      </section>
    </>
  );
};

export default Movies;