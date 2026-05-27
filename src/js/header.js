import moon from '/img/moon.webp';
import sun from '/img/sun.webp';
const btnRef = document.querySelector('.header__btn');
const listRef = document.querySelector('.header__interactive');
const switchRef = document.querySelector('.header__switcher');
const rangeRef = document.querySelector('.header__range');
const iconRef = document.querySelector('.header__theme');
const games = [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',
  },
  {
    id: 2,
    name: 'Вгадай число',
    category: 'numerical',
  },
  {
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    category: 'game',
  },
  {
    id: 4,
    name: 'Калькулятор',
    category: 'numerical',
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    category: 'numerical',
  },
  {
    id: 6,
    name: 'Google динозаврик',
    category: 'game',
  },
  {
    id: 7,
    name: 'Футбол',
    category: 'game',
  },
  {
    id: 8,
    name: 'Найбільше число',
    category: 'numerical',
  },
  {
    id: 9,
    name: 'Наша команда',
    category: 'acquaintance',
  },
  {
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',
  },
];
btnRef.addEventListener('click', evt => {
  listRef.classList.toggle('open');
});
switchRef.addEventListener('click', evt => {
  rangeRef.classList.toggle('active');
  if (rangeRef.classList.contains('active')) {
    iconRef.src = moon;
  } else {
    iconRef.src = sun;
  }
});