let width = 72;
let height = 24;

let ch = 0;
let srow = "";
let score = 0;
let yPos = 0;
let velocity = 0;
let gravity = 0.5; // Зменшено для більш плавного та приємного стрибка
let jumping = false;

let obstacleX = 70;
let gameOver = false;

let dinoPixels = new Set();
let obstaclePixels = new Set();

// ---------------- GRID ----------------
function step() {
  if (ch >= height) {
    document.getElementById("target1").innerHTML = srow;
    document.getElementById("target2").style.display = "none";
    setInterval(gameLoop, 50);
    return;
  }

  let row = "";
  let cw = 0;

  while (cw < width) {
    row += `<div class="dot" id="x:${cw}_y:${ch}"></div>`;
    cw++;
  }

  srow += `<div class="row">${row}</div>`;
  ch++;

  setTimeout(step, 1);
  score += 1
  //document.getElementById("score").innerHTML = score;
}

// ---------------- CLEAR ----------------
function clearAll() {
  dinoPixels.clear();
  obstaclePixels.clear();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const el = document.getElementById(`x:${x}_y:${y}`);
      if (el) el.classList.remove("dot_A", "obstacle");
    }
  }
}

// ---------------- DINO ----------------
function paint(x, y) {
  const el = document.getElementById(`x:${x}_y:${y}`);
  if (el) el.classList.add("dot_A");
  dinoPixels.add(`${x}_${y}`);
}
function makedino(offsetY = 0) {
  // 14 — ідеальна висота для спавну. Спрайт має висоту 8 пікселів.
  // 14 + 8 = 22. Отже, лапи динозаврика стоятимуть чітко на лінії y = 21, як і кактус!
  let baseY = 14 - offsetY;

  let sprite = [
    "-----####----",
    "----##-###---",
    "----#####----",
    "----####-----",
    "----####-----",
    "--######-----",
    "-#######-----",
    "########-----",
    "--##--##-----",
    "--##--##-----"
  ];

  for (let y = 0; y < sprite.length; y++) {
    for (let x = 0; x < sprite[y].length; x++) {
      if (sprite[y][x] === "#") {
        paint(x + 5, y + baseY);
      }
    }
  }
}

// ---------------- OBSTACLE ----------------
function drawObstacle() {
  // Твій маленький кактус
  for (let y = 17; y < 25; y++) {
    addPixel(obstacleX, y);
  }

  addPixel(obstacleX - 1, 19);
  addPixel(obstacleX - 1, 20);

  addPixel(obstacleX + 1, 18);
  addPixel(obstacleX + 1, 19);
}

function addPixel(x, y) {
  const el = document.getElementById(`x:${x}_y:${y}`);
  if (el) {
    el.classList.add("obstacle");
    obstaclePixels.add(`${x}_${y}`);
  }
}

// ---------------- COLLISION ----------------
function checkCollision() {
  for (let p of dinoPixels) {
    if (obstaclePixels.has(p)) {
      gameOver = true;
      alert("💀 Game Over");
      window.location = "../index.html";
      return;
    }
  }
}

// ---------------- GAME LOOP ----------------
function gameLoop() {
  if (gameOver) return;

  // Очищаємо поле ПЕРЕД розрахунками нового кадру, щоб нічого не дублювалося
  clearAll();

  // Фізика стрибка
  if (jumping) {
    velocity -= gravity;
    yPos += velocity;

    if (yPos <= 0) {
      yPos = 0;
      velocity = 0;
      jumping = false;
    }
  }

  // Рух перешкоди
  obstacleX -= 2;
  if (obstacleX < 0) {
    obstacleX = 70;
  }

  // Викликаємо малювання. Math.round робить рух у піксельній сітці плавним
  makedino(Math.round(yPos));
  drawObstacle();
  checkCollision();
}

// ---------------- JUMP ----------------
function jump() {
  if (jumping) return;

  jumping = true;
  velocity = 3.5; // Твій ідеальний стрибок посередині між 4 і 5
}

// ---------------- INPUT ----------------
document.addEventListener("keydown", (e) => {
  if (e.code !== "Space") return;
  e.preventDefault(); // Запобігає прокручуванню сторінки вниз при натисканні пробілу
  jump();
});

// ---------------- START ----------------
document.getElementById("target2").addEventListener("click", () => {
  step();

})