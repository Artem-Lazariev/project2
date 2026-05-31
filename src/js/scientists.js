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

const scientists__imgs = document.querySelector('.scientists__imgs');
const scientists__list = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12]
const scientists__filter = document.querySelectorAll('.scientists__button');
const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12
  }
];
function filterScientists(filter) {
  switch (filter) {
    case 1:
      return scientists.filter(function(e) {
        return e.born >= 1801 && e.born <= 1900;
      });

    case 2:
      return [...scientists].sort(function(a, b) {
        if (a.surname.toLowerCase() < b.surname.toLowerCase()) return -1;
        if (a.surname.toLowerCase() > b.surname.toLowerCase()) return 1;
        return 0;
      });

    case 3:
      return [...scientists].sort(function(a, b) {
        return (b.dead - b.born) - (a.dead - a.born);
      });

    case 4:
      const latest = scientists.reduce(function(max, obj) {
        return obj.born > max.born ? obj : max;
      });
      return [latest];

    case 5:
      return scientists.filter(function(e) {
        return e.name === "Albert" && e.surname === "Einstein";
      });

    case 6:
      return scientists.filter(function(e) {
        return e.surname.startsWith("С");
      });

    case 7:
      return scientists.filter(function(e) {
        return !e.name.startsWith("А");
      });

    case 8:
      const sortedByAge = [...scientists].sort(function(a, b) {
        return (b.dead - b.born) - (a.dead - a.born);
      });
      return [sortedByAge[0], sortedByAge[sortedByAge.length - 1]];

    case 9:
      return scientists.filter(function(e) {
        return e.name[0].toLowerCase() === e.surname[0].toLowerCase();
      });

    default:
      return scientists;
  }
}
function clearScientists() {
  scientists__imgs.innerHTML = '';
}
function createScientists(array) {
  clearScientists();
  const htmlArray = array.map(function(e) {
    // Використовуємо e.img для картинки і e.surname для альт-тексту
    return `<img class="scientists__imgs__img" src="${scientists__list[e.id - 1]}" alt="${e.surname}"/>`;
  });

  scientists__imgs.innerHTML = htmlArray.join('');
}
createScientists(scientists);
scientists__filter.forEach(function(e,i) {
  e.addEventListener('click', function() {
    createScientists(filterScientists(i + 1));
  });
})