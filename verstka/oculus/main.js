const featuresLinks = document.querySelectorAll('.feutures__link')
const menuLinks = document.querySelectorAll('.menu__link')
const footerLinks = document.querySelectorAll('.footer__link')
const socialLinks = document.querySelectorAll('.social__link');

const shopBtn = document.querySelector('.shop')
const shopSection = document.querySelector('.accessries')

function scrollTo(elem) {
	window.scroll({
		left: 0,
		// УЗНАЕМ ДЛИНУ БЛОКА
		top: elem.offsetTop,
		behavior: 'smooth',
	})
}

shopBtn.addEventListener('click', () => {
	scrollTo(shopSection)
})

socialLinks.forEach(function(socialink) {
	socialink.addEventListener('click', function(event) {
		event.preventDefault()
	})
})

featuresLinks.forEach(function(featuresLink) {
  	featuresLink.addEventListener('click', function(event) {
		event.preventDefault();
		
		featuresLinks.forEach(function(item) {
		item.classList.remove('active');
    });
    
    this.classList.add('active')
	})
})

menuLinks.forEach(function(menuLink) {
	menuLink.addEventListener('click', function(event) {
		event.preventDefault();

		menuLinks.forEach(function(item) {
			item.classList.remove('active')
		})

		this.classList.add('active')
	})
})

footerLinks.forEach(function(footerLink) {
	footerLink.addEventListener('click', function(event) {
		event.preventDefault();

		footerLinks.forEach(function(item) {
			item.classList.remove('active')
		})

		this.classList.add('active')
	})
})



const products = document.querySelectorAll('.accesseries__card') // Получаем все товары

console.log(products)

products.forEach(function (product) {
	product.addEventListener('click', function () {
		const headerPosition =
			document.querySelector('header').getBoundingClientRect().top +
			window.scrollY // Получаем позицию header
		const productPosition =
			product.getBoundingClientRect().top + window.scrollY // Получаем позицию товара
		const scrollDistance = headerPosition - productPosition // Вычисляем дистанцию для прокрутки

		// Анимируем прокрутку
		window.scrollTo({
			top: scrollDistance,
			behavior: 'smooth',
		})

		// Здесь можно добавить анимацию перемещения товара в корзину и обновление количества товаров
	})
})