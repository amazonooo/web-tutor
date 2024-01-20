// add, remove, append, prepend, insertAdjacentHTML, innerHTML, before, after, beforebegin(end), afterbegin(end), createElement, textContent, cssText, setAttribute, getAttribute, hasAttribute, classList...

// const div = document.querySelector('.element');

// div.append('Hello');
// div.prepend('Hello1');
// div.prepend('Hello3');
// div.append('Hello2');

// div.before('Before tag div')
// div.after('after tag div')

// const button = document.createElement('button');
// button.textContent = 'Our button';

// const button2 = document.createElement('button');
// button.textContent = 'Our button #2';

// div.before(button);
// div.after(button2);

// const ul = document.createElement('ul');
// ul.innerHTML = `
//    <li>1</li> 
//    <li>2</li> 
//    <li>3</li> 
// `;



// div.append(ul);

// div.insertAdjacentHTML('afterbegin', `
//     <ul>
//         <li>1</li>
//         <li>2</li>
//     </ul>
// `);

// div.insertAdjacentHTML('beforebegin', `
//     <p>text</p>
// `);

// const ul = document.querySelector('ul');
// ul.insertAdjacentHTML('beforeend', `
//     <ul>
//         <li>3</li>
//     </ul>
// `)

// const ul = document.createElement('ul')

// div.innerHTML = `
//     <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//     </ul>
// `;

// div.insertAdjacentHTML('afterend', `
//     <ul>
//         <li>4</li>
//         <li>5</li>
//     </ul>
// `)

// const ul = document.createElement('ul');

// ul.innerHTML = `
//     <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//     </ul>
// `;

// const div = document.createElement('div');
// div.textContent('darou')

// const input = document.querySelector('[name="my_checkbox"]');
// const a = document.querySelector('a');
// // a.setAttribute('href', 'http://google.com');
// // a.removeAttribute('href');
// // console.log(a.hasAttribute('href'));
// // a.setAttribute('my_custom_attr', 'privet');

// // a.style.color = 'red';
// // a.style.backgroundColor = 'blue';

// // a.style.cssText = `
// //     color: red;
// //     background-color: black;
// // `;

// // const div = document.createElement('div');
// // div.className = 'class_name';
// // a.className = 'link2';

// // a.classList.add('link2');
// // a.classList.remove('link')

// // console.log(a.classList.contains('link2'))
// // console.log(a.classList);

// // a.classList.toggle('active');

// a.style.cssText = `
//     background: black;
// `;

// aAttribute('href');

// div.insertAdjacentHTML('afterbegin', `
//     <ul>
//         <li>1</li>
//         <li>2</li>
//     </ul>
// `);


// const button = document.createElement('button');
// button.textContent = 'Our button';
// button.style.cssText = `
//     border-radius: 8px;
//     background: transparent;
//     padding: 4px 8px;
//     border: 1px solid black; 
// `;

// document.body.append(button);

// const button = document.createElement('button');
// button.textContent = 'BUTTON';
// button.style.cssText = `
//     border-radius: 12px;
//     background: transparent;
//     padding: 8px 12px;
//     border: 1px solid aqua;
// `;

// document.body.append(button);





// click, input, scroll, keydown, resize, mouseenter, mouseleave
// addEventListener, removeEventListener


// const button = document.querySelector('button');

// button.addEventListener('click', clickHandler)

// let i = 0;

// function clickHandler() {
//     i++;
//     console.log('click', i);  

//     switch (i) {
//         case 1:
//             button.style.background = 'red';
//             break;
//         case 2:
//             button.style.background = 'yellow';
//             break;
//         case 3:
//             button.style.background = 'aqua';
//             break;
//         case 4:sssssssssssssss
//             button.style.background = 'pink';
//             break;
//         case 5:
//             button.style.background = 'purple';
//             button.removeEventListener('click', clickHandler);
//             break;
//     }
// }


// const input = document.querySelector('[name="my_input"]');

// input.addEventListener('input', functionName);

// let prevValue = input.value;

// function functionName(event) {
//     const userData = event.target.value;

//     if (userData.includes('(') || userData.includes('-')) {
//         input.value = prevValue;
//         return;
//     }

//     input.value = userData;
//     prevValue = userData;
// }



// document.addEventListener('scroll', (event) => {
//     console.log(event.target.scrollingElement.scrollTop);
// });

// document.addEventListener('keydown', (event) => {
//     console.log(event);
// })

// window.addEventListener('resize', (event) => {
//     console.log(event);
// });

// button.addEventListener('mouseenter', (event) => {
//     console.log('ENTER');
// });


// button.addEventListener('mouseleave', (event) => {
//     console.log('LEAVE');
// });




// ВЕРСТКА




// const goods = document.querySelector('button[data-id="goods"]');
// const cart = document.querySelector('button[data-id="cart"]');

// // console.log(goods, cart);

// function clickHandler(event) {
//     goods.classList.toggle('active');
//     cart.classList.toggle('active');
// }


// goods.addEventListener('click', clickHandler);
// cart.addEventListener('click', clickHandler);


let activeTabId = 'goods';

const initialTab = getActiveTab();
initialTab.classList.add('active')

const tabsContainer = document.querySelector('.tabs');
const tabs = document.querySelectorAll('button.tab');

for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];

    tab.addEventListener('click', clickHandler);
}

function clickHandler(event) {
    const activeTab = getActiveTab();
    activeTab.classList.remove('active');
    event.target.classList.add('active');

    activeTabId = event.target.dataset.tabId;

    if (activeTabId === 'goods') {
        tabsContainer.insertAdjacentElement('afterend', renderGoods());
    }
    else {
        tabsContainer.insertAdjacentElement('afterend', renderCart());
    }
}

function getActiveTab() {
    return document.querySelector(`button[data-tab-id="${activeTabId}"]`);
}

function renderGoods() {
    return `
        <div class="product-items">
            <div class="product-item">
            <img src="/tutor_js/images/html.png" alt="">
                <div class="product-list">
                    <h3>Уроки по HTML</h3>
                    <p class="price">₽ 300</p>
                    <button class="button">В корзину</button>
                </div>
            </div>

            <div class="product-item">
                <img src="/tutor_js/images/css.png" alt="">
                <div class="product-list">
                    <h3>Уроки по CSS</h3>
                    <p class="price">₽ 150</p>
                    <button class="button">В корзину</button>
                </div>
            </div>

            <div class="product-item">
                <img src="/tutor_js/images/js.png" alt="">
                <div class="product-list">
                    <h3>Уроки по JS</h3>
                    <p class="price">₽ 260</p>
                    <button class="button">В корзину</button>
                </div>
            </div>
        </div>
    `;
}


function renderCart() {
    return `
        <div class="cart-items">
            <div class="cart-item">
                <div class="cart-item-title">Уроки по HTML</div>
                <div class="cart-item-count">3шт.</div>
                <div class="cart-item-price">₽ 150</div>
            </div>

            <div class="cart-item">
                <div class="cart-item-title">Уроки по CSS</div>
                <div class="cart-item-count">1шт.</div>
                <div class="cart-item-price">₽ 450</div>
            </div>

            <div class="cart-item">
                <div class="cart-item-title">Уроки по JS</div>
                <div class="cart-item-count">6шт.</div>
                <div class="cart-item-price">₽ 550</div>
            </div>
        </div>
    `;
}