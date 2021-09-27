import React from 'react';
import { Link } from 'react-router-dom';

import '../../mixins/AuthPage.css';
import { REGISTER_TITLE, REGISTER_BUTTON_VALUE, } from '../../utils/constants';
import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';

const Register = () => {

  return (
    <section className="auth-page">
      <Logo/>
      <h2 className="auth-page__title">{ REGISTER_TITLE }</h2>
      <AuthForm name={'register'} buttonValue={ REGISTER_BUTTON_VALUE }/>
      <div className="auth-page__footer">
        <p className="auth-page__question">Уже зарегистрированы?</p>
        <Link className="auth-page__route" to='/signin'>Войти</Link>
      </div>
    </section>
  );
};

export default Register;