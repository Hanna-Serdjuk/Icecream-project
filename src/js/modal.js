(() => {
  const refs = {
    openModalBtn: document.querySelector('.mobile-menu-btn'),
    closeModalBtn: document.querySelector('.modal__btn-close'),
    modal: document.querySelector('.mob-modal-wind'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('.header-btn'),
    closeModalBtn: document.querySelector('.modal__btn modal'),
    modal: document.querySelector('.modal-wind'),
  };
  
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();