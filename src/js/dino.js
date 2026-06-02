const dinoRef = document.getElementById('dino');
const cactusRef = document.getElementById('cactus');
const btnRef = document.querySelector('.dino__btn');
btnRef.addEventListener('click', evt => {
cactusRef.style.display = "block"
  const jump = () => {
    if (dinoRef.classList != 'jump') {
      dinoRef.classList.add('jump');

      setTimeout(function () {
        dinoRef.classList.remove('jump');
      }, 300);
    }
  };

  let isAlive = setInterval(() => {
    let dinoTop = parseInt(
      window.getComputedStyle(dinoRef).getPropertyValue('top')
    );

    let cactusLeft = parseInt(
      window.getComputedStyle(cactusRef).getPropertyValue('left')
    );

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('Схоже ви натрапили на кактус!');
        location.reload();
    }
  }, 10);

document.addEventListener('keydown', evt => {
    if (evt.code === 'ArrowUp' || evt.code === 'Space') {
    evt.preventDefault();
    jump();
  }
});
});
