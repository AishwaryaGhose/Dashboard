const toggle_on = document.querySelector('#toggle-on');
const menu_list = document.querySelector('#menu-list');
const toggle_off = document.querySelector('#toggle-off');
const doted = document.querySelector('#doted');
const list = document.querySelector('#list');

toggle_off.addEventListener('click', () => {
    if (toggle_on.classList.contains('hidden')) {
        toggle_on.classList.remove('hidden');
        menu_list.classList.add('hidden');
        toggle_off.classList.add('hidden');
        toggle_on.addEventListener('click', () => {
            menu_list.classList.remove('hidden');
            toggle_on.classList.add('hidden');
            toggle_off.classList.remove('hidden');
        })
    } else {
        toggle_on.classList.add('hidden');
        menu_list.classList.remove('hidden');
        toggle_off.classList.remove('hidden');
    }
})


toggle_on.addEventListener('click', () => {
    if (toggle_off.classList.contains('hidden')) {
        toggle_off.classList.remove('hidden');
        menu_list.classList.remove('hidden');
        toggle_on.classList.add('hidden');
        toggle_off.addEventListener('click', () => {
            toggle_off.classList.add('hidden');
            menu_list.classList.add('hidden');
            toggle_on.classList.remove('hidden');
        })
    }
})

doted.addEventListener('click', () => {
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
    } else {
        list.classList.add('hidden');
    }
})