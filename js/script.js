const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

// function
menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});