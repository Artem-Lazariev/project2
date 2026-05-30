const inputsRef = document.querySelectorAll('.maxnumber__input'); 
const textRef = document.querySelector('.maxnumber__number');

document.addEventListener('keydown', evt => {
  if (evt.code === 'Enter') {
    const values = Array.from(inputsRef, inp => Number(inp.value));
    const maxNumber = Math.max(...values);
    textRef.textContent = maxNumber;
  }
});