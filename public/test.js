const toggle_on = document.querySelector('#toggle-on');
const toggle_off = document.querySelector('#toggle-off');
const menu_list = document.querySelector('#menu-list');
const sidebarToggler = document.querySelector('#sidebar-toggler');
const full = document.querySelector('#full');
const half = document.querySelector('#half');
full.addEventListener('click', () => console.log('full'));
half.addEventListener('click', () => console.log('half'));
const sidebar = () => {
    if (menu_list.classList.contains('hidden')) {
        menu_list.classList.remove('hidden');
        toggle_off.classList.add('hidden');
        toggle_on.classList.remove('hidden');
    } else {
        menu_list.classList.add('hidden');
        toggle_off.classList.remove('hidden');
        toggle_on.classList.add('hidden');
    }
}
sidebarToggler.addEventListener('click', () => sidebar());