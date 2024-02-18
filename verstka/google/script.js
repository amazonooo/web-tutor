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



window.addEventListener('DOMContentLoaded', function () {
    let cartBtn = document.querySelector('.cart')

    function createCart() {
        let cart = document.createElement('div'),
            heading = document.createElement('h2'),
            field = document.createElement('div'),
            closeBtn = document.createElement('button');
    
        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');
    
        heading.textContent = 'В нашей корзине:';
        closeBtn.textContent = 'Закрыть';
    
        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);
    }
    
    createCart()
    
    let field = document.querySelector('.cart-field'), 
        cart = document.querySelector('.cart'),
        close = document.querySelector('.close');
    
    function openCart() {
        cart.style.display = 'block';
    }
    
    function closeCart() {
        cart.style.display = 'none';
    }
    
    cartBtn.addEventListener('click', openCart);
    close.addEventListener('click', closeCart)
})
