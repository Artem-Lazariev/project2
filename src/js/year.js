const inputRef = document.querySelector('.year__input');
const btnRef = document.querySelector('.year__btn');
const textRef = document.querySelector('.year__text');

btnRef.addEventListener('click', (event) => {
  const year = Number(inputRef.value);

  const isLeap = (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);

  if (isLeap) {
    textRef.textContent = 'Ви народилися у високосний рік!';
    textRef.style.color = 'green';
  } else {
    textRef.textContent = 'Ви народилися не у високосний рік!';
    textRef.style.color = 'red';
  }
});


