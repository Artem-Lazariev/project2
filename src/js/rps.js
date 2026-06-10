// Функція рандому (повертає 1, 2 або 3)
function num() {
  return Math.floor(Math.random() * 3) + 1;
}

let pick = 1;
let output = document.getElementById('rps__output');
let result = document.getElementById('rps__comp');
let wins = 0;
let lose = 0;

// Важливо: порядок елементів має збігатися з порядком кнопок в HTML:
// 1 - Камінь, 2 - Ножиці, 3 - Папір
const names = ["камінь", "ножиці", "папір"];

function pickwiner() {
  let numm = num();
  
  // Виводимо вибір комп'ютера
  result.innerHTML = "Варіант комп’ютера: " + names[numm - 1];

  if (numm === pick) {
    // Нічия
    output.innerHTML = 'Нічия!';
    output.className = "rps__neutral"; 
  } else if (
    (pick === 1 && numm === 2) || // Камінь б'є Ножиці
    (pick === 2 && numm === 3) || // Ножиці ріжуть Папір
    (pick === 3 && numm === 1)    // Папір обгортає Камінь
  ) {
    // Виграв гравець
    output.innerHTML = 'Ви виграли раунд!';
    output.className = "rps__green";
    wins += 1;
  } else {
    // Виграв комп'ютер
    output.innerHTML = 'Комп’ютер виграв раунд!';
    output.className = "rps__red";
    lose += 1;
  }

  // Оновлення рахунку на сторінці
  document.getElementById('rps__wins').innerHTML = `Ви - ${wins}`;
  document.getElementById('rps__loses').innerHTML = `Комп’ютер - ${lose}`;
}

// ВИПРАВЛЕНО: міняємо селектор, щоб вибирати саме кнопки всередині списку
let buttons = document.querySelectorAll('.rps__list button');

buttons.forEach((button, index) => {
  button.addEventListener('click', function () {
    pick = index + 1; // Записуємо 1, 2 або 3 залежно від натиснутої кнопки
    pickwiner();
  });
});
