const toggleButton = document.querySelector('.nav__button');
const menuBody = document.querySelector('.menu__body');
toggleButton.addEventListener('click',() => {
    menuBody.classList.toggle('active');
})


    