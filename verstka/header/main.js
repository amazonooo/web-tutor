const burger = document.querySelector('.burger__btn');
const header = document.querySelector('.header');

burger.addEventListener('click', () => {
    header.classList.toggle('open')
})
