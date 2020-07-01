const burger = document.querySelector('#hamburger');

burger.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('mobile-menu-slide');
})