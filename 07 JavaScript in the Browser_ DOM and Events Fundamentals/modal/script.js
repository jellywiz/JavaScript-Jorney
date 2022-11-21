'use strict';

const btnsOpenModel = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const bntCloseModel = document.querySelector('.close-modal');
const closeModel = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener('click', openModal);
  //   btnsOpenModel[i].addEventListener('click', () => {
  //     modal.classList.remove('hidden');
  //     overlay.classList.remove('hidden');
  //   });
}

bntCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
// bntCloseModel.addEventListener('click', () => {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', () => {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

document.addEventListener('keydown', e => {
  //   console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
