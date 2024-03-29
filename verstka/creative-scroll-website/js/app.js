gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// Проверяем на каком устройстве используют сайт, если телефон, то плавный скролл убераем
if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true,
	})

	// анимация: первая {} -> from
	//           вторая {} -> to
	gsap.fromTo(
		'.hero-section',
		{ opacity: 1 },
		{
			opacity: 0,
			scrollTrigger: {
				trigger: '.hero-section',
				start: 'center',
				end: '900',
				scrub: true,
			},
		}
	)

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(
			item,
			{ opacity: 0, x: -80 },
			{
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-100',
					scrub: true,
				},
			}
		)
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(
			item,
			{ opacity: 0, x: 80 },
			{
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-750',
					end: 'top',
					scrub: true,
				},
			}
		)
	})
}
