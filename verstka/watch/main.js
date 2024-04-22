const activeLinks = document.querySelectorAll('.link');

activeLinks.forEach(function(activeLink) {
    activeLink.addEventListener('click', function(event) {
        event.preventDefault();

        activeLinks.forEach(function(item) {
            item.classList.remove('active')
        })

        this.classList.add('active')
    })
})