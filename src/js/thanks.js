const openBtnRef = document.querySelector(".footer__btn");
const closeBtnRef = document.querySelector(".thanks__btn");
const backdropRef = document.querySelector(".backdrop");

openBtnRef.addEventListener("click", openModal);

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

function openModal(evt) {
    evt.preventDefault();
  backdropRef.style.display = "flex";
  document.addEventListener("keydown", onEscCloseModal);
}

function closeModal() {
  backdropRef.style.display = "none";
    document.removeEventListener("keydown", onEscCloseModal);
    location.reload();
}