const ham = document.querySelector('.ham');
const closeMenu = document.querySelector('.close-menu');
const enlaces = document.querySelector('.enlaces-menu');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    ham.classList.toggle('activado');
    closeMenu.classList.toggle('activado');
})

closeMenu.addEventListener('click', () => {
    enlaces.classList.toggle('activado'); 
    ham.classList.toggle('activado');
    closeMenu.classList.toggle('activado');
})