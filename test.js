const miniMenu = document.querySelector('.mini-menu');
const navMenu = document.querySelector('.nav-menu');

miniMenu.addEventListener('click', mobileMenu);

function mobileMenu() {
    miniMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
}