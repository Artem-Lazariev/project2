import s1 from "../img/einstein.jpg"
import s2 from "../img/newton.jpg"
import s3 from "../img/galileo.jpg"
import s4 from "../img/marie.webp"
import s5 from "../img/kepler.webp"
import s6 from "../img/nicolaus.webp"
import s7 from "../img/planck.jpeg"
import s8 from "../img/blodgett.jpg"
import s9 from "../img/lovelace.jpg"
import s10 from "../img/sarah.png"
import s11 from "../img/meitner.jpg"
import s12 from "../img/hanna.jpg"

// Змінили селектор під нову текстову сітку
const scientists__grid = document.querySelector('#scientists__grid');
const scientists__list = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12];


const scientists = [
  { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
  { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
  { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
  { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
  { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
  { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
  { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
  { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
  { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
  { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
  { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
  { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
];

function filterScientists(filter) {
  switch (filter) {
    case 1: // 19 століття (з 1801 по 1900 рік)
      return scientists.filter(function(e) {
        return e.born >= 1801 && e.born <= 1900;
      });

    case 2: // Алфавітний порядок
      return [...scientists].sort(function(a, b) {
        return a.surname.toLowerCase().localeCompare(b.surname.toLowerCase());
      });

    case 3: // Сортування за віком (прожиті роки)
      return [...scientists].sort(function(a, b) {
        return (b.dead - b.born) - (a.dead - a.born);
      });

    case 4: // Хто народився найпізніше
      const latest = scientists.reduce(function(max, obj) {
        return obj.born > max.born ? obj : max;
      });
      return [latest];

    case 5: // Рік народження Ейнштейна
      return scientists.filter(function(e) {
        return e.name === "Albert" && e.surname === "Einstein";
      });

    case 6: // Прізвища на літеру "C" (враховуємо укр "С" та англ "C")
      return scientists.filter(function(e) {
        return e.surname.startsWith("С") || e.surname.startsWith("C");
      });

    case 7: // Видалити тих, чиє ім'я починається на "A" (укр "А" та англ "A")
      return scientists.filter(function(e) {
        return !e.name.startsWith("А") && !e.name.startsWith("A");
      });

    case 8: // Прожив найдовше і найменше
      const sortedByAge = [...scientists].sort(function(a, b) {
        return (b.dead - b.born) - (a.dead - a.born);
      });
      return [sortedByAge[0], sortedByAge[sortedByAge.length - 1]];

    case 9: // Однакове перші літери імені та прізвища
      return scientists.filter(function(e) {
        return e.name[0].toLowerCase() === e.surname[0].toLowerCase();
      });

    default:
      return scientists;
  }
}

function clearScientists() {
  scientists__grid.innerHTML = '';
}

// ПЕРЕПИСАНО: Текстовий вивід карток без зображень
function createScientists(array) {
  clearScientists();

  const htmlArray = array.map(function (e) {
    return `
      <li class="scientist__card">
        <img
          class="scientist__card__img"
          src="${scientists__list[e.id - 1]}"
          alt="${e.name}"
        >

        <p class="scientist__card__name">
          ${e.name} ${e.surname}
        </p>

        <p class="scientist__card__years">
          ${e.born}-${e.dead}
        </p>
      </li>
    `;
  });

  scientists__grid.innerHTML = htmlArray.join('');
}


// Початковий рендер усіх вчених
createScientists(scientists);

// Обробник кліків на кнопки
for (let i = 1; i < 10; i++) {
  let btn = document.getElementById("team_" + i)
  btn.addEventListener("click", function () {
    createScientists(filterScientists(i));
  });
}