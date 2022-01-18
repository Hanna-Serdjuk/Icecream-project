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



window.addEventListener( "load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();

    const FD = new FormData( form );

    XHR.addEventListener( "load", function(event) {
      alert( event.target.responseText );
    } );

    XHR.addEventListener( "error", function( event ) {
      alert( 'Oops! Something went wrong.' );
    } );

    XHR.open( "POST", "https://example.com/cors.php" );

    XHR.send( FD );
  }

  const form = document.getElementById( "myForm" );

  form.addEventListener( "submit", function ( event ) {
    event.preventDefault();

    sendData();
  } );
} );