<<<<<<< HEAD
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
=======
const ref = {
  modalEl: document.querySelector('div[data-modal]'),
  openBtnEl: document.querySelector('button[data-modal-open]'),
  closeBtnEl: document.querySelector('button[data-modal-close]'),
};
// Object.values(ref).forEach(el => console.log(el));

const onClick = e => ref.modalEl.classList.toggle('is-hidden');

ref.openBtnEl.addEventListener('click', onClick);
ref.closeBtnEl.addEventListener('click', onClick);
>>>>>>> ff841ac4afd56a437eaf1b057636f2d5bfc30c89
