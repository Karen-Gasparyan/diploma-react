import React from 'react';

import './FilterCheckbox.css';
import { FILTERCHECKBOX_VALUE } from '../../utils/constants';

const FilterCheckbox = (
  { filterCheckbox,
    handleFilterCheckbox
  }) => {
  return (
    <>
      <input
        className="filter-checkbox"
        id="filter-checkbox"
        type="checkbox"
        name="filter-checkbox"
        onChange={ handleFilterCheckbox }
        checked={ filterCheckbox }/>
      <label 
        className="filter-checkbox__label"
        htmlFor="filter-checkbox">
          { FILTERCHECKBOX_VALUE }
      </label>
    </>
  );
}

export default FilterCheckbox;