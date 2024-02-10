const chooseColor = document.querySelectorAll('.choose-color-btn');
const contentItem = document.querySelectorAll('.content-item');


chooseColor.forEach(function(element) {
    element.addEventListener('click', open)
})

function open(evt) {
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    chooseColor.forEach(function(item) {
        item.classList.remove('choose-color-btn-active')
    });

    target.classList.add('choose-color-btn-active')

    contentItem.forEach(function(item) {
        item.classList.remove('content-item-active')
    });

    contentActive.forEach(function(item) {
        item.classList.add('content-item-active')
    });
}


const infoBtn = document.querySelector('.info');
const compSec = document.querySelector('.composition');
const productBtn = document.querySelector('.product');
const caseSec = document.querySelector('.case');

function scrollTo(elem) {
    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth'
    })
}

infoBtn.addEventListener('click', () => {
    scrollTo(compSec)
})

productBtn.addEventListener('click', () => {
    scrollTo(caseSec)
})