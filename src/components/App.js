import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
// component's
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Header from './Header/Header';
import Main from './Main/Main';
import Register from './Register/Register';
import Login from './Login/Login';
// context's
import AuthValueContext from '../contexts/AuthValueContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  // auth form
  const [authName, setAuthName] = useState('');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');

  // handlers
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    console.log('register form')
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log('login form')
  }

  const handleAuthName = (e) => {
    setAuthName(e.target.value);
  }

  const handleAuthEmail = (e) => {
    setAuthEmail(e.target.value);
  }

  const handleAuthPassword = (e) => {
    setAuthPassword(e.target.value);
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
          {/* <Header loggedIn={loggedIn}/> */}
          {/* <Main/> */}
          {/* <NotFoundPage/> */}
        </Route>

        <AuthValueContext.Provider
          value={
            { authName,
              authEmail,
              authPassword,
              handleAuthName,
              handleAuthEmail,
              handleAuthPassword,
              handleSubmitRegister,
              handleSubmitLogin }}>
          <Route path='/signup'>
            <Register/>
          </Route>
          <Route path='/signin'>
            <Login/>
          </Route>
        </AuthValueContext.Provider>
      </Switch>
    </div>
    
  );
}

export default App;
