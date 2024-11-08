// navbar togglers

const navMenu = document.querySelector("#nav-menu");
const toggleMenu = document.querySelector("#menu-toggle");
const closeMenu = document.querySelector("#close-menu");
const logo = document.querySelector("#logo");



toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  toggleMenu.classList.add('hidden');
  logo.classList.add('hidden');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.add('hidden');
  toggleMenu.classList.toggle('hidden');
  logo.classList.toggle('hidden');
});
