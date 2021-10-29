import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import {
  EMAIL_RegExp,
  MOBILE_SCREEN_SIZE,
  TABLET_SCREEN_SIZE,
  DESKTOP_SCREEN_SIZE,
  MOBILE_INITIAL_MOVIES,
  TABLET_INITIAL_MOVIES,
  DESKTOP_INITIAL_MOVIES,
  LOAD_MORE_ON_MOBILE,
  LOAD_MORE_ON_TABLET,
  LOAD_MORE_ON_DESKTOP,
  EDIT_POPUP,
  EDIT_PROFILE_DATA_VALIDATION
} from '../utils/constants';
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
import SearchMoviesFormContext from '../contexts/SearchMoviesFormContext';
import MenuBurgerNavigationContext from '../contexts/MenuBurgerNavigationContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  // api
  const [allMovies, setAllMovies] = useState([]);
  const [initialMovies, setInitialMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [initialFavoriteMovies, setInitialFavoriteMovies] = useState([]);
  // movies
  const [initialMobile, setInitialMobile] = useState(MOBILE_INITIAL_MOVIES);
  const [initialTablet, setInitialTablet] = useState(TABLET_INITIAL_MOVIES);
  const [initialDesktop, setInitialDesktop] = useState(DESKTOP_INITIAL_MOVIES);
  // auth form
  const [authName, setAuthName] = useState('');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  // search form
  const [searchFormInputValue, setSearchFormInputValue] = useState('');
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

  // body scroll
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = menuBurgerOpened ? 'hidden' : 'auto';
  }, [menuBurgerOpened]);

  // dimensions
  function debounce(fn, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  };
  
  useEffect(() => {
    const windowResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000);

    window.addEventListener('resize', windowResize);

    return () => {
      window.removeEventListener('resize', windowResize);
    };
  });


  const changeMoviesValue = (movies) => {
    if (window.innerWidth >= MOBILE_SCREEN_SIZE && window.innerWidth < TABLET_SCREEN_SIZE) {
      return movies.slice(0, initialMobile);
    } else if (window.innerWidth >= TABLET_SCREEN_SIZE && window.innerWidth < DESKTOP_SCREEN_SIZE) {
      return movies.slice(0, initialTablet);
    } else if (window.innerWidth >= DESKTOP_SCREEN_SIZE) {
      return movies.slice(0, initialDesktop);
    };
  };

  const loadMoreMovies = () => {
    if (window.innerWidth >= MOBILE_SCREEN_SIZE && window.innerWidth < TABLET_SCREEN_SIZE) {
      setInitialMobile(initialMobile + LOAD_MORE_ON_MOBILE);
    } else if (window.innerWidth >= TABLET_SCREEN_SIZE && window.innerWidth < DESKTOP_SCREEN_SIZE) {
      setInitialTablet(initialTablet + LOAD_MORE_ON_TABLET);
    } else if (window.innerWidth >= DESKTOP_SCREEN_SIZE) {
      setInitialDesktop(initialDesktop + LOAD_MORE_ON_DESKTOP);
    };
  };


  // get all movies
  useEffect(() => {
    if(localStorage.getItem('allMovies')) {
      setAllMovies(loadState('allMovies'));
    } else {
      MoviesApi().then(res => {
        setAllMovies(res);
        saveState('allMovies', res);
      });
    };
  }, []);

  // get all movies - initial


  // get favorite movies
  useEffect(() => {
    
  }, []);

  /* handlers */
  const handleAuthName = (e) => {
    setAuthName(e.target.value);
  };

  const handleAuthEmail = (e) => {
    setAuthEmail(e.target.value);
  };

  const handleAuthPassword = (e) => {
    setAuthPassword(e.target.value);
  };

  const handleSearchFormInputValue = (e) => {
    setSearchFormInputValue(e.target.value);
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

  // submit
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

  const handleSubmitSearchMoviesForm = (e) => {
    e.preventDefault();
    console.log(searchFormInputValue);
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

  const clearSearchFormInputValue = () => {
    setSearchFormInputValue('');
  };

  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  };

  const saveState = (name, state) => {
    try {
      const data = JSON.stringify(state);
      localStorage.setItem(name, data);
    } catch (err) {
        return undefined;
    };
  };

  const loadState = (name) => {
    try {
      const data = localStorage.getItem(name);
        if(data === null){
          return undefined;
        };
        return JSON.parse(data);
    } catch (err) {
        return undefined;
    };
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={ currentUser }>
      <LoggedInContext.Provider value={ loggedIn }>
      <AllMoviesContext.Provider value={{ allMovies, getTimeFromMins, changeMoviesValue }}>
      <SearchMoviesFormContext.Provider
        value={{
          searchFormInputValue,
          handleSearchFormInputValue,
          clearSearchFormInputValue,
          handleSubmitSearchMoviesForm }}>
      <MenuBurgerNavigationContext.Provider value={{ menuBurgerOpened, handleOpenMenuBurger }}>

        <Switch>
          <Route exact path='/'>
            {/* <Header/> */}
            {/* <Main/> */}
            {/* <NotFoundPage/> */}
          </Route>

          <Route  path='/movies'>
            <Movies loadMore={ loadMoreMovies }/>
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
      </SearchMoviesFormContext.Provider>
      </AllMoviesContext.Provider>
      </LoggedInContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
