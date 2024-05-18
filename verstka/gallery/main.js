// Функция для изменения активной фотографии через определенный интервал
function changeActivePhoto() {
	const photos = document.querySelectorAll('.photo')
	let activeIndex = -1

	photos.forEach((photo, index) => {
		if (photo.classList.contains('active')) {
			photo.classList.remove('active')
			activeIndex = index
		}
	})

	if (activeIndex !== -1) {
		const nextIndex = (activeIndex + 1) % photos.length
		photos[nextIndex].classList.add('active')
	}
}

// Запуск функции каждые 5 секунд
setInterval(changeActivePhoto, 5000)
