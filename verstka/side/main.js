const nav = document.querySelector('.navigation');
const toggle = document.querySelector('.menu__toggle');
const list = document.querySelector('.list ');

toggle.addEventListener('click', () => {
    nav.classList.toggle('open')
})

function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click', activeLink))