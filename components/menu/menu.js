{const crossButton = document.querySelector('.menu__cross')
const menuBackground = document.querySelector('.menu-background')
const menu = document.querySelector('.menu')

crossButton.addEventListener('click', () => {
    menu.style = 'transform: translateY(-250px);'
    menuBackground.style = 'opacity: 0;'
    setTimeout(() => menuBackground.classList.toggle('invisible'), 300)
})

menuBackground.addEventListener(('click'), () => {
    menu.style = 'transform: translateY(-250px);'
    menuBackground.style = 'opacity: 0;'
    setTimeout(() => menuBackground.classList.toggle('invisible'), 300)
})
}