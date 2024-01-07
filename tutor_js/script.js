const div = document.querySelector('div');

for (let i = 0; i < div.children.length; i ++) {
    const elem = div.children[i];

    if (elem.tagName === 'UL') {
        elem.innerHTML = `
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        `;
    } else if(elem.tagName === 'SPAN') {
        elem.textContent = 'Hello world';
    }
    console.log(elem)
}

// div.textContent = '<button>Hello world</button>'
// div.innerHTML = 'Hello world'

console.log(div.parentNode);
