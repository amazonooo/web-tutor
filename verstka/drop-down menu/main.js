const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelectorAll('.select');
    const caret = dropdown.querySelectorAll('.caret');
    const menu = dropdown.querySelectorAll('.menu')
    const options = dropdown.querySelector(All'.menu li');
    const selected = dropdown.querySelectorAll('.selected')

    select.addEventListenner('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListenner('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked')
            caret.classList.remove('caret-remove')
            menu.classList.remove('menu-open')

            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active')
        });
    });
});