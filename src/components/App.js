import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import { EDIT_POPUP } from '../utils/constants';
// component's
import NotFoundPage from './NotFoundPage/NotFoundPage';
import EditPopup from './EditPopup/EditPopup';
import EditInput from './EditInput/EditInput';

import Header from './Header/Header';
import Main from './Main/Main';
import Register from './Register/Register';
import Login from './Login/Login';
import Profile from './Profile/Profile';
// context's
import AuthValueContext from '../contexts/AuthValueContext';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  // auth form
  const [authName, setAuthName] = useState('');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  // popup's
  const [popupVisible, setPopupVisible] = useState(false);
  // user data
  const [userData, setUserData] = useState({ name: '', email: '' });
  // current user data
  const [currentUser, setCurrentUser] = useState({ name: 'Карен', email: 'gks181188@mail.ru' })

  /* handlers */
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    console.log('register form')
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log('login form')
  }

  const handleSubmitEditProfile = (e) => {
    e.preventDefault();

    setCurrentUser({ name: userData.name, email: userData.email });
    handleUserProfileEdit();
    console.log('edit profile form submited')
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

  // close & open popup
  const handleUserProfileEdit = () => {
    if(popupVisible) {
      setPopupVisible(false);
    } else {
      setPopupVisible(true);
      setUserData({ name: currentUser.name, email: currentUser.email });
    }
  }

  const handleCurrentUserProfileEdit = (e) => {
    if(e.target.name === 'name') {
      setUserData({ name: e.target.value, email: userData.email })
    } else if(e.target.name === 'email') {
      setUserData({ name: userData.name, email: e.target.value})
    };
  };
  /* /handlers */

  // helpers
  const clearUserProfileDataInput = (e) => {
    if(e.target.name === 'name') {
      setUserData({ name: '', email: userData.email })
    } else if(e.target.name === 'email') {
      setUserData({ name: userData.name, email: ''})
    };
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={ currentUser }>
        <Switch>
          <Route exact path='/'>
            {/* <Header /> */}
            {/* <Main/> */}
            {/* <NotFoundPage/> */}
          </Route>

          <Route path='/profile'>
            <Profile
              handleUserProfileEdit={ handleUserProfileEdit }
              loggedIn={loggedIn}/>
          </Route>

          {/* <AuthValueContext.Provider
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
          </AuthValueContext.Provider> */}
        </Switch>

        <EditPopup
          component={ EditInput }
          onSubmit={ handleSubmitEditProfile }
          settings={ EDIT_POPUP.EDIT_USER_PROFILE }
          inputValue={ userData }
          onChange={ handleCurrentUserProfileEdit }
          clearInput={ clearUserProfileDataInput }
          popupVisible={ popupVisible }
          popupHidden={ handleUserProfileEdit }/>

      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
