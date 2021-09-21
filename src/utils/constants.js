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

export {
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
  PORTFOLIO_ITEMS
}