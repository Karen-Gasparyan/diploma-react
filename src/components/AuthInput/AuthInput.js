import React from 'react';

import './AuthInput.css';

const AuthInput = (
  { input: { label, name, type, minLength, maxLength },
    value, onChange
  }) => {

  return (
    <>
      <label className="auth-input__label" htmlFor={ name }>{ label }</label>
      <input
        className="auth-input__input"
        autoComplete="off"
        required
        name={ name }
        id={ name }
        type={ type }
        value={ value }
        onChange={ onChange }
        minLength={ minLength }
        maxLength={ maxLength } />
      <p className="auth-input__error-message">Что-то пошло не так</p>
    </>
  );
};

export default AuthInput;