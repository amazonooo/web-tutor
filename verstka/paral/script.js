const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')

const navItems = document.querySelectorAll('nav a')

const about = document.querySelector('.about-link')
const scrollToAbout = document.querySelector('.about')

document.addEventListener('scroll', () => {
    let value = window.scrollY
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})

navItems.forEach(item => {
    item.addEventListener('click', function (event) {
        navItems.forEach(item => {
            item.classList.remove('active')
        })

        this.classList.add('active')
    })
})

function scrollTo(elem) {
    window.scroll({
        left: 0,
        top: elem.offsetTop, 
        behavior: 'smooth'
    })
}

about.addEventListener('click', ()=> {
    scrollTo(scrollToAbout)
})