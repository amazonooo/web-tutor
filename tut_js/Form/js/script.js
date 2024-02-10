// let chooseBtn = document.getElementById('choose'),
//     receiveBtn = document.getElementById('receive'),
//     heading = document.getElementsByTagName('h2')[0],
//     nameInput = document.getElementsByClassName('contactform_name')[0],
//     phoneInput = document.querySelector('.contactform_phone'),
//     mailInput = document.querySelectorAll('.contactform_mail')[0],
//     modal = document.querySelector('.modal'),
//     closeBtn = document.querySelector('.close'),
//     text = document.getElementsByName('message')[0];

// // function hover() {
// //     // heading.textContent = "Действительно все!";
// // }

// // chooseBtn.onmouseenter = hover; 

// chooseBtn.addEventListener('mouseenter', function() {
//     heading.textContent = "Действительно все!";
// });

// chooseBtn.addEventListener('mouseleave', function() {
//     heading.textContent = "Все включено!";
// });

// // chooseBtn.addEventListener('mouseenter', hover);

// receiveBtn.addEventListener('click', function() {
//     modal.style.display = 'block';
// });

// closeBtn.addEventListener('click', function() {
//     modal.style.display = 'none';
// })

// nameInput.addEventListener('input', function() {
//     text.value = `Меня зовут ${nameInput.value}. И я хочу спросить:`;
// })


const receiveBtn = document.getElementById('receive');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close')
const chooseBtn = document.getElementById('choose');

receiveBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

chooseBtn.addEventListener('mouseenter', () => {
    chooseBtn.textContent = 'PRIVET';
})

chooseBtn.addEventListener('mouseleave', () => {
    chooseBtn.textContent = 'POKA';
})

