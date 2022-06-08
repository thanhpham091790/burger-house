/* Navigation bar for mobile devices */

const menuIcon = document.querySelector('#menu');
const navbar = document.querySelector('#navbar');
const closeIcon = document.querySelector('#close');

menuIcon.addEventListener('click', () => {
    navbar.style.display = 'block';
    menuIcon.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
    navbar.style.display = 'none';
    menuIcon.style.display = 'block';
});