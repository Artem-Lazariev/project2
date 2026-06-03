const inpRef = document.querySelector(".time__input");
const btnRef = document.querySelector(".time__btn");
const textRef = document.querySelector(".time__text");


btnRef.addEventListener("click", (event) => {
  let totalSeconds = Number(inpRef.value);

  if (isNaN(totalSeconds) || totalSeconds < 0) {
    textRef.textContent = "Введіть коректне число";
    return;
  }

  const days = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;

  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  textRef.textContent = `${days} дн. ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
});
