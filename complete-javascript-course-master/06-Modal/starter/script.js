'use strict';

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const buttonCloseModal = document.querySelector('.close-modal');
// const buttonsShowModal = document.querySelectorAll('.show-modal');
// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
// const openModal = function () {
//   console.log('Button Clicked');
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };
// for (let i = 0; i < buttonsShowModal.length; i++) {
//   buttonsShowModal[i].addEventListener('click', openModal);
// }
// buttonCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

const modal1 = document.querySelector('.modal');
const overlay1 = document.querySelector('.overlay');
const buttonCloseModal1 = document.querySelector('.close-modal');
const buttonsShowModal1 = document.querySelectorAll('.show-modal');
const openModal1 = function () {
  modal1.classList.remove('hidden');
  overlay1.classList.remove('hidden');
};
for (let i = 0; i < buttonsShowModal1.length; i++)
  buttonsShowModal1[i].addEventListener('click', openModal1);

const closeModal1 = function () {
  modal1.classList.add('hidden');
  overlay1.classList.add('hidden');
};
buttonCloseModal1.addEventListener('click', closeModal1);
overlay1.addEventListener('click', closeModal1);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal1.classList.contains('hidden')) {
    {
      closeModal1();
    }
  }
});
