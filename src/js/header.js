import moon from '/img/moon.webp';
import sun from '/img/sun.webp';
import imgRef from '/img/arrow.webp';
import imgColorRef from '/img/arrow-color.png';
import logoRef from '/img/logo.png';
import logoColorRef from '/img/logo-color.png';
const btnRef = document.querySelector('.header__btn');
const listRef = document.querySelector('.header__interactive');
const switchRef = document.querySelector('.header__switcher');
const rangeRef = document.querySelector('.header__range');
const iconRef = document.querySelector('.header__theme');
const imgsRef = document.querySelector('.header__strilka');
const itemRef = document.querySelectorAll('.header__items');
const textRef = document.querySelectorAll('.header__text');
const logosRef = document.querySelector(".header__icon");
const allTextRef = document.querySelectorAll('h2');
const mainText = document.querySelector('h1');
const linkRef = document.querySelectorAll('a');
const pTextRef = document.querySelectorAll('p');
const spanText = document.querySelectorAll('span');
const boxRef = document.querySelector('.box');
const headerRef = document.querySelector('.header');
const footerRef = document.querySelector('.footer');
const mainRef = document.querySelector('main');
const svgRef = document.querySelectorAll('svg');
const buttonRef = document.querySelectorAll('button');
const textRpsRef = document.querySelector('.rps__comp');
const textCalcRef = document.querySelector('.calc__result');
const searchRef = document.querySelectorAll('#search');
const logoerRef = document.querySelector('.footer__icon');
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

const AlwaysVisibleSection = 'title';

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

textRef.forEach((btn, index, arr) => {
  btn.addEventListener('click', evt => {
    itemRef.forEach(item => {
      item.classList.remove('isActive');
      const textEl = item.querySelector('.header__text');
      if (textEl) {
        textEl.style.backgroundColor = '';
        textEl.style.borderRadius = '';
      }
    });
    const parent = btn.closest('.header__items');
    parent.classList.add('isActive');

    if (rangeRef.classList.contains('active')) {
        listRef.style.backgroundColor = 'black'; 
        listRef.style.border = '1px solid white';
        listRef.style.borderTop = 'none';
      btn.style.backgroundColor = '#2b2b2b';
      btn.style.color = 'white';
    } else {
      listRef.style.backgroundColor = 'white'; 
      listRef.style.border = '1px solid black';
      listRef.style.borderTop = 'none';
      btn.style.backgroundColor = '#F1F1F1';
      btn.style.color = 'black';
    }
    if (btn === arr[arr.length - 1]) {
      btn.style.borderRadius = '0 0 20px 20px';
    }

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
    imgsRef.src = imgColorRef;
    logosRef.src = logoColorRef;
    logoerRef.src = logoColorRef;
    mainText.style.color = 'white';
    pTextRef.forEach(p => (p.style.color = 'white'));
    allTextRef.forEach(h2 => (h2.style.color = 'white'));
    linkRef.forEach(a => (a.style.color = 'white'));
    spanText.forEach(span => (span.style.color = 'white'));
    svgRef.forEach(svg => (svg.style.fill = 'white'));
    buttonRef.forEach(btn => {
      btn.style.color = 'white';
    });
    searchRef.forEach(search => {
      search.style.fill = 'white';
    });
    textRef.forEach(text => {
      text.style.color = 'white';
      text.style.backgroundColor = 'black';
    });
    textRef[textRef.length - 1].style.borderRadius = '0 0 20px 20px';
    btnRef.style.backgroundColor = 'transparent';
    btnRef.style.color = 'white';
    headerRef.style.backgroundColor = '#2b2b2b';
    boxRef.style.backgroundColor = '#2b2b2b';
    footerRef.style.backgroundColor = '#2b2b2b';
    mainRef.style.backgroundColor = '#464646';
    textCalcRef.style.color = '#7E7E7E';
    listRef.style.border = '1px solid white';
    listRef.style.borderTop = 'none';
  } else {
    iconRef.src = sun;
    imgsRef.src = imgRef;
    logosRef.src = logoRef;
    logoerRef.src = logoRef;
    mainText.style.color = 'black';
    pTextRef.forEach(p => (p.style.color = 'black'));
    allTextRef.forEach(h2 => (h2.style.color = 'black'));
    linkRef.forEach(a => (a.style.color = 'black'));
    spanText.forEach(span => (span.style.color = 'black'));
    svgRef.forEach(svg => (svg.style.fill = 'black'));
    buttonRef.forEach(btn => {
      btn.style.color = 'white';
    });
    textRef.forEach(text => {
      text.style.color = 'black';
      text.style.backgroundColor = 'white';
    });
    btnRef.style.color = 'black';
    headerRef.style.backgroundColor = 'white';
    boxRef.style.backgroundColor = 'white';
    footerRef.style.backgroundColor = 'white';
    mainRef.style.backgroundColor = '#EEE';
    textRpsRef.style.color = 'white';
    textCalcRef.style.color = '#7E7E7E';
    searchRef.forEach(search => {
      search.style.fill = 'white';
    });
    listRef.style.border = '1px solid black';
    listRef.style.borderTop = 'none';
  }
});
