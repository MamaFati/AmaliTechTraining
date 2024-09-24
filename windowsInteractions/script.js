'use strict';
const showModal = document.querySelectorAll('.show-modal');
const model = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// showModel.addEventListener('click',function (){

// })
const openModal = () => {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const exitModal = () => {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
}
closeModal.addEventListener('click', exitModal);
overlay.addEventListener('click', exitModal);
document.addEventListener('keydown', function (e) {
  //   console.log(e);
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    exitModal();
  }
});
