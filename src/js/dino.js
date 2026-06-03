const dinoRef = document.getElementById('dino');
const cactusRef = document.getElementById('cactus');
const btnRef = document.querySelector('.dino__btn');
function getScore() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('score') || 0;
}
console.log(getScore());// console is / on vite
const hScore = getScore();

let score = 0;
document.getElementById("dino__best").innerHTML ="HI: " + ((hScore - (hScore % 10))/10).toString().padStart(6, "0");
btnRef.addEventListener('click', evt => {
cactusRef.style.display = "block"
  const jump = () => {
    if (dinoRef.classList != 'jump') {
      dinoRef.classList.add('jump');

      setTimeout(function () {
        dinoRef.classList.remove('jump');
      }, 500);
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
      window.location.href = window.location.pathname + '?score=' + score;
    }
    score++;

    document.getElementById("dino__score").innerHTML = ((score - (score % 10))/10).toString().padStart(6, "0");
  }, 10);

document.addEventListener('keydown', evt => {
    if (evt.code === 'ArrowUp' || evt.code === 'Space') {
    evt.preventDefault();
    jump();
  }
});
});
