const ball = document.getElementById('f__ball');
const field = document.getElementById('f__field');

field.addEventListener('click', (event) => {
  const fieldRect = field.getBoundingClientRect();

  const ballSize = ball.offsetWidth;

  let x = event.clientX - fieldRect.left;
  let y = event.clientY - fieldRect.top;

  x -= ballSize / 2;
  y -= ballSize / 2;

  x = Math.max(0, Math.min(x, fieldRect.width - ballSize));
  y = Math.max(0, Math.min(y, fieldRect.height - ballSize));

  ball.style.transform = `translate(${x}px, ${y}px)`;
});