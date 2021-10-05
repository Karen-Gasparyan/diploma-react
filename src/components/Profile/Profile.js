import React from 'react';
import { Link } from 'react-router-dom';

import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';

const Profile = ({ handleUserProfileEdit }) => {
  const { name, email } = React.useContext(CurrentUserContext);

  return (
    <>
      <Header/>
      <section className="profile">
        <div className="profile__content">
          <h2 className="profile__title">Привет, { name }</h2>
          <ul className="profile__data-list">
            <li className="profile__label">Имя</li>
            <li className="profile__data">{ name }</li>
          </ul>
          <ul className="profile__data-list">
            <li className="profile__label">E-mail</li>
            <li className="profile__data">{ email }</li>
          </ul>
        </div>

        <ul className="profile__items-list">
          <li className="profile__item">
            <button
              className="profile__edit-button"
              onClick={ handleUserProfileEdit }>
                Редактировать
            </button>
          </li>
          <li className="profile__item">
            <Link className="profile__signout-button" to='/'>Выйти из аккаунта</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Profile;