import React from 'react';

import './SearchForm.css';
import { SEARCH_PLACEHOLDER } from '../../utils/constants';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <input
          className="search-form__input"
          placeholder={ SEARCH_PLACEHOLDER }/>
        <div className="search-form__buttons-container">
          <button
            className="search-form__clear-button"
            type="button">
          </button>
          <button
            className="search-form__submit-button"
            type="submit">
          </button>
        </div>
      </form>
      <FilterCheckbox/>
    </section>
  );
};

export default SearchForm;