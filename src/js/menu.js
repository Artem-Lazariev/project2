const textRef = document.querySelector(".header__name");
const closeBtnRef = document.querySelector(".menu__button");
const backdropRef = document.querySelector(".backdrops");
const btnRef = document.querySelector(".menu__btn");
const inputRef = document.querySelector(".menu__input");
btnRef.addEventListener("click", (evt) => {

    closeModal();
textRef.textContent = inputRef.value;


});

closeBtnRef.addEventListener("click", closeModal);

backdropRef.addEventListener("click", (evt) => {
  if (evt.target === evt.currentTarget) {
    closeModal();
  }
});

const onEscCloseModal = (evt) => {

  if (evt.key === "Escape") {
    closeModal();
  }
};

function closeModal() {
  backdropRef.style.display = "none";
    document.removeEventListener("keydown", onEscCloseModal);
}