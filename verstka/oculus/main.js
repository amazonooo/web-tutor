const featuresLinks = document.querySelectorAll('.feutures__link')

featuresLinks.forEach((item) => {
    featuresLinks.addEventlistener('click', () => {
			item.classlist.add('active')
		})
})