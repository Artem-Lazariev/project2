function num () {return Math.floor(Math.random() * 3) + 1}

let pick = 1;
let output = document.getElementById('output');
function pickwiner() {
  let numm = num();
  if (numm === pick) {
    output.innerHTML = 'draw';
  } else if (
    (pick === 1 && numm === 2) ||
    (pick === 2 && numm === 3) ||
    (pick === 3 && numm === 1)
  ) {
    output.innerHTML = 'you win';
  } else {
    output.innerHTML = 'you lose';
  }
}
let buttons = document.querySelectorAll('.rps-buttons');
buttons.forEach((button,index) => button.addEventListener('click', function () {pick=index + 1; pickwiner()}));
