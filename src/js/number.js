const nunRef = document.querySelector('.number__input');
const btnRef = document.querySelector('.number__button');
const textRef = document.querySelector('.number__text');
btnRef.addEventListener('click', (event)=>{
    let randomNum = Math.floor(Math.random() * 10);
    if (nunRef.value == randomNum) {
        textRef.textContent = `Вітаю, ви вгадали число! ${randomNum}`;
        textRef.style.color = 'green';
    } else {
        textRef.textContent = `Ви програли, комп’ютер загадав ${randomNum}`;
        textRef.style.color = 'red';
    }

})







