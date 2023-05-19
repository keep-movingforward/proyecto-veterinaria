window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scroll');
    } else {
      nav.classList.remove('scroll');
    }
  });

const logo = document.querySelector('.logo-nav');
const menu = document.querySelector('.menu');

logo.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});