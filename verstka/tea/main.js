const menuBtn = document.querySelector('.menu__btn'); 
const menuClose = document.querySelector('.menu__close'); 
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', ()=> {
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu--open');
});

menuClose.addEventListener('click', ()=> {
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
});


const blackBtn = document.querySelector('.black');
const blackImg = document.querySelector('.black-img');
const greenBtn = document.querySelector('.green');
const greenImg = document.querySelector('.green-img');
const whiteBtn = document.querySelector('.white');
const whiteImg = document.querySelector('.white-img');
const oolongBtn = document.querySelector('.oolong');
const oolongImg = document.querySelector('.oolong-img');
const puBtn = document.querySelector('.pu-erh');
const puImg = document.querySelector('.pu-erh-img');

function scrollTo(elem) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: elem.offsetTop - 200
    })
}

blackBtn.addEventListener('click', () => {
    scrollTo(blackImg)
    blackImg.classList.add('animation');
})

greenBtn.addEventListener('click', () => {
    scrollTo(blackImg)
    greenImg.classList.add('animation');
})

whiteBtn.addEventListener('click', () => {
    scrollTo(blackImg)
    whiteImg.classList.add('animation');
})

oolongBtn.addEventListener('click', () => {
    scrollTo(blackImg)
    oolongImg.classList.add('animation');
})

puBtn.addEventListener('click', () => {
    scrollTo(blackImg)
    puImg.classList.add('animation');
})



