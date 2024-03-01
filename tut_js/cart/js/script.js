// // Загружаем скрипт после того как полностью откроется страница
// window.addEventListener('DOMContentLoaded', function() {
//     let products = document.querySelectorAll('.product'),
//         buttons = document.querySelectorAll('button'),
//         openBtn = document.querySelector('.open');

//     function createCart() {
//         let cart = document.createElement('div'),
//             field = document.createElement('div'),
//             heading = document.createElement('h2'),
//             closeBtn = document.createElement('button');

//         cart.classList.add('cart');
//         field.classList.add('cart-field');
//         closeBtn.classList.add('close');

//         heading.textContent = 'В нашей корзине:';
//         closeBtn.textContent = 'Закрыть';

//         document.body.appendChild(cart);
//         cart.appendChild(heading);
//         cart.appendChild(field);
//         cart.appendChild(closeBtn);
//     }

//     createCart();

//     let field = document.querySelector('.cart-field'),
//         cart = document.querySelector('.cart'),
//         close = document.querySelector('.close');

//     function openCart() {
//         cart.style.display = 'block';
//     }

//     function closeCart() {
//         cart.style.display = 'none';
//     }

//     openBtn.addEventListener('click', openCart);
//     close.addEventListener('click', closeCart);

//                                                                                                             // 1 СПОСОБ

//     // for (let i = 0; i < buttons.length; i++) {
//     //     // на каждую кнопку вешаем клик, перебирая массив кнопок
//     //     buttons[i].addEventListener('click', function() {
//     //         // глубокое копирование элемента
//     //         let item = products[i].cloneNode(true),
//     //         // во всех product, когда добавляем в корзину, удаляем button
//     //             btn = item.querySelector('button');

//     //         btn.remove();
//     //         field.appendChild(item);
//     //         // удаляем элемент со страницы
//     //         products[i].remove();
//     //     });
//     // }

//                                                                                                             // 2 СПОСОБ

//     buttons.forEach(function(item, i) {
//         item.addEventListener('click', function() {
//             // глубокое копирование элемента
//             let item = products[i].cloneNode(true),
//             // во всех product, когда добавляем в корзину, удаляем button
//                 btn = item.querySelector('button');

//             btn.remove();
//             field.appendChild(item);
//             // удаляем элемент со страницы
//             products[i].remove();
//         });
//     });
// });


// window.addEventListener('DOMContentLoaded', function () {
//     let openBtn = document.querySelector('.open'),
//         buttons = document.querySelectorAll('button'),
//         products = document.querySelectorAll('.product');

//     function createCart() {
//         let cart = document.createElement('div'),
//             heading = document.createElement('h2'),
//             field = document.createElement('div'),
//             closeBtn = document.createElement('button');

//         cart.classList.add('cart');
//         closeBtn.classList.add('close');
//         field.classList.add('cart-field')

//         heading.textContent = 'В нашей корзине:';
//         closeBtn.textContent = 'Закрыть';

//         document.body.appendChild(cart);
//         cart.appendChild(heading);
//         cart.appendChild(field);
//         cart.appendChild(closeBtn);
//     }

//     createCart()

//     let field = document.querySelector('.cart-field'),
//         cart = document.querySelector('.cart'),
//         close = document.querySelector('.close');

//     function openCart() {
//         cart.style.display = 'block';
//     }

//     function closeCart() {
//         cart.style.display = 'none';
//     }

//     openBtn.addEventListener('click', openCart);
//     close.addEventListener('click', closeCart);

//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', function() {
//             let item = products[i].cloneNode(true),
//                 btn = item.querySelector('button');

//             btn.remove();
//             field.appendChild(item);
//             products[i].remove();
//         });
//     }
// });

window.addEventListener('DOMContentLoaded', function () {
    let openBtn = document.querySelector('.open'),
        buttons = document.querySelectorAll('button'),
        products = document.querySelectorAll('.product');

    function createCart() {
        let cart = document.createElement('div'),
            heading = document.createElement('h2'),
            field = document.createElement('div'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart');
        closeBtn.classList.add('close');
        field.classList.add('cart-field')

        heading.textContent = 'В нашей корзине:';
        closeBtn.textContent = 'Закрыть';

        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);
    }

    createCart()

    let field = document.querySelector('.cart-field'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.close');

    function openCart() {
        cart.style.display = 'block';
    }

    function closeCart() {
        cart.style.display = 'none';
    }

    openBtn.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            let item = products[i].cloneNode(true),
                btn = item.querySelector('button')

            btn.remove();
            field.appendChild(item);
            products[i].remove()
        });
    }
})