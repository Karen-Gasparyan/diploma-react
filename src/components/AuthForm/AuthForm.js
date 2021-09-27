import React from 'react';

import './AuthForm.css';
import AuthValueContext from '../../contexts/AuthValueContext';
import { AUTH_INPUT_DATA } from '../../utils/constants';
import AuthInput from '../AuthInput/AuthInput';

const AuthForm = ({ name, buttonValue }) => {
  const {
    authName,
    authEmail,
    authPassword,
    handleAuthName,
    handleAuthEmail,
    handleAuthPassword,
    handleSubmitRegister,
    handleSubmitLogin
  } = React.useContext(AuthValueContext);

  if(name === 'register') {
    return (
      <form className="auth-form" name={ name } onSubmit={ handleSubmitRegister }>
        <div className="auth-form__container">
          <AuthInput input={ AUTH_INPUT_DATA[0] } value={ authName } onChange={ handleAuthName }/>
          <AuthInput input={ AUTH_INPUT_DATA[1] } value={ authEmail } onChange={ handleAuthEmail }/>
          <AuthInput input={ AUTH_INPUT_DATA[2] } value={ authPassword } onChange={ handleAuthPassword }/>
        </div>
        <button className="auth-form__submit-button" type='submit'>{ buttonValue }</button>
      </form>
    );
  };

  if(name === 'login') {
    return (
      <form className="auth-form" name={ name } onSubmit={ handleSubmitLogin }>
        <div className="auth-form__container login-form">
          <AuthInput input={ AUTH_INPUT_DATA[1] } value={ authEmail } onChange={ handleAuthEmail }/>
          <AuthInput input={ AUTH_INPUT_DATA[2] } value={ authPassword } onChange={ handleAuthPassword }/>
        </div>
        <button className="auth-form__submit-button" type='submit'>{ buttonValue }</button>
      </form>
    );
  };
};

export default AuthForm;