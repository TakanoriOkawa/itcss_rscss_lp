document.querySelector('.js-backTop').addEventListener('click', scrollTop);

function scrollTop() {
  document.querySelector('.header-container').scrollIntoView({
    behavior: 'smooth'
  });
}
