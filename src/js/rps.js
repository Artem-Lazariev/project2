// Функція рандому (від 1 до 3)
function num() {
  return Math.floor(Math.random() * 3) + 1;
}

let pick = 1;
let output = document.getElementById('rps__output');
let result = document.getElementById('rps__comp');
let wins = 0;
let lose = 0;

// Зверни увагу: порядок у масиві має збігатися з порядком кнопок в HTML!
// 1 - Камінь, 2 - Ножиці, 3 - Папір (відповідно до твоїх іконок в HTML)
const names = ["камінь", "ножиці", "папір"];

function pickwiner() {
  let numm = num();
  
  // Виводимо вибір комп'ютера
  result.innerHTML = "Варіант комп’ютера: " + names[numm - 1];

  if (numm === pick) {
    // Нічия
    output.innerHTML = 'Нічия!';
    output.className = "rps__neutral"; // Краще окремий клас для нічиєї
  } else if (
    (pick === 1 && numm === 2) || // Камінь б'є Ножиці
    (pick === 2 && numm === 3) || // Ножиці ріжуть Папір
    (pick === 3 && numm === 1)    // Папір обгортає Камінь
  ) {
    // Виграш гравця
    output.innerHTML = 'Ви виграли раунд!';
    output.className = "rps__green";
    wins += 1;
  } else {
    // Програш гравця
    output.innerHTML = 'Комп’ютер виграв раунд!';
    output.className = "rps__red";
    lose += 1;
  }

  // Оновлюємо рахунок на екрані
  document.getElementById('rps__wins').innerHTML = `Ви - ${wins}`;
  document.getElementById('rps__loses').innerHTML = `Комп’ютер - ${lose}`;
}

// Вибираємо саме кнопки всередині списку
let buttons = document.querySelectorAll('.rps__list button');

buttons.forEach((button, index) => {
  button.addEventListener('click', function () {
    pick = index + 1; // Отримуємо 1, 2 або 3
    pickwiner();
  });
});
