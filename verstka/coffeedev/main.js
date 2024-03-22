const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const currentInt = document.querySelector('.current-count')
const cartBtn = document.querySelector('.kinds__btn')
const cartDisplay = document.querySelector('.cart')
const priceCurrent = document.querySelector('.price')
const cards = document.querySelector('.pay-btn')

let number = 1;
let cartCount = 0;
let price = 9.90

// function classToggle() {
//     payCard.classList.toggle('active')
// }

function toggleActiveClass(card) {
  // Удаляем класс active у всех карточек
  const allCards = document.querySelectorAll('.pay__card');
  allCards.forEach(function(card) {
    card.classList.remove('active');
  });

    card.classList.add('active');
}

cards.addEventListener('click', toggleActiveClass())

function updateCurrentCount() {
    currentInt.textContent = number
}

function priceUpdate() {
    priceCurrent.textContent = price
}

function incrementNumber() {
	number++
    updateCurrentCount()
}

function decrementNumber() {
	number--
    updateCurrentCount()
}

plusBtn.addEventListener('click', incrementNumber)
minusBtn.addEventListener('click', decrementNumber)


function addToCart() {
    cartCount += number;
    updateCartCountDisplay()
}

function updateCartCountDisplay() {
	cartDisplay.textContent = cartCount
}

function priceUpdateToMinus() {
    priceCurrent -= price
}

function priceUpdateToPlus() {
    priceCurrent += price
}

cartBtn.addEventListener('click', addToCart)
