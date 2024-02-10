const servicesBtn = document.querySelector('.services-link');
const servicesLoc = document.querySelector('.services');

function scrollTo(elem) {
    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth'
    })
}

servicesBtn.addEventListener('click', () => {
    scrollTo(servicesLoc);
})