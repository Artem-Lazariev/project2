const inpOneRef = document.querySelector("#num1");
const inpTwoRef = document.querySelector('#num2');
const inpThreeRef = document.querySelector('#num3');
const textRef = document.querySelector('.maxnumber__number');

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Enter') {
    const maxNumber = Math.max(
      inpOneRef.value,
      inpTwoRef.value,
      inpThreeRef.value
    );
    textRef.textContent = maxNumber;
  } else {
    return;
  }
});
