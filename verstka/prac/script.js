const menuBtn = document.querySelector('.menu__btn'); 
const menuClose = document.querySelector('.menu__close'); 
const headerList = document.querySelector('.header__list');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', () => {
    headerList.classList.toggle('header__list--open');
    menuShadow.classList.toggle('menu--open');
});

menuClose.addEventListener('click', ()=> {
    headerList.classList.remove('header__list--open');
});