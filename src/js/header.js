import moon from '/img/moon.webp';
import sun from '/img/sun.webp';
const btnRef = document.querySelector('.header__btn');
const listRef = document.querySelector('.header__interactive');
const switchRef = document.querySelector('.header__switcher');
const rangeRef = document.querySelector('.header__range');
const iconRef = document.querySelector('.header__theme');
const itemRef = document.querySelectorAll('.header__items');
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

const AlwaysVisibleSection = "title"

function showCategory(category) {
  const sections = document.querySelectorAll('section');

  const filtered = games.filter(game => game.category === category);

  sections.forEach(section => {
    const sectionCategory = section.dataset.category;
    if (section.classList.contains(AlwaysVisibleSection)) {
      section.style.display = '';
      return;
    }

    if (filtered.some(game => game.category === sectionCategory)) {
      section.style.display = '';
    } else {
      section.style.display = 'none';
    }
  });
}

document.querySelectorAll('.header__text').forEach(btn => {
  btn.addEventListener('click', () => {
    itemRef.forEach((item) => item.classList.remove('isActive'));
    btn.closest('.header__items').classList.add('isActive');
    const category = btn.dataset.category;
    showCategory(category);
  });
});
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