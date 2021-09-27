import React from 'react';
import { Link } from 'react-router-dom';

import '../../mixins/AuthPage.css';
import { LOGIN_TITLE, LOGIN_BUTTON_VALUE, } from '../../utils/constants';
import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';

const Login = () => {

  return (
    <section className="auth-page">
      <Logo/>
      <h2 className="auth-page__title">{ LOGIN_TITLE }</h2>
      <AuthForm name={'login'} buttonValue={ LOGIN_BUTTON_VALUE }/>
      <div className="auth-page__footer">
        <p className="auth-page__question">Ещё не зарегистрированы?</p>
        <Link className="auth-page__route" to='/signup'>Регистрация</Link>
      </div>
    </section>
  );
};

export default Login;