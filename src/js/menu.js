const textRef = document.querySelector(".header__name");
const closeBtnRef = document.querySelector(".menu__button");
const backdropRef = document.querySelector(".backdrops");
const btnRef = document.querySelector(".menu__btn");
const inputRef = document.querySelector(".menu__input");

document.addEventListener("keydown", onEscCloseModal);

btnRef.addEventListener("click", () => {
  let name = inputRef.value;
  if (name.length > 10) {
    name = name.slice(0, 10) + "...";
  }

  textRef.textContent = name;
  closeModal();
});

closeBtnRef.addEventListener("click", closeModal);

backdropRef.addEventListener("click", (evt) => {
  if (evt.target === evt.currentTarget) {
    closeModal();
  }
});

function onEscCloseModal(evt) {
  if (evt.key === "Escape") {
    closeModal();
  }
}

function closeModal() {
  backdropRef.style.display = "none";
  document.removeEventListener("keydown", onEscCloseModal);
}