import './js/header';
import './js/number';
import './js/maxnumber';
import './js/rps.js';
import './js/calc';
import './js/football.js';
const inputsRef = document.querySelectorAll('input[type=number]');

inputsRef.forEach(input => {
  input.addEventListener('input', (evt) => {
    console.log(typeof(evt.currentTarget.value));
    
  });
});