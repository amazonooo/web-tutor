const open = document.querySelector('.menu__burger-btn')
const header = document.querySelector('.header')
const cafeMenu = document.querySelector('.cafe')
const categoryTo = document.querySelector('.category')
const about = document.querySelector('.about')
const aboutTo = document.querySelector('.contact')
const homeTo = document.querySelector('.home')
const find = document.querySelector('.find')
const sellingTo = document.querySelector('.selling')
const catering = document.querySelector('.catering')

open.addEventListener('click', () => {
	header.classList.toggle('open')
})

function scrollTo (elem) {
	window.scroll({
		left: 0,
		top: elem.offsetTop -100,
		behavior: 'smooth'
	})
}

about.addEventListener('click', () => {
	scrollTo(aboutTo)
})

cafeMenu.addEventListener('click', () => {
	scrollTo(categoryTo)
})

find.addEventListener('click', () => {
	scrollTo(homeTo)
})

catering.addEventListener('click', () => {
	scrollTo(sellingTo)
})