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
    onChange
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
          required />
        <button
          className="edit-input__clear-button"
          type="button"
          name={ clearButton }
          onClick={ clearInput }>
        </button>
      </div>
    </>
  );
};

export default EditInput;