import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import { EMAIL_RegExp, EDIT_POPUP, EDIT_PROFILE_DATA_VALIDATION } from '../utils/constants';
// api
import MoviesApi from '../utils/MoviesApi';
// component's
import NotFoundPage from './NotFoundPage/NotFoundPage';
import EditPopup from './EditPopup/EditPopup';
import EditInput from './EditInput/EditInput';

import Header from './Header/Header';
import Main from './Main/Main';
import Register from './Register/Register';
import Login from './Login/Login';
import Profile from './Profile/Profile';
import Movies from './Movies/Movies';
// context's
import LoggedInContext from '../contexts/LoggedInContext';
import AuthValueContext from '../contexts/AuthValueContext';
import CurrentUserContext from '../contexts/CurrentUserContext';
import AllMoviesContext from '../contexts/AllMoviesContext';
import FoundMoviesContext from '../contexts/FoundMoviesContext';
import MenuBurgerNavigationContext from '../contexts/MenuBurgerNavigationContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  // api
  const [allMovies, setAllMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  // auth form
  const [authName, setAuthName] = useState('');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  // search form
  const [foundMovies, setFoundMovies] = useState([]);
  // popup's
  const [popupVisible, setPopupVisible] = useState(false);
  // menu burger
  const [menuBurgerOpened, setMenuBurgerOpened] = useState(false);
  // user data
  const [userData, setUserData] = useState({ name: '', email: '' });
  // current user data
  const [currentUser, setCurrentUser] = useState({ name: 'Карен', email: 'gks181188@mail.ru' });
  // validation
  const [editProfileSubmitButtonDisabled, setEditProfileSubmitButtonDisabled] = useState(true);
  const [editProfileInputErrorMessage, setEditProfileInputErrorMessage] = useState({ name: '', email: '' });

  // get all movies
  useEffect(() => {
    MoviesApi().then(res => setAllMovies(res));
  }, []);

  // get favorite movies
  useEffect(() => {
    
  }, []);

  /* handlers */
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    console.log('register form')
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log('login form')
  };

  const handleSubmitEditProfile = (e) => {
    e.preventDefault();

    setCurrentUser({ name: userData.name, email: userData.email });
    handleUserProfileEdit();
    console.log('edit profile form submited')
  };

  const handleAuthName = (e) => {
    setAuthName(e.target.value);
  };

  const handleAuthEmail = (e) => {
    setAuthEmail(e.target.value);
  };

  const handleAuthPassword = (e) => {
    setAuthPassword(e.target.value);
  };

  const handleFoundMovies = (e) => {
    setFoundMovies(e.target.value);
    console.log(e.target.value)
  };

  const handleOpenMenuBurger = () => {
    setMenuBurgerOpened(!menuBurgerOpened);
  };

  // close & open popup
  const handleUserProfileEdit = () => {
    if(popupVisible) {
      setPopupVisible(false);
    } else {
      setPopupVisible(true);
      setEditProfileSubmitButtonDisabled(true);
      setEditProfileInputErrorMessage({ name: '', email: '' });
      setUserData({ name: currentUser.name, email: currentUser.email });
    };
  };

  // edit profile data validation
  const handleCurrentUserProfileEdit = (e) => {
    if(e.target.name === 'name') {
      setUserData({ name: e.target.value, email: userData.email });
      if(e.target.value.length === 0) {
        setEditProfileInputErrorMessage({
          name: EDIT_PROFILE_DATA_VALIDATION.default,
          email: editProfileInputErrorMessage.email
        });
        setEditProfileSubmitButtonDisabled(true);
      } else if(e.target.value.length < 2) {
        setEditProfileInputErrorMessage({
          name: EDIT_PROFILE_DATA_VALIDATION.name.minLength,
          email: editProfileInputErrorMessage.email
        });
        setEditProfileSubmitButtonDisabled(true);
      } else if(e.target.value.length >= 2) {
        setEditProfileInputErrorMessage({
          name: '',
          email: editProfileInputErrorMessage.email
        });
        setEditProfileSubmitButtonDisabled(false);
      };
    };
    
    if(e.target.name === 'email') {
      setUserData({ name: userData.name, email: e.target.value});
      if(e.target.value.length === 0) {
        setEditProfileInputErrorMessage({
          name: editProfileInputErrorMessage.name,
          email: EDIT_PROFILE_DATA_VALIDATION.default
        });
        setEditProfileSubmitButtonDisabled(true);
      } else if(!EMAIL_RegExp.test(String(e.target.value).toLowerCase())) {
        setEditProfileInputErrorMessage({
          name: editProfileInputErrorMessage.name,
          email: EDIT_PROFILE_DATA_VALIDATION.email.incorrectEmail
        });
        setEditProfileSubmitButtonDisabled(true);
      } else {
        setEditProfileInputErrorMessage({
          name: editProfileInputErrorMessage.name,
          email: ''
        });
        setEditProfileSubmitButtonDisabled(false);
      };
    };
  };
  /* /handlers */

  // helpers
  const clearUserProfileDataInput = (e) => {
    if(e.target.name === 'name') {
      setUserData({ name: '', email: userData.email });
      setEditProfileInputErrorMessage({ name: 'поле не может быть пустым', email: editProfileInputErrorMessage.email });
    } else if(e.target.name === 'email') {
      setUserData({ name: userData.name, email: ''});
      setEditProfileInputErrorMessage({ name: editProfileInputErrorMessage.name, email: 'поле не может быть пустым' });
    };

    setEditProfileSubmitButtonDisabled(true);
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={ currentUser }>
      <LoggedInContext.Provider value={ loggedIn }>
      <AllMoviesContext.Provider value={ allMovies }>
      <FoundMoviesContext.Provider value={ { foundMovies, handleFoundMovies } }>
      <MenuBurgerNavigationContext.Provider value={ { menuBurgerOpened, handleOpenMenuBurger } }>

        <Switch>
          <Route exact path='/'>
            {/* <Header/> */}
            {/* <Main/> */}
            {/* <NotFoundPage/> */}
          </Route>

          <Route  path='/movies'>
            <Movies/>
          </Route>

          {/* <Route path='/profile'>
            <Profile
              handleUserProfileEdit={ handleUserProfileEdit }/>
          </Route> */}

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

        {
          popupVisible ? 
            <EditPopup
            component={ EditInput }
            onSubmit={ handleSubmitEditProfile }
            settings={ EDIT_POPUP.EDIT_USER_PROFILE }
            inputValue={ userData }
            inputErrorMessage={ editProfileInputErrorMessage }
            onChange={ handleCurrentUserProfileEdit }
            clearInput={ clearUserProfileDataInput }
            popupVisible={ popupVisible }
            popupHidden={ handleUserProfileEdit }
            submitButtonDisabled={ editProfileSubmitButtonDisabled }/>
            : null
        }

      </MenuBurgerNavigationContext.Provider>
      </FoundMoviesContext.Provider>
      </AllMoviesContext.Provider>
      </LoggedInContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
