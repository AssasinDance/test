{const burgerButton = document.querySelector('.header__burger')
const menuBackground = document.querySelector('.menu-background')
const menu = document.querySelector('.menu')

burgerButton.addEventListener('click', () => {
    menu.style = 'transform: translateY(0);'
    menuBackground.classList.toggle('invisible')
    menuBackground.style = 'opacity: 0.56;'
})}