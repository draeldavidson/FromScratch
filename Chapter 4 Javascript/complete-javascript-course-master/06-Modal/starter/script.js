'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// CLOSE MODAL FUNCTION
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log('Modal Closed');
};

// OPEN MODAL FUNCTION
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log('Modal Open');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

//CLOSE MODAL WITH X
btnCloseModal.addEventListener('click', closeModal);

//CLOSE WITH OVERLAY
overlay.addEventListener('click', closeModal);

//CLOSE WITH ESCAPE KEY
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
