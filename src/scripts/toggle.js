document
  .querySelector('.js-navigation-toggle')
  .addEventListener('click', navToggle);

function navToggle() {
  document.querySelector('.js-navigation').classList.toggle('-is-open');
}
