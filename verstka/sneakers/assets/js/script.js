const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu')
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


let swiperImages = new Swiper('.home__swiper', {
	loop: true,
    spaceBetween: 64,
    grabCursor: true,
    centeredSlides: true,

	pagination: {
		el: '.swiper-pagination',
        type: 'fraction',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

let swiperTitles = new Swiper('.home__titles', {
	loop: true,
	spaceBetween: 64,
	grabCursor: true,
	centeredSlides: true,
})

swiperImages.controller.control = swiperTitles
swiperTitles.controller.control = swiperImages