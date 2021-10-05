import React from 'react';

import './EditInput.css';

const EditInput = (
  { labelValue,
    htmlFor,
    inputTypeValue,
    minLength,
    maxLength,
    clearButton,
    clearInput,
    inputValue,
    inputErrorMessage,
    onChange,
    autoFocus
  }) => {
  return (
    <>
      <label
        className="edit-input__label"
        htmlFor={`edit-input-${ htmlFor }`}>
          { labelValue }
      </label>
      <div className="edit-input__wrapper">
        <input
          className="edit-input"
          id={`edit-input-${ htmlFor }`}
          name={ htmlFor }
          type={ inputTypeValue }
          minLength={ minLength }
          maxLength={ maxLength }
          value={ inputValue }
          onChange={ onChange }
          autoFocus={ autoFocus }
          required />
        <button
          className={ inputValue.length === 0 ?
                      "edit-input__clear-button-disabled" :
                      "edit-input__clear-button" }
          type="button"
          name={ clearButton }
          onClick={ clearInput }>
        </button>
      </div>
      <span className="edit-input__error-message">{ inputErrorMessage }</span>
    </>
  );
};

export default EditInput;