const pricesBtn = document.querySelector('.prices')
const scrollToplans = document.querySelector('.plans')

function scrollTo(elem) {
    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth'
    })
}

pricesBtn.addEventListener('click', () => {
    scrollTo(scrollToplans);
})