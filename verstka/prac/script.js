const menuBtn = document.querySelector('.menu__btn'); 
const menuClose = document.querySelector('.menu__close'); 
const headerList = document.querySelector('.header__list');
const menuShadow = document.querySelector('.menu--close');

const masterBtn = document.querySelector('.master-class');
const reviewBtn = document.querySelector('.review');
const contactBtn = document.querySelector('.contact');
const reviews = document.querySelector('.reviews');
const master = document.querySelector('.masters');
const contact = document.querySelector('.subsribe')

function scrollTo(elem) {
    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth'
    })
}

masterBtn.addEventListener('click', () => {
    scrollTo(master);
})

reviewBtn.addEventListener('click', () => {
    scrollTo(reviews);
})

contactBtn.addEventListener('click', () => {
    scrollTo(contact);
})

menuBtn.addEventListener('click', () => {
    headerList.classList.toggle('header__list--open');
    menuShadow.classList.toggle('menu--open');
});

menuClose.addEventListener('click', ()=> {
    headerList.classList.remove('header__list--open');
});