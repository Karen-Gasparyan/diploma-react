import React from 'react';

import './SearchForm.css';
import { SEARCH_PLACEHOLDER } from '../../utils/constants';
import SearchMoviesFormContext from '../../contexts/SearchMoviesFormContext';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  const {
    searchFormInputValue,
    handleSearchFormInputValue,
    clearSearchFormInputValue,
    handleSubmitSearchMoviesForm
  } = React.useContext(SearchMoviesFormContext);

  return (
    <section className="search-form">
      <form
        className="search-form__form"
        name="search-movies-form"
        onSubmit={ handleSubmitSearchMoviesForm }>
        <input
          className="search-form__input"
          placeholder={ SEARCH_PLACEHOLDER }
          value={ searchFormInputValue }
          onChange={ handleSearchFormInputValue }/>
        <div className="search-form__buttons-container">
          <button
            className={`search-form__clear-button ${ searchFormInputValue.length === 0 ? "disabled" : '' }`}
            type="button"
            onClick={ clearSearchFormInputValue }>
          </button>
          <button
            className={`search-form__submit-button ${ searchFormInputValue.length !== 0 ? "active" : '' }`}
            type="submit"
            disabled={ searchFormInputValue.length !==0 ? false : true }>
          </button>
        </div>
      </form>
      <FilterCheckbox/>
    </section>
  );
};

export default SearchForm;