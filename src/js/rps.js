function num () {return Math.floor(Math.random() * 3) + 1}

let pick = 1;
let output = document.getElementById('rps__output');
let result = document.getElementById('rps__comp');
let wins = 0
let lose = 0
const names = ["камінь", "папір", "ножиці"];
function pickwiner() {
  let numm = num();
  result.innerHTML = "Варіант комп’ютера  " + names[numm - 1];
  if (numm === pick) {
    output.innerHTML = 'нічия';
    output.classList = "rps__green"
  } else if (
    (pick === 1 && numm === 2) ||
    (pick === 2 && numm === 3) ||
    (pick === 3 && numm === 1)
  ) {
    output.innerHTML = 'Ви виграли раунд!';
    output.classList = "rps__green"
    wins += 1
  } else {
    output.innerHTML = 'Комп’ютер виграв раунд!';
    output.classList = "rps__red"
    lose += 1
  }
  document.getElementById('rps__wins').innerHTML = `Ви - ${wins}`;
  document.getElementById('rps__loses').innerHTML = `Комп’ютер - ${lose}`;
}
let buttons = document.querySelectorAll('.rps__list');
buttons.forEach((button,index) => button.addEventListener('click', function () {pick=index + 1; pickwiner()}));
