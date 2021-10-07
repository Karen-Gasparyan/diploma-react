// RegExp
const EMAIL_RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// api
const MOVIES_API = 'https://api.nomoreparties.co/beatfilm-movies';
// navigations menu
const HOME_PAGE = 'Главная';
const MOVIES_PAGE = 'Фильмы';
const FAVORITE_MOVIES_PAGE = 'Сохранённые фильмы';
const ACCOUNT_PAGE = 'Аккаунт';
// title's
const MAIN_TITLE = 'Учебный проект студента факультета Веб-разработки'; // h1
// promo
const PROMO_ABOUT = 'О проекте';
const PROMO_TECHNOLOGIES = 'Технологии';
const PROMO_STUDENT = 'Студент';
// techs
const TECHS_ITEM_DATA = [
  { id: 1, title: 'HTML', link: 'https://developer.mozilla.org/ru/docs/Web/HTML' },
  { id: 2, title: 'CSS', link: 'https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics' },
  { id: 3, title: 'JS', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript' },
  { id: 4, title: 'React', link: 'https://developer.mozilla.org/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started' },
  { id: 5, title: 'Git', link: 'https://developer.mozilla.org/ru/docs/Learn/Tools_and_testing/GitHub' },
  { id: 6, title: 'Express.js', link: 'https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs' },
  { id: 7, title: 'mongoDB', link: 'https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/mongoose' }
];
// about me
const STUDENT_NAME = 'Виталий';
const STUDENT_ABOUT = 'Фронтенд-разработчик, 30 лет';
const STUDENT_BIOGRAPHY = 'Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.';
const STUDENT_SOCIAL_NETWORKS = [
    { id: 1, title: 'Яндекс.Практикум', link: 'https://practicum.yandex.ru' },
    { id: 2, title: 'Facebook', link: 'https://m.facebook.com/login/?locale2=ru_RU' },
    { id: 3, title: 'Github', link: 'https://github.com/Karen-Gasparyan' }
];
// portfolio
const PORTFOLIO_ITEMS = [
  { id: 1, title: 'Статичный сайт', link: '' },
  { id: 2, title: 'Адаптивный сайт', link: '' },
  { id: 3, title: 'Одностраничное приложение', link: '' }
];
// auth login
const LOGIN_TITLE = 'Рады видеть!';
const LOGIN_BUTTON_VALUE = 'Войти';
// auth register
const REGISTER_TITLE = 'Добро пожаловать!';
const REGISTER_BUTTON_VALUE = 'Зарегистрироваться';
// auth form's
const AUTH_INPUT_DATA = [
  { label: 'Имя', name: 'name', type: 'text', minLength: 2, maxLength: 30 },
  { label: 'E-mail', name: 'email', type: 'email' },
  { label: 'Пароль', name: 'password', type: 'password', minLength: 8 }
];
// edit popup
const EDIT_POPUP = {
  EDIT_USER_PROFILE: {
    formName: 'edit-user-profile',
    submitButtonValue: 'Сохранить',
    labelValue: { name: 'Имя', email: 'E-mail' },
    htmlFor: { name: 'name', email: 'email' },
    inputTypeValue: { text: 'text', email: 'email' },
    clearButtonName: { name: 'name', email: 'email' },
    minLength: { name: 2, email: 5 },
    maxLength: { name: 30, email: 100 }
  }
};
// edit profile data validation
const EDIT_PROFILE_DATA_VALIDATION = {
  name: { minLength: 'имя должно содержать не менее 2 символов' },
  email: { incorrectEmail: 'некорректный E-mail' },
  default: 'поле не может быть пустым'
};
// search movies
const SEARCH_PLACEHOLDER = 'Фильм';
const FILTERCHECKBOX_VALUE = 'Короткометражки';

export {
  // RegExp
  EMAIL_RegExp,
  // api
  MOVIES_API,
  // navigations menu
  HOME_PAGE,
  MOVIES_PAGE,
  FAVORITE_MOVIES_PAGE,
  ACCOUNT_PAGE,
  // title's
  MAIN_TITLE,
  // promo
  PROMO_ABOUT,
  PROMO_TECHNOLOGIES,
  PROMO_STUDENT,
  // techs
  TECHS_ITEM_DATA,
  // about me
  STUDENT_NAME,
  STUDENT_ABOUT,
  STUDENT_BIOGRAPHY,
  STUDENT_SOCIAL_NETWORKS,
  // portfolio
  PORTFOLIO_ITEMS,
  // auth login
  LOGIN_TITLE,
  LOGIN_BUTTON_VALUE,
  // auth register
  REGISTER_TITLE,
  REGISTER_BUTTON_VALUE,
  // auth form's
  AUTH_INPUT_DATA,
  // edit popup
  EDIT_POPUP,
  // edit profile data validation
  EDIT_PROFILE_DATA_VALIDATION,
  // search movies
  SEARCH_PLACEHOLDER,
  FILTERCHECKBOX_VALUE
};