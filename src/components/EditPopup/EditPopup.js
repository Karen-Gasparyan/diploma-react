import React from 'react';

import './EditPopup.css';

const EditPopup = (
  { component: Component, onSubmit,

    settings:
    { formName,
      submitButtonValue,
      labelValue,
      htmlFor,
      inputTypeValue,
      clearButtonName,
      minLength,
      maxLength },
    
    inputValue,
    onChange,
    clearInput,
    popupVisible,
    popupHidden
  }) => {
  return (
    <div className={popupVisible ? "edit-popup edit-popup-opened" : "edit-popup"}>
      <div className="edit-popup__content">
        <form
          className="edit-popup__form"
          name={ formName }
          onSubmit={ onSubmit }>
          <Component
            labelValue={ labelValue.name }
            htmlFor={ htmlFor.name }
            inputTypeValue={ inputTypeValue.text }
            minLength={ minLength.name }
            maxLength={ maxLength.name }
            clearButton={ clearButtonName.name }
            clearInput={ clearInput }
            inputValue={ inputValue.name }
            onChange={ onChange }/>
          <Component
            labelValue={ labelValue.email }
            htmlFor={ htmlFor.email }
            inputTypeValue={ inputTypeValue.email }
            minLength={ minLength.email }
            maxLength={ maxLength.email }
            clearButton={ clearButtonName.email }
            clearInput={ clearInput }
            inputValue={ inputValue.email }
            onChange={ onChange }/>
          <button
            className="edit-popup__submit-button"
            type="submit">
              { submitButtonValue }
          </button>
        </form>
        <button
          className="edit-popup__close-button"
          type="button"
          onClick={ popupHidden }>
        </button>
      </div>
    </div>
  );
};

export default EditPopup;