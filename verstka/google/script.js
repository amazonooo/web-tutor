const phoneBtn = document.querySelector('.phones');
const scroolToInfoTwo = document.querySelector('.info__row-2');
const watchBtn = document.querySelector('.watches');
const scrollToProducts = document.querySelector('.products');
const earbudsBtn = document.querySelector('.earbuds');
const moreBtn = document.querySelector('.sustainability__link');
const scrollToFree = document.querySelector('.free');


// phoneBtn.addEventListener('click', scrollBtn() {
//     phoneBtn.scrol
// })

function scrollTo(elem) {
    window.scroll({
        left: 0,
        // УЗНАЕМ ДЛИНУ БЛОКА
        top: elem.offsetTop,
        behavior: 'smooth'
    })
}

phoneBtn.addEventListener('click', () => {
    scrollTo(scroolToInfoTwo);
})

watchBtn.addEventListener('click', () => {
    scrollTo(scrollToProducts);
})

earbudsBtn.addEventListener('click', () => {
    scrollTo(scrollToProducts);
})

moreBtn.addEventListener('click', () => {
    scrollTo(scrollToFree);
})