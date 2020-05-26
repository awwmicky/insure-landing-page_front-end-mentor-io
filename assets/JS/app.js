const $navBar = document.querySelector('.nav-bar');
const $menuBtn = document.querySelector('.menu-btn');

$menuBtn.addEventListener('change', (e) => {
    // const $menu = e.currentTarget.querySelector('i');
    $navBar.classList.toggle('nav-active')
})