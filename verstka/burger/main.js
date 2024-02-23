const open = document.querySelector('.menu__burger-btn');
const header = document.querySelector('.header');

open.addEventListener('click', () => {
    header.classList.toggle('open');
})