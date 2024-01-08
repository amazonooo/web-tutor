const div = document.querySelector('.element');

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

const ul = document.createElement('ul')

div.innerHTML = `
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
`;

div.insertAdjacentHTML('afterend', `
    <ul>
        <li>4</li>
        <li>5</li>
    </ul>
`)
