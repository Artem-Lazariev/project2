const inputOneRef = document.querySelector('#num1');
const inputTwoRef = document.querySelector('#num2');
const btnPlusRef = document.querySelector('#plus');
const btnMinusRef = document.querySelector('#minus');
const btnUmltiplateRef = document.querySelector('#umltiplate');
const btnDivadetRef = document.querySelector('#divadet');
const btnResRef = document.querySelector('#res');
const textRef = document.querySelector('.calc__result');

let sign = "";

btnResRef.addEventListener("click", (evt) => {
    if (sign === '+') {
      textRef.textContent = Number(inputOneRef.value) + Number(inputTwoRef.value);
    } else if (sign === '-') {
      textRef.textContent = Number(inputOneRef.value) - Number(inputTwoRef.value);
    } else if (sign === '*') {
      textRef.textContent = Number(inputOneRef.value) * Number(inputTwoRef.value);
    } else if (sign === '/') {
      textRef.textContent = Number(inputOneRef.value) / Number(inputTwoRef.value);
      if (Number(inputTwoRef.value) === 0) {
        textRef.textContent = 'На нуль ділити не можна';
      }
    } else{
      textRef.textContent = 'Помилка';
    }
})

btnPlusRef.addEventListener('click', evt => {
  sign = '+';
});

btnUmltiplateRef.addEventListener('click', evt => {
  sign = '*';
});

btnMinusRef.addEventListener('click', evt => {
  sign = '-';
});

btnDivadetRef.addEventListener('click', evt => {
  sign = '/';
});
