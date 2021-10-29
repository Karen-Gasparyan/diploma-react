import React from 'react';

import './Movies.css';
import { LOAD_MORE_BUTTON_TITLE } from '../../utils/constants';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

const Movies = ({ loadMore }) => {
  return (
    <>
      <Header/>
      <section className="movies">
        <SearchForm/>
        <MoviesCardList/>
        <LoadMoreButton
          loadMore={ loadMore }
          title={ LOAD_MORE_BUTTON_TITLE }/>
      </section>
    </>
  );
};

export default Movies;